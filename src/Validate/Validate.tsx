import React from 'react';
import { IValidator, renderValidatorChild, IOptions } from './helpers';

// global validator
export default function Validate(props: { children: any } & IValidator) {
  if (props.children) {
    return props.children.map
      ?
      props.children.map((child: any, index: any) => renderValidatorChild(props, child, index))
      :
      renderValidatorChild(props, props.children, '');
  }
  return null;
}

// listener
export function useValidator(options?: IOptions) {
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => setNumber(document.querySelectorAll('.error').length), [number]);
  return {
    isValid: (number === 0),
    Validate // for multiple page validators
  };
}

