const defaultState = {
	posts: [],
};

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';

export const postsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, posts: [...action.payload] };

		case ADD_POST:
			return { ...state, posts: [action.payload, ...state.posts] };

		default:
			return state;
	}
};
