export default {
	namespaced: true,
	state: {
		URLShoppingcarts: 'http://localhost:3000/shoppingcarts/',
		URLProgramas: 'http://localhost:3000/programs/',
		contador: 0,
		botonDeshabilitado: 'pointer-events: none;',

		programasSeleccionados: [],
		programasB: [],
		subTotal: 0.0,
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
	computed: {
		// subTotal: function() {
		// 	let sum = 0;
		// 	//return this.items.reduce((sum, item) => sum + item.price, 0);
		// 	return sum;
		// },
	},
	mutations: {
		mutationIncrementar(state) {
			state.contador += 1;
		},
		mutationAgregarPrograma(state, payload) {
			state.programasSeleccionados.push(payload);
			state.subTotal += parseInt(payload.price);
			if (state.contador > 0) {
				state.botonDeshabilitado = '';
			}
		},
		mutationEliminarPrograma(state, payload) {
			//	console.log(state.contactos);
			//	console.log(payload);
			//	state.contactos.push(payload);
			state.programasSeleccionados = state.programasSeleccionados.filter(
				(programa) => programa.id !== payload
			);
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
		accionEliminarPrograma({ commit, state }, programa) {
			alert(`Ha eliminado el curso ${programa.name}`);
			commit('mutationEliminarPrograma', programa.id);
			state.subTotal -= parseInt(programa.price);
			state.contador -= 1;
			if (state.contador <= 0) {
				state.botonDeshabilitado = 'pointer-events: none;';
			}
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
