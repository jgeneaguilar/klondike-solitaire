import type { Card as CardType, GameState } from '../types/game';
import { ranks, suits } from './constants';

export const createAndShuffleDeck = (): CardType[] => {
  const deck = suits.flatMap(suit =>
    ranks.map(rank => ({ suit, rank, isFaceUp: false }))
  );

  // Fisher-Yates Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};

export const initializeGame = (): GameState => {
  const deck = createAndShuffleDeck();
  const tableau: CardType[][] = [];

  let deckIndex = 0;
  for (let pile = 0; pile < 7; pile++) {
    const piles: CardType[] = [];

    for (let card = 0; card <= pile; card++) {
      const currentCard = deck[deckIndex++];
      currentCard.isFaceUp = card === pile;
      piles.push(currentCard);
    }
    tableau.push(piles);
  }

  const stock = deck
    .slice(deckIndex)
    .map(card => ({ ...card, isFaceUp: true }));

  return {
    foundation: [],
    gameStatus: 'playing',
    stock,
    tableau,
    waste: [],
  };
};
