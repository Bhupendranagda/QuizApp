import React, { useContext, useState } from "react";
import "../App.css";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const Quiz = () => {
  const { score, setScore, gameState, setGameState } =
    useContext(GameStateContext);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isActiveB, setIsActiveB] = useState(false);
  const [isActiveC, setIsActiveC] = useState(false);
  const [isActiveD, setIsActiveD] = useState(false);

  const chooseOption = (option) => {
    if (option === "optionA") {
      setIsActive(!isActive);
      setIsActiveB(isActive);
      setIsActiveC(isActive);
      setIsActiveD(isActive);
    }
    if (option === "optionB") {
      setIsActiveB(!isActiveB);
      setIsActive(isActiveB);
      setIsActiveC(isActiveB);
      setIsActiveD(isActiveB);
    }
    if (option === "optionC") {
      setIsActiveC(!isActiveC);
      setIsActive(isActiveC);
      setIsActiveB(isActiveC);
      setIsActiveD(isActiveC);
    }
    if (option === "optionD") {
      setIsActiveD(!isActiveD);
      setIsActive(isActiveD);
      setIsActiveB(isActiveD);
      setIsActiveC(isActiveD);
    }
    setoptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions.length - 1 == currentQuestion) {
      setGameState("finished");
    }
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setcurrentQuestion(currentQuestion + 1);
    setIsActiveD(false);
    setIsActive(false);
    setIsActiveB(false);
    setIsActiveC(false);
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          style={{
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "white" : "",
          }}
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          style={{
            backgroundColor: isActiveB ? "salmon" : "",
            color: isActiveB ? "white" : "",
          }}
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          style={{
            backgroundColor: isActiveC ? "salmon" : "",
            color: isActiveC ? "white" : "",
          }}
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          style={{
            backgroundColor: isActiveD ? "salmon" : "",
            color: isActiveD ? "white" : "",
          }}
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      <button id="nextQuestions" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default Quiz;
