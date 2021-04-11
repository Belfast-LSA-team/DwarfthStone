import { stockCard } from "../../data/cards";
import { UserGame } from '../User/user';
import { cardsNumbersHealth, cardsNumbersMana, cardsNumbersStrength } from '../../data/numbers';
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
	return { id: card.id, left: 10 + cardPosition, top: topPosition, cardWidth: 120, cardHeight: 170 }
}



export const addCardFight = (canvas: HTMLCanvasElement, user: UserGame, position: string, card: stockCard) => {
	const cont = canvas.getContext('2d');
	const nextCard = new Image();
	nextCard.src = card.imageFight;
	let topPosition = 370;
	const cardPosition = 90 * user.fightDeck!.length;



	if (position === 'bottom') {
		nextCard.onload = () => {
			cont!.imageSmoothingEnabled = false;
			cont!.drawImage(
				nextCard,
				270 + cardPosition,
				370,
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
				270,
				nextCard.naturalWidth,
				nextCard.naturalHeight
			);

		};
		topPosition = 270;

	}
	return { id: card.id, left: 270 + cardPosition, top: topPosition, cardWidth: 87, cardHeight: 91 }
}