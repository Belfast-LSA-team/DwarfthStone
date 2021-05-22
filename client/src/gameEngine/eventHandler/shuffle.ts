import { stockCards } from '../../data/cards';


export const shulledCards = () => {
  const stockShuffledCards = [...stockCards];
  let randomIndex;
  let temporaryValue;

  for (let currentIndex = stockShuffledCards.length; currentIndex > 0; --currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);

    temporaryValue = stockShuffledCards[currentIndex];
    stockShuffledCards[currentIndex] = stockShuffledCards[randomIndex];
    stockShuffledCards[randomIndex] = temporaryValue;
  }

  return stockShuffledCards;
}
