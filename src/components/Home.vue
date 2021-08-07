<template>
	<section class="container">
		<div class="grupo">
			<div class="caja">
				<div class="caja-img">
					<img class="img-header" src="../assets/img/header.png" alt="" />
				</div>
				<div class="barra-logo">
					<div class="logo-cart-list">
						<img
							class="logo-pachacutec"
							src="../assets/img/pachacutec.svg"
							alt=""
						/>
						<div class="cart-list">
							<!-- <img class="cart" src="../assets/img/cart.svg" alt="" /> -->
							<router-link to="/login" class="navi-rightBadge">
								<img
									class="cart"
									@click="carrito"
									src="../assets/movil/carrito.png"
									alt=""
								/><span id="counter" class="badge">{{
									shoppingcartA.contador
								}}</span>
							</router-link>
							<!-- <img src="../assets/movil/lista.jpg" alt="" /> -->
							<MenuBar />
						</div>
					</div>
				</div>
				<div class="caja-titulo-subtitulo">
					<div class="titulo">!Explota todo tu potencial</div>
					<div class="titulo padding">tecnólogico!</div>
					<div class="subtitulo">
						<div>Con nuestros programas</div>
						<div>de especialización</div>
					</div>
				</div>
				<div class="interesado"><HomeIntersados /></div>
			</div>
			<div class="caja-texto">
				<div class="texto-titulo">
					Con respaldo de:
				</div>
				<div class="logos-acordeon">
					<div class="caja-logos">
						<img class="logos__img" src="../assets/movil/logos.jpg" alt="" />
					</div>
					<div style="acordeon">
						<a href="#conoce">
							<img
								class="acordeon__img"
								src="../assets/movil/Acordeon.jpg"
								alt=""
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import HomeIntersados from '@/components/HomeIntersados.vue';
import MenuBar from '@/components/MenuBar.vue';
export default {
	name: 'Home',
	components: {
		HomeIntersados,
		MenuBar,
	},
	computed: {
		...mapState({ shoppingcartA: (state) => state.shoppingcartA }),
	},
};
</script>

<style scoped>
.badge {
	position: absolute;
	margin-top: 14px;
	right: 80px;
	bottom: 25px;
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
body {
	min-height: 100vh;
	background: white;
	margin: 0%;
	padding: 0%;
}
.container {
	max-width: 1366px;
	margin: 0 auto;
	padding: 0%;
	background: #f2f3f5;
}
.grupo {
	box-sizing: border-box;
	margin-bottom: 0;
}
.interesado,
.acordeon,
.acordeon__img {
	display: none;
}
.caja {
	position: relative;
}
.img-header {
	width: 360px;
	height: 300px;
	object-fit: cover;
}
.barra-logo {
	position: absolute;
	top: 1em;
	width: 90%;
	left: 1em;
}
.logo-cart-list {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.cart-list {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
}
.cart {
	padding-right: 0.5em;
	display: none;
}
.logo-pachacutec {
	width: 50%;
}
.caja-titulo-subtitulo {
	position: absolute;
	bottom: 0%;
	color: white;
	text-align: left;
	padding-left: 1em;
	font-weight: bold;
}
.titulo,
.subtitulo {
	padding-bottom: 1em;
}
.titulo {
	font-size: 26px;
	font-family: 'Poppins', sans-serif;
	padding-bottom: 1em;
	font-weight: bold;
	line-height: 0;
}
.padding {
	padding-bottom: 1.5em;
}
.subtitulo {
	font-size: 16px;
	padding-bottom: 2em;
	font-family: 'Poppins Medium', sans-serif;
	font-weight: bold;
}
.caja-texto {
	text-align: left;
	padding: 2em 0 0 1em;
	min-height: 20vh;
}
.texto-titulo {
	font-family: 'OpenSans-Semibold';
	font-size: 11px;
}
.logos-acordeon {
	display: flex;
	justify-content: flex-start;
	width: 100%;
}
.logos__img {
	width: 80%;
}
.acordeon__img {
	width: 30px;
	margin: 0.5em 0;
	margin-left: 18em;
}
@media (min-width: 279px) {
	.img-header {
		width: 280px;
	}
	.titulo {
		font-size: 18px;
	}
	.subtitulo {
		font-size: 12px;
		padding-bottom: 2em;
		/* font-family: "Poppins-Medium"; */
	}
	.logos-acordeon {
		width: 50%;
	}
	.badge {
		display: none;
	}
}
@media (min-width: 319px) {
	.img-header {
		width: 320px;
	}
	.titulo {
		font-size: 20px;
	}
	.subtitulo {
		font-size: 13px;
		padding-bottom: 2em;
		/* font-family: "Poppins Medium", sans-serif; */
	}
	.caja-texto {
		padding-left: 1em;
	}
}
@media (min-width: 359px) {
	.img-header {
		width: 360px;
	}
	.titulo {
		font-size: 24px;
	}
	.subtitulo {
		font-size: 15px;
		padding-bottom: 2em;
		/* font-family: "Poppins Medium", sans-serif; */
	}
	.caja-texto {
		padding-left: 1em;
	}
}
@media (min-width: 374px) {
	.img-header {
		width: 375px;
	}
	.titulo {
		font-size: 26px;
		font-family: 'Poppins', sans-serif;
	}
	.subtitulo {
		font-size: 16px;
		padding-bottom: 2em;
		font-family: 'Poppins', sans-serif;
	}
	.caja-texto {
		padding-left: 1em;
	}
}
@media (min-width: 410px) {
	.img-header {
		width: 411px;
	}
	.titulo {
		font-size: 28px;
	}
	.subtitulo {
		font-size: 17px;
		padding-bottom: 2em;
	}
	.caja-texto {
		padding-left: 1em;
	}
}
@media (min-width: 413px) {
	.img-header {
		width: 413px;
	}
}
@media (min-width: 539px) {
	.img-header {
		width: 540px;
	}
	.barra-logo {
		width: 93%;
	}
	.caja-texto {
		padding-left: 1em;
	}
}
@media (min-width: 767px) {
	.img-header {
		width: 768px;
	}
	.interesado,
	.cart {
		display: block;
	}
	.caja-texto {
		padding-left: 1.4em;
	}
	.badge {
		display: block;
	}
}
@media (min-width: 1023px) {
	.img-header {
		width: 1024px;
		min-height: 80vh;
	}
	.barra-logo {
		left: 4em;
		top: 2em;
		width: 90%;
	}
	.cart {
		display: table;
		padding-right: 1.5em;
	}
	.logo-pachacutec {
		width: 20%;
	}
	.caja-titulo-subtitulo {
		bottom: 0%;
		padding-left: 4em;
		/* width: 55%; */
	}
	.titulo {
		font-size: 54px;
	}
	.subtitulo {
		font-size: 20px;
		display: flex;
		justify-content: flex-start;
		padding-bottom: 3em;
	}
	.interesado,
	.acordeon,
	.acordeon__img {
		display: block;
		position: absolute;
	}
	.caja-texto {
		padding: 2em 0 0 4em;
	}
}
@media (min-width: 1365px) {
	.img-header {
		width: 1366px;
	}
}
</style>
