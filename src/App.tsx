import React from 'react';
import Validate, { DoesNotContain, IsLessThan, useValidator } from './Validate';

export default function App() {

  // state
  const [state, setState] = React.useState({
    value1: '',
    value2: '',
    value3: ''
  })

  // validator
  const { isValid } = useValidator();

  return (
    <div className="App">
      <div>
        <input value={state.value1} onChange={(e) => setState({...state, value1: e.target.value})} />
        <Validate value={state.value1}>
          <IsLessThan minLength={5} />
        </Validate>
      </div>

      <div>
        <input value={state.value2} onChange={(e) => setState({...state, value2: e.target.value})} />
        <Validate value={state.value2}>
          <DoesNotContain substring={'Hi'} />
          <IsLessThan minLength={5} />
        </Validate>
      </div>

      <div>
        <input value={state.value3} onChange={(e) => setState({...state, value3: e.target.value})} />
        <Validate value={state.value3}>
          <DoesNotContain substring={'Hi'} />
          <DoesNotContain substring={'Hello'} />
          <IsLessThan minLength={5} />
        </Validate>
      </div>

      <button disabled={!isValid}>button</button>
    </div>
  );
}

