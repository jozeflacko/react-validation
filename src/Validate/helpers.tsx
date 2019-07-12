
import React from 'react';

export type IValidatorOption = { [key: string]: boolean };
export type IValidator = { name?: string, value?: string, key?: any, validator?: (o: IValidatorOption) => void };

export function Error(props: { msg: string } & IValidator) {
    return <div className='error' key={props.key}>{props.msg}</div>
}

export function renderValidatorChild(props: any, child: any, key: any) {
    return <div key={key}>{React.cloneElement(child, { ...props })}</div>
}

export interface IOptions {
    minValidElements?: number,
    Validate: JSX.Element // to pass here validator
  }