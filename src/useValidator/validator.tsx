import React from 'react';
import { ValidateBase } from './helpers';

export default function useValidator(minimumFilled?: number) {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    const n = document.querySelectorAll('.error').length;
    if (n !== number) {
      setNumber(n);
    }
  });
  return { 
    isValid: (number === 0), 
    Validate: ValidateBase
  };
}

