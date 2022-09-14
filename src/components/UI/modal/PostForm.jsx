import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import MyButton from '../button/MyButton';
import MyInput from '../input/MyInput';

import { addPost } from '../../../asyncActions/customers';

const PostForm = ({ setVisible }) => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.posts);

	const [post, setPost] = useState({ userId: '', title: '', body: '' });

	const addNewPost = (event) => {
		event.preventDefault();

		const unique_id = uuid();

		const newPost = { ...post, id: unique_id };

		dispatch(addPost(newPost));

		setPost({ userId: '', title: '', body: '' });
		setVisible(false);
	};

	return (
		<form>
			<MyInput
				onChange={(event) => setPost({ ...post, title: event.target.value })}
				type='text'
				placeholder='Post title'
				value={post.title}
			/>

			<MyInput
				type='text'
				placeholder='Discription'
				value={post.body}
				onChange={(event) =>
					setPost({
						...post,
						userId: posts[1].userId,
						body: event.target.value,
					})
				}
			/>

			<MyButton onClick={addNewPost}>Add post</MyButton>
		</form>
	);
};

export default PostForm;
