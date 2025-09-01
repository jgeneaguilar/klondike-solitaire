import React, { useState, type MouseEventHandler } from 'react';
import type { Card as CardType } from '../types/game';
import { Card } from './Card';
import RecycleIcon from '../assets/icons/recycle.svg?react';

interface StockAndWasteProps {
  stockCards: CardType[];
  wasteCards: CardType[];
}

export const StockAndWaste: React.FC<StockAndWasteProps> = ({
  stockCards,
  wasteCards,
}) => {
  const [stock, setStock] = useState<CardType[]>(stockCards);
  const [waste, setWaste] = useState<CardType[]>(wasteCards);

  const isStockEmpty = stock.length === 0 && waste.length > 0;

  const handleDraw: MouseEventHandler<HTMLDivElement> = () => {
    if (stock.length === 0 && waste.length > 0) {
      setStock(waste);
      setWaste([]);
      return;
    }

    const cardsToMove = stock.slice(0, 3);
    setStock(stock.slice(3, stock.length));
    setWaste([...waste, ...cardsToMove]);
  };

  const getLeftOffset = (index: number, length: number): string => {
    if (index === 0) return '';
    if (length === 2) return '-left-12';
    return index === 1 ? '-left-12' : '-left-24';
  };

  return (
    <div className="flex gap-4 max-w-2xs">
      {/* Stock Pile */}
      <div
        className="flex items-center shrink-0 bg-slate-700 border-2 border-gray-800 rounded-lg shadow-xl font-bold h-25 w-18 hover:shadow-black/50 transition-shadow cursor-pointer hover:scale-106"
        onClick={handleDraw}
      >
        {!isStockEmpty ? (
          <div className="flex flex-col items-center justify-center bg-slate-700 text-white text-sm h-full w-full rounded-[0.3rem]">
            <div className="text-center">
              <div className="text-xs">♠ ♥ ♦ ♣</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-1 text-2xl">
            <RecycleIcon className="w-8 h-8" fill="#ffffff" />
          </div>
        )}
      </div>

      {/* Waste Pile */}
      <div className="flex items-center rounded-lg h-25 w-40">
        {waste.slice(-Math.min(3, waste.length)).map((card, index, arr) => (
          <div
            key={`${card.suit}-${card.rank}-${index}`}
            className={`z-${index * 10} relative top-0 ${getLeftOffset(index, arr.length)}`}
          >
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};
