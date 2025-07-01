import { Card } from './components/Card';
import type { Card as CardType } from './types/game';

function App() {
  const sampleCards: CardType[] = [
    { suit: 'diamonds', rank: 'A', isFaceUp: true },
    { suit: 'hearts', rank: 'K', isFaceUp: true },
    { suit: 'spades', rank: 'Q', isFaceUp: true },
    { suit: 'clubs', rank: 'J', isFaceUp: true },
    { suit: 'clubs', rank: 'J', isFaceUp: false },
  ];

  return (
    <div className="min-h-screen bg-green-800 flex items-center justify-center flex-col">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Solitaire Game</h1>
      </div>
      <div className="flex items-center gap-4">
        {sampleCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
