import styled from 'styled-components';
import { useTodo } from '../../context/TodoContext';
import Input from '../inputs/Input';

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const StyledForm = styled.form`
	&& {
		display: flex;
		gap: 5px;
		background-color: ${({ $lightMode }) =>
			$lightMode
				? 'var(--Very-Light-Gray)'
				: 'var(--Very-Dark-Desaturated-Blue)'};
		align-items: center;
		padding: 1rem 1.5rem;
		border-radius: 5px;
		height: 3.5rem;
	}
`;

const Div = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	border: ${({ $lightMode }) =>
		$lightMode
			? '2px solid var(--Light-Grayish-Blue)'
			: '2px solid var(--Very-Dark-Grayish-Blue)'};
	border-radius: 50%;
`;

const ErrorMessage = styled.p`
	font-size: 0.8rem;
	color: var(--Sky-Blue);
`;

function Form({ register, handleSubmit, watch, reset, errors }) {
	const { dispatch, lightMode } = useTodo();

	const onSubmit = data => {
		dispatch({ type: 'add/listItem', payload: data.value });
		reset();
	};

	return (
		<FormContainer>
			<StyledForm onSubmit={handleSubmit(onSubmit)} $lightMode={lightMode}>
				<Div $lightMode={lightMode}></Div>
				<Input register={register} $lightMode={lightMode} />
			</StyledForm>
			{errors.value && <ErrorMessage>{errors.value.message}</ErrorMessage>}
		</FormContainer>
	);
}

export default Form;
