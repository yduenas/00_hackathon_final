<template>
	<div class="mediopago2">
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item col-4" role="presentation">
				<button
					class="nav-link active"
					id="home-tab"
					data-bs-toggle="tab"
					data-bs-target="#credito"
					href="#credito"
					type="button"
					role="tab"
					aria-controls="home"
					aria-selected="true"
				>
					Tarjeta de Credito
				</button>
			</li>

			<li class="nav-item  col-4" role="presentation">
				<button
					class="nav-link"
					id="profile-tab"
					data-bs-toggle="tab"
					data-bs-target="#credito"
					href="#credito"
					type="button"
					role="tab"
					aria-controls="profile"
					aria-selected="false"
				>
					Tarjeta de Debito
				</button>
			</li>

			<li class="nav-item  col-4" role="presentation">
				<button
					class="nav-link"
					id="profile-tab"
					data-bs-toggle="tab"
					data-bs-target="#efectivo"
					href="#efectivo"
					type="button"
					role="tab"
					aria-controls="profile"
					aria-selected="false"
				>
					Deposito Pago Efectivo
				</button>
			</li>
		</ul>

		<div class="tab-content" id="myTabContent">
			<div
				class="tab-pane fade show active"
				id="credito"
				role="tabpanel"
				aria-labelledby="home-tab"
			>
				<form>
					<div class="row">
						<div class="col-12" style="text-align: left">
							<label><b>Datos Personales</b> </label>
						</div>
					</div>
					<div class="row">
						<div class="col-12  col-md-6 campo">
							<input
								type="text"
								name=""
								id=""
								class="form-control"
								placeholder="Documento de identidad"
							/>
						</div>
						<div class="col-12  col-md-6 campo">
							<input
								type="email"
								name=""
								id=""
								class="form-control"
								placeholder="Correo Electronico"
							/>
						</div>
					</div>

					<div class="row">
						<div class="col-6" style="text-align: left">
							<label><b>Ingresa informacion de tu tarjeta</b> </label>
						</div>
					</div>
					<div class="row">
						<div class="col-12  col-md-6 campo">
							<input
								type="text"
								name="nombre"
								id=""
								class="form-control"
								placeholder="Nombres y Apellidos"
							/>
						</div>
						<div class="col-12  col-md-6 campo" style="text-align:right">
							<input
								type="text"
								name=""
								id=""
								class="form-control numerotarjeta"
								placeholder="0000 0000 0000 0000"
								minlength="16"
								maxlength="16"
							/>
							<small>Ingresa una tarjeta valida</small>
						</div>
					</div>
					<!-- <br /> -->
					<div class="row">
						<div class="col-4 col-md-2">
							<input
								type="text"
								name="mes"
								id=""
								class="form-control"
								placeholder="mes"
								minlength="1"
								maxlength="2"
							/>
						</div>
						<div class="col-4 col-md-2">
							<input
								type="text"
								name="anio"
								id=""
								class="form-control"
								placeholder="año"
								minlength="4"
								maxlength="4"
							/>
						</div>
						<div class="col-4 col-md-2">
							<input
								type="text"
								name="cvv"
								id=""
								class="form-control"
								placeholder="cvc/cvv"
								minlength="3"
								maxlength="3"
							/>
						</div>
						<div class="col-12 col-md-6"></div>
					</div>
					<br />
					<div class="row">
						<div class="col-6" style="text-align: left">
							<label><b>N° Cuotas</b> </label>
						</div>
					</div>

					<!-- <br /> -->

					<div class="radio-toolbar">
						<input type="radio" id="radio1" name="radiocuotas" value="1" />
						<label for="radio1">01</label>

						<input type="radio" id="radio2" name="radiocuotas" value="2" />
						<label for="radio2">02</label>

						<input type="radio" id="radio3" name="radiocuotas" value="3" />
						<label for="radio3">03</label>

						<input type="radio" id="radio4" name="radiocuotas" value="4" />
						<label for="radio4">04</label>

						<input type="radio" id="radio5" name="radiocuotas" value="5" />
						<label for="radio5">05</label>

						<input type="radio" id="radio6" name="radiocuotas" value="6" />
						<label for="radio6">06</label>

						<input type="radio" id="radio12" name="radiocuotas" value="12" />
						<label for="radio12">12</label>

						<input type="radio" id="radio24" name="radiocuotas" value="24" />
						<label for="radio24">24</label>
					</div>
					<br />
					<div class="row">
						<div class="col-4" style="text-align: left">
							<label for="flexSwitchCheckChecked"
								><b>Solicitar Factura</b>
							</label>
						</div>
						<div class="col-6 form-check form-switch">
							<input
								class="form-check-input"
								type="checkbox"
								id="flexSwitchCheckChecked"
								checked
							/>
						</div>
					</div>

					<div class="m-3">
						<!-- <input
							class="form-control btn-continuar"
							type="submit"
							value="Finalizar la compra"
						/> -->
						<router-link
							to="/resumencompra"
							type="submit"
							class="form-control btn-continuar"
							:style="shoppingcartA.botonDeshabilitado"
							>Finalizar la compra
						</router-link>
					</div>
				</form>
			</div>
			<div
				class="tab-pane fade"
				id="debito"
				role="tabpanel"
				aria-labelledby="profile-tab"
			>
				debito
			</div>
			<div
				class="tab-pane fade "
				id="efectivo"
				role="tabpanel"
				aria-labelledby="profile-tab"
				style="text-align:left"
			>
				<img
					class="pagoefectivo"
					src="../assets/img/pago_Efectivo.svg"
					alt=""
				/>
				<p class="poppins">
					<b>
						Pasos a seguir:
					</b>
				</p>
				<p class="roboto">
					Enviaremos un código de pago CIP a tu correo electrónico, con el cual
					podrás pagar de la siguiente manera:
				</p>
				<p class="poppins">
					<b>
						Banca por internet y móvil:
					</b>
				</p>

				<p class="roboto">
					Paga por internet vía transferencia desde el aplicativo móvil o web de
					tu banco de preferencia.
				</p>

				<div>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_bbva.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_bcp.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_caja.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_disashop.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_fullcarga.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_interbank.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_kasnet.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_moneygram.svg"
						alt=""
					/>
				</div>
				<br />
				<p class="poppins">
					<b>
						Agencias y agentes:
					</b>
				</p>
				<p class="roboto">
					Realiza depósitos en efectivo en agencias bancarias, agentes o bodegas
					a nivel nacional.
				</p>
				<div>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_bbva.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_bcp.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_caja.svg"
						alt=""
					/>

					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_interbank.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_kasnet.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_moneygram.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_scotiabank.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_tambo.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_wester_union.svg"
						alt=""
					/>
					<img
						class="col-2 marcabanco"
						src="../assets/img/logo_banbif.svg"
						alt=""
					/>
				</div>
				<br />
				<div class="row">
					<div class="col-3" style="text-align: left">
						<label for="flexSwitchCheckChecked"
							><b>Solicitar Factura</b>
						</label>
					</div>
					<div class="col-3 form-check form-switch">
						<input
							class="form-check-input"
							type="checkbox"
							id="flexSwitchCheckChecked"
							checked
						/>
					</div>

					<div class="col-6">
						<input
							class="form-control btn-continuar"
							type="submit"
							value="Obtener codigo CIP"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	name: 'Mediodepago',
	components: {},
	computed: {
		...mapState({ shoppingcartA: (state) => state.shoppingcartA }),
	},
	data() {
		return {
			pagina: 'Medio de Pago',
		};
	},
};
</script>

<style scoped>
.pagoefectivo {
	width: 30%;
	height: 30%;
}
.marcabanco {
	width: 17%;
	height: 17%;
}
.poppins {
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	font-weight: bold;
	text-align: left;
	margin: 0 auto;
}
.roboto {
	font-family: 'Roboto Regular', sans-serif;
	font-size: 14px;
	/* font-weight: bold; */
	text-align: left;
}
.campo {
	margin: 5px 0;
}
.mediopago2 {
	margin: 0;
}
/* .carrito {
	background-color: white;
	margin-right: 0;
	padding-left: 0px;
} */
/* .pasarela {
	background-color: transparent;
} */
/* .table {
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
} */
/* .img_curso {
	width: 80%;
} */
a {
	color: #5640ff;
	font-weight: bold;
}

form {
	padding-top: 30px;
	padding-left: 50px;
	padding-right: 50px;
	padding: 30px 0 0px 0px;
}
.btn-continuar {
	background-color: #5640ff;
	color: white;
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
/* .cupon {
	font-size: 15px;
} */
.nav-tabs .nav-link {
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	font-weight: bold;
	height: 8vh;
	color: black;
	margin-bottom: -1px;
	background: 0 0;
	border: 1px solid transparent;
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
}
.nav-item .nav-link {
	background-color: rgb(238, 235, 235);
	width: 100%;
	border-left: 5px solid #f8f8fa;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
	color: white;
	background-color: #5640ff;
	border-color: #dee2e6 #dee2e6 #fff;
	width: 100%;
}
h3 {
	text-align: left;
	padding-left: 20px;
}
/* .metodo {
	text-align: left;
	padding-left: 20px;
} */
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
	padding: 12px 12px;
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
	font-size: 30px;
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
	/* width: 17%;
	height: 17%; */
}
.routerdecoration {
	text-decoration: none;
	color: black;
}
.numerotarjeta::placeholder {
	color: red;
}
.numerotarjeta {
	background-image: url('../assets/img/t_american_express.svg');
	background-repeat: no-repeat;
	background-position: 95%, 50%;
	/* background-position-y: center;
	background-position-x: right; */
}
</style>
