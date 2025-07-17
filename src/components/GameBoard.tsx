import React from 'react';
import { StockAndWaste } from './StockAndWaste';
import type { Card as CardType } from '../types/game';
import { Foundation } from './Foundation';
import { Tableau } from './Tableau';

interface GameBoardProps {
  cards: CardType[];
}

export const GameBoard: React.FC<GameBoardProps> = ({ cards }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <StockAndWaste cards={cards} />
        <Foundation />
      </div>
      <div className="flex">
        <Tableau />
      </div>
    </div>
  );
};
