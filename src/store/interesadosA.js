export default {
	namespaced: true,
	state: {
		URLInteresados: 'http://localhost:3000/interesados/',
		interesadosA: [],
		interesadoA: {
			id: '',
			nombre: '',
			celular: '',
			correo_electronico: '',
			programa: '',
			descuento: 0.1,
		},
	},
	mutations: {
		getInteresadosMutation(state, payload) {
			//	state.interesados.push(payload);
			state.interesadosA = payload;
		},
	},
	actions: {
		async getInteresadosAction({ commit, state }) {
			const data = await fetch(`${state.URLInteresados}`); //'http://localhost:3000/interesados'
			let interesadosA = await data.json();
			commit('getInteresadosMutation', interesadosA);
			console.log(interesadosA);
		},
	},
	getters: {},
};
