export default {
	namespaced: true,
	state: {
		URLCupones: 'http://localhost:3000/cupones/',
		cuponesA: [],
		cuponA: {
			id_cupon: '',
			codigo_cupon: '',
			porcentaje_descuento: 0.0,
			estado: false,
		},
	},
	mutations: {
		getCuponesMutation(state, payload) {
			//	state.cupons.push(payload);
			state.cuponesA = payload;
		},
		getCuponMutation(state, payload) {
			state.cuponA = payload;
		},
	},
	actions: {
		async getCuponesAction({ commit, state }) {
			const data = await fetch(`${state.URLCupones}`); //'http://localhost:3000/cupons'
			let cuponesA = await data.json();
			commit('getCuponesMutation', cuponesA);
			console.log(cuponesA);
			//alert('cupones');
		},

		getCuponAction({ commit }, cupon) {
			commit('getCuponMutation', cupon);
		},
	},
	getters: {},
};
