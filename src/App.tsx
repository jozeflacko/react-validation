import React from 'react';
import Validate, { DoesNotContain, IsLessThan } from './Validate';

export default function App() {
	return <div>
		<h4>Validator Test</h4>
		<Example />
	</div>;
}

function Example() {

	// state
	const [value1, setValue1] = React.useState('');
	const [value2, setValue2] = React.useState('');

	return (
		<Validate.Context>
			<input value={value1} onChange={e => setValue1(e.target.value)} />
			<Validate value={value1}>
				<DoesNotContain substring={'Hi'} />
				<IsLessThan minLength={5} />
			</Validate>

			<input value={value2} onChange={e => setValue2(e.target.value)} />
			<Validate value={value2}>
				<DoesNotContain substring={'Hi'} />
				<DoesNotContain substring={'Hello'} />
				<IsLessThan minLength={5} />
			</Validate>

			<Validate.Subscribe minimumNonEmptyFields={2}>
				{isAllValid => (
					<button
						disabled={!isAllValid}
						onClick={() => { setValue1(''); setValue2(''); }}
					>
						Submit
						</button>
				)}
			</Validate.Subscribe>
		</Validate.Context>
	);
}