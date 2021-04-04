import { stockCard } from "../../data/cards";
import { UserGame } from '../User/user';
export const addCard = async (canvas: HTMLCanvasElement, user: UserGame, position: string, card: stockCard) => {
	const cont = canvas.getContext('2d');
	const nextCard = new Image();
	nextCard.src = card.imageFull;
	user.deck.push(card);
	console.log(user.deck);

	const cardPosition = 130 * user.deck.length;

	nextCard.onload = () => {
		cont!.imageSmoothingEnabled = false;
		cont!.drawImage(
			nextCard,
			120 + cardPosition,
			540,
			nextCard.naturalWidth,
			nextCard.naturalHeight
		);
		console.log(nextCard.naturalWidth, nextCard.naturalHeight
		)
	};


	return { id: card.id, left: 120 + cardPosition, top: 540, cardWidth: 120, cardHeight: 170 }
}

export const addCardFight = (canvas: HTMLCanvasElement, user: UserGame, position: string, card: stockCard) => {
	const cont = canvas.getContext('2d');
	const nextCard = new Image();
	nextCard.src = card.imageFull;
	user.deck.push(card);
	console.log(user.deck);

	const cardPosition = 130 * user.deck.length;

	nextCard.onload = () => {
		cont!.imageSmoothingEnabled = false;
		cont!.drawImage(
			nextCard,
			120 + cardPosition,
			540,
			nextCard.naturalWidth,
			nextCard.naturalHeight
		);

	};
	return { id: card.id, cardWidth: nextCard.naturalWidth, cardHeight: nextCard.naturalHeight }
}