const defaultState = {
	comments: [],
	currentId: 0,
};

export const FETCH_COMS = 'FETCH_COMS';
export const EDIT_COMS = 'EDIT_COMS';
export const DELETE_COMS = 'DELETE_COMS';
export const ADD_COM_ID = 'ADD_COM_ID';

export const comReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_COMS:
			return { ...state, comments: [...action.payload] };

		case EDIT_COMS:
			return {
				...state,
				comments: state.comments.map((com) => {
					if (com.id === state.currentId) {
						com.name = action.payload.title;
						com.body = action.payload.body;
					}
					return com;
				}),
			};

		case DELETE_COMS:
			return {
				...state,
				comments: state.comments.filter((item) => {
					return item.id !== state.currentId;
				}),
			};

		case ADD_COM_ID:
			return { ...state, currentId: action.payload };

		default:
			return state;
	}
};
