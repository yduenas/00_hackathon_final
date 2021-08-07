<template>
	<div class="container2">
		<HeaderBlack :mensaje="pagina" />

		<section class="secctions">
			<div class="row mediopago">
				<div class="col-xs-12 col-lg-7 pasarela ">
					<!-- d-none d-sm-block -->
					<router-link to="/carrito" class="routerdecoration">
						<h3 class="poppins20">
							<img
								src="../assets/img/flecha_izquierda.svg"
								alt=""
								style="margin-right:10px"
							/>pasarela de pagos
						</h3>
					</router-link>

					<p class="metodo"><b> selecciona tu metodo de pago </b></p>
					<!-- Tabs navs d-none d-sm-block-->
					<MedioPago />

					<!-- Tabs content -->
				</div>
				<div class="col-xs-12 col-lg-4 carrito">
					<ListaCompras />

					<form>
						<div class="m-3 inner-addon right-addon">
							<!-- <i class="bi bi-forward-fill"></i> -->
							<input
								type="text"
								name="cupon"
								id="cupon"
								class="form-control cupon"
								placeholder="agregar un codigo de descuento"
							/>
						</div>
						<br />
						<hr />
						<div class="row subtotal">
							<div class="col-6" style="text-align:left">
								<p class="subtotal">
									Precio Final
								</p>
							</div>
							<div class="col-6" style="text-align:right">
								<p class="subtotal">
									S/
									{{ shoppingcartA.subTotal }}.00
								</p>
							</div>
						</div>
						<div class="row">
							<div
								v-if="cuponesA.cuponA.estado"
								class="col-6 poppins20"
								style="text-align:left; font-size:12px;;color: #5640ff;"
							>
								<p>Cupon Descuento</p>
							</div>
							<div
								v-if="cuponesA.cuponA.estado"
								class="col-6 poppins20"
								style="text-align:right;color: #5640ff;"
							>
								<p>{{ cuponesA.cuponA.porcentaje_descuento * 100 }} %</p>
							</div>
						</div>
						<div class="row">
							<div
								v-if="cuponesA.cuponA.estado"
								class="col-6 poppins20"
								style="text-align:left; font-size:12px;;color: #5640ff;"
							>
								<p>Nuevo total</p>
							</div>
							<div
								v-if="cuponesA.cuponA.estado"
								class="col-6 poppins20"
								style="text-align:right;color: #5640ff;"
							>
								<p>
									S/
									{{
										parseFloat(
											shoppingcartA.subTotal -
												shoppingcartA.subTotal *
													cuponesA.cuponA.porcentaje_descuento
										).toFixed(2)
									}}
								</p>
							</div>
						</div>
					</form>
				</div>
				<div class="col-xs-12 col-md-1"></div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import HeaderBlack from '@/components/HeaderBlack.vue';
import ListaCompras from '@/components/ListaCompras.vue';
import MedioPago from '@/components/MedioPago.vue';
export default {
	name: 'PasarelaPagos',
	data() {
		return {
			pagina: 'Pasarela de pagos',
		};
	},
	components: {
		HeaderBlack,
		ListaCompras,
		MedioPago,
	},
	computed: {
		...mapState({ shoppingcartA: (state) => state.shoppingcartA }),
		...mapState({ cuponesA: (state) => state.cuponesA }),
	},
};
</script>

<style scoped>
.poppins20 {
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	font-weight: bold;
	/* color: #5640ff; */
}
.container {
	background-color: #f8f8fa;
	color: black;
	height: 100vh;
	padding: 0;
}
/* .header {
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 100px;
	background-color: black;
	height: 8vh;
	color: white;
} */
.secctions {
	height: 92vh;
	padding-top: 20px;
}
.carrito {
	background-color: white;
	margin-right: 0 auto;
	padding-left: 50px 50px;
	height: 50%;
	/* height: 100vh; */
}
.pasarela {
	background-color: transparent;
	padding-right: 61px;
}
.table {
	margin-top: 40px;
	margin-left: 40px;
	margin-right: 40px;
	border-bottom-width: 0px;
	padding-right: 40px;
}
.borderless table {
	border-top-style: none;
	border-left-style: none;
	border-right-style: none;
	border-bottom-style: none;
}
.table > :not(caption) > * > * {
	border-bottom-width: 0px;
}
.img_curso {
	width: 80%;
}
a {
	color: #5640ff;
	font-weight: bold;
}

form {
	padding-top: 30px;
	padding-left: 20px;
	padding-right: 20px;
}
.btn-continuar {
	background-color: #5640ff;
	color: white;
}
.inner-addon {
	position: relative;
}
.inner-addon .bi {
	position: absolute;
	padding-right: 10px;
	pointer-events: none;
}

.right-addon .bi {
	right: 0px;
}
.cupon {
	font-size: 15px;
	background-image: url('../assets/img/enter.png');
	background-repeat: no-repeat;
	background-position: 95%, 50%;
}
.cupon::placeholder {
	font-family: 'Roboto Regular', sans-serif;
	font-size: 12px;
	/* font-weight: bold; */
	/* font-style: 'regular'; */
	text-align: left;
}
.nav-tabs .nav-link {
	height: 8vh;
	color: black;
	margin-bottom: -1px;
	background: 0 0;
	border: 1px solid transparent;
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
	color: white;
	background-color: #5640ff;
	border-color: #dee2e6 #dee2e6 #fff;
}
h3 {
	text-align: left;
	padding-left: 20px;
}
.metodo {
	text-align: left;
	padding-left: 20px;
}
small {
	color: red;
	text-align: end;
}
.btn-cuotas {
	color: white;
	background-color: #5640ff;
}
.radio {
	opacity: 0;
}
.radio2 {
	color: white;
	background-color: #5640ff;
	opacity: 0;
}
.btn-secondary {
	color: black;
	background-color: transparent;
	margin-left: 10px;
	margin-right: 10px;
}
.btn-secondary:hover {
	color: white;
	background-color: #5640ff;
	margin-left: 10px;
	margin-right: 10px;
}

.radio-toolbar {
	margin: 10px;
}

.radio-toolbar input[type='radio'] {
	opacity: 0;
	position: fixed;
	width: 0;
}

.radio-toolbar label {
	/* display: inline-block; */
	background-color: transparent;
	padding: 19px 19px;
	font-family: sans-serif, Arial;
	font-size: 16px;
	border: 2px solid #444;
	border-radius: 4px;
	margin-left: 4px;
}

.radio-toolbar label:hover {
	color: white;
	background-color: #5640ff;
}

/* .radio-toolbar input[type='radio']:focus + label {
	border: 2px dashed #444;
} */

.radio-toolbar input[type='radio']:checked + label {
	color: white;
	background-color: #5640ff;
	border-color: #5640ff;
}
.form-check-input:checked {
	background-color: #5640ff;
	border-color: #5640ff;
}
.subtotal {
	color: #5640ff;
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	font-weight: bold;
	padding-top: 20px;
}
i {
	margin-left: 20px;
	font-size: 30px;
}
.bi-forward-fill {
	color: #5640ff;
}
img {
	margin-left: 3px;
	margin-top: 3px;
}
.routerdecoration {
	text-decoration: none;
	color: black;
}
.mediopago {
	margin: 0 auto;
	padding: 0 0 0 90px;
}
@media only screen and (max-width: 991px) {
	.mediopago {
		margin: 0 auto;
		padding: 0 0 0 0px;
	}
}
@media only screen and (max-width: 1366px) {
}
@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 768px) {
}
@media only screen and (max-width: 425px) {
}
@media only screen and (max-width: 375px) {
}
@media only screen and (max-width: 320px) {
}
</style>
