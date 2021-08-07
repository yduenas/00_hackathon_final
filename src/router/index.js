//import { createRouter, createWebHashHistory } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pachacutec from '../views/Pachacutec.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		//	component: Home,
		//name: 'Pachacutec',
		component: Pachacutec,
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
			import(
				/* webpackChunkName: "pachacutec" */ '../views/ProgramaIndividual.vue'
			),
	},

	{
		path: '/carrito',
		name: 'Carrito',
		component: () =>
			import(
				/* webpackChunkName: "pachacutec" */ '../views/CarritoCompras.vue'
			),
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "pachacutec" */ '../views/Login.vue'),
	},
	{
		path: '/pasarelapago',
		name: 'PasarelaPago',
		component: () =>
			import(/* webpackChunkName: "pachacutec" */ '../views/PasarelaPago.vue'),
	},

	{
		path: '/resumencompra',
		name: 'ResumenCompra',
		component: () =>
			import(/* webpackChunkName: "pachacutec" */ '../views/ResumenCompra.vue'),
	},
	{
		path: '/inicio',
		name: 'Inicio',
		component: () =>
			import(/* webpackChunkName: "pruebas" */ '../views/Inicio.vue'),
	},
	{
		path: '/pruebas',
		name: 'Pruebas',
		component: () =>
			import(/* webpackChunkName: "pruebas" */ '../views/Pruebas.vue'),
	},
];

const router = createRouter({
	//history: createWebHashHistory(),
	history: createWebHistory('/'),
	routes,
});

export default router;
