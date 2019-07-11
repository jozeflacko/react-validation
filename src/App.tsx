import React, { useEffect } from 'react';

type IValidatorOption = { [key: string]: boolean };

export default function App() {

  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const isValid = useValidator();

  return (
    <div className="App">
      <div>
        <input value={value1} onChange={(e) => setValue1(e.target.value)} />
        <Validate value={value1}>
          <DoesNotContain substring={'Hello'} />
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

      <h1>{isValid}</h1>
    </div>
  );
}

// effect to cout errors;
function useValidator() {
  const [number, setNumber] = React.useState(0);
  useEffect(()=>{
    const n = document.querySelectorAll('.error').length;
    if(n !== number) {
      setNumber(n)
    }
  });
  return number === 0 ? '' : 'has errors';
}

type IValidator = { name?: string, value?: string, key?: any, validator?: (o: IValidatorOption) => void };

/* MAIN VALIDATE WRAPPER */
function Validate(props: { children: any } & IValidator) {
  if (props.children) {
    if (props.children.map) {
      return props.children.map((child: any, index: any) => (
        <div>{React.cloneElement(child, { ...props, key: index })}</div>
      ));
    } else {
      return <div>{React.cloneElement(props.children, { ...props, key: 'NOT_RELEVANT' })}</div>
    }
  }
  return null;
}

// validator 1
function IsLessThan(props: { minLength: number } & IValidator) {
  if (props.value && props.value.length < props.minLength) {
    return <Error {...props} msg={`Is less than  ${props.minLength}`} />
  }
  return null;
}

// validator 2
function DoesNotContain(props: { substring: string } & IValidator) {
  if (props.value && props.value.indexOf(props.substring) < 0) {
    return <Error {...props} msg={`Does not contain  ${props.substring}`} />
  }
  return null;
}

function Error(props: { msg: string } & IValidator ) {
  return <div className='error' key={props.key}>{props.msg}</div>
}
