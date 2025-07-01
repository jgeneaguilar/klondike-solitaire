import React from 'react';
import type { Card as CardType, Suit } from '../types/game';

interface CardProps {
  card: CardType;
}

const getSuitSymbol = (suit: Suit): string => {
  switch (suit) {
    case 'diamonds':
      return '♦';
    case 'hearts':
      return '♥';
    case 'spades':
      return '♠';
    case 'clubs':
      return '♣';
    default:
      return '';
  }
};

const getCardColor = (suit: Suit): string => {
  return suit === 'diamonds' || suit === 'hearts'
    ? 'text-red-500'
    : 'text-black';
};

export const Card: React.FC<CardProps> = ({ card }) => {
  const cardColor = getCardColor(card.suit);

  return (
    <div className="flex items-center bg-white border-2 border-gray-800 rounded-lg shadow-xl font-bold h-25 w-18 hover:shadow-black/50 transition-shadow cursor-pointer">
      {card.isFaceUp ? (
        <div className="flex flex-col justify-between box-border text-sm p-1 h-full w-full rounded-sm">
          <div className={`flex text-sm leading-none ${cardColor}`}>
            {card.rank} <br />
            {getSuitSymbol(card.suit)}
          </div>
          <div
            className={`flex items-center justify-center text-2xl flex-1 ${cardColor}`}
          >
            {getSuitSymbol(card.suit)}
          </div>
          <div className={`flex text-sm leading-none rotate-180 ${cardColor}`}>
            {card.rank} <br />
            {getSuitSymbol(card.suit)}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-slate-700 text-white text-sm h-full w-full rounded-[0.3rem]">
          <div className="text-center">
            <div className="text-xs">♠ ♥ ♦ ♣</div>
          </div>
        </div>
      )}
    </div>
  );
};
