<template>
	<div>
		<div><HeaderBlack /></div>

		<div>{{ interesadosA.interesadosA }}</div>
		<!-- <div>{{ programasA }}</div> -->

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
			<div class="phone">
				<!-- <img src="../assets/img/phone.svg" alt="" /> -->
				<form @submit.prevent="procesarInformacion">
					<!-- {{ interesadoA.interesadoA.nombre }}
					{{ $data }} -->

					<input
						class="form-control inputs"
						type="text"
						name="nombre"
						id="nombre"
						placeholder="nombre"
						v-model="interesadosA.interesadoA.nombre"
					/>

					<input
						class="form-control inputs"
						type="text"
						name="celular"
						id="celular"
						placeholder="celular"
						v-model="interesadosA.interesadoA.celular"
					/>

					<input
						class="form-control inputs"
						type="text"
						name="correo_electronico"
						id="correo_electronico"
						placeholder="correo"
						v-model="interesadosA.interesadoA.correo_electronico"
					/>
					<!-- <input
						class="form-control inputs"
						type="text"
						name="programa"
						id="programa"
						placeholder="programa"
						v-model="interesadosA.interesadoA.programa"
					/> -->
					<select
						class="form-control inputs"
						name="programa"
						id="programa"
						v-model="interesadosA.interesadoA.programa"
						><option value="" readonly>..Seleccione el programa</option>
						<option
							v-for="(programa, index) in programasA.programasA"
							:key="index"
							>{{ programa.name }}</option
						>
					</select>
					<input
						class="form-control inputs"
						type="text"
						name="descuento"
						id="descuento"
						placeholder="descuento"
						v-model="descuento"
						readonly
					/>
					{{ interesadosA.interesadoA.descuento * 100 + '%' }}
					{{ descuento }}
					<input
						class="form-control btn-primary inputs"
						type="button"
						value="Enviar Interes"
						@click="crearInteresado(interesadosA.interesadoA)"
					/>

					<div>{{ interesadosA.interesadoA }}</div>
					<!-- <div>{{ $data.interesado }}</div> -->
				</form>
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
		<br />
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
			interesados: [],
			interesado: {
				id: '',
				nombre: '',
				celular: '',
				correo_electronico: '',
				programa: '',
				descuento: 0.1,
			},
			// programasA: [],
		};
	},
	computed: {
		//	...mapState(['contactos', 'ini', 'fin']),

		descuento: function() {
			// `this` apunta a la instancia vm
			return this.interesadosA.interesadoA.descuento * 100 + '%';
			//interesadosA.interesadoA.descuento * 100 + '%'
		},
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
		...mapState({ beneficiosA: (state) => state.beneficiosA }),
		...mapState({ comprasA: (state) => state.comprasA }),
		...mapState({ cuponesA: (state) => state.cuponesA }),
		...mapState({ interesadosA: (state) => state.interesadosA }),
		...mapState({ interesadoA: (state) => state.interesadoA }),
		...mapState({ orderdetailA: (state) => state.orderdetailA }),
		...mapState({ ordersA: (state) => state.ordersA }),
		...mapState({ shoppingcartA: (state) => state.shoppingcartA }),
		...mapState({ usersA: (state) => state.usersA }),

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
			crearInteresadoMutation: 'interesadosA/crearInteresadoMutation',
			getOrderDetailsMutation: 'orderdetailsA/getOrderDetailsMutation',
			getProgramasMutation: 'programasA/getProgramasMutation',
			getShoppingCartMutation: 'shoppingcartA/getShoppingCartMutation',
			getUsersMutation: 'usersA/getUsersMutation',
		}),
		...mapActions({
			getProgramasActionA: 'programasA/getProgramasAction',
			getInteresadosAction: 'interesadosA/getInteresadosAction',
			crearInteresadoAction: 'interesadosA/crearInteresadoAction',
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

		procesarInformacion() {
			alert(this.interesado.nombre);
			// console.log(uuidv4());
			// //console.log(this.tarea);
			// if (this.tarea.nombre.trim() === '') {
			// 	console.log('Campo vacio');
			// 	return;
			// }
			// //gerenar ID
			// this.tarea.id = uuidv4();
			// console.log(this.tarea);
			// //mandar al action
			// this.setTareaAction(this.tarea);

			// this.tarea = {
			// 	id: '',
			// 	nombre: '',
			// 	frameworks: [],
			// 	jobTitle: '',
			// 	pretension: 0,
			// };
		},
		crearInteresado(interesado) {
			alert(interesado.nombre);
			this.crearInteresadoAction(interesado);
			// this.crearContactoAction(contacto);
			// this.contacto = {
			// 	id: '',
			// 	nombre: '',
			// 	visualizaciones: '',
			// 	url: './img/silueta.jpg',
			// 	telefono: '',
			// 	correo: '',
			// 	pais: '',
			// 	about: '',
			// };
		},
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
		this.getInteresadosAction();
		//	this.state.programasA.getProgramasAction();
		// this.$store.dispatch('programasA/loadprogramasA');
		//	this['moduleA/getProgramasAction']();
	},
};
</script>

<style scoped>
.inputs {
	margin-bottom: 10px;
}
.phone {
	padding-top: 100px;
	padding-bottom: 50px;
	padding-left: 70px;
	padding-right: 70px;
	background-image: url('../assets/img/phone.png');
	background-size: 100%;
	background-repeat: no-repeat;
	/* background-color: blue; */
	position: fixed;
	bottom: 500;
	left: 20;
	right: 10%;
	top: 20%;
	height: 500px;
	width: 300px;
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
