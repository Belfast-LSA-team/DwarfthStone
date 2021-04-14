import { stockCard } from "../../data/cards";
import { UserGame } from '../User/user';
import { cardsNumbersHealth } from '../../data/numbers';
import StatusCard from '../../assets/images/game/status.png';

export const setHealth = (canvas: HTMLCanvasElement, user: UserGame, position: string, card: stockCard, currentHealth: number) => {
	const cont = canvas.getContext('2d');
	const nextCard = new Image();
	nextCard.src = cardsNumbersHealth(currentHealth.toString());
	let topPosition = 370;
	const findIndex = user.fightDeck!.findIndex(item => item.id === card.id);
	console.log(findIndex);
	const cardPosition = 90 * (findIndex + 1);


	if (position === 'bottom') {
		nextCard.onload = () => {
			cont!.imageSmoothingEnabled = false;
			cont!.drawImage(
				nextCard,
				328 + cardPosition,
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
				328 + cardPosition,
				210,
				nextCard.naturalWidth,
				nextCard.naturalHeight
			);

		};
		topPosition = 270;

	}
	return { id: card.id, left: 270 + cardPosition, top: topPosition, cardWidth: 87, cardHeight: 91 }
}

