export default {
	namespaced: true,
	state: {
		URLOrderDetail: 'http://localhost:3000/order_detail/',
		orderdetailsA: [],
		orderdetailA: {
			id: '',
			idorder: '',
			idprogram: '',
			quantity: 1,
			price: '',
		},
	},
	mutations: {
		getOrderDetailsMutation(state, payload) {
			//	state.orderdetails.push(payload);
			state.orderdetailsA = payload;
		},
	},
	actions: {
		async getOrderDetailsAction({ commit, state }) {
			const data = await fetch(`${state.URLOrderDetail}`); //'http://localhost:3000/orderdetails'
			let orderdetailsA = await data.json();
			commit('getOrderDetailsMutation', orderdetailsA);
			console.log(orderdetailsA);
		},
	},
	getters: {},
};
