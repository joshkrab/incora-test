import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/common/Button/Button';
import MyModal from '../components/UI/modal/MyModal';
import PostForm from '../components/UI/modal/PostForm';

import { fetchComs } from '../asyncActions/customers';

import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function Posts() {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.posts);
	const router = useNavigate();
	const [modal, setModal] = useState(false);

	return (
		<div>
			{' '}
			{posts.length > 0 ? (
				<div>
					<div className='buttons'>
						<Button onClick={() => router(`/`)} buttontext='Back'></Button>

						<Button
							onClick={() => setModal(true)}
							buttontext='Add new'
						></Button>
					</div>

					<MyModal visible={modal} setVisible={setModal}>
						<PostForm setVisible={setModal} />
					</MyModal>

					{posts.map((post, index) => {
						const unique_id = uuid();

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
								<h2>{post.title}</h2>
								<p>{post.body}</p>
								<Button
									onClick={() => {
										dispatch(fetchComs());
										router(`/posts/${index}`);
									}}
									buttontext='Details'
								></Button>
							</div>
						);
					})}
					<Button
						style={{ marginTop: '10px' }}
						onClick={() => router(`/`)}
						buttontext='Back'
					></Button>
				</div>
			) : (
				<div style={{ fontSize: '2rem', color: 'red', marginTop: '20px' }}>
					Posts not downloaded!
					<br />
					<Button onClick={() => router(`/`)} buttontext='Back'></Button>
				</div>
			)}
		</div>
	);
}
