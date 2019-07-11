import React from 'react';
import useValidator, { DoesNotContain, IsLessThan} from './useValidator';

export default function App() {

  // state
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');

  // validator
  const {isValid, Validate} = useValidator(2);

  return (
    <div className="App">
      <div>
        <input value={value1} onChange={(e) => setValue1(e.target.value)} />
        <Validate value={value1}>
          <IsLessThan minLength={5} />
        </Validate>
      </div>

      <div>
        <input value={value2} onChange={(e) => setValue2(e.target.value)} />
        <Validate value={value2}>
          <DoesNotContain substring={'Hi'} />
          <IsLessThan minLength={5} />
        </Validate>
      </div>

      <div>
        <input value={value3} onChange={(e) => setValue3(e.target.value)} />
        <Validate value={value3}>
          <DoesNotContain substring={'Hi'} />
          <DoesNotContain substring={'Hello'} />
          <IsLessThan minLength={5} />
        </Validate>
      </div>

      <h1>Is valid: {isValid.toString()}</h1>
    </div>
  );
}

