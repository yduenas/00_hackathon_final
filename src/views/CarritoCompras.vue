<template>
	<div class="container">
		<HeaderBlack />

		<section class="secction">
			<div class="row">
				<div class="col-xs-12 col-md-6 flecha">
					<router-link to="/login" class="routerdecoration">
						<h3><i class="bi bi-arrow-left"></i> carrito de compras</h3>
					</router-link>
					<ListaCompras />
				</div>
				<div class="col-xs-12 col-md-6">
					<div class="subtotal">
						<p>Subtotal S/. 600.00</p>

						<form>
							<div class="m-3 inner-addon right-addon">
								<i class="bi bi-forward-fill"></i>
								<input
									type="text"
									name="cupon"
									id="cupon"
									class="form-control cupon"
									placeholder="agregar un codigo de descuento"
								/>
							</div>
							<div class="m-3">
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
};
</script>

<style scoped>
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
.secction {
	padding-top: 20px;
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
	margin-top: 50px;
	margin-right: 15vh;
	margin-left: 50px;
	color: #5640ff;
	font-size: 30px;
	font-weight: bold;
	padding-top: 50px;
}
form {
	padding-left: 50px;
	padding-right: 50px;
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
	font-size: 10px;
}

@media only screen and (max-width: 600px) {
	.subtotal {
		height: 50vh;
		margin-right: 0vh;
		margin-top: 50px;
		margin-left: 0vh;
	}
}
@media only screen and (max-width: 1100px) {
	.subtotal {
		height: 50vh;
		margin-right: 5vh;
		margin-top: 50px;
		margin-left: 0vh;
		height: 30vh;
	}
}
.routerdecoration {
	text-decoration: none;
	color: black;
}
</style>
