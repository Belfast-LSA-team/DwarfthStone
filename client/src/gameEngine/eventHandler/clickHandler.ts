import {
  userInstance,
  UserGame,
  userPics,
  addMana,
  useMana,
  setUserHealth,
} from "../User/user";
import { stockCard } from "../../data/cards";
import { SwordProps } from "../Sword/sword";
import { ArrowHandler } from "./Arrow";
import { addCardFight } from "./addCard";

import { toast } from "react-toastify";


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


type onClickProps = {
  event: MouseEvent;
  canvasRef: HTMLCanvasElement;
  gameElements: EventLog[];
  eventLog: string[];
  gameState: GameInstance;
  setEventLog: (eventLog: string[]) => void;
  cardsToFight: FightRoomCard[];
  setCardsToFight: (cardsToFight: FightRoomCard[]) => void;
  setGameState: (gameState: GameInstance) => void;
  setGameElements: (gameElements: EventLog[]) => void;
  setStatusElements: (arr: string[]) => void;
  swordData: SwordProps;
  setSwordData: (swordData: SwordProps) => void;
  addCardToUser: (canvas: HTMLCanvasElement,
    position: string,
    userId: string) => stockCard;
}
type FightRoomCard = {
  fightCard: stockCard;
  userHolder: string;
};

export const onClickHandler = ({ event, canvasRef, gameElements, eventLog, gameState, setEventLog, cardsToFight, setCardsToFight, setGameState, setGameElements, setStatusElements, swordData, setSwordData, addCardToUser }: onClickProps) => {
  console.log(event);
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
      toast.dark(`${gameState!.currentUser!}-${element.name}`);
      setEventLog([...eventArr]);

      switch (element.name) {
        case "UserCard":
          const userDefenderInstance =
            gameState.currentUser != gameState.firstUser!.id
              ? gameState.firstUser
              : gameState.secondUser;

          const isAllMinionsDead = userDefenderInstance?.fightDeck!.filter(
            (card) => !card.isLeave
          );
          if (
            isAllMinionsDead?.length !=
            userDefenderInstance?.fightDeck!.length
          ) {
            return;
          }
          if (
            element.user === userDefenderInstance!.id &&
            cardsToFight.length > 0
          ) {
            setCardsToFight((oldArray) => [
              ...oldArray,
              {
                fightCard: {
                  id: 0,
                  type: "user",
                  name: userDefenderInstance!.name,
                  description: userDefenderInstance!.name,
                  cost: userDefenderInstance!.mana,
                  health: userDefenderInstance!.health,
                  attack: 0,
                  imageFull: "",
                  imageFight: "",
                  imageFightDead: "",
                  isLeave: true,
                },
                userHolder: element.user!,
              },
            ]);
          }

          break;

        case "CardFightDeck":
          const userInstance =
            element.user === gameState.firstUser!.id
              ? gameState.firstUser
              : gameState.secondUser;
          const currCard = userInstance?.fightDeck!.find(
            (card) => card.id === element.id
          );
          const isFigthed = userInstance?.isFightedDeck!.find(
            (card) => card.id === element.id
          );

          if (isFigthed || !currCard?.isLeave) {
            return;
          }
          if (
            gameState.currentUser != element.user &&
            !currCard?.isLeave
          ) {
            return;
          }
          if (
            gameState.currentUser != element.user &&
            cardsToFight.length === 0
          ) {
            return;
          }
          if (cardsToFight.length === 0) {
            setCardsToFight([
              {
                fightCard: element.card,
                userHolder: element.user!,
              },
            ]);
          } else {
            element.user != cardsToFight[0].userHolder
              ? setCardsToFight((oldArray) => [
                ...oldArray,
                {
                  fightCard: element.card,
                  userHolder: element.user!,
                },
              ])
              : null;
          }

          if (cardsToFight.length < 2) {
            if (swordData.isActive) {
              setSwordData({
                left: 10,
                top: 10,
                isActive: false,
              });
            }
            setSwordData({
              left: element.left + element.width - 35,
              top: element.top + element.height - 20,
              isActive: true,
            });
          }


          break;

        case "endTurnButton":
          setStatusElements([]);
          setCardsToFight([]);
          if (swordData.isActive) {
            setSwordData({
              left: 10,
              top: 10,
              isActive: false,
            });
          }

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

          newGameState.secondUser!.isFightedDeck = [];
          newGameState.firstUser!.isFightedDeck = [];
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
          const currUserInstance =
            gameState.currentUser === gameState.firstUser!.id
              ? gameState.firstUser
              : gameState.secondUser;

          if (element.cost! > currUserInstance!.mana) {
            return;
          }
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


            setGameElements((oldArray) => [
              ...oldArray,
              {
                id: fightCard.id,
                card: currCardIncance,
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
    }
  });
};