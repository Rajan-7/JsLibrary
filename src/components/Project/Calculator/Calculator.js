import React, { useReducer } from "react";
import Operation from "./Operation";
import ButtonDigit from "./DigitButton";
import "./style.css";

export const ACTIONS = {
  ADD: "add",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate",
  CHOOSE_OERATION: "choose-operation",
};

function reducer(state, { type, payload }) {
  switch(type){
    case ACTIONS.ADD:
       return{
        ...state,
        currentOperand:`${state.currentOperand || ""}${payload.digit}`
       }

    default:
       console.log("Hello calculator");
  }
}

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>﹪</button>
      <ButtonDigit digit="1" dispatch={dispatch} />
      <ButtonDigit digit="2" dispatch={dispatch} />
      <ButtonDigit digit="3" dispatch={dispatch} />
      <button>*</button>
      <ButtonDigit digit="4" dispatch={dispatch} />
      <ButtonDigit digit="5" dispatch={dispatch} />
      <ButtonDigit digit="6" dispatch={dispatch} />
      <button>+</button>
      <ButtonDigit digit="7" dispatch={dispatch} />
      <ButtonDigit digit="8" dispatch={dispatch} />
      <ButtonDigit digit="9" dispatch={dispatch} />
      <button>-</button>
      <ButtonDigit digit="0" dispatch={dispatch} />
      <ButtonDigit digit="." dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
};

export default Calculator;
