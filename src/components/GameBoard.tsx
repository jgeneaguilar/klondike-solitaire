import React from 'react';
import { StockAndWaste } from './StockAndWaste';
import type { GameState } from '../types/game';
import { Foundation } from './Foundation';
import { Tableau } from './Tableau';

interface GameBoardProps {
  gameState: GameState;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <StockAndWaste
          stockCards={gameState.stock}
          wasteCards={gameState.waste}
        />
        <Foundation foundation={gameState.foundation} />
      </div>
      <div className="flex">
        <Tableau tableau={gameState.tableau} />
      </div>
    </div>
  );
};
