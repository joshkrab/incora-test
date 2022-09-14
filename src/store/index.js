import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import { userReducer } from './userReduser';
import { postsReducer } from './postsReduser';
import { comReducer } from './comReduser';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	users: userReducer,
	posts: postsReducer,
	comments: comReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
