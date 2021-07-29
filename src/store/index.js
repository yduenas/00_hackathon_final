import { createStore } from 'vuex';

//import programasA from './programasA';
import beneficiosA from './beneficiosA';
import comprasA from './comprasA';
import cuponesA from './cuponesA';
import interesadosA from './interesadosA';
import orderdetailA from './orderdetailA';
import ordersA from './ordersA';
import programasA from './programasA';
import shoppingcartA from './shoppingcartA';
import usersA from './usersA';

const URL = 'http://localhost:3000/programs/';

const moduleA = {
	namespaced: true,
	state: {
		programasA: ['Programa 1', 'Programa 2', 'Programa 3'],
	},
	mutations: {},
	actions: {},
	getters: {
		/* Son computed properties dentro del store */
	},
};
const moduleB = {
	namespaced: true,
	state: {},
	mutations: {},
	actions: {},
	getters: {},
};

export default createStore({
	state: {
		URLProgramas: 'http://localhost:3000/programs/',
		URLBeneficios: 'http://localhost:3000/beneficios/',
		URLUsers: 'http://localhost:3000/users/',
		URLCompras: 'http://localhost:3000/compras/',
		URLCupones: 'http://localhost:3000/cupones/',
		URLOrder: 'http://localhost:3000/order/',
		URLOrderDetail: 'http://localhost:3000/order_detail/',
		URLShoppingCart: 'http://localhost:3000/shoppingcart/',

		programas: [],
		programa: {
			id: '',
			name: '',
			description: '',
			price: '',
			duration: '',
			image: '',
		},
		beneficios: [],
		beneficio: {
			id: '',
			username: '',
			email: '',
			contrasena: '',
			terminos: false,
			is_verified: false,
			is_staff: false,
			is_active: false,
		},
		users: [],
		user: {},
		compras: [],
		compra: {},
		cupones: [],
		cupon: {},
		orders: [],
		order: {},
		orderdetails: [],
		orderdetail: {},
		shoppincarts: [],
		shoppincart: {},
		interesados: [],
		interesado: {},
	},
	mutations: {
		getInteresadosMutation(state, payload) {
			//	state.programas.push(payload);
			state.interesados = payload;
		},
		getProgramasMutation(state, payload) {
			//	state.programas.push(payload);
			state.programas = payload;
		},
		getBeneficiosMutation(state, payload) {
			//	state.programas.push(payload);
			state.beneficios = payload;
		},
		getUsersMutation(state, payload) {
			//	state.programas.push(payload);
			state.users = payload;
		},
		getComprasMutation(state, payload) {
			//	state.programas.push(payload);
			state.compras = payload;
		},
		getCuponesMutation(state, payload) {
			//	state.programas.push(payload);
			state.cupones = payload;
		},
		getOrdersMutation(state, payload) {
			//	state.programas.push(payload);
			state.orders = payload;
		},
		getOrderDetailsMutation(state, payload) {
			//	state.programas.push(payload);
			state.orderdetails = payload;
		},
		getShoppingCartsMutation(state, payload) {
			//	state.programas.push(payload);
			state.ShoppinCarts = payload;
		},
	},
	actions: {
		async getInteresadosAction({ commit, state }) {
			const data = await fetch(`${state.URLInteresados}`); //'http://localhost:3000/Interesados'
			let interesados = await data.json();
			commit('getInteresadosMutation', interesados);
			console.log(interesados);
		},
		async getProgramasAction({ commit, state }) {
			const data = await fetch(`${state.URLProgramas}`); //'http://localhost:3000/programas'
			let programas = await data.json();
			commit('getProgramasMutation', programas);
			console.log(programas);
		},
		async getBeneficiosAction({ commit, state }) {
			const data = await fetch(`${state.URLBeneficios}`); //'http://localhost:3000/programas'
			let beneficios = await data.json();
			commit('getBeneficiosMutation', beneficios);
			console.log(beneficios);
		},
		async getUsersAction({ commit, state }) {
			const data = await fetch(`${state.URLUsers}`); //'http://localhost:3000/programas'
			let Users = await data.json();
			commit('getUsersMutation', Users);
			console.log(Users);
		},
		async getComprasAction({ commit, state }) {
			const data = await fetch(`${state.URLCompras}`); //'http://localhost:3000/programas'
			let Compras = await data.json();
			commit('getComprasMutation', Compras);
			console.log(Compras);
		},
		async getCuponesAction({ commit, state }) {
			const data = await fetch(`${state.URLCupones}`); //'http://localhost:3000/programas'
			let Cupones = await data.json();
			commit('getCuponesMutation', Cupones);
			console.log(Cupones);
		},
		async getOrdersAction({ commit, state }) {
			const data = await fetch(`${state.URLOrder}`); //'http://localhost:3000/programas'
			let Order = await data.json();
			commit('getOrdersMutation', Order);
			console.log(Order);
		},
		async getOrderDetailsAction({ commit, state }) {
			const data = await fetch(`${state.URLOrderDetail}`); //'http://localhost:3000/programas'
			let OrderDetails = await data.json();
			commit('getOrderDetailsMutation', OrderDetails);
			console.log(OrderDetails);
		},
		async getShoppingCartsAction({ commit, state }) {
			const data = await fetch(`${state.URLShoppingCart}`); //'http://localhost:3000/programas'
			let ShoppingCart = await data.json();
			commit('getShoppingCartsMutation', ShoppingCart);
			console.log(ShoppingCart);
		},
	},
	getters: {
		/* Son computed properties dentro del store */
	},
	modules: {
		//moduleA,
		//moduleA: moduleA,
		//moduleB: moduleB,
		beneficiosA,
		comprasA,
		cuponesA,
		interesadosA,
		orderdetailA,
		ordersA,
		programasA,
		shoppingcartA,
		usersA,
	},
});
