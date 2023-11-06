import { ACTIONS } from "./Calculator";

export default function Operation({operation, dispatch}) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OERATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
}
