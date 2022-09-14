import Posts from '../pages/Posts';
import Users from '../pages/Users ';
import PostsDetails from '../pages/PostDetails';

export const publicRoutes = [
	{
		path: '/',
		component: Users,
		exact: true,
	},
	{
		path: '/posts',
		component: Posts,
		exact: true,
	},
	{
		path: '/posts/:id',
		component: PostsDetails,
		exact: true,
	},
	{
		path: '*',
		component: Users,
		exact: true,
	},
];
