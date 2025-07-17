import { GameBoard } from './components/GameBoard';
import type { Card as CardType } from './types/game';

function App() {
  const sampleCards: CardType[] = [
    { suit: 'diamonds', rank: 'A', isFaceUp: true },
    { suit: 'hearts', rank: 'K', isFaceUp: true },
    { suit: 'spades', rank: 'Q', isFaceUp: true },
    { suit: 'clubs', rank: 'J', isFaceUp: true },
    { suit: 'hearts', rank: '10', isFaceUp: true },
    { suit: 'diamonds', rank: '9', isFaceUp: true },
    { suit: 'spades', rank: '8', isFaceUp: true },
    { suit: 'hearts', rank: '7', isFaceUp: true },
    { suit: 'diamonds', rank: '6', isFaceUp: true },
    { suit: 'clubs', rank: '5', isFaceUp: true },
    { suit: 'spades', rank: '4', isFaceUp: true },
    { suit: 'hearts', rank: '3', isFaceUp: true },
    { suit: 'clubs', rank: '2', isFaceUp: true },
    { suit: 'diamonds', rank: '5', isFaceUp: true },
  ];

  return (
    <div className="min-h-screen bg-green-800 flex items-center flex-col select-none gap-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Solitaire Game</h1>
      </div>
      <GameBoard cards={sampleCards} />
    </div>
  );
}

export default App;
