import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MyButton from '../button/MyButton';
import MyInput from '../input/MyInput';

import { editComs } from '../../../asyncActions/customers';

const ComForm = ({ setVisible, comId }) => {
	const dispatch = useDispatch();
	const comments = useSelector((state) => state.comments.comments);
	const [comBody, setComBody] = useState({
		postId: '',
		id: '',
		title: '',
		body: '',
	});

	const editComment = (event) => {
		event.preventDefault();

		dispatch(editComs(comBody));

		setComBody({ userId: '', title: '', body: '' });
		setVisible(false);
	};

	return (
		<form>
			<MyInput
				onChange={(event) =>
					setComBody({ ...comBody, title: event.target.value })
				}
				type='text'
				placeholder='Comment title'
				value={comBody.title}
			/>

			<MyInput
				type='text'
				placeholder='Comment body'
				value={comBody.body}
				onChange={(event) =>
					setComBody({
						...comBody,
						userId: comments[1].postId,
						id: comId,
						body: event.target.value,
					})
				}
			/>

			<MyButton onClick={editComment}>Edit comment</MyButton>
		</form>
	);
};

export default ComForm;
