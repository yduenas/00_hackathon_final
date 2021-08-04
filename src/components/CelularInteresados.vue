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
						placeholder="NOMBRE"
						v-model="interesadosA.interesadoA.nombre"
					/>

					<input
						class="form-control inputs"
						type="text"
						name="celular"
						id="celular"
						placeholder="CELULAR"
						v-model="interesadosA.interesadoA.celular"
					/>

					<input
						class="form-control inputs"
						type="text"
						name="correo_electronico"
						id="correo_electronico"
						placeholder="CORREO"
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
							>PROGRAMA</option
						>
						<option
							class="greenColor"
							v-for="(programa, index) in programasA.programasA"
							:key="index"
							>{{ programa.name }}</option
						>
					</select>
					<!-- <input
						class="form-control inputs"
						type="text"
						name="descuento"
						id="descuento"
						placeholder="descuento"
						v-model="descuento"
						readonly
					/> -->
					<!-- <input
						class="inputcheckbox"
						type="checkbox"
						name="politica"
						id="politica"
					/> -->
					<!-- <img
						for="politica"
						class="check"
						src="../assets/img/check-uncheck.svg"
						alt=""
					/> -->

					<!-- <label class="check" for="politica"></label> -->
					<!-- <label for="politica" class="check politica">
						Acepto las politicas de privacidad</label
					> -->

					<label class="checkbox">
						<input type="checkbox" />
						<span class="span">Acepto las politicas de privacidad</span>
					</label>

					<!-- {{ interesadosA.interesadoA.descuento * 100 + '%' }}
					{{ descuento }} -->
					<input
						class="form-control btn-primary inputs"
						type="button"
						value="Quiero postular"
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
			// alert(selectBox.textContent);
			if (selectBox.value == 'programa') {
				// alert(selectBox.value);
				selectBox.style.opacity = '50%';
			} else {
				// alert(selectBox.value);
				// alert('Debe seleccionar un programa');
				selectBox.style.opacity = '100%';
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
	padding-top: 85px;
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
	right: 5%;
	top: 20%;
	height: 608px;
	width: 370px;
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
	right: 35px;
	height: 75px;
}
.politica {
	font-family: 'Roboto Medium', sans-serif;
	font-size: 12px;
	margin-left: 5px;
}
.postula {
	font-family: 'Poppins Medium', sans-serif;
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 20px;
}
.form-control {
	margin-bottom: 15px;
	height: 50px;
}
.inputcheckbox {
	display: none;
}
.check {
	background-image: url('../assets/img/check-uncheck.svg');
	background-repeat: no-repeat;
	padding-left: 25px;
	padding-top: 3px;
	margin-bottom: 15px;
	height: 25px;
	justify-content: center;
	/* background-position: 95%, 50%; */
}

/* inicio checkbox */
.checkbox {
	display: inline-flex;
	cursor: pointer;
	position: relative;
	vertical-align: middle;
	align-items: center;
	font-family: 'Roboto Medium', sans-serif;
	font-size: 12px;
	margin-bottom: 42px;
}
.span {
	font-family: 'Roboto Medium', sans-serif;
	font-size: 12px;
	padding-bottom: 15px;
}
.checkbox > span {
	color: #34495e;
	padding: 0.5rem 0.25rem;
}

.checkbox > input {
	height: 25px;
	width: 25px;
	-webkit-appearance: none;
	-moz-appearance: none;
	-o-appearance: none;
	appearance: none;
	border: 2px solid black;
	border-radius: 4px;
	outline: none;
	transition-duration: 0.3s;
	background-color: white;
	cursor: pointer;
}

.checkbox > input:checked {
	border: 6px double white;
	border-radius: 5px;
	background-color: #34495e;
}
/* fin checkbox */

/* .form-check-input {
	border: 2px black;
} */
input[type='button'],
input[type='submit'],
input[type='reset'] {
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	font-weight: bold !important ;
	text-align: center;
	align-content: center;
	text-decoration: none;
	color: white;
	background-color: #5640ff;
	margin-bottom: 19.3px;
	height: 50px;
	padding: 15px 0px;
	border-radius: 5px;
}
input[type='text']::placeholder {
	opacity: 100%;
	color: rgb(207, 204, 204);
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
