import React, { useContext } from "react";
import "../App.css";
import { GameStateContext } from "../helpers/Contexts";

const Menu = () => {
  const { userName, setUserName, gameState, setGameState } =
    useContext(GameStateContext);
  return (
    <div className="Menu">
      <label htmlFor="">Enter your name here</label>
      <input
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Ex. Honey Nagda"
      />
      <button onClick={() => setGameState("playing")}>Start Quiz</button>
    </div>
  );
};

export default Menu;
