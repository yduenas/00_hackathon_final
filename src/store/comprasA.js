export default {
	namespaced: true,
	state: {
		URLCompras: 'http://localhost:3000/compras/',
		comprasA: [],
		compraA: {
			id_compra: '',
			id_alumno: '',
			id_programa: '',
			precio: '',
			cupon: '',
		},
	},
	mutations: {
		getComprasMutation(state, payload) {
			//	state.compras.push(payload);
			state.comprasA = payload;
		},
	},
	actions: {
		async getComprasAction({ commit, state }) {
			const data = await fetch(`${state.URLCompras}`); //'http://localhost:3000/compras'
			let comprasA = await data.json();
			commit('getComprasMutation', comprasA);
			console.log(comprasA);
		},
	},
	getters: {},
};
