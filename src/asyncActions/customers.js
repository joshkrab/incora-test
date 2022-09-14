export const userPosts = (id) => {
	return function (dispatch) {
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
			.then((response) => response.json())
			.then((json) => {
				dispatch({ type: 'FETCH_POSTS', payload: json });
			})
			.catch((err) => {
				console.error(err.message);
			});
	};
};

export const addPost = (body) => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				dispatch({ type: 'ADD_POST', payload: json });
			})
			.catch((err) => {
				console.error(err.message);
				alert(err.message);
			});
	};
};

export const fetchComs = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
			.then((response) => response.json())
			.then((json) => {
				dispatch({ type: 'FETCH_COMS', payload: json });
			})
			.catch((err) => {
				console.error(err.message);
				alert(err.message);
			});
	};
};

export const editComs = (body) => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				//console.log(json);
				dispatch({ type: 'EDIT_COMS', payload: json });
			})
			.catch((err) => {
				console.error(err.message);
				alert(err.message);
			});
	};
};

export const deleteComs = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'DELETE',
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				dispatch({ type: 'DELETE_COMS', payload: json });
			})
			.catch((err) => {
				console.error(err.message);
				alert(err.message);
			});
	};
};
