import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/common/Button/Button';
import { v4 as uuid } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';
import MyModal from '../components/UI/modal/MyModal';
import ComForm from '../components/UI/modal/ComForm';
import { deleteComs } from '../asyncActions/customers';

export default function PostDetails() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);
	const posts = useSelector((state) => state.posts.posts);
	const comments = useSelector((state) => state.comments.comments);
	const unique_id = uuid();
	const router = useNavigate();
	const params = useParams();
	const post = posts[params.id];
	const [modal, setModal] = useState(false);
	const [comId, setComId] = useState(0);

	return (
		<div
			className='post'
			key={unique_id}
			style={{
				fontSize: '1rem',
				border: '1px solid green',
				marginTop: '10px',
			}}
		>
			<h1>Author: {users[post.userId - 1].name}</h1>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<Button
				onClick={() => {
					router(`/posts`);
				}}
				buttontext='Back to posts'
			></Button>
			<h2>Comments:</h2>

			{comments.length > 0 ? (
				<div>
					<MyModal visible={modal} setVisible={setModal}>
						<ComForm setVisible={setModal} comId={comId} />
					</MyModal>

					{comments.map((com) => {
						const unique_id = uuid();
						return (
							<div
								className='comment'
								key={unique_id}
								style={{
									fontSize: '1rem',
									border: '1px solid green',
									marginTop: '10px',
									padding: '10px',
								}}
							>
								<h2>{com.name}</h2>
								<p>{com.email}</p>
								<p>{com.body}</p>
								<Button
									onClick={() => {
										setComId(com.id);
										setModal(true);
										dispatch({ type: 'ADD_COM_ID', payload: com.id });
									}}
									buttontext='Edit'
								></Button>
								<Button
									onClick={() => {
										dispatch({ type: 'ADD_COM_ID', payload: com.id });
										dispatch(deleteComs());
									}}
									buttontext='Delete'
								></Button>
							</div>
						);
					})}
				</div>
			) : (
				<div style={{ fontSize: '2rem', color: 'red', marginTop: '20px' }}>
					Comments not downloaded!
				</div>
			)}
			{window.scrollTo(0, 0)}
		</div>
	);
}
