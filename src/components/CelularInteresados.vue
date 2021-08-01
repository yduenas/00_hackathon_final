<template>
	<div>
		<!-- <div>{{ interesadosA.interesadosA }}</div> -->

		<div>
			<!-- <h1>Estoy en telefono</h1> -->

			<div class="phone">
				<!-- <img src="../assets/img/phone.svg" alt="" /> -->
				<form @submit.prevent="procesarInformacion">
					<!-- {{ interesadoA.interesadoA.nombre }}
					{{ $data }} -->
					<p class="postula">
						Postula y obten un 10% de descuento en el programa
					</p>
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
						@click="select_option()"
						><option class="redColor" value="" selected disabled
							>programa</option
						>
						<option
							class="greenColor"
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
					<input
						class="form-check-input inputs"
						type="checkbox"
						name="politica"
						id="politica"
					/><label for="politica" class="politica">
						Acepto las politicas de privacidad</label
					>
					<!-- {{ interesadosA.interesadoA.descuento * 100 + '%' }}
					{{ descuento }} -->
					<input
						class="form-control btn-primary inputs"
						type="button"
						value="Enviar Interes"
						@click="crearInteresado(interesadosA.interesadoA)"
					/>

					<!-- <div>{{ interesadosA.interesadoA }}</div> -->
					<!-- <div>{{ $data.interesado }}</div> -->
				</form>
			</div>
			<div>
				<img class="whatsapp" src="../assets/img/logo_whatsapp.svg" alt="" />
			</div>
		</div>
		<br />
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
// import MenuBar from '@/components/MenuBar.vue';
// import HeaderBlack from '@/components/HeaderBlack.vue';
export default {
	name: 'CelularInteresdos',
	components: {
		// MenuBar,
		// HeaderBlack,
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
	},
	methods: {
		select_option: function() {
			// alert('hola');
			var selectBox = document.getElementById('programa');
			if ((selectBox.value = 'programa')) {
				selectBox.style.opacity = '100%';
			} else {
				alert('Dese seleccionar un progra');
				selectBox.style.opacity = '50%';
			}
		},
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
		},

		crearInteresado(interesado) {
			alert(interesado.nombre);
			this.crearInteresadoAction(interesado);
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
	},
};
</script>

<style scoped>
.inputs {
	margin-bottom: 10px;
}
.phone {
	padding-top: 60px;
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
	text-align: left;
}
.whatsapp {
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
	bottom: 50px;
	right: 75px;
	height: 75px;
}
.politica {
	font-family: 'Roboto', sans-serif;
	font-size: 9px;
}
.postula {
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	font-weight: bold;
}
input[type='button'],
input[type='submit'],
input[type='reset'] {
	background-color: #5640ff;
	border-radius: 5%;
}
input[type='text']::placeholder {
	opacity: 50%;
}
.greenColor {
	color: #000;
	opacity: 100%;
}
.redColor {
	color: gray;
}
select,
option {
	opacity: 50%;
}
select option:checked {
	background: #ff9500 -webkit-linear-gradient(bottom, #ff9500 0%, #ff9500 100%);
}
/* input[type='select'] option {
	opacity: 50%;
} */
/* 
select,
option:first-child {
	opacity: 50%;
} */
</style>
