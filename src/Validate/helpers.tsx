
import React from 'react';

export type IValidatorOption = { [key: string]: boolean };
export type IValidator = { value?: string, key?: any, validator?: (o: IValidatorOption) => void };

export const VALIDATE_CLASS = 'validate';
const ERROR_CLASS = 'validator_error';

export function Error(props: { msg: string } & IValidator) {
    return <div
        className={ERROR_CLASS}
        key={props.key}
        style={{ color: 'red' }}
    >
        {props.msg}
    </div>
}

export function renderValidatorChild(props: any, child: any, key: any) {
    return <div
        key={key}
    >
        {React.cloneElement(child, { ...props })}
    </div>
}

export interface IOptions {
    minValidElements?: number,
    Validate: JSX.Element // to pass here validator
}

export function hasErrors(context: HTMLElement) {
    if (!context) {
        return false;
    }
    return context.querySelectorAll('.' + ERROR_CLASS).length;
}

export function getNumberOfNonEmptyFields(context: HTMLElement) {
    if (!context) {
        return false;
    }
    const validateElements = context.querySelectorAll('.' + VALIDATE_CLASS);
    let numberOfNonEmptyFields = 0;

    for (let i = 0; i < validateElements.length; i++) {
        const value = validateElements[i].getAttribute('data-value');
        if(value != null && value !== '') {
            numberOfNonEmptyFields++;
        }
    }

    return numberOfNonEmptyFields;
}