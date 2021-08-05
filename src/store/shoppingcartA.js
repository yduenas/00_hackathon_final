export default {
	namespaced: true,
	state: {
		URLShoppingcarts: 'http://localhost:3000/shoppingcarts/',
		URLProgramas: 'http://localhost:3000/programs/',
		contador: 0,
		programasSeleccionados: [],
		programasB: [],
		ShoppingcartsA: [],
		ShoppingcartA: {
			id_user: '',
			cupon: '',
			programas: [
				{
					id_programs: 1,
					price: 0,
				},
				{
					id_programs: 2,
					price: 0,
				},
				{
					id_programs: 3,
					price: 0,
				},
			],
			precio_total: 0,
		},
	},
	mutations: {
		mutationIncrementar(state) {
			state.contador += 1;
		},
		mutationAgregarPrograma(state, payload) {
			state.programasSeleccionados.push(payload);
		},
		getShoppingCartsMutation(state, payload) {
			//	state.Shoppingcarts.push(payload);
			state.ShoppingcartsA = payload;
		},
		getProgramasMutation(state, payload) {
			//	state.programas.push(payload);
			state.programasB = payload;
		},
	},
	actions: {
		accionIncrementar({ commit, state }, programa) {
			//	commit('mutationIncrementar');
			//	alert(`estoy accionIncrementar desde shoppingCart - ${programa}`);
			const programaSeleccionado = state.programasB.find(
				(programaB) => programaB.id === programa
			);
			// state.programasSeleccionados = state.programasB.find(
			// 	(programaB) => programaB.id === parseInt(programa)
			// );

			//	alert(programaSeleccionado.name);
			commit('mutationAgregarPrograma', programaSeleccionado);
			//	alert(state.programasSeleccionados.length);
			state.contador = state.programasSeleccionados.length;
			//alert();
			//	const programa =
		},
		accionAgregarPrograma({ commit }, programa) {
			commit('mutationAgregarPrograma', programa);
			//	console.log(tarea);
		},
		async getProgramasAction({ commit, state }) {
			//	alert('estoy aqui');
			const data = await fetch(`${state.URLProgramas}`); //'http://localhost:3000/programas'
			let programasB = await data.json();
			commit('getProgramasMutation', programasB);
			console.log(programasB);
		},
		async getShoppingCartsAction({ commit, state }) {
			const data = await fetch(`${state.URLShoppingcarts}`); //'http://localhost:3000/Shoppingcarts'
			let ShoppingcartsA = await data.json();
			commit('getShoppingCartsMutation', ShoppingcartsA);
			console.log(ShoppingcartsA);
		},
	},
	// created() {
	// 	this.getProgramasAction();
	// },
	getters: {},
};
