const defaultState = {
	users: [],
};

export const FETCH_USERS = 'FETCH_USERS';
export const REMOVE_USERS = 'REMOVE_USERS';

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return { ...state, users: [...state.users, ...action.payload] };
		case REMOVE_USERS:
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
			};

		default:
			return state;
	}
};
