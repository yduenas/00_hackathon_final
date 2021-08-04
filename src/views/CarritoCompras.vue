<template>
	<div class="container2">
		<HeaderBlack :mensaje="pagina" />

		<section class="secction">
			<div class="row hijosection">
				<div class="col-12 flecha d-none d-sm-block">
					<router-link to="/login" class="routerdecoration">
						<h3 class="poppins20">
							<img
								src="../assets/img/flecha_izquierda.svg"
								alt=""
								style="margin-right:10px"
							/>
							<!-- <i class="bi bi-arrow-left"></i>  -->
							carrito de compras
						</h3>
					</router-link>
				</div>
				<div class="col-xs-12 col-md-7 flecha" style="padding-right:0px;">
					<ListaCompras />
				</div>
				<div class="col-xs-12 col-md-5">
					<div class="subtotal">
						<div class="row">
							<div class="col-6 poppins20" style="text-align:left">
								<p>Subtotal</p>
							</div>
							<div class="col-6 poppins20" style="text-align:right">
								<p>S/. 600.00</p>
							</div>
							<div class="col-12">
								<form>
									<div class="col-12">
										<!-- <i class="bi bi-forward-fill"></i> -->
										<input
											type="text"
											name="cupon"
											id="cupon"
											class="form-control cupon"
											placeholder="agregar un codigo de descuento"
										/>
									</div>
									<div class="col-12 mt-3">
										<!-- <input
									class="form-control btn-continuar"
									type="submit"
									value="Continuar"
								/> -->
										<router-link
											to="/pasarelapago"
											type="submit"
											class="form-control btn-continuar"
											>Continuar
										</router-link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import HeaderBlack from '@/components/HeaderBlack.vue';
import ListaCompras from '@/components/ListaCompras.vue';

export default {
	name: 'CarritoCompras',
	components: {
		HeaderBlack,
		ListaCompras,
	},
	data() {
		return {
			pagina: 'Carrito de compras',
		};
	},
};
</script>

<style scoped>
.poppins20 {
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	font-weight: bold;
}
.container {
	background-color: #f8f8fa;
	color: black;
	height: 100vh;
	width: auto;
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
.secction {
	height: 92vh;
	padding: 36px 85px;
}
.ladoA {
	text-align: start;
}
.ladoB {
	text-align: end;
}
i {
	margin-left: 20px;
	font-size: 30px;
}

.flecha {
	text-align: left;
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
.subtotal {
	height: 30vh;
	background-color: white;
	color: #5640ff;

	font-size: 30px;
	font-weight: bold;
	padding: 50px 50px;
}

form {
	padding-left: 0px;
	padding-right: 0px;
}
.btn-continuar {
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
	border-radius: 15px;
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
	font-family: 'Roboto Regular', sans-serif;

	font-size: 12px;
	height: 50px;
	background-image: url('../assets/img/enter.png');
	background-repeat: no-repeat;
	background-position: 95%, 50%;

	padding: 0 0;
}
.cupon::placeholder {
	padding-left: 20px;
}
.routerdecoration {
	text-decoration: none;
	color: black;
}

@media only screen and (max-width: 400px) {
	.hijosection {
		width: 325px;
	}
}
@media only screen and (max-width: 600px) {
	.subtotal {
		height: 50vh;
		margin-right: 0vh;
		margin-top: 0px;
		margin-left: 0vh;
	}
	.secction {
		height: 92vh;
		padding: 36px 0px;
	}
}
@media only screen and (max-width: 1100px) {
	.subtotal {
		height: 50vh;
		margin-right: 0px;
		margin-top: 0px;
		margin-left: 0vh;
		height: 30vh;
	}
}
</style>
