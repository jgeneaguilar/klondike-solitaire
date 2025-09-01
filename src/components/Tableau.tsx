import React, { useState } from 'react';
import type { Card as CardType } from '../types/game';
import { Card } from './Card';

interface TableauProps {
  tableau: CardType[][];
}

export const Tableau: React.FC<TableauProps> = ({ tableau }) => {
  const [tableauPiles] = useState<CardType[][]>(tableau);

  const calculateTopOffset = (pile: CardType[], index: number) => {
    const offset = index * -80;
    const facedDownCards = pile.filter(card => !card.isFaceUp).length;

    if (index > 0 && !pile[index - 1].isFaceUp) {
      return offset + index * -16;
    }

    if (pile[index].isFaceUp) {
      return offset + facedDownCards * -16;
    }

    return offset;
  };

  return (
    <div className="flex gap-4">
      {tableauPiles.map((pile, index) => (
        <div key={`tableau-pile-${index}`} className="flex flex-col gap-2">
          {pile.length > 0 ? (
            pile.map((card, index) => (
              <div
                key={`${card.suit}-${card.rank}`}
                className={`relative left-0`}
                style={{
                  zIndex: (index + 1) * 10,
                  top: calculateTopOffset(pile, index),
                }}
              >
                <Card card={card} />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center bg-white/15 border-2 border-white rounded-lg text-6xl font-serif text-green-900/90 h-25 w-18" />
          )}
        </div>
      ))}
    </div>
  );
};
