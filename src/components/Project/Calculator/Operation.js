import { ACTIONS } from "./Calculator";

export default function Operation({operation, dispatch}) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD, payload: { operation } })}
    >
      {operation}
    </button>
  );
}
