import React from 'react';
import { IValidator, renderValidatorChild, VALIDATE_CLASS } from './helpers';
import Subscribe from './Subscribe';
import Context from './Context';

interface IValidate extends IValidator {
	children: React.ReactElement | React.ReactElement[];
}

const Validate = ({ children, ...props }: IValidate) => {
	let render;

	if (children instanceof Element) {
		render = renderValidatorChild(props, children, '');
	} else if (Array.isArray(children)) {
		render = children.map((child: any, index: any) => renderValidatorChild(props, child, index));
	}
	return <div className={VALIDATE_CLASS} data-value={props.value}>{render}</div>;
}

Validate.Context = Context;
Validate.Subscribe = Subscribe;

export default Validate;
