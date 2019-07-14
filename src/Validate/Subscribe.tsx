import React, { useEffect } from 'react';
import { IValidator, hasErrors, getNumberOfNonEmptyFields } from './helpers';
import Context from './Context';

interface IValidateSubscribe extends IValidator {
	children: (isAllValid: boolean) => React.ReactNode;
	minimumNonEmptyFields?: number;
}

export default function Subscribe({ children, minimumNonEmptyFields = 0 }: IValidateSubscribe) {

	const [isValid, setIsValid] = React.useState(false);

	useEffect(() => {
		const context = Context.getContext();
		const _hasErrors = !hasErrors(context);
		const _minimumNonEmptyFieldsIsEnough = getNumberOfNonEmptyFields(context) >= minimumNonEmptyFields;
		setIsValid(_hasErrors && _minimumNonEmptyFieldsIsEnough);
	});

	return <div className='validate_subscribe'>{children(isValid)}</div>
}
