<template>
	<section class="container" id="conoce">
		<div class="grupo">
			<div class="grupo-titulo">
				<div class="caja-texto">
					<div class="texto-dinscripcion">
						Conoce nuestros Programas de Especialización
					</div>
				</div>
				<div class="inscripcion-whassap">
					<a href=" https://wa.me/+51994084294" target="_blank">
						<img
							class="whassap__logo"
							src="../assets/img/logo_whatsapp.svg"
							alt="Icono de Whassap"
						/>
					</a>
				</div>
				<div class="inscripcion">
					<router-link to="/login">
						<img
							src="../assets/img/boton_inscribete.svg"
							alt="Icono de Inscripcion"
						/>
					</router-link>
					<!-- <div class="inscripcion-boton">
            <div>
              <img src="../assets/movil/lapiz.jpg" alt="Lapiz" />
            </div>
            <div>Inscribete</div>
          </div> -->
				</div>
			</div>
			<!-- <div class="grupo-programa">
        <div
          class="programa"
          v-for="(programa, index) in programasA.programasA"
          :key="index"
        >
          <img
            class="programa__frontend"
            :src="require(`@/assets/img/${programa.image}`)"
            alt=""
          />
          <div class="programa_nombre">{{ programa.name }}</div>
          <div class="carrito">
            <div>
              <img
                class="carrito__img"
                src="../assets/movil/agregarCarritoCompras.png"
                alt=""
              />
            </div>
            <div class="vermas">
              <div>
                <img class="vermas__img" src="../assets/movil/mas.png" alt="" />
              </div>
              <div class="vermas__boton">Ver más</div>
            </div>
          </div>
        </div>
      </div> -->
			<div class="grupo-programa">
				<div
					class="programa"
					v-for="(programa, index) in programasA.programasA"
					:key="index"
				>
					<!-- src="../assets/img/c_desarrollo_frondend.png" -->
					<img
						class="programa__frontend"
						:src="require(`@/assets/img/${programa.image}`)"
						alt=""
					/>
					<div class="programa_nombre">
						{{ programa.name.substring(0, 10) }}
					</div>
					<div class="programa_nombre">
						{{ programa.name.substring(10, 50) }}
					</div>
					<div class="carrito">
						<div>
							<img
								class="carrito__img"
								src="../assets/movil/agregarCarritoCompras.png"
								alt=""
								@click="accionIncrementar(programa.id)"
							/>
						</div>
						<div class="vermas">
							<router-link
								:to="`/pachacutec/${programa.id}`"
								style="text-decoration:none;color:white;"
							>
								<div>
									<img
										class="vermas__img"
										src="../assets/movil/mas.png"
										alt=""
									/>Ver más
								</div>
								<!-- <div class="vermas__boton">Ver más</div> -->
							</router-link>
						</div>
					</div>
				</div>
				<!-- <div class="programa">
					<img
						class="programa__backend"
						src="../assets/img/c_desarrollo_backend.png"
						alt=""
					/>
					<div class="programa_nombre">Desarrollo</div>
					<div class="programa_nombre">Backend-End</div>
					<div class="carrito">
						<div>
							<img
								class="carrito__img"
								src="../assets/movil/agregarCarritoCompras.png"
								alt=""
							/>
						</div>
						<div class="vermas">
							<div>
								<img class="vermas__img" src="../assets/movil/mas.png" alt="" />
							</div>
							<div class="vermas__boton">Ver más</div>
						</div>
					</div>
				</div>
				<div class="programa">
					<img
						class="programa__aplicmoviles"
						src="../assets/img/c_desarrollo_aplicaciones_moviles.png"
						alt=""
					/>
					<div class="programa_nombre">Desarrollo de</div>
					<div class="programa_nombre">Aplicaciones Moviles</div>
					<div class="carrito">
						<div>
							<img
								class="carrito__img"
								src="../assets/movil/agregarCarritoCompras.png"
								alt=""
							/>
						</div>
						<div class="vermas">
							<div>
								<img class="vermas__img" src="../assets/movil/mas.png" alt="" />
							</div>
							<div class="vermas__boton">Ver más</div>
						</div>
					</div>
				</div>
				<div class="programa">
					<img
						class="programa__diseniousuario"
						src="../assets/img/c_diseño_experiencia.png"
						alt=""
					/>
					<div class="programa_nombre">Diseño Experiencia</div>
					<div class="programa_nombre">De Usuario</div>
					<div class="carrito">
						<div>
							<img
								class="carrito__img"
								src="../assets/movil/agregarCarritoCompras.png"
								alt=""
							/>
						</div>
						<div class="vermas">
							<div>
								<img class="vermas__img" src="../assets/movil/mas.png" alt="" />
							</div>
							<div class="vermas__boton">Ver más</div>
						</div>
					</div>
				</div>
				<div class="programa">
					<img
						class="programa__videojuegos"
						src="../assets/img/c_desarrollo_videojuegos.png"
						alt=""
					/>
					<div class="programa_nombre">Desarrollo de</div>
					<div class="programa_nombre">Videojuegos</div>
					<div class="carrito">
						<div>
							<img
								class="carrito__img"
								src="../assets/movil/agregarCarritoCompras.png"
								alt=""
							/>
						</div>
						<div class="vermas">
							<div>
								<img class="vermas__img" src="../assets/movil/mas.png" alt="" />
							</div>
							<div class="vermas__boton">Ver más</div>
						</div>
					</div>
				</div>
				<div class="programa">
					<img
						class="programa__marketing"
						src="../assets/img/c_marketing_digital.png"
						alt=""
					/>
					<div class="programa_nombre">Marketing</div>
					<div class="programa_nombre">Digital</div>
					<div class="carrito">
						<div>
							<img
								class="carrito__img"
								src="../assets/movil/agregarCarritoCompras.png"
								alt=""
							/>
						</div>
						<div class="vermas">
							<div>
								<img class="vermas__img" src="../assets/movil/mas.png" alt="" />
							</div>
							<div class="vermas__boton">Ver más</div>
						</div>
					</div>
				</div>
				<div class="programa">
					<img
						class="programa__analitycs"
						src="../assets/img/c_diseño_experiencia.png"
						alt=""
					/>
					<div class="programa_nombre">Data</div>
					<div class="programa_nombre">Analytics</div>
					<div class="carrito">
						<div>
							<img
								class="carrito__img"
								src="../assets/movil/agregarCarritoCompras.png"
								alt=""
							/>
						</div>
						<div class="vermas">
							<div>
								<img class="vermas__img" src="../assets/movil/mas.png" alt="" />
							</div>
							<div class="vermas__boton">Ver más</div>
						</div>
					</div>
				</div>
				<div class="programa">
					<img
						class="programa__frontendavanzado"
						src="../assets/img/c_desarrollo_frondend.png"
						alt=""
					/>
					<div class="programa_nombre">Desarrollo</div>
					<div class="programa_nombre">Front-End Avanzado</div>
					<div class="carrito">
						<div>
							<img
								class="carrito__img"
								src="../assets/movil/agregarCarritoCompras.png"
								alt=""
							/>
						</div>
						<div class="vermas">
							<div>
								<img class="vermas__img" src="../assets/movil/mas.png" alt="" />
							</div>
							<div class="vermas__boton">Ver más</div>
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</section>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	name: 'Programasss',
	data() {},
	computed: {
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
	actions: {},
	methods: {
		...mapMutations({
			// getProgramasMutation: 'programasA/getProgramasMutation',

			// mutationIncrementar: 'shoppingcartA/mutationIncrementar',
			// mutationAgregarPrograma: 'shoppingcartA/mutationAgregarPrograma',
			// getProgramasMutationB: 'shoppingcartA/getProgramasMutation',
			// //	getProgramasMutation: 'programasA/getProgramasMutation',
			// getBeneficiosMutation: 'beneficiosA/getBeneficiosMutation',
			// getComprassMutation: 'comprassA/getComprassMutation',
			// getCuponesMutation: 'cuponesA/getCuponesMutation',
			// getInteresadosMutation: 'interesadosA/getInteresadosMutation',
			// crearInteresadoMutation: 'interesadosA/crearInteresadoMutation',
			// getOrderDetailsMutation: 'orderdetailsA/getOrderDetailsMutation',
			// getProgramasMutation: 'programasA/getProgramasMutation',
			// getShoppingCartMutation: 'shoppingcartA/getShoppingCartMutation',
			// getUsersMutation: 'usersA/getUsersMutation',

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
			// getProgramasActionA: 'programasA/getProgramasAction',

			// accionAgregarPrograma: 'shoppingcartA/accionAgregarPrograma',
			// accionIncrementar: 'shoppingcartA/accionIncrementar',
			// getProgramasActionB: 'shoppingcartA/getProgramasAction',
			// getProgramasActionA: 'programasA/getProgramasAction',
			// getBeneficiosActionA: 'beneficiosA/getBeneficiosAction',
			// getInteresadosAction: 'interesadosA/getInteresadosAction',
			// crearInteresadoAction: 'interesadosA/crearInteresadoAction',

			accionAgregarPrograma: 'shoppingcartA/accionAgregarPrograma',
			accionIncrementar: 'shoppingcartA/accionIncrementar',
			getProgramasActionB: 'shoppingcartA/getProgramasAction',
			getProgramasActionA: 'programasA/getProgramasAction',
			getBeneficiosActionA: 'beneficiosA/getBeneficiosAction',
			getInteresadosAction: 'interesadosA/getInteresadosAction',
			crearInteresadoAction: 'interesadosA/crearInteresadoAction',
		}),
		procesarInformacion() {
			alert(this.interesado.nombre);
		},

		crearInteresado(interesado) {
			alert(interesado.nombre);
			this.crearInteresadoAction(interesado);
		},
	},
	created() {
		this.getProgramasActionA();
		//this.getProgramasAction();
		// this.getBeneficiosAction();
		// this.getUsersAction();
		// this.getComprasAction();
		// this.getCuponesAction();
		// this.getOrdersAction();
		// this.getOrderDetailsAction();
		//this.getShoppingCartsAction();
		// this.getProgramasActionA();
		// this.getBeneficiosActionA();
		// this.getInteresadosAction();
		this.getProgramasActionB();
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
.grupo-titulo {
	padding-left: 0.5em;
	height: 120px;
}
.texto-dinscripcion {
	font-weight: bold;
	text-align: left;
	line-height: 25px;
	padding: 3em 0 1em 0;
	font-size: 11px;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	width: 80%;
}
.caja-logos {
	padding: 1em 0 2em -1em;
	width: 75%;
}
.inscripcion-whassap {
	position: relative;
	top: -88%;
	text-align: right;
	padding-right: 0.9em;
}
.whassap__logo {
	border-radius: 50%;
	position: fixed;
	left: 200px;
	z-index: 20;
}
.inscripcion {
	padding-right: 0.9em;
	display: flex;
	justify-content: center;
	/* top: 0; */
}
.inscripcion img {
	position: fixed;
	left: 137px;
	z-index: 30;
	top: 505px;
}
.grupo-programa {
	width: 100%;
	box-sizing: border-box;
}
.programa {
	width: 280px;
	height: 260px;
	object-fit: cover;
	margin: 0;
	padding: 0;
}
.programa__frontend,
.programa__backend,
.programa__aplicmoviles,
.programa__diseniousuario,
.programa__videojuegos,
.programa__marketing,
.programa__analitycs,
.programa__frontendavanzado {
	padding: 0.25em 0.5em;
	border-radius: 25px;
	width: 100%;
	height: 200px;
	object-fit: cover;
	width: 280px;
	height: 260px;
}
.programa_nombre {
	color: white;
	position: relative;
	top: -45%;
	left: 3%;
	text-align: left;
	padding-left: 1em;
	font-weight: bold;
	width: 100%;
	font-size: 11px;
	font-family: 'Poppins Medium', sans-serif;
}
.carrito {
	position: relative;
	top: -40%;
	left: -15px;
	display: flex;
	justify-content: flex-start;
	width: 100%;
}
.carrito__img {
	width: 60%;
}
.vermas {
	display: flex;
	justify-content: center;
	color: white;
	width: 100%;
	font-weight: bold;
	font-family: 'Poppins Medium', sans-serif;
	text-align: left;
	font-size: 11px;
}
.vermas__img {
	width: 15px;
}
.vermas__boton {
	padding-left: 1em;
	padding-right: 1em;
}

@media (min-width: 279px) {
	.inscripcion-whassap {
		top: -80%;
	}
	.inscripcion {
		top: -95%;
	}
	.texto-dinscripcion {
		padding-left: 0.5em;
	}
}
@media (min-width: 319px) {
	.inscripcion img {
		left: 160px;
		top: 488px;
	}
	.whassap__logo {
		left: 230px;
		top: 411px;
	}
	.programa {
		width: 320px;
		height: 298px;
		margin: 0 auto;
	}
	.programa__frontend,
	.programa__backend,
	.programa__aplicmoviles,
	.programa__diseniousuario,
	.programa__videojuegos,
	.programa__marketing,
	.programa__analitycs,
	.programa__frontendavanzado {
		/* width: 280px;
    height: 260px; */
		width: 320px;
		height: 298px;
	}
	.texto-dinscripcion {
		padding-left: 1em;
		padding-top: 3.5em;
		width: 60%;
	}
}
@media (min-width: 359px) {
	.inscripcion img {
		left: 210px;
		top: 502px;
	}
	.whassap__logo {
		left: 280px;
		top: 66%;
	}
	.programa {
		width: 344px;
		height: 302px;
		margin: 0 auto;
	}
	.programa__frontend,
	.programa__backend,
	.programa__aplicmoviles,
	.programa__diseniousuario,
	.programa__videojuegos,
	.programa__marketing,
	.programa__analitycs,
	.programa__frontendavanzado {
		width: 344px;
		height: 302px;
	}
	.texto-dinscripcion {
		padding-left: 1em;
		width: 70%;
	}
}
@media (min-width: 374px) {
	.inscripcion img {
		left: 218px;
		top: 507px;
	}
	.whassap__logo {
		left: 292px;
		top: 431px;
	}
	.inscripcion {
		top: -83%;
	}
	.texto-dinscripcion {
		width: 70%;
	}
	.programa {
		width: 344px;
		height: 302px;
		margin: 0 auto;
	}
	.programa__frontend,
	.programa__backend,
	.programa__aplicmoviles,
	.programa__diseniousuario,
	.programa__videojuegos,
	.programa__marketing,
	.programa__analitycs,
	.programa__frontendavanzado {
		width: 344px;
		height: 302px;
	}
	.texto-dinscripcion {
		padding-left: 1em;
		padding-top: 3.5em;
		width: 60%;
	}
}
@media (min-width: 374px) and (min-height: 812px) {
	.inscripcion img {
		left: 218px;
		top: 536px;
	}
	.whassap__logo {
		left: 292px;
		top: 461px;
	}
}
@media (min-width: 410px) {
	.inscripcion img {
		left: 239px;
		top: 522px;
	}
	.whassap__logo {
		left: 305px;
		top: 443px;
	}
	.texto-dinscripcion {
		padding-left: 1em;
		width: 60%;
	}
}
@media (min-width: 410px) and (min-height: 823px) {
	.inscripcion img {
		left: 232px;
		top: 540px;
	}
	.whassap__logo {
		left: 310px;
		top: 460px;
	}
}
@media (min-width: 539px) {
	.inscripcion img {
		left: 302px;
		top: 519px;
	}
	.whassap__logo {
		left: 375px;
		top: 441px;
	}
	.texto-dinscripcion {
		padding-left: 1em;
		padding-top: 3.5em;
		width: 40%;
	}
}
@media (min-width: 767px) {
	.inscripcion-whassap,
	.inscripcion {
		display: none;
	}
	.inscripcion {
		display: none;
	}
	.grupo-programa {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		top: 0;
		width: 100%;
	}
	.programa {
		width: 344px;
		margin: 1em;
		width: 344px;
		height: 302px;
	}
	.programa_nombre {
		top: -50%;
		left: 5%;
		font-size: 14px;
		margin: 0%;
		font-size: 20px;
	}
	.carrito {
		width: 100%;
		align-items: center;
		left: 1em;
		padding: 0;
		text-align: left;
		padding-left: 1.5em;
	}
	.carrito__img {
		width: 60%;
		padding-left: 0;
	}
	.vermas {
		width: 300px;
		justify-content: flex-start;
	}
	.vermas__img {
		width: 15px;
	}
	.logos__img {
		width: 60%;
	}
	.caja-texto {
		height: 100px;
	}
	.vermas__boton {
		padding-left: 0.5em;
	}
	.texto-dinscripcion {
		font-size: 20px;
		font-family: 'Poppins', sans-serif;
		padding-left: 1em;
		padding-top: 3.5em;
		width: 60%;
	}
}
@media (min-width: 1023px) {
	.grupo-programa {
		width: 80%;
		margin-left: 3em;
	}
	.caja-texto {
		margin-left: 3em;
	}
}
</style>
