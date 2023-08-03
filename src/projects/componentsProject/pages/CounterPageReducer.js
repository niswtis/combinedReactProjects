import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "descrement";
const INPUT_CHANGE = "inputChange";
const COUNTER_SUBMIT = "buttonSubmit";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INPUT_CHANGE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case COUNTER_SUBMIT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default: {
      return state;
    }
  }
};

function CounterPageReducer({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const incrementCount = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrementCount = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: COUNTER_SUBMIT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: INPUT_CHANGE,
      payload: value,
    });
  };

  return (
    <Panel className="mt-10">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div>
        <Button onClick={incrementCount}>Increment</Button>
        <Button onClick={decrementCount}>Decrement</Button>
      </div>

      <form className="flex flex-col m-3" onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          type="number"
          className="p-1 mt-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPageReducer;
