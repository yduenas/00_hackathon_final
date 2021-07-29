export default {
	namespaced: true,
	state: {
		URLProgramas: 'http://localhost:3000/programs/',
		programasA: [],
		programaA: {
			id: '',
			name: '',
			description: '',
			price: '',
			duration: '',
			image: '',
		},
	},
	mutations: {
		getProgramasMutation(state, payload) {
			//	state.programas.push(payload);
			state.programasA = payload;
		},
	},
	actions: {
		async getProgramasAction({ commit, state }) {
			const data = await fetch(`${state.URLProgramas}`); //'http://localhost:3000/programas'
			let programasA = await data.json();
			commit('getProgramasMutation', programasA);
			console.log(programasA);
		},
	},
	getters: {},
};
