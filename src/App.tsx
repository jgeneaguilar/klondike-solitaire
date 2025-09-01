import { GameBoard } from './components/GameBoard';
import { initializeGame } from './utils/gameLogic';

function App() {
  const initialGameState = initializeGame();

  return (
    <div className="min-h-screen bg-green-800 flex items-center flex-col select-none gap-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Solitaire Game</h1>
      </div>
      <GameBoard gameState={initialGameState} />
    </div>
  );
}

export default App;
