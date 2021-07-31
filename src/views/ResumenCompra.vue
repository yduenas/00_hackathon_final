<template>
	<div class="container">
		<HeaderBlack />
		<!-- <header class="header">
			<div class="row">
				<div class="col-8 ladoA">
					<img src="@/assets/img/pachacutec.svg" alt="" />
				</div>
				<div class="col-4 ladoB">
					<i class="bi bi-cart"></i>

					<i class="bi bi-list"></i>
				</div>
			</div>
		</header> -->
		<section class="secction">
			<div class="row">
				<div class="col-xs-12 col-md-6 flecha">
					<router-link to="/pasarelapago" class="routerdecoration">
						<h3><i class="bi bi-arrow-left"></i> Resumen de compras</h3>
					</router-link>
					<ListaCompras />
					<!-- 
					<table class="table borderless">
						<tbody>
							<tr>
								<td width="20%">
									<img
										class="img_curso"
										src="../assets/img/c_desarrollo_frondend.svg"
										alt=""
									/>
								</td>
								<td width="50%">
									<h5><b> Desarrollo Frond End </b></h5>
									<div class="row">
										<div class="col-6">
											<a href="#">Eliminar</a>
										</div>
										<div class="col-6">
											<b class="d-block d-sm-none"> S/.269.00</b>
										</div>
									</div>
								</td>
								<td class="d-none d-sm-block" width="30%">
									<b> S/.269.00</b>
								</td>
							</tr>
						</tbody>
					</table> -->
				</div>
				<div class="col-xs-12 col-md-6">
					<div class="compraexitosa">
						<h2><b> ¡Compra exitosa! </b></h2>
						<h5>
							La boleta o factura solicitada será enviada a tu correo en unos
							momentos.
						</h5>

						<div class="m-3">
							<!-- <input
								class="form-control btn-continuar"
								type="submit"
								value="Volver a mis cursos"
							/> -->
							<router-link
								to="/pachacutec"
								type="submit"
								class="form-control btn-continuar"
								>Volver a mis cursos
							</router-link>
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
	name: 'ResumenCompra',
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
}
.header {
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 100px;
	background-color: black;
	height: 8vh;
	color: white;
}
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
.compraexitosa {
	height: 30vh;
	background-color: white;
	margin-top: 50px;
	margin-right: 15px;
	margin-left: 15px;
	color: black;
	font-size: 30px;
	font-weight: bold;
	padding-top: 50px;
	text-align: left;
	padding-left: 20px;
	padding-right: 20px;
}
form {
	padding-left: 50px;
	padding-right: 50px;
}
.btn-continuar {
	background-color: #5640ff;
	color: white;
	text-align: center;
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
