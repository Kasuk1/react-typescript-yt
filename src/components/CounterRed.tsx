import { useReducer } from 'react';

const initialState = {
  counter: 0,
};

type CounterActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'custom'; payload: number };

const counterReducer = (
  state: typeof initialState,
  action: CounterActionType
) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'custom':
      return {
        ...state,
        counter: 100,
      };

    default:
      return state;
  }
};

export const CounterRed = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h2>CounterReducer: {counterState.counter}</h2>
      <button
        className='btn btn-outline-primary'
        onClick={() => dispatch({ type: 'increment' })}
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary'
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -1
      </button>
      <button
        className='btn btn-outline-primary'
        onClick={() => dispatch({ type: 'custom', payload: 100 })}
      >
        100
      </button>
    </>
  );
};
