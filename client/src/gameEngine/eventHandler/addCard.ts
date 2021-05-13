import { stockCard } from "../../data/cards";
import { UserGame } from '../User/user';


const CARD_POSITION_DATA_FIGHT = {
  width: 87, height: 91
}
const CARD_POSITION_DATA = {
  width: 120, height: 170
}

export const addCard = async (canvas: HTMLCanvasElement, user: UserGame, position: string, card: stockCard) => {

  let topPosition = 540;

  const cont = canvas.getContext('2d');
  const nextCard = new Image();

  nextCard.src = card.imageFull;

  user.deck.push(card);

  const cardPosition = 130 * user.deck.length;
  if (position === 'bottom') {
    nextCard.addEventListener("load", () => {
      cont!.imageSmoothingEnabled = false;
      cont!.drawImage(
        nextCard,
        10 + cardPosition,
        540,

      );
      cont?.save();

    });

  } else {

    nextCard.addEventListener("load", () => {
      cont!.imageSmoothingEnabled = false;
      cont!.drawImage(
        nextCard,
        10 + cardPosition,
        10,

      );
      cont?.save();
    });

    topPosition = 10;
  }
  return { id: card.id, left: 10 + cardPosition, top: topPosition, cardWidth: CARD_POSITION_DATA.width, cardHeight: CARD_POSITION_DATA.height, cardMana: card.cost }
}


export const addCardFight = (canvas: HTMLCanvasElement, user: UserGame, position: string, card: stockCard) => {
  const cont = canvas.getContext('2d');
  const nextCard = new Image();
  nextCard.src = card.imageFight;
  let topPosition = 390;
  const cardPosition = 90 * user.fightDeck!.length;



  if (position === 'bottom') {
    nextCard.onload = () => {
      cont!.imageSmoothingEnabled = false;
      cont!.drawImage(
        nextCard,
        270 + cardPosition,
        390,
        nextCard.naturalWidth,
        nextCard.naturalHeight
      );

    };
  } else {
    nextCard.onload = () => {
      cont!.imageSmoothingEnabled = false;
      cont!.drawImage(
        nextCard,
        270 + cardPosition,
        210,
        nextCard.naturalWidth,
        nextCard.naturalHeight
      );

    };
    topPosition = 210;

  }
  return { id: card.id, left: 270 + cardPosition, top: topPosition, cardWidth: CARD_POSITION_DATA_FIGHT.width, cardHeight: CARD_POSITION_DATA_FIGHT.height }
}
export const addDeadCard = (canvas: HTMLCanvasElement, user: UserGame, position: string, card: stockCard) => {
  const cont = canvas.getContext('2d');
  const nextCard = new Image();
  nextCard.src = card.imageFightDead;
  let topPosition = 390;

  const findIndex = user.fightDeck!.findIndex(item => item.id === card.id);
  const cardPosition = 90 * (findIndex + 1);



  if (position === 'bottom') {
    nextCard.onload = () => {
      cont!.imageSmoothingEnabled = false;
      cont!.drawImage(
        nextCard,
        270 + cardPosition,
        390,
        nextCard.naturalWidth,
        nextCard.naturalHeight
      );

    };
  } else {
    nextCard.onload = () => {
      cont!.imageSmoothingEnabled = false;
      cont!.drawImage(
        nextCard,
        270 + cardPosition,
        210,
        nextCard.naturalWidth,
        nextCard.naturalHeight
      );

    };
    topPosition = 210;

  }
  return { id: card.id, left: 270 + cardPosition, top: topPosition, cardWidth: CARD_POSITION_DATA_FIGHT.width, cardHeight: CARD_POSITION_DATA_FIGHT.height }
}
