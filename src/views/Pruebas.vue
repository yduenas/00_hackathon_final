<template>
	<div>
		<h1>Estoy en Pruebas</h1>
		<h2>{{ apellido }}</h2>

		<h3 v-for="(programa, index) in programas" :key="index">
			{{ programa.name }}
		</h3>
		<h3 v-for="(beneficio, index) in beneficios" :key="index">
			{{ beneficio.url_img }}
			<img :src="require(`@/assets/img/${beneficio.url_img}`)" alt="" />
		</h3>

		<h3 v-for="(programa, index) in programasA.programasA" :key="index">
			{{ programa.name }}
		</h3>
		<!-- <h3 v-for="(user, index) in users" :key="index">
			{{ user.name }}
		</h3>
		<h3 v-for="(compra, index) in compras" :key="index">
			{{ compra.name }}
		</h3>
		<h3 v-for="(cupon, index) in cupones" :key="index">
			{{ cupon.name }}
		</h3>
		<h3 v-for="(order, index) in orders" :key="index">
			{{ order.name }}
		</h3>
		<h3 v-for="(orderdetail, index) in orderdetails" :key="index">
			{{ orderdetail.name }}
		</h3>
		<h3 v-for="(shoppingcart, index) in shoppingcarts" :key="index">
			{{ shoppingcart.name }}
		</h3> -->
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	data() {
		return {
			apellido: 'Duenas',
			buscador: '',
			//	programasA: ['Programa 1', 'Programa 2', 'Programa 3'],

			contacto: {
				name: '',
				url: '',
				imagen: '',
			},
			//	programasA: [],
		};
	},
	computed: {
		//	...mapState(['contactos', 'ini', 'fin']),
		...mapState(
			[
				'programas',
				'beneficios',
				'users',
				'compras',
				'cupones',
				'orders',
				'orders',
				'orderdetails',
				'shoppingcarts',
				//	'programaA/programaA',
			]
			//	{ programasA: (state) => state.moduloA.programas }
		),
		...mapState({ programasA: (state) => state.programasA }),
		// ...mapState({
		// 	//	programasA: (state) => state.programasA.programasA,
		// 	programasA(state) {
		// 		return state.programasA.programasA;
		// 	},
		// }),
	},
	methods: {
		//...mapMutations(['moduloA/getProgramasMutation']),
		//	...mapActions(['moduloA/getProgramasAction']},
		...mapActions([
			//	'moduloA/getProgramasAction',
			'getProgramasAction',
			'getBeneficiosAction',
			'getUsersAction',
			'getComprasAction',
			'getCuponesAction',
			'getOrdersAction',
			'getOrderDetailsAction',
			'getShoppingCartsAction',
			// 'deleteContactoAction',
			// 'actualizarContactoAction',
			// 'nextContactoAction',
			// 'prevContactoAction',
		]),
	},
	created() {
		this.getProgramasAction();
		this.getBeneficiosAction();
		this.getUsersAction();
		this.getComprasAction();
		this.getCuponesAction();
		this.getOrdersAction();
		this.getOrderDetailsAction();
		this.getShoppingCartsAction();
		//	this.programasA.getProgramasAction();
		//	this.state.programasA.getProgramasAction();
		// this.$store.dispatch('programasA/loadprogramasA');
		//	this['moduleA/getProgramasAction']();
	},
};
</script>

<style></style>
