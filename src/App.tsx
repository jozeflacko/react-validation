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
				<IsLessThan minLength={3} />
				<DoesNotContain substring={'Hi'} />
			</Validate>

			<input value={value2} onChange={e => setValue2(e.target.value)} />
			<Validate value={value2}>
				<IsLessThan minLength={5} />
				<DoesNotContain substring={'Hello'} />
				<DoesNotContain substring={'World'} />
			</Validate>

			<Validate.Subscribe minimumNonEmptyFields={2}>
				{isAllValid => (
					<button disabled={!isAllValid} onClick={() => { setValue1(''); setValue2(''); }}>Submit</button>
				)}
			</Validate.Subscribe>
		</Validate.Context>
	);
}