import { stockCards } from '../../data/cards';


export const shulledCards = () => {
	const stockShuffledCards = [...stockCards];
	let currentIndex = stockShuffledCards.length;
	let randomIndex;
	let temporaryValue;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = stockShuffledCards[currentIndex];
		stockShuffledCards[currentIndex] = stockShuffledCards[randomIndex];
		stockShuffledCards[randomIndex] = temporaryValue;
	}

	return stockShuffledCards;
}
