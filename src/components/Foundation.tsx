import React, { useState } from 'react';
import type { FoundationPile } from '../types/game';
import { Card } from './Card';

interface FoundationProps {
  foundation: FoundationPile[];
}

const MAX_PILES = 4;
export const Foundation: React.FC<FoundationProps> = ({ foundation }) => {
  const [foundationPiles] = useState<FoundationPile[]>(foundation);

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
