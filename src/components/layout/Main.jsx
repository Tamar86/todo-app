import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import Form from './Form';
import TodoList from './TodoList';

const StyledMain = styled.main`
	display: grid;
	gap: 1rem;
`;

function Main() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();
	return (
		<StyledMain>
			<Form
				register={register}
				handleSubmit={handleSubmit}
				errors={errors}
				watch={watch}
				reset={reset}
			/>
			<TodoList />
		</StyledMain>
	);
}

export default Main;
