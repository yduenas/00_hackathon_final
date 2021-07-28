//import { createRouter, createWebHashHistory } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/pachacutec',
		name: 'Pachacutec',
		component: () =>
			import(/* webpackChunkName: "pachacutec" */ '../views/Pachacutec.vue'),
	},
	{
		path: '/pachacutec/:id',
		name: 'PachacutecId',
		component: () =>
			import(/* webpackChunkName: "pachacutec" */ '../views/Pachacutec.vue'),
	},
];

const router = createRouter({
	//history: createWebHashHistory(),
	history: createWebHistory('/'),
	routes,
});

export default router;
