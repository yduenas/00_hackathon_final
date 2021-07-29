<template>
	<section class="contenedor">
		<div class="grupo">
			<div class="caja-texto">
				<div class="texto-titulo">
					Con respaldo de:
				</div>
				<div class="caja-logos">
					<img src="../assets/movil/logos.jpg" alt="" />
				</div>
				<div class="texto-dinscripcion">
					Conoce nuestros Programas de Especialización
				</div>
			</div>
			<div class="inscripcion-whassap">
				<img
					class="whassap__logo"
					src="../assets/movil/whassap.jpg"
					alt="Icono de Whassap"
				/>
			</div>
			<div class="inscripcion">
				<div class="inscripcion-boton">
					<div>
						<img src="../assets/movil/lapiz.jpg" alt="Lapiz" />
					</div>
					<div>Inscribete</div>
				</div>
			</div>
		</div>
		<div class="grupo-programa">
			<!-- <h3 v-for="(programa, index) in programasA.programasA" :key="index">
				{{ programa.name }} - {{ programa.image }}
			</h3> -->
			<div
				class="programa"
				v-for="(programa, index) in programasA.programasA"
				:key="index"
			>
				<!--src="../assets/movil/movil-1.jpg"-->
				<p class="programa_nombre">{{ programa.name }}</p>
				<img
					class="programa__frontend"
					:src="require(`@/assets/img/${programa.image}`)"
					alt=""
				/>

				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div>
			<!-- <div class="programa">
				<img
					class="programa__frontend"
					src="../assets/movil/movil-1.jpg"
					alt=""
				/>
				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div>
			<div class="programa">
				<img
					class="programa__backend"
					src="../assets/movil/movil-2.jpg"
					alt=""
				/>
				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div>
			<div class="programa">
				<img
					class="programa__aplicmoviles"
					src="../assets/movil/movil-3.jpg"
					alt=""
				/>
				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div>
			<div class="programa">
				<img
					class="programa__diseniousuario"
					src="../assets/movil/movil-4.jpg"
					alt=""
				/>
				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div>
			<div class="programa">
				<img
					class="programa__videojuegos"
					src="../assets/movil/movil-5.jpg"
					alt=""
				/>
				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div>
			<div class="programa">
				<img
					class="programa__marketing"
					src="../assets/movil/movil-6.jpg"
					alt=""
				/>
				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div>
			<div class="programa">
				<img
					class="programa__analitycs"
					src="../assets/movil/movil-7.jpg"
					alt=""
				/>
				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div>
			<div class="programa">
				<img
					class="programa__frontendavanzado"
					src="../assets/movil/movil-8.jpg"
					alt=""
				/>
				<img
					class="carrito"
					src="../assets/movil/agregarCarritoCompras.png"
					alt=""
				/>
			</div> -->
		</div>
	</section>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	data() {},
	computed: {
		...mapState({ programasA: (state) => state.programasA }),
	},
	actions: {},
	methods: {
		...mapMutations({
			getProgramasMutation: 'programasA/getProgramasMutation',
		}),
		...mapActions({
			getProgramasActionA: 'programasA/getProgramasAction',
		}),
	},
	created() {
		this.getProgramasActionA();
		//	this.state.programasA.getProgramasAction();
		// this.$store.dispatch('programasA/loadprogramasA');
		//	this['moduleA/getProgramasAction']();
	},
};
</script>

<style>
.grupo {
	padding: 2.5em 0 0;
	height: 200px;
}
.caja-texto {
	margin: 2em 0;
	padding: 0 1em;
}
.texto-titulo {
	text-align: left;
	font-weight: bold;
	font-size: 12px;
	padding-bottom: 0.5em;
}
.texto-dinscripcion {
	width: 75%;
	font-weight: bold;
	text-align: left;
	line-height: 25px;
	padding: 3em 0 1em 0;
}
.caja-logos {
	padding: 1em 0 2em -1em;
	width: 75%;
}
.inscripcion-whassap {
	position: relative;
	top: -89%;
	text-align: right;
	padding-right: 0.9em;
}
.whassap__logo {
	border-radius: 50%;
}
.inscripcion {
	padding-right: 0.9em;
	display: flex;
	justify-content: flex-end;
	position: relative;
	top: -80%;
}
.inscripcion-boton {
	display: flex;
	justify-content: space-around;
	background: #ff1558;
	border-radius: 50px;
	padding: 1em;
	color: white;
	width: 150px;
	font-weight: bold;
}
.grupo-programa {
	margin-top: 3.1em;
	padding: 0;
	width: 100%;
	box-sizing: border-box;
}
.programa {
	height: 325px;
	padding-top: 1.6em;
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
	width: 350px;
}
.carrito {
	width: 40%;
	position: relative;
	top: -19%;
	left: -23%;
}
.programa_nombre {
	color: white;
}
</style>
