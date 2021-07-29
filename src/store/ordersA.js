export default {
	namespaced: true,
	state: {
		URLOrder: 'http://localhost:3000/order_/',
		ordersA: [],
		orderA: {
			id: '',
			price: '',
			iduser: '',
			code: '',
			cupon: '',
		},
	},
	mutations: {
		getOrdersMutation(state, payload) {
			//	state.orders.push(payload);
			state.ordersA = payload;
		},
	},
	actions: {
		async getOrdersAction({ commit, state }) {
			const data = await fetch(`${state.URLOrder}`); //'http://localhost:3000/orders'
			let ordersA = await data.json();
			commit('getOrdersMutation', ordersA);
			console.log(ordersA);
		},
	},
	getters: {},
};
