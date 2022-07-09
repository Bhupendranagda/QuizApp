import { useState } from "react";
import "./App.css";
import EndScreen from "./components/EndScreen";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import { GameStateContext } from "./helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          userName,
          setUserName,
          gameState,
          setGameState,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
