<template>
	<div class="macro">
		<div class="container">
			<div class="header">
				<!-- NAVI -->
				<div class="nav-home">
					<a to="/"
						><img class="navi-left" src="../assets/img/pachacutec.svg" />
					</a>
					<p style="color:white;">
						<!-- los datos son: {{ shoppingcartA.programasSeleccionados }} -->
						<!-- los datos son: {{ shoppingcartA.programasB }} -->
					</p>
					<div class="navi-right">
						<router-link to="/login" class="navi-rightBadge">
							<img @click="carrito" src="../assets/img/cart.png" />
							<span id="counter" class="badge">{{
								shoppingcartA.contador
							}}</span>
						</router-link>

						<!-- <img
							@click="carrito"
							style="cursor: pointer"
							src="../assets/img/hamburgesa.png"
						/> -->
						<MenuBar />
						<!-- <img
							@click="handleMenu"
							style="cursor: pointer"
							src="./assets/Hamburger.png"
						/> -->
					</div>
				</div>
				<!-- TITLES -->
				<div class="header-titles">
					<h1 class="header-titles-main">
						¡Explota todo tu potencial tecnológico!
					</h1>
					<h3 class="header-titles-second">
						Con nuestros programas de especialización
					</h3>
				</div>
			</div>
			<!-- THIS IS THE START OF THE SECOND PART -->
			<div class="row imagenes">
				<div class="col-xs-12 col-md-4 imagenesImg">
					<p style="respaldo">Con el respaldo de:</p>
					<img class="logo-s1" src="../assets/img/logo_intercorp.svg" />
					<img class="logo-s1" src="../assets/img/logo_idat.svg" />
					<img class="logo-s1" src="../assets/img/logo_zegel.svg" />
				</div>
				<div class="col-4 d-none d-md-block">
					<a href="#conoce">
						<img alt="" src="../assets/img/flechas_abajo.png" />
					</a>
				</div>
				<div class="col-4 d-none d-md-block"></div>
			</div>

			<!-- THIRD SECTION WITH COURSES -->
		</div>
		<div class="container">
			<section class="tarjeta">
				<h5 id="conoce" class="tarjeta-list">
					Conoce Nuestros Programas de Especialización
				</h5>

				<div class="row">
					<div class="col-sm-8 col-xs-12">
						<div class="row">
							<div
								class="col-xs-12 col-md-6 curso"
								v-for="(programa, index) in programasA.programasA"
								:key="index"
							>
								<div class="cardCourse-item">
									<div class="cardCourse-overflow"></div>
									<img
										alt="image"
										class="cardCourse-img"
										:src="require(`@/assets/img/${programa.image}`)"
									/>
									<!-- src="../assets/img/c_desarrollo_backend.png" -->
									<div class="cardCourse-content">
										<p class="cardCourse-contentName">{{ programa.name }}</p>
										<div class="cardCourse-contentActions">
											<div
												class="cardCourse-contentBtn"
												@click="accionIncrementar(programa.id)"
											>
												<img class="layer" src="../assets/img/addmas.png" />
												<span>Comprar</span>
											</div>

											<div class="cardCourse-contentBtn">
												<router-link :to="`/pachacutec/${programa.id}`">
													<img class="layer" src="../assets/img/addmas.png" />
													<span>Ver más</span>
												</router-link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-4 d-none d-sm-block"></div>
				</div>

				<!-- <div class="tarjeta-body">
					<div class="cardCourse">
						<div class="cardCourse-item">
							<div class="cardCourse-overflow"></div>
							<img
								alt="image"
								class="cardCourse-img"
								src="../assets/img/c_desarrollo_backend.png"
							/>

							<div class="cardCourse-content">
								<p class="cardCourse-contentName">Nombre del programa</p>
								<div class="cardCourse-contentActions">
									<div class="cardCourse-contentBtn">
										<img class="layer" src="../assets/img/addmas.png" />
										<span>Comprar</span>
									</div>
									<div class="cardCourse-contentBtn">
										<img class="layer" src="../assets/img/addmas.png" />
										<span>Ver más</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> -->
			</section>
		</div>
		<!-- FOURTH SECTION -->
		<div class="feature">
			<div class="container">
				<div class="feature-wrapper">
					<img class="feature-image" src="../assets/img/persona.png" />
					<div class="feature-content">
						<p class="feature-contentTitle">Sé parte de la comunidad</p>

						<p class="feature-contentText">
							Programas semi-presenciales para el desarrollo de habilidades de
							programación a lo largo de todo el Stack tecnológico.
						</p>

						<p class="feature-contentText">
							Al finalizar sabrás cómo crear una página web y desarrollar la
							lógica detrás del funcionamiento de una aplicación, así como
							formar parte de una gran comunidad de desarrolladores.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- FIFTH PART -->
		<div class="benefits">
			<div class="container">
				<p class="benefits-title">Beneficios</p>

				<div
					class="benefitsCard"
					v-for="(beneficio, index) in beneficiosA.beneficiosA"
					:key="index"
				>
					<!-- v-for="(beneficio, index) in beneficios" :key="index" -->
					<img :src="require(`@/assets/img/${beneficio.url_img}`)" />
					<div class="benefitsCard-content">
						<p class="benefitsCard-contentTitle">{{ beneficio.name }}</p>
						<p class="benefitsCard-contentBody">{{ beneficio.descripcion }}</p>
					</div>
				</div>
			</div>
		</div>
		<!--inicio formulario-->

		<div
			class="phone d-block d-sm-none "
			style="text-align:start; padding: 50px 50px; background-color:white;"
		>
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
					><option class="redColor" value="" selected disabled>PROGRAMA</option>
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

				<label for="chec" class="checkbox">
					<input id="chec" type="checkbox" />
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
		<!--fin formulario-->
		<!-- FOOTER -->
		<div class="footer">
			<div class="container">
				<div class="sponsors-Item2">
					<img
						class="sponsors-ItemImg"
						src="../assets/img/logo_intercorp_white.svg"
					/>
					<img
						class="sponsors-ItemImg"
						src="../assets/img/logo_idat_white.svg"
					/>
					<img
						class="sponsors-ItemImg"
						src="../assets/img/logo_zegel_white.svg"
					/>
				</div>
			</div>
		</div>
		<div class="col-4 d-none d-sm-block"><CelularInteresados /></div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import CelularInteresados from '@/components/CelularInteresados.vue';
import MenuBar from '@/components/MenuBar.vue';
export default {
	name: 'Inicio',
	components: {
		CelularInteresados,
		MenuBar,
	},
	// methods: {
	// 	carrito: function() {
	// 		alert('Diste click en el carrito');
	// 	},
	// },
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
			mutationIncrementar: 'shoppingcartA/mutationIncrementar',
			mutationAgregarPrograma: 'shoppingcartA/mutationAgregarPrograma',
			getProgramasMutationB: 'shoppingcartA/getProgramasMutation',
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
			accionAgregarPrograma: 'shoppingcartA/accionAgregarPrograma',
			accionIncrementar: 'shoppingcartA/accionIncrementar',
			getProgramasActionB: 'shoppingcartA/getProgramasAction',
			getProgramasActionA: 'programasA/getProgramasAction',
			getBeneficiosActionA: 'beneficiosA/getBeneficiosAction',
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
		this.getBeneficiosActionA();
		this.getInteresadosAction();
		this.getProgramasActionB();
	},
};
</script>

<style>
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
.respaldo {
	font-family: 'Open Sans Semi-bold', sans-serif;
	font-size: 11px;
}
.curso {
	margin: 7.5px 0px;
	padding: 0 15px;
}
.imagenes {
	height: 20vh;
	padding: 5vh 0;
}
.imagenesImg {
	text-align: left;
}
.logo-s1 {
	padding: 0px 0px;
	margin-left: 0px;
	margin-right: 30px;
}
.macro {
	height: 80vh;
	position: relative;
	background: url('../assets/img/background_login_inicio.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
.container {
	/* height: 100%; */
	max-width: 1366px;
	margin: 0 auto;
	padding: 0 90px;
}

/*Navi*/

.navi {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 90px;
}

.nav-home {
	z-index: 1;
	display: flex;
	padding-top: 15px;
	position: relative;
	align-items: center;
	background: transparent;
	justify-content: space-between;
}

.navi-left {
	padding-top: 10px;
	height: 100%;
}

.navi-right {
	display: inherit;
	align-items: inherit;
}

.navi-rightBadge {
	position: relative;
}

img {
	padding-left: 25px;
}

.badge {
	position: absolute;
	margin-top: 14px;
	right: -4px;
	bottom: 14px;
	padding-top: 3px;
	font-size: 8px;
	height: 15px;
	width: 15px;
	border-radius: 50%;
	text-align: center;
	font-weight: bold;
	color: white;
	background: #5640ff;
}

/*Titles*/

.header-titles {
	display: flex;
	color: white;
	line-height: 72px;
	height: calc(80vh - 30px);
	flex-direction: column;
	justify-content: center;
	font-family: 'Poppins', sans-serif;
	text-align: right;
}

.header-titles-main {
	width: 712px;
	font-size: 54px;
	font-weight: bold;
	margin-bottom: 40px;
	text-align: left;
}

.header-titles-second {
	width: 712px;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 40px;
	text-align: left;
	/* font-size: 20px;
	font-weight: 500px;
	line-height: 30px; */
}
/* SECOND PART */

.sponsors {
	height: 20vh;
	position: relative;
	margin-bottom: 50px;
}

.sponsor-images {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.sponsors-arrow {
	left: 0px;
	top: 20%;
	width: 100%;
	display: flex;
	position: absolute;
	justify-content: center;
}

/*THIRD PART */

.tarjeta {
	margin-top: 60px;
}

.tarjeta-list {
	font-size: 20px;
	font-weight: 700;
	line-height: 24px;
	padding-bottom: 30px;
	color: black;
	font-family: 'Poppins', sans-serif;
	text-align: left;
}
.tarjeta-body {
	gap: 30px;
	width: 718px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
}
/**/
.cardCourse-item {
	height: 320px;
	overflow: hidden;
	position: relative;
	border-radius: 10px;
}

.cardCourse-overflow {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	background: linear-gradient(transparent, darkblue);
}

.cardCourse-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.cardCourse-content {
	bottom: 0;
	width: 100%;
	padding: 20px;
	position: absolute;
	font-family: 'Poppins', sans-serif;
}

.cardCourse-contentName {
	font-size: 20px;
	font-weight: 600;
	line-height: 30px;
	color: white;
	margin-bottom: 20px;
	width: 50%;
	text-align: left;
}

.cardCourse-contentActions {
	display: flex;
	justify-content: flex-end;
}

.cardCourse-contentBtn {
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	font-weight: bold;
	display: flex;
	cursor: pointer;
	color: white;
	align-items: center;
	text-decoration: none;
}
.cardCourse-contentBtn a {
	text-decoration: none;
}
.cardCourse-contentBtn a:hover {
	color: white;
	text-decoration: none;
	transform: scale(1.15);
}
.cardCourse-contentBtn:hover {
	color: white;
	text-decoration: none;
	transform: scale(1.15);
}

.cardCourse-contentBtn:not(:first-child) {
	margin-left: 20px;
}

a {
	color: inherit;
	display: inherit;
	align-items: center;
}

span {
	font-size: 14px;
	font-weight: 700;
}

/* FOURTH PART */

.feature {
	width: 100%;

	color: #ffffff;
	position: relative;
	margin: 70px 0 139px;
	background: linear-gradient(#3015fd, #5640ff);
	margin-bottom: 0px;
}

.feature-wrapper {
	margin: auto;
	height: 282px;
	max-width: 1366px;
	position: relative;
}

.feature-image {
	z-index: 1 !important;
	left: -14.6rem;
	bottom: -4.6rem;
	position: absolute;
}

.feature-content {
	height: 100%;
	display: flex;
	max-width: 650px;
	margin-left: 143px;
	flex-direction: column;
	justify-content: center;
	text-align: left;
}

.feature-contentTitle {
	font-size: 20px;
	font-weight: 700;
	line-height: 24px;
	margin-bottom: 20px;
	font-family: 'Poppins', sans-serif;
}

.feature_contentText {
	font-size: 14px;
	line-height: 19px;
	font-family: 'Roboto Regular', sans-serif;
}

.feature_contentText:not(:last-child) {
	margin-bottom: 14px;
}
/* FIFTH PART */

.benefits {
	background-color: white;
	padding-bottom: 80px;
	padding-top: 139px;
}

.benefits-title {
	font-size: 20px;
	color: #222222;
	font-weight: 700;
	line-height: 24px;
	margin-bottom: 30px;
	font-family: 'Poppins', sans-serif;
	text-align: left;
}

.benefitsCard {
	display: flex;
	max-width: 718px;
	padding: 30px 40px;
	align-items: center;
	border-radius: 10px;
	box-sizing: border-box;
	background-color: #f2f3f5;
	text-align: left;
}

.benefitsCard:not(:last-child) {
	margin-bottom: 30px;
}

.benefitsCard-content {
	margin-left: 40px;
	color: #000425;
}

.benefitsCard-contentTitle {
	font-size: 16px;
	font-weight: 600;
	line-height: 25px;
	margin-bottom: 20px;
	font-family: 'Poppins', sans-serif;
}

.benefitsCard-contentBody {
	font-size: 14px;
	line-height: 19px;
	font-family: 'Roboto', sans-serif;
}

/*FOOTER*/
.footer {
	width: 100%;
	height: 102px;
	background-color: #000d29;
	font-family: 'Open Sans', sans-serif;
	padding-top: 30px;
}

@media only screen and (max-width: 1366px) {
	.header-titles-main {
		width: 712px;
	}

	.header-titles-second {
		width: 712px;
	}
}
@media only screen and (max-width: 1200px) {
	.header-titles-main {
		width: 612px;
	}

	.header-titles-second {
		width: 612px;
	}
}
@media only screen and (max-width: 1024px) {
	.header-titles-main {
		width: 612px;
	}

	.header-titles-second {
		width: 612px;
	}
}
@media only screen and (max-width: 920px) {
	.header-titles-main {
		width: 412px;
	}

	.header-titles-second {
		width: 412px;
	}
}
@media only screen and (max-width: 920px) {
	.header-titles-main {
		width: 312px;
	}

	.header-titles-second {
		width: 312px;
	}
}
@media only screen and (max-width: 800px) {
	.header-titles-main {
		width: 312px;
		font-size: 40px;
	}

	.header-titles-second {
		width: 312px;
	}
}
@media only screen and (max-width: 768px) {
	.phone {
		padding-left: 0;
	}
}
@media only screen and (max-width: 570px) {
	.container {
		padding: 0px 0px;
	}
	.header-titles-main {
		width: 100%;
		font-size: 26px;
		padding-left: 10px;
		padding-right: 22px;
	}

	.header-titles-second {
		width: 100%;
		padding-left: 16px;
		padding-right: 22px;
	}
}
@media only screen and (max-width: 425px) {
	.container {
		padding: 0px 0px;
	}
}
@media only screen and (max-width: 375px) {
	.feature-image {
		z-index: 1 !important;
		left: -0rem;
		top: -9rem;
		bottom: -0rem;
		position: absolute;
	}

	.feature-content {
		height: 100%;
		display: flex;
		max-width: 650px;

		margin-left: 20px;
		margin-right: 20px;
		flex-direction: column;
		justify-content: center;
		text-align: left;
	}
	.feature-wrapper {
		padding-top: 300px;
		height: 650px;
	}
	.benefits {
		padding-top: 40px;
		padding: 40px 10px;
	}
	.benefitsCard-contentBody {
		display: none;
	}
}
@media only screen and (max-width: 320px) {
}
</style>
