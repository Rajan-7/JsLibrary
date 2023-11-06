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
  switch (type) {
    case ACTIONS.ADD:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (
        payload.digit === "." &&
        state.currentOperand === "." &&
        state.currentOperand.includes(".")
      ) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OERATION:
      if (state.previousOperand == null && state.currentOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.operation,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: null,
        operation: null,
        overwrite: true,
      };

    case ACTIONS.DELETE:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: null,
          overwrite: false,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.CLEAR:
      return {};

    default:
      console.log("Hello calculator");
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const cur = parseFloat(currentOperand);
  const pre = parseFloat(previousOperand);
  if (isNaN(cur) || isNaN(pre)) return "";
  let result = "";
  switch (operation) {
    case "+":
      result = cur + pre;
      break;
    case "-":
      result = cur - pre;
      break;
    case "*":
      result = cur * pre;
      break;
    case "%":
      result = cur / pre;
      break;
  }
  return result.toString();
}

const INTEGER_FORMAT = Intl.NumberFormat('en-us',{
  maximumFractionDigits:0
})

function operanFormatter(operand){
  if(operand == null) return
  const [interger,decimal]=operand.split(".");
  if(decimal == null) return INTEGER_FORMAT.format(interger)
  return `${INTEGER_FORMAT.format(interger)}.${decimal}`
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
          {operanFormatter(previousOperand)}
          {operation}
        </div>
        <div className="current-operand">{operanFormatter(currentOperand)}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE })}>DEL</button>
      <Operation operation="%" dispatch={dispatch} />
      <ButtonDigit digit="1" dispatch={dispatch} />
      <ButtonDigit digit="2" dispatch={dispatch} />
      <ButtonDigit digit="3" dispatch={dispatch} />
      <Operation operation="*" dispatch={dispatch} />
      <ButtonDigit digit="4" dispatch={dispatch} />
      <ButtonDigit digit="5" dispatch={dispatch} />
      <ButtonDigit digit="6" dispatch={dispatch} />
      <Operation operation="+" dispatch={dispatch} />
      <ButtonDigit digit="7" dispatch={dispatch} />
      <ButtonDigit digit="8" dispatch={dispatch} />
      <ButtonDigit digit="9" dispatch={dispatch} />
      <Operation operation="-" dispatch={dispatch} />
      <ButtonDigit digit="0" dispatch={dispatch} />
      <ButtonDigit digit="." dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  );
};

export default Calculator;
