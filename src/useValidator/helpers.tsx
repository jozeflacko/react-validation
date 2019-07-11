
import React from 'react';

export type IValidatorOption = { [key: string]: boolean };
export type IValidator = { name?: string, value?: string, key?: any, validator?: (o: IValidatorOption) => void };

export function Error(props: { msg: string } & IValidator) {
    return <div className='error' key={props.key}>{props.msg}</div>
}

/* MAIN VALIDATE WRAPPER */
export function ValidateBase(props: { children: any } & IValidator) {
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
