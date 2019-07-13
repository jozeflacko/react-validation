import React, { useEffect } from 'react';
import { IValidator, hasErrors, getNumberOfNonEmptyFields } from './helpers';

interface IValidateSubscribe extends IValidator {
	children: (isAllValid: boolean) => React.ReactNode;
	minimumNonEmptyFields?: number;
}

export default function Subscribe ({ children, minimumNonEmptyFields = 0 }: IValidateSubscribe) {

	const ref = React.useRef(null);
	const [isValid, setIsValid] = React.useState(false);

	useEffect(() => {
		const current: any = ref.current;
		if (current) {
            const _hasErrors = !hasErrors(current);
            const _minimumNonEmptyFieldsIsEnough = getNumberOfNonEmptyFields(current) >= minimumNonEmptyFields;


			setIsValid(() => _hasErrors && _minimumNonEmptyFieldsIsEnough );
		}
	});

	return <div ref={ref} className='validate_subscribe'>{children(isValid)}</div>
}
