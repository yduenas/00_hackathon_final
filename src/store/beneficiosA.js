export default {
	namespaced: true,
	state: {
		URLBeneficios: 'http://localhost:3000/beneficios/',
		beneficiosA: [],
		beneficioA: {
			id: '',
			username: '',
			email: '',
			contrasena: '',
			terminos: false,
			is_verified: false,
			is_staff: false,
			is_active: false,
		},
	},
	mutations: {
		getBeneficiosMutation(state, payload) {
			//	state.pbeneficios.push(payload);
			state.beneficiosA = payload;
		},
	},
	actions: {
		async getBeneficiosAction({ commit, state }) {
			const data = await fetch(`${state.URLBeneficios}`); //'http://localhost:3000/pbeneficios'
			let beneficiosA = await data.json();
			commit('getBeneficiosMutation', beneficiosA);
			console.log(beneficiosA);
		},
	},
	getters: {},
};
