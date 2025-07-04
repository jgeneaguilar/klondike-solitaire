import React, { useEffect, useState, type MouseEventHandler } from 'react';
import type { Card as CardType } from '../types/game';
import { Card } from './Card';
import RecycleIcon from '../assets/icons/recycle.svg?react';

interface StockAndWasteProps {
  cards: CardType[];
}

export const StockAndWaste: React.FC<StockAndWasteProps> = ({ cards }) => {
  const [stock, setStock] = useState<CardType[]>(cards);
  const [waste, setWaste] = useState<CardType[]>([]);
  const [isStockEmpty, setIsStockEmpty] = useState(false);

  const handleDraw: MouseEventHandler<HTMLDivElement> = () => {
    if (stock.length === 0 && waste.length > 0) {
      setStock(waste);
      setWaste([]);
      return;
    }

    setStock(stock.slice(3));
    setWaste([...waste, ...stock.slice(0, 3)]);
  };

  useEffect(() => {
    if (stock.length === 0 && waste.length > 0) {
      setIsStockEmpty(true);
    } else {
      setIsStockEmpty(false);
    }
  }, [stock, waste.length]);

  return (
    <div className="flex gap-8">
      {/* Stock Pile */}
      <div
        className="flex items-center bg-slate-700 border-2 border-gray-800 rounded-lg shadow-xl font-bold h-25 w-18 hover:shadow-black/50 transition-shadow cursor-pointer hover:scale-106"
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
      <div className="flex items-center rounded-lg h-25 w-60">
        {waste.length > 0 && (
          <>
            <div className="z-0">
              <Card card={waste[waste.length - 1]} />
            </div>
            <div className="z-10 relative top-0 -left-12">
              <Card card={waste[waste.length - 2]} />
            </div>
            <div className="z-20 relative top-0 -left-24">
              <Card card={waste[waste.length - 3]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
