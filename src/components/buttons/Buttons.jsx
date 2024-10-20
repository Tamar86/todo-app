import styled from 'styled-components';
import Button from './Button';
import { useTodo } from '../../context/TodoContext';

const StyledButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10%;

	button {
		font-weight: 700;
		font-size: 16px;
	}
`;

function Buttons() {
	const { dispatch, btnActive } = useTodo();

	return (
		<StyledButtons>
			<Button
				active={btnActive === 'all'}
				type='all'
				onClick={() => {
					dispatch({
						type: 'filtered/list',
						payload: 'all',
					});
				}}
			>
				All
			</Button>
			<Button
				active={btnActive === 'active'}
				type='active'
				onClick={() => {
					dispatch({
						type: 'filtered/list',
						payload: 'active',
					});
				}}
			>
				Active
			</Button>
			<Button
				active={btnActive === 'completed'}
				type='completed'
				onClick={() => {
					dispatch({
						type: 'filtered/list',
						payload: 'completed',
					});
				}}
			>
				Completed
			</Button>
		</StyledButtons>
	);
}

export default Buttons;
