<template>
	<section class="contenedor">
		<div class="grupo">
			<div class="formulario">
				<div class="formulario-titulo">
					<h2>Postula y obtén un 10% de descuento en el programa</h2>
				</div>
				<div class="formulario-form">
					<form action="">
						<div class="formulario-form-padding">
							<input
								class="input"
								type="text"
								name="nombre"
								placeholder="NOMBRE"
								autocomplete="off"
								required
								v-model="interesadosA.interesadoA.nombre"
								pattern="[A-Za-z]{4-20}"
							/>
						</div>
						<div class="formulario-form-padding">
							<input
								class="input"
								type="tel"
								name="celular"
								placeholder="CELULAR"
								autocomplete="off"
								v-model="interesadosA.interesadoA.celular"
								pattern="[0-9]{9}"
							/>
						</div>
						<div class="formulario-form-padding">
							<input
								class="input"
								type="email"
								name="correo"
								placeholder="CORREO ELECTRÓNICO"
								v-model="interesadosA.interesadoA.correo_electronico"
								autocomplete="off"
							/>
						</div>
						<div class="formulario-form-padding">
							<!-- <input
								class="input"
								type="text"
								name="programa"
								placeholder="PROGRAMA"
								autocomplete="off"
							/> -->
							<select
								class="input"
								name="select"
								v-model="interesadosA.interesadoA.programa"
							>
								<option class="redColor" value="" selected disabled
									>PROGRAMA</option
								>
								<option value="frontend">Programa Front End</option>
								<option value="backend">Programa Back End</option>
								<option value="aplicmoviles"
									>Programa Aplicaciones Moviles</option
								>
								<option value="diseniousuario">Programa Diseño Usuario</option>
								<option value="videojuegos">Programa Video Juegos</option>
								<option value="marketing">Programa Marketing</option>
								<option value="analitycs">Programa Analitycs</option>
								<option value="frontendavanzado"
									>Programa Frontend Avanzado</option
								>
							</select>
						</div>
					</form>
				</div>
			</div>
			<div class="formulario-input">
				<div class="formulario-input-flex">
					<input class="checkbox" type="checkbox" id="cbox" value="checkbox" />
					<div class="condicion">Acepto las Políticas de privacidad.</div>
				</div>
			</div>

			<div class="formulario-button">
				<button
					class="button"
					type="button"
					@click="crearInteresado(interesadosA.interesadoA)"
				>
					Quiero postular
				</button>
			</div>
		</div>
	</section>
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
			//	alert(this.interesado.nombre);
		},

		crearInteresado(interesado) {
			alert(interesado.nombre + ' Ya esta registrado para obtener descuento');
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
.contenedor,
.grupo {
	background: white;
}
body {
	min-height: 100vh;
	background: white;
	margin: 0%;
	padding: 0%;
}
.formulario {
	margin: 3em 0 0 1em;
}
.formulario-titulo {
	text-align: left;
	font-weight: bold;
	padding-bottom: 1em;
	text-align: left;
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
}
.formulario-titulo h2 {
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	width: 70%;
}
.formulario-form-padding {
	padding: 0 1em 1em 0;
}
.formulario-form-padding:focus {
	background: skyblue;
}
.formulario-input {
	text-align: left;
	padding: 1em;
}
.formulario-button {
	padding: 1em;
}
.input {
	padding: 1em;
	border: 1px solid #d3d3d3;
	border-radius: 10px;
	width: 100%;
	font-weight: bold;
	font-family: 'Roboto Regular';
	font-size: 12px;
}
.formulario-input-flex {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-weight: bold;
	font-family: 'Roboto Regular';
	font-size: 12px;
}
.checkbox {
	padding-left: 0.5em;
	width: 30px;
}
.condicion {
	font-weight: bold;
	font-family: 'Roboto Regular';
	font-size: 12px;
}
.button {
	width: 100%;
	color: white;
	border-radius: 10px;
	padding: 1em;
	background: #5640ff;
	font-weight: bold;
	border: none;
}
.condicion {
	font-family: 'Roboto Medium', sans-serif;
	font-size: 12px;
}
@media (min-width: 280px) {
	.formulario-titulo h2 {
		width: 100%;
	}
}
@media (min-width: 320px) {
	.formulario-titulo h2 {
		width: 90%;
	}
}

@media (min-width: 360px) {
	.formulario-titulo h2 {
		width: 90%;
	}
}
@media (min-width: 375px) {
	.formulario-titulo h2 {
		width: 100%;
	}
}
@media (min-width: 767px) {
	.contenedor {
		display: none;
	}
}
</style>
