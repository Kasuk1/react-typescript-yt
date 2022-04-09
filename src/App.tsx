import { Counter } from './components/Counter';
import { User } from './components/User';

import { TimerMain } from './components/TimerMain';

import { CounterRed } from './components/CounterRed';

import { Form } from './components/Form';
import { Todo } from './todo/Todo';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />

      <h2>useState</h2>
      <hr />
      <Counter />
      <User />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerMain />

      <h2>useReducer</h2>
      <hr />
      <CounterRed />

      <h2>CustomHooks</h2>
      <hr />
      <Form />

      <Todo />
    </>
  );
}

export default App;
