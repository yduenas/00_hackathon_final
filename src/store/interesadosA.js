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
		crearInteresadoMutation(state, payload) {
			state.interesadosA.push(payload);
		},
	},
	actions: {
		async getInteresadosAction({ commit, state }) {
			const data = await fetch(`${state.URLInteresados}`); //'http://localhost:3000/interesados'
			let interesadosA = await data.json();
			commit('getInteresadosMutation', interesadosA);
			console.log(interesadosA);
		},
		async crearInteresadoAction({ commit, state }, contacto) {
			//commit('crearContactoMutation', contacto);
			//	alert(state.URLInteresados);
			try {
				const url = state.URLInteresados; //'http://localhost:3000/contactos'

				const params = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},

					body: JSON.stringify(contacto),
				};
				const data = await fetch(url, params);
				const nuevoInteresado = await data.json();
				commit('crearInteresadoMutation', nuevoInteresado);
				//  console.log(nuevoContacto);
				//	this.$emit('refrescando', result);
				//	obtenerInfo();
				state.interesadoA = '';
			} catch (err) {
				console.log(err);
			}
		},
	},
	getters: {},
};
