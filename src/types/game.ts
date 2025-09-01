import type { ranks, suits } from '../utils/constants';

export type Suit = (typeof suits)[number];

export type Rank = (typeof ranks)[number];

export interface Card {
  suit: Suit;
  rank: Rank;
  isFaceUp: boolean;
}

export interface FoundationPile {
  suit: Suit;
  cards: Card[];
}

export interface GameState {
  foundation: FoundationPile[];
  gameStatus: 'playing' | 'won' | 'lost';
  stock: Card[];
  tableau: Card[][];
  waste: Card[];
}
