<template>
	<div>
		<div><HeaderBlack /></div>

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
			<h3 v-for="(programa, index) in programasA.programasA" :key="index">
				{{ programa.name }}
			</h3>
			<h3 v-for="(programa, index) in programasA.programasA" :key="index">
				{{ programa.name }}
			</h3>
			<div>
				<img class="phone" src="../assets/img/phone.svg" alt="" />
			</div>
			<div>
				<img class="logo" src="../assets/img/logo_whatsapp.svg" alt="" />
			</div>

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
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import MenuBar from '@/components/MenuBar.vue';
import HeaderBlack from '@/components/HeaderBlack.vue';
export default {
	name: 'Pruebas',
	components: {
		MenuBar,
		HeaderBlack,
	},
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
		...mapState(
			{ programasA: (state) => state.programasA },
			{ beneficiosA: (state) => state.beneficiosA },
			{ comprasA: (state) => state.comprasA },
			{ cuponesA: (state) => state.cuponesA },
			{ interesadosA: (state) => state.interesadosA },
			{ orderdetailA: (state) => state.orderdetailA },
			{ ordersA: (state) => state.ordersA },
			//	{ programasA: (state) => state.programasA }
			{ shoppingcartA: (state) => state.shoppingcartA },
			{ usersA: (state) => state.usersA }
		),
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
		...mapMutations({
			getProgramasMutation: 'programasA/getProgramasMutation',
			getBeneficiosMutation: 'beneficiosA/getBeneficiosMutation',
			getComprassMutation: 'comprassA/getComprassMutation',
			getCuponesMutation: 'cuponesA/getCuponesMutation',
			getInteresadosMutation: 'interesadosA/getInteresadosMutation',
			getOrderDetailsMutation: 'orderdetailsA/getOrderDetailsMutation',
			getProgramasMutation: 'programasA/getProgramasMutation',
			getShoppingCartMutation: 'shoppingcartA/getShoppingCartMutation',
			getUsersMutation: 'usersA/getUsersMutation',
		}),
		...mapActions({
			getProgramasActionA: 'programasA/getProgramasAction',
		}),
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
		this.getProgramasActionA();
		//	this.state.programasA.getProgramasAction();
		// this.$store.dispatch('programasA/loadprogramasA');
		//	this['moduleA/getProgramasAction']();
	},
};
</script>

<style scoped>
.phone {
	position: fixed;
	bottom: 500;
	left: 20;
	right: 10%;
	top: 20%;
	height: 500px;
}
.logo {
	/* position: absolute;
	bottom: 15px;
	right: 15px;*/

	/* position: relative;
	right: 0px;
	top: 23px;
	padding-top: 15px;
	margin-bottom: 0; */
	position: fixed;
	bottom: 0;
	/* left: 0;
	right: 0; */
	bottom: 15px;
	right: 15px;
	height: 50px;
}
</style>
