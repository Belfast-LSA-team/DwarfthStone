import React, { useRef, useEffect, useState } from "react";
import leftDecor from "../../assets/images/game/left-decor.png";
import rightDecor from "../../assets/images/game/right-decor.png";
import greenBg from "../../assets/images/game/green-bg.png";
import deck from "../../assets/images/game/deck.jpg";
import endTurn from "../../assets/images/game/end-turn.png";
// import defaultUser from "../../assets/images/game/profile-pic-wrapper.png";

import { stockCard } from "../../data/cards";
import BoardActivities from "../BoardActivities";
import { userInstance, UserGame, userPic, userPics } from "../User/user";
import { shulledCards } from "../eventHandler/shuffle";
import { onClickCanvas } from "../eventHandler/onClick";
import "./board.css";
import { addCard } from "../eventHandler/addCard";
import { useLocation } from "react-router-dom";

type EventLog = {
    name: string;
    card?: any;
    user?: UserGame;
    width: number;
    height: number;
    top: number;
    left: number;
};

export const Board = (): JSX.Element => {
    let location = useLocation();
    const gameId = location.pathname.split("/")[2];
    // startGame(gameId);
    const mainUser = userInstance("mainUser", "33");
    const secondUser = userInstance("secondUser", "13");
    const canvasRef = useRef<HTMLCanvasElement>();
    const [currentUser, setCurrentUser] = useState<UserGame>(mainUser);
    const [deckOfCards, setDeckOfCards] = useState<stockCard[]>([]);
    const [eventLog, setEventLog] = useState<string[]>([]);
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
                eventArr.push(`${currentUser!.name}-${element.name}`);
                setEventLog(eventArr);
                const deckOfCardsToLogic = deckOfCards;
                // console.log(gameElements);
                switch (element.name) {
                    case "endTurnButton":
                        break;
                    case "topDeck":
                        if (deckOfCardsToLogic.length > 0) {
                            const topDec = deckOfCardsToLogic.pop();
                            setDeckOfCards([...deckOfCardsToLogic]);
                            const card = await addCard(
                                canvas!,
                                currentUser,
                                "top",
                                topDec!
                            );

                            setGameElements((oldArray) => [
                                ...oldArray,
                                {
                                    id: card.id,
                                    name: `CardDeck`,
                                    user: currentUser,
                                    width: card.cardWidth,
                                    height: card.cardHeight,
                                    top: card.top,
                                    left: card.left,
                                },
                            ]);
                        }

                        break;
                    case "bottomDeck":
                        if (deckOfCardsToLogic.length > 0) {
                            const bottomDec = deckOfCardsToLogic.pop();
                            setDeckOfCards([...deckOfCardsToLogic]);
                            const card = await addCard(
                                canvas!,
                                currentUser,
                                "bottom",
                                bottomDec!
                            );
                            console.log(card);
                            setGameElements((oldArray) => [
                                ...oldArray,
                                {
                                    id: card.id,
                                    name: `CardDeck`,
                                    user: currentUser,
                                    width: card.cardWidth,
                                    height: card.cardHeight,
                                    top: card.top,
                                    left: card.left,
                                },
                            ]);
                        }
                        break;

                    case "CardDeck":
                        const context = canvas!.getContext("2d");
                        context!.fillStyle = "rgba(255, 255, 255, 0.5)";
                        context!.fillRect(
                            element.left,
                            element.top,
                            element.width,
                            element.height
                        );
                        // setUpCardFight();
                        break;
                    default:
                        break;
                }
            }
        });
    };
    useEffect(() => {
        const shulledDeck = shulledCards();
        const canvas = canvasRef.current;
        const context = canvas!.getContext("2d");
        // const firstUserContainer = new Image();
        // const secondUserContainer = new Image();
        userPics(mainUser, canvas!, true);
        userPics(secondUser, canvas!, false);
        setDeckOfCards(shulledDeck);
    }, []);

    useEffect(() => {
        //setCurrentUser(mainUser);
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

        context!.fillStyle = "#3A2411";
        context!.fillRect(0, 0, context!.canvas.width, context!.canvas.width);
        // onClickCanvas(canvas!);
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
