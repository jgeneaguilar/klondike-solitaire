import React, { useState } from 'react';
import type { Card as CardType, Suit } from '../types/game';
import { Card } from './Card';

interface FoundationPile {
  suit: Suit;
  cards: CardType[];
}

const MAX_PILES = 4;
export const Foundation: React.FC = () => {
  const [foundationPiles, setFoundationPiles] = useState<FoundationPile[]>([]);

  return (
    <div className="flex gap-4">
      {foundationPiles.map(
        pile =>
          !!pile &&
          pile.cards.length > 0 && (
            <Card key={pile.suit} card={pile.cards[pile.cards.length - 1]} />
          )
      )}
      {foundationPiles.length < MAX_PILES &&
        // dynamically render empty foundation pile slots
        [...Array(MAX_PILES - foundationPiles.length).keys()].map(i => (
          <div
            key={`empty-pile-${i}`}
            className="flex items-center justify-center bg-white/15 border-2 border-white rounded-lg text-6xl font-serif text-green-900/90 h-25 w-18"
          >
            A
          </div>
        ))}
    </div>
  );
};
