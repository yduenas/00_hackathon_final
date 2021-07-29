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
		getusersMutation(state, payload) {
			//	state.users.push(payload);
			state.usersA = payload;
		},
	},
	actions: {
		async getUsersAction({ commit, state }) {
			const data = await fetch(`${state.URLUsers}`); //'http://localhost:3000/users'
			let usersA = await data.json();
			commit('getUsersMutation', usersA);
			console.log(usersA);
		},
	},
	getters: {},
};
