export default {
	namespaced: true,
	state: {
		URLUsers: 'http://localhost:3000/users/',
		usersA: [],
		userA: {
			id: '',
			username: '',
			email: '',
			contrasena: '',
			terminos: true,
			is_verified: true,
			is_staff: true,
			is_active: true,
		},
	},
	mutations: {
		getUsersMutation(state, payload) {
			//	state.users.push(payload);
			state.usersA = payload;
		},
		crearUserMutation(state, payload) {
			state.userA.push(payload);
		},
	},
	actions: {
		async validarUsuario({ commit, state }) {},
		async getUsersAction({ commit, state }) {
			const data = await fetch(`${state.URLUsers}`); //'http://localhost:3000/users'
			let usersA = await data.json();
			commit('getUsersMutation', usersA);
			console.log(usersA);
			//alert(usersA);
		},
		async crearUserAction({ commit, state }, usuario) {
			//commit('crearContactoMutation', contacto);
			alert(state.URLUsers);
			try {
				const url = state.URLUsers; //'http://localhost:3000/contactos'

				const params = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},

					body: JSON.stringify(usuario),
				};
				const data = await fetch(url, params);
				const nuevoUsuario = await data.json();
				commit('crearUserMutation', nuevoUsuario);
				//  console.log(nuevoContacto);
				//	this.$emit('refrescando', result);
				//	obtenerInfo();
			} catch (err) {
				console.log(err);
			}
		},
	},
	getters: {},
};
