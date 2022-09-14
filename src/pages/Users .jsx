import React from 'react';

import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { userPosts } from '../asyncActions/customers';

export default function Users() {
	const dispatch = useDispatch();
	const router = useNavigate();

	const users = useSelector((state) => state.users.users);

	return (
		<div className='users'>
			<h2>Users:</h2>
			<div className='users-table'>
				{users.length > 0 ? (
					<div>
						{users.map((user) => {
							const unique_id = uuid();

							return (
								<div
									className='user'
									key={unique_id}
									style={{
										fontSize: '1rem',
										border: '1px solid green',
										marginTop: '10px',
										padding: '10px',
									}}
								>
									<div>{user.name}</div>
									<Button
										onClick={() => {
											dispatch(userPosts(user.id));
											router(`/posts`);
										}}
										buttontext='Posts'
									></Button>
								</div>
							);
						})}
					</div>
				) : (
					<div style={{ fontSize: '2rem', color: 'red', marginTop: '20px' }}>
						Users not downloaded!
					</div>
				)}
			</div>
		</div>
	);
}
