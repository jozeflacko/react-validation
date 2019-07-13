import React from 'react';
import { IValidator, Error } from './helpers';

// validator: IsLessThan __minLength__
export function IsLessThan(props: { minLength: number } & IValidator) {
  if (props.value && props.value.length < props.minLength) {
    return <Error {...props} msg={`Is less than  ${props.minLength}`} />
  }
  return null;
}

// validator: DoesNotContain __substring__
export function DoesNotContain(props: { substring: string } & IValidator) {
  if (props.value && props.value.indexOf(props.substring) < 0) {
    return <Error {...props} msg={`Does not contain  ${props.substring}`} />
  }
  return null;
}

