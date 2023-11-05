import { ACTIONS } from "./Calculator";

export default function ButtonDigit({digit, dispatch}) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.ADD, payload: { digit } })}>
      {digit}
    </button>
  );
}
