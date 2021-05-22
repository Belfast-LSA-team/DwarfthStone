import React, { useRef, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import '../../assets/css/toastify.css';
import leftDecor from "../../assets/images/game/left-decor.png";
import rightDecor from "../../assets/images/game/right-decor.png";
import greenBg from "../../assets/images/game/green-bg.png";
import deck from "../../assets/images/game/deck.jpg";
import endTurn from "../../assets/images/game/end-turn.png";

import {onClickHandler} from '../eventHandler/clickHandler';
 
import { stockCard } from "../../data/cards";
import BoardActivities from "../BoardActivities";
import {
    userInstance,
    UserGame,
    userPics,

    setUserHealth,
} from "../User/user";
import { shulledCards } from "../eventHandler/shuffle";
import { ArrowHandler } from "../eventHandler/Arrow";
import { Sword, SwordProps } from "../Sword/sword";
import { StatusCard } from "../eventHandler/StatusCard/statusCard";
import "./board.css";
import { addCard, addDeadCard } from "../eventHandler/addCard";
import { setHealth } from "../eventHandler/setCardData";
import { useLocation } from "react-router-dom";
import EndGame from "../EndGame";

type EventLog = {
    id?: number | string;
    name: string;
    card?: any;
    user?: string;
    width: number;
    height: number;
    top: number;
    left: number;
    isUsed?: boolean;
    cost?: number;
};
type GameInstance = {
    gameId?: string;
    firstUser?: UserGame;
    secondUser?: UserGame;
    currentUser?: string;
    gameElements?: EventLog[];
};
type FightRoomCard = {
    fightCard: stockCard;
    userHolder: string;
};
type EndGameProps = {
    status: boolean;
    userData?: UserGame;
};

export const Board = (): JSX.Element => {
    let location = useLocation();

    const gameId = location.pathname.split("/")[2];
    const firstUserDeck = shulledCards();
    const secondUserDeck = shulledCards();

    const firstUser = userInstance("mainUser", "33", firstUserDeck);
    const secondUser = userInstance("secondUser", "13", secondUserDeck);
    const [currentUser, setCurrentUser] = useState<string>(firstUser.id);
    const [cardsToFight, setCardsToFight] = useState<FightRoomCard[]>([]);
    const [endGameStatus, setEndGameStatus] = useState<EndGameProps>({
        status: false,
    });
    const [gameState, setGameState] = useState<GameInstance>({
        gameId,
        firstUser,
        secondUser,
        currentUser,
    });
    const [swordData, setSwordData] = useState<SwordProps>({
        left: 0,
        top: 0,
        isActive: false,
    });

    const canvasRef = useRef<HTMLCanvasElement>();
    const [eventLog, setEventLog] = useState<string[]>(["Start game"]);
    const [gameElements, setGameElements] = useState<EventLog[]>([]);
    const [statusElements, setStatusElements] = useState<typeof StatusCard[]>(
        []
    );


    const addCardToUser = async (
        canvas: HTMLCanvasElement,
        position: string,
        userId: string
    ) => {
        let userInstance: UserGame;
        let currentDec: stockCard | undefined;

        if (gameState.firstUser!.id === userId) {
            userInstance = gameState.firstUser!;
            if (userInstance?.userStockCard!) {
                if (userInstance.userStockCard.length < 3) {
                    return;
                }
                currentDec = userInstance?.userStockCard!.pop();
            }
            setGameState((prevState) => ({
                ...prevState,
                firstUser: userInstance,
            }));
            position = "bottom";
        } else {
            userInstance = gameState.secondUser!;

            if (userInstance?.userStockCard!) {
                if (userInstance.userStockCard.length < 3) {
                    return;
                }
                currentDec = userInstance?.userStockCard!.pop();
            }
            setGameState((prevState) => ({
                ...prevState,
                secondUser: userInstance,
            }));
            position = "top";
        }

        const card = await addCard(
            canvas!,
            userInstance!,
            position,
            currentDec!
        );
        setGameElements((oldArray) => [
            ...oldArray,
            {
                id: card.id,
                name: `CardDeck`,
                user: userInstance!.id,
                width: card.cardWidth,
                height: card.cardHeight,
                top: card.top,
                left: card.left,
                isUsed: false,
                cost: card.cardMana,
            },
        ]);

        return card;
    };

    const addCardToFirstUser = async (
        canvas: HTMLCanvasElement,
        position: string
    ) => {
        const deckOfCardsToLogic = gameState.firstUser;
        const currentDec = deckOfCardsToLogic?.userStockCard!.pop();
        setGameState((prevState) => ({
            ...prevState,
            firstUser: deckOfCardsToLogic,
        }));
        const card = await addCard(
            canvas!,
            gameState.firstUser!,
            position,
            currentDec!
        );
        setGameElements((oldArray) => [
            ...oldArray,
            {
                id: card.id,
                name: `CardDeck`,
                user: gameState.firstUser!.id,
                width: card.cardWidth,
                height: card.cardHeight,
                top: card.top,
                left: card.left,
                isUsed: false,
                cost: card.cardMana,
            },
        ]);
    };

    const addCardToSecondUser = async (
        canvas: HTMLCanvasElement,
        position: string
    ) => {
        const deckOfCardsToLogic = gameState.secondUser;
        const currentDec = deckOfCardsToLogic?.userStockCard!.pop();
        setGameState((prevState) => ({
            ...prevState,
            secondUser: deckOfCardsToLogic,
        }));
        const card = await addCard(
            canvas!,
            gameState.secondUser!,
            position,
            currentDec!
        );
        setGameElements((oldArray) => [
            ...oldArray,
            {
                id: card.id,
                name: `CardDeck`,
                user: gameState.secondUser!.id,
                width: card.cardWidth,
                height: card.cardHeight,
                top: card.top,
                left: card.left,
                cost: card.cardMana,
                isUsed: false,
            },
        ]);
    };

    useEffect(() => {
        const canvas = canvasRef.current;

        if (cardsToFight.length < 2) {
            return;
        }
        const attackerUser =
            cardsToFight[0].userHolder === gameState.firstUser!.id
                ? gameState.firstUser!
                : gameState.secondUser!;

        const defenderUser =
            cardsToFight[1].userHolder === gameState.firstUser!.id
                ? gameState.firstUser!
                : gameState.secondUser!;

        const isAllMinionsDead = defenderUser?.fightDeck!.filter(
            (card) => !card.isLeave
        );
        if (cardsToFight[1].fightCard.type === "user") {
            if (isAllMinionsDead.length != defenderUser?.fightDeck!.length) {
                return;
            }
            attackerUser.isFightedDeck!.push(cardsToFight[0].fightCard);

            if (defenderUser.health < cardsToFight[0].fightCard.attack) {
                defenderUser.health = 0;
                setUserHealth(
                    defenderUser,
                    canvas!,
                    cardsToFight[0].userHolder === gameState.firstUser!.id
                        ? false
                        : true
                );
               
                setEndGameStatus({ status: true, userData: attackerUser });
            } else {
                defenderUser.health =
                    defenderUser.health - cardsToFight[0].fightCard.attack;
                setUserHealth(
                    defenderUser,
                    canvas!,
                    cardsToFight[0].userHolder === gameState.firstUser!.id
                        ? false
                        : true
                );
            }
            setCardsToFight([]);
            return;
        }

        if (
            cardsToFight[0].fightCard.attack > cardsToFight[1].fightCard.health
        ) {
            addDeadCard(
                canvas!,
                defenderUser,
                cardsToFight[0].userHolder === gameState.firstUser!.id
                    ? "top"
                    : "bottom",
                cardsToFight[1].fightCard
            );
            const cardIndex = defenderUser.fightDeck!.findIndex(
                (card) => card.id === cardsToFight[1].fightCard.id
            );
            defenderUser.fightDeck![cardIndex].isLeave = false;
            attackerUser.isFightedDeck!.push(cardsToFight[0].fightCard);
        } else {
            const cardIndex = defenderUser.fightDeck!.findIndex(
                (card) => card.id === cardsToFight[1].fightCard.id
            );
            defenderUser.fightDeck![cardIndex].health =
                defenderUser.fightDeck![cardIndex].health -
                cardsToFight[0].fightCard.attack;

            setHealth(
                canvas!,
                defenderUser,
                cardsToFight[0].userHolder === gameState.firstUser!.id
                    ? "top"
                    : "bottom",
                cardsToFight[1].fightCard,
                defenderUser.fightDeck![cardIndex].health
            );
            attackerUser.isFightedDeck!.push(cardsToFight[0].fightCard);
        }
        if (cardsToFight[0].userHolder === gameState.firstUser!.id) {
            setGameState((prevState) => ({
                ...prevState,
                firstUser: attackerUser,
                secondUser: defenderUser,
            }));
        } else {
            setGameState((prevState) => ({
                ...prevState,
                firstUser: defenderUser,
                secondUser: attackerUser,
            }));
        }
        setCardsToFight([]);
        setSwordData({ left: 10, top: 10, isActive: false });
    }, [cardsToFight]);

    useEffect(() => {
        (async function () {
            const canvas = canvasRef.current;
            const context = canvas!.getContext("2d");

            await addCardToFirstUser(canvas!, "bottom");
            await addCardToFirstUser(canvas!, "bottom");
            await addCardToSecondUser(canvas!, "top");
            await addCardToSecondUser(canvas!, "top");
            ArrowHandler(canvas!, "bottom");

            const userFirstClickElem = await userPics(firstUser, canvas!, true);
            const userSecondClickElem = await userPics(
                secondUser,
                canvas!,
                false
            );

            setGameElements((oldArray) => [
                ...oldArray,
                {
                    name: `UserCard`,
                    user: userSecondClickElem.user!.id,
                    width: userSecondClickElem.width,
                    height: userSecondClickElem.height,
                    top: userSecondClickElem.top,
                    left: userSecondClickElem.left,
                },
            ]);
            setGameElements((oldArray) => [
                ...oldArray,
                {
                    name: `UserCard`,
                    user: userFirstClickElem.user!.id,
                    width: userFirstClickElem.width,
                    height: userFirstClickElem.height,
                    top: userFirstClickElem.top,
                    left: userFirstClickElem.left,
                },
            ]);
        })();
        const canvas = canvasRef.current;
        const context = canvas!.getContext("2d");
        const contextTopDeck = canvas!.getContext("2d");

        const leftDecoration = new Image();
        const rightDecoration = new Image();
        const topDeck = new Image();
        const bottomDeck = new Image();
        const bgCover = new Image();
        const endTurnButton = new Image();

        endTurnButton.src = endTurn;
        leftDecoration.src = leftDecor;
        rightDecoration.src = rightDecor;
        bgCover.src = greenBg;
        topDeck.src = deck;
        bottomDeck.src = deck;

        endTurnButton.onload = () => {
            context!.imageSmoothingEnabled = false;
            context!.drawImage(
                endTurnButton,
                900,
                320,
                endTurnButton.naturalWidth,
                endTurnButton.naturalHeight
            );

            setGameElements((oldArray) => [
                ...oldArray,
                {
                    name: "endTurnButton",
                    width: endTurnButton.naturalWidth,
                    height: endTurnButton.naturalHeight,
                    top: 320,
                    left: 900,
                },
            ]);
        };

        rightDecoration.onload = () => {
            context!.imageSmoothingEnabled = false;
            context!.drawImage(
                rightDecoration,
                1168,
                50,
                rightDecoration.naturalWidth,
                rightDecoration.naturalHeight
            );
        };

        topDeck.onload = () => {
            contextTopDeck!.imageSmoothingEnabled = false;
            contextTopDeck!.drawImage(
                topDeck,
                1004,
                178,
                topDeck.naturalWidth,
                topDeck.naturalHeight
            );
            setGameElements((oldArray) => [
                ...oldArray,
                {
                    name: "topDeck",
                    width: topDeck.naturalWidth,
                    height: topDeck.naturalHeight,
                    top: 178,
                    left: 1004,
                },
            ]);
        };

        bottomDeck.onload = () => {
            context!.imageSmoothingEnabled = false;
            context!.drawImage(
                bottomDeck,
                1004,
                401,
                bottomDeck.naturalWidth,
                bottomDeck.naturalHeight
            );
            setGameElements((oldArray) => [
                ...oldArray,
                {
                    name: "bottomDeck",
                    width: bottomDeck.naturalWidth,
                    height: bottomDeck.naturalHeight,
                    top: 401,
                    left: 1004,
                },
            ]);
        };

        leftDecoration.onload = () => {
            context!.imageSmoothingEnabled = false;
            context!.drawImage(
                leftDecoration,
                0,
                50,
                leftDecoration.naturalWidth,
                leftDecoration.naturalHeight
            );
        };
        context?.beginPath();
        context!.fillStyle = "#3A2411";
        context!.fillRect(0, 0, context!.canvas.width, context!.canvas.width);
        context?.closePath();
    }, []);


    return (
        <div className="game">
            <Sword {...swordData} />

            <canvas
                onClick={(event)=>onClickHandler({event, canvasRef, gameElements, eventLog, gameState, setEventLog, cardsToFight, setCardsToFight, setGameState, setGameElements, setStatusElements, swordData,setSwordData, addCardToUser})}
                height="720"
                width="1280"
                ref={canvasRef}
            />
            <EndGame
                status={endGameStatus.status}
                userData={endGameStatus.userData && endGameStatus.userData}
            />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <BoardActivities eventsLogs={eventLog} />
        </div>
    );
};
