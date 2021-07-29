export default {
	namespaced: true,
	state: {
		URLShoppingcarts: 'http://localhost:3000/shoppingcarts/',
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
		getShoppingCartsMutation(state, payload) {
			//	state.Shoppingcarts.push(payload);
			state.ShoppingcartsA = payload;
		},
	},
	actions: {
		async getShoppingCartsAction({ commit, state }) {
			const data = await fetch(`${state.URLShoppingcarts}`); //'http://localhost:3000/Shoppingcarts'
			let ShoppingcartsA = await data.json();
			commit('getShoppingCartsMutation', ShoppingcartsA);
			console.log(ShoppingcartsA);
		},
	},
	getters: {},
};
