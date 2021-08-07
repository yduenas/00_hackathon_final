<template>
	<section class="contenedor">
		<div class="grupo">
			<div class="formulario-form">
				<div>
					<form action="" autocomplete="off">
						<div class="phone">
							<div>
								<h2 class="formulario-titulo">
									Postula y obtén un 10% de descuento en el programa
								</h2>
							</div>
							<input
								class="form-control"
								type="text"
								name=""
								id=""
								placeholder="NOMBRE"
								autocomplete="off"
								required
								v-model="interesadosA.interesadoA.nombre"
								pattern="[A-Za-z]{4-20}"
							/>
							<input
								class="form-control"
								type="tel"
								name=""
								id=""
								placeholder="CELULAR"
								autocomplete="off"
								required
								pattern="[0-9]{9}"
								v-model="interesadosA.interesadoA.celular"
							/>
							<input
								class="form-control"
								type="email"
								name=""
								id=""
								placeholder="CORREO ELECTRONICO"
								autocomplete="off"
								required
								v-model="interesadosA.interesadoA.correo_electronico"
							/>
							<!-- <input
								class="form-control"
								type="text"
								name=""
								id=""
								placeholder="PROGRAMA"
								autocomplete="off"
								required
								v-model="interesadosA.interesadoA.programa"
							/> -->
							<select
								class="form-control"
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
							<div class="formulario-input">
								<input
									class="checkbox"
									type="checkbox"
									id="cbox"
									value="checkbox"
									autocomplete="off"
									required
								/>
								<div class="politica">
									Acepto las Políticas de privacidad.
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
							<div class="inscripcion-whassap">
								<a href=" https://wa.me/+51994084294" target="_blank">
									<img
										class="whassap__logo"
										src="../assets/img/logo_whatsapp.svg"
										alt="Icono de Whassap"
								/></a>
							</div>
						</div>
					</form>
				</div>
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
body {
	min-height: 100vh;
	background: white;
	margin: 0%;
	padding: 0%;
}
.formulario-titulo {
	padding: 2em 1em 1em;
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	font-family: 'Poppins', sans-serif;
}
.input {
	font-size: 10px;
	border-radius: 2px;
	width: 83%;
}
.formulario-input {
	display: flex;
	align-items: center;
	padding: 0.5em 0;
	font-size: 10px;
	width: 90%;
	margin: 0 auto;
}
.formulario-input:focus {
	background: skyblue;
}
.politica {
	padding-left: 0.7em;
	font-weight: bold;
}
.formulario-button {
	padding-bottom: 1em;
	width: 100%;
	margin-top: 1em;
}
.button {
	color: white;
	border-radius: 2px;
	padding: 0.3em;
	background: #5640ff;
	font-weight: bold;
	width: 90%;
	margin: 0 auto;
	border-radius: 6px;
	border: none;
}
.phone {
	padding: 55px 50px;
	background-image: url('../assets/img/phone.png');
	background-size: 100%;
	background-repeat: no-repeat;
	/* background-color: blue; */
	position: fixed;
	z-index: 10;
	bottom: 500;
	left: 68%;
	top: 10%;
	height: 500px;
	width: 320px;
}
.form-control {
	margin: 1em;
	padding: 1em;
	width: 89%;
	font-size: 12px;
	font-family: 'Roboto Regular';
}
.inscripcion-whassap {
	position: absolute;
	bottom: 0;
	right: -22%;
}

@media (min-width: 767px) {
	.phone {
		left: 53%;
		top: 0%;
	}
	.inscripcion-whassap {
		position: absolute;
		bottom: 0;
		right: -8%;
	}
}
@media (min-width: 1024px) {
	.phone {
		top: 10%;
		left: 58%;
	}
	.inscripcion-whassap {
		position: absolute;
		bottom: 0;
		right: -20%;
	}
}

@media (min-width: 1365px) {
	.phone {
		top: 21%;
		left: 68%;
	}
	.inscripcion-whassap {
		position: absolute;
		bottom: 0;
		right: 10;
	}
}
</style>
