import React, { useRef, useEffect, useState } from "react";
import leftDecor from "../../assets/images/game/left-decor.png";
import rightDecor from "../../assets/images/game/right-decor.png";
import greenBg from "../../assets/images/game/green-bg.png";
import deck from "../../assets/images/game/deck.jpg";
import endTurn from "../../assets/images/game/end-turn.png";

import { stockCard } from "../../data/cards";
import BoardActivities from "../BoardActivities";
import {
    userInstance,
    UserGame,
    userPics,
    addMana,
    useMana,
} from "../User/user";
import { shulledCards } from "../eventHandler/shuffle";
import { ArrowHandler } from "../eventHandler/Arrow";
import "./board.css";
import { addCard, addCardFight } from "../eventHandler/addCard";
import { useLocation } from "react-router-dom";

type EventLog = {
    id?: number;
    name: string;
    card?: any;
    user?: string;
    width: number;
    height: number;
    top: number;
    left: number;
    isUsed?: boolean;
};
type GameInstance = {
    gameId?: string;
    firstUser?: UserGame;
    secondUser?: UserGame;
    currentUser?: string;
    gameElements?: EventLog[];
};

export const Board = (): JSX.Element => {
    let location = useLocation();

    const gameId = location.pathname.split("/")[2];
    const firstUserDeck = shulledCards();
    const secondUserDeck = shulledCards();

    const firstUser = userInstance("mainUser", "33", firstUserDeck);
    const secondUser = userInstance("secondUser", "13", secondUserDeck);
    const [currentUser, setCurrentUser] = useState<string>(firstUser.id);

    const [gameState, setGameState] = useState<GameInstance>({
        gameId,
        firstUser,
        secondUser,
        currentUser,
    });

    const canvasRef = useRef<HTMLCanvasElement>();
    const [eventLog, setEventLog] = useState<string[]>(["Start game"]);
    const [gameElements, setGameElements] = useState<EventLog[]>([]);

    const onClickHandler = (event: MouseEvent) => {
        const canvas = canvasRef.current;
        const elemLeft = canvas!.offsetLeft + canvas!.clientLeft;
        const elemTop = canvas!.offsetTop + canvas!.clientTop;

        let x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
        gameElements.forEach(async function (element) {
            if (
                y > element.top &&
                y < element.top + element.height &&
                x > element.left &&
                x < element.left + element.width
            ) {
                const eventArr = eventLog;
                eventArr.push(`${gameState!.currentUser!}-${element.name}`);

                setEventLog([...eventArr]);

                switch (element.name) {
                    case "CardFightDeck":
                        console.log("let's fight!");

                        break;

                    case "endTurnButton":
                        const newGameState = { ...gameState };
                        newGameState.currentUser =
                            gameState.currentUser === gameState.firstUser!.id
                                ? gameState.secondUser!.id
                                : gameState.firstUser!.id;
                        newGameState.firstUser!.mana =
                            newGameState.currentUser === gameState.firstUser!.id
                                ? gameState.firstUser!.mana
                                : gameState.firstUser!.mana + 1;

                        newGameState.secondUser!.mana =
                            newGameState.currentUser ===
                            gameState.secondUser!.id
                                ? gameState.secondUser!.mana
                                : gameState.secondUser!.mana + 1;

                        setGameState({ ...newGameState });
                        addCardToUser(canvas!, "top", gameState.currentUser!);

                        const currentUserInstance =
                            gameState.currentUser === gameState.firstUser!.id
                                ? gameState.firstUser
                                : gameState.secondUser;
                        addMana(
                            currentUserInstance!,
                            canvas!,
                            gameState.currentUser === gameState.firstUser!.id
                        );
                        ArrowHandler(
                            canvas!,
                            gameState.currentUser === gameState.firstUser!.id
                                ? "top"
                                : "bottom"
                        );

                        break;

                    case "CardDeck":
                        if (
                            element.isUsed ||
                            gameState.currentUser != element.user
                        ) {
                            return;
                        }

                        element.isUsed = true;
                        setGameElements((oldArray) => [...oldArray, element]);
                        let position;
                        let newGameIsntance = { ...gameState };
                        if (gameState.currentUser === gameState.firstUser!.id) {
                            position = "bottom";
                        } else {
                            position = "top";
                        }

                        const currUserInstance =
                            gameState.currentUser === gameState.firstUser!.id
                                ? gameState.firstUser
                                : gameState.secondUser;
                        const currCardIncance = currUserInstance!.deck.find(
                            (card) => card.id === element.id
                        );

                        if (
                            element.user === gameState.currentUser &&
                            currUserInstance!.mana >= currCardIncance!.cost
                        ) {
                            const context = canvas!.getContext("2d");
                            context!.fillStyle = "rgba(255, 255, 255, 0.5)";
                            context!.fillRect(
                                element.left,
                                element.top,
                                element.width,
                                element.height
                            );

                            currUserInstance!.mana =
                                currUserInstance!.mana - currCardIncance!.cost;
                            currUserInstance!.fightDeck!.push(currCardIncance!);
                            useMana(
                                currUserInstance!,
                                canvas!,
                                gameState.currentUser ===
                                    gameState.firstUser!.id
                            );
                            const fightCard = await addCardFight(
                                canvas!,
                                currUserInstance!,
                                position,
                                currCardIncance!
                            );

                            if (position === "top") {
                                newGameIsntance = {
                                    ...newGameIsntance,
                                    secondUser: currUserInstance,
                                };
                                setGameState(newGameIsntance);
                            } else {
                                newGameIsntance = {
                                    ...newGameIsntance,
                                    firstUser: currUserInstance,
                                };
                                setGameState(newGameIsntance);
                            }

                            console.log(gameState);

                            setGameElements((oldArray) => [
                                ...oldArray,
                                {
                                    id: fightCard.id,
                                    name: `CardFightDeck`,
                                    user: currUserInstance!.id,
                                    width: fightCard.cardWidth,
                                    height: fightCard.cardHeight,
                                    top: fightCard.top,
                                    left: fightCard.left,
                                    isUsed: false,
                                },
                            ]);
                        }

                        break;

                    default:
                        break;
                }
                //console.log(gameElements);
            }
        });
    };

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

                isUsed: false,
            },
        ]);
    };
    useEffect(() => {
        (async function () {
            const canvas = canvasRef.current;
            const context = canvas!.getContext("2d");

            // if (typeof localStorage.getItem(gameId) === null) {
            await addCardToFirstUser(canvas!, "bottom");
            await addCardToFirstUser(canvas!, "bottom");
            await addCardToSecondUser(canvas!, "top");
            await addCardToSecondUser(canvas!, "top");
            ArrowHandler(canvas!, "bottom");

            // }

            userPics(firstUser, canvas!, true);
            userPics(secondUser, canvas!, false);
        })();
    }, []);

    useEffect(() => {
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
                1158,
                50,
                rightDecoration.naturalWidth,
                rightDecoration.naturalHeight
            );
        };

        topDeck.onload = () => {
            contextTopDeck!.imageSmoothingEnabled = false;
            contextTopDeck!.drawImage(
                topDeck,
                944,
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
                    left: 944,
                },
            ]);
        };

        bottomDeck.onload = () => {
            context!.imageSmoothingEnabled = false;
            context!.drawImage(
                bottomDeck,
                944,
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
                    left: 944,
                },
            ]);
        };

        leftDecoration.onload = () => {
            context!.imageSmoothingEnabled = false;
            context!.drawImage(
                leftDecoration,
                10,
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
            <canvas
                onClick={onClickHandler}
                height="720"
                width="1280"
                ref={canvasRef}
            />
            <BoardActivities eventsLogs={eventLog} />
        </div>
    );
};
