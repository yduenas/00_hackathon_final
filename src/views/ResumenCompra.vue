<template>
	<div class="container2">
		<HeaderBlack :mensaje="pagina" />
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
				<div class="col-xs-12  flecha d-none d-sm-block">
					<router-link to="/pasarelapago" class="routerdecoration">
						<h3 class="poppins">
							<i class="bi bi-arrow-left"></i> Resumen de compras
						</h3>
					</router-link>
					<!-- <ListaCompras /> -->
				</div>
				<div class="col-xs-12 col-md-7 flecha" style="padding-right:0px;">
					<ListaCompras />
				</div>
				<div class="col-xs-12 col-md-5">
					<div class="compraexitosa">
						<h2 class="poppins"><b> ¡Compra exitosa! </b></h2>
						<h5 class="roboto">
							La boleta o factura solicitada será enviada a tu correo en unos
							momentos.
						</h5>
						<router-link
							to="/pachacutec"
							type="submit"
							class="form-control btn-continuar"
							>Volver a mis cursos
						</router-link>

						<div class="m-3">
							<!-- <input
								class="form-control btn-continuar"
								type="submit"
								value="Volver a mis cursos"
							/> -->
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import HeaderBlack from '@/components/HeaderBlack.vue';
import ListaCompras from '@/components/ListaCompras.vue';
export default {
	name: 'ResumenCompra',
	data() {
		return {
			pagina: 'Resumen de compras',
		};
	},
	components: {
		HeaderBlack,
		ListaCompras,
	},
	computed: {
		...mapState({ shoppingcartA: (state) => state.shoppingcartA }),
	},
};
</script>

<style scoped>
.poppins {
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	font-weight: bold;
	text-align: left;
	/* margin: 0 10px; */
}
.roboto {
	font-family: 'Roboto Regular', sans-serif;
	font-size: 14px;
	/* font-weight: bold; */
	text-align: left;
	margin-bottom: 30px;
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
.secction {
	height: 92vh;
	padding: 20px 90px;
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
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	font-weight: bold !important ;
	background-color: #5640ff;
	color: white;
	text-align: center;
	text-decoration: none;
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
	.secction {
		height: 92vh;
		padding: 36px 0px;
	}

	.compraexitosa {
		margin-top: 0px;
		margin-right: 0px;
		margin-left: 0px;
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
