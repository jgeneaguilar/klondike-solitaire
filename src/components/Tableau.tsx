import React, { useState } from 'react';
import type { Card as CardType } from '../types/game';
import { Card } from './Card';

export const Tableau: React.FC = () => {
  const [tableauPiles] = useState<CardType[][]>([
    // test piles
    [{ suit: 'diamonds', rank: 'A', isFaceUp: true }], // pile 0
    [
      { suit: 'diamonds', rank: 'A', isFaceUp: false },
      { suit: 'hearts', rank: '2', isFaceUp: true },
    ], // pile 1
    [
      { suit: 'diamonds', rank: 'A', isFaceUp: false },
      { suit: 'diamonds', rank: '2', isFaceUp: false },
      { suit: 'clubs', rank: '3', isFaceUp: true },
    ], // pile 2
    [
      { suit: 'diamonds', rank: 'A', isFaceUp: false },
      { suit: 'diamonds', rank: '2', isFaceUp: false },
      { suit: 'diamonds', rank: '3', isFaceUp: false },
      { suit: 'spades', rank: '4', isFaceUp: true },
    ], // pile 3
    [
      { suit: 'diamonds', rank: 'A', isFaceUp: false },
      { suit: 'diamonds', rank: '2', isFaceUp: false },
      { suit: 'diamonds', rank: '3', isFaceUp: false },
      { suit: 'diamonds', rank: '4', isFaceUp: false },
      { suit: 'diamonds', rank: 'K', isFaceUp: true },
    ], // pile 4
    [
      { suit: 'diamonds', rank: 'A', isFaceUp: false },
      { suit: 'diamonds', rank: '2', isFaceUp: false },
      { suit: 'diamonds', rank: '3', isFaceUp: false },
      { suit: 'diamonds', rank: '4', isFaceUp: false },
      { suit: 'diamonds', rank: '5', isFaceUp: false },
      { suit: 'clubs', rank: 'Q', isFaceUp: true },
    ], // pile 5
    [
      { suit: 'hearts', rank: 'K', isFaceUp: false },
      { suit: 'hearts', rank: 'Q', isFaceUp: false },
      { suit: 'hearts', rank: 'J', isFaceUp: false },
      { suit: 'hearts', rank: '10', isFaceUp: false },
      { suit: 'hearts', rank: '9', isFaceUp: false },
      { suit: 'hearts', rank: '8', isFaceUp: false },
      { suit: 'spades', rank: '6', isFaceUp: true },
      { suit: 'hearts', rank: '5', isFaceUp: true },
    ], // pile 6
  ]);

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
    <div className="flex gap-2">
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
