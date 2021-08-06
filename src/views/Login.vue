<template>
	<div class="container2">
		<div class="row ">
			<div class="col-8 ladoA d-none d-sm-block">
				<!-- <h1>Estoy en Login</h1> -->
				<header class="header">
					<img src="@/assets/img/pachacutec.svg" alt="" />
				</header>
				<section class="section">
					<h2><b> ¡Explota todo tu potencial</b></h2>
					<h2 class="mb20"><b>tecnológico!</b></h2>
					<h3>Con nuestros programas</h3>
					<h3>de especialización</h3>
					<!-- {{ $data.aceptaTerminos }} -->
					<!-- {{ inicioSesion }}
					{{ usersA.usersA }} -->
				</section>
				<footer class="footer2">
					<p>Con respaldo de:</p>
					<img src="@/assets/img/logo_intercorp_white.svg" alt="" />

					<img src="@/assets/img/logo_idat_white.svg" alt="" />

					<img src="@/assets/img/logo_zegel_white.svg" alt="" />
				</footer>
			</div>

			<div class="col-sm-4 col-xs-12 ladoB ">
				<!-- Tabs navs d-none d-sm-block-->

				<ul class="nav nav-tabs" id="myTab" role="tablist">
					<li class="nav-item col-6" role="presentation">
						<a
							class="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#home"
							href="#home"
							type="button"
							role="tab"
							aria-controls="home"
							aria-selected="true"
						>
							Inicio Sesión
						</a>
					</li>

					<li class="nav-item  col-6" role="presentation">
						<button
							class="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							Registrarse
						</button>
					</li>
					<!-- <li class="nav-item  col-6" role="presentation">
						<button
							class="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#contrasena"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							cccc
						</button>
					</li> -->
				</ul>

				<div class="tab-content" id="myTabContent">
					<div
						class="tab-pane fade"
						id="terminos"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<br />
						<h3><b> Terminos y condiciones</b></h3>
						<br />
						<p style="text-align:justify; padding-left:15px;padding-right:15px">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
							illum veritatis nemo explicabo accusamus eaque eum modi optio
							velit sed saepe dolor maxime enim fugiat, ipsum soluta odio.
							Nulla, ipsum.
						</p>
						<p style="text-align:justify; padding-left:15px;padding-right:15px">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
							illum veritatis nemo explicabo accusamus eaque eum modi optio
							velit sed saepe dolor maxime enim fugiat, ipsum soluta odio.
							Nulla, ipsum.
						</p>
						<p style="text-align:justify; padding-left:15px;padding-right:15px">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
							illum veritatis nemo explicabo accusamus eaque eum modi optio
							velit sed saepe dolor maxime enim fugiat, ipsum soluta odio.
							Nulla, ipsum.
						</p>
						<div class="mb-3 nav nav-pills">
							<a
								class="olvido"
								data-bs-toggle="tab"
								data-bs-target="#home"
								href="#home"
							>
								<b> regresar al home </b>
							</a>
						</div>
					</div>
					<div
						class="tab-pane fade"
						id="contrasena"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<p class="roboto12">
							Puedes iniciar sesion con:
						</p>
						<img src="../assets/img/logo_facebook.svg" alt="" />
						<img src="../assets/img/logo_linkedin.svg" alt="" />
						<br /><br /><br /><br />
						<p>Ingrese su correo para el envio de contraseña:</p>
						<div class="mb-3">
							<input
								type="email"
								class="form-control"
								id="correo"
								name="correo"
								placeholder="ingrese correo"
								autocomplete="off"
							/>
							<small style="text-align:left;"
								>Ingrese un correo registrado</small
							>
						</div>
						<div class="mb-3">
							<input
								type="submit"
								class="form-control ingresar"
								value="Enviar Contraseña"
								@click="correo()"
							/>
							<!-- <router-link
								to="/carrito"
								type="submit"
								class="form-control ingresar"
								>Enviar Contraseña
							</router-link> -->
						</div>
						<div class="mb-3 nav nav-pills">
							<a
								class="olvido"
								data-bs-toggle="tab"
								data-bs-target="#home"
								href="#home"
							>
								<b> regresar al home </b>
							</a>
						</div>
					</div>
					<div
						class="tab-pane fade show active"
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<p class="roboto">
							Puedes iniciar sesion con:
						</p>
						<img src="../assets/img/logo_facebook.svg" alt="" />
						<img src="../assets/img/logo_linkedin.svg" alt="" />
						<br /><br /><br /><br />
						<p class="roboto">Tambien puedes iniciar sesion con tu correo:</p>
						<form
							autocomplete="off"
							@submit.prevent="procesarInicioSesion(inicioSesion)"
						>
							<div class="mb-3">
								<input
									type="email"
									class="form-control"
									id="correo"
									name="correo"
									placeholder="Correo electronico"
									autocomplete="off"
									v-model="inicioSesion.email"
									required
								/>
							</div>
							<div class=" passhelp">
								<input
									type="password"
									class="form-control contrasena"
									id="contrasena"
									name="contrasena"
									placeholder="ingrese contraseña"
									autocomplete="off"
									v-model="inicioSesion.contrasena"
									required
								/>
							</div>
							<div id="emailHelp" class="form-text emailHelp">
								ingrese un correo valido.
							</div>
							<div class="mb-3">
								<input
									type="submit"
									class="form-control ingresar"
									value="Ingresar"
								/>
								<!-- <router-link
									to="/carrito"
									type="submit"
									class="form-control ingresar"
									>Ingresar
								</router-link> -->
							</div>
							<div class="olvido">
								<a
									class="olvido"
									data-bs-toggle="tab"
									data-bs-target="#contrasena"
									href="#contrasena"
								>
									¿Olvidaste tu contraseña?
								</a>
							</div>
						</form>
					</div>
					<div
						class="tab-pane fade"
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<p class="roboto">
							Puedes iniciar sesion con:
						</p>
						<img src="../assets/img/logo_facebook.svg" alt="" />
						<img src="../assets/img/logo_linkedin.svg" alt="" />
						<br /><br /><br /><br />
						<p class="roboto">Tambien puedes iniciar sesion con tu correo:</p>
						<form @submit.prevent="procesarRegistro">
							<div class="mb-3">
								<input
									type="text"
									class="form-control"
									id="name"
									name="name"
									placeholder="nombres y apellidos"
									autocomplete="new-text"
									v-model="registro.username"
								/>
							</div>
							<div class="mb-3">
								<input
									type="email"
									class="form-control"
									id="correo"
									name="correo"
									placeholder="Correo electronico"
									v-model="registro.email"
									autocomplete="off"
								/>
							</div>
							<div class="mb-3">
								<input
									type="password"
									class="form-control contrasena"
									id="contrasena"
									name="contrasena"
									placeholder="ingrese contraseña"
									v-model="registro.contrasena"
									autocomplete="off"
								/>
							</div>
							<div class="mb-3">
								<input
									type="password"
									class="form-control contrasena"
									id="contrasena2"
									name="contrasena2"
									placeholder="ingrese nuevamente contraseña"
									v-model="registro.contrasena2"
									autocomplete="off"
								/>
							</div>
							<div class="mb-3 form-check">
								<input
									class="form-check-input"
									type="checkbox"
									id="flexCheckDefault"
									v-on:click="validaAceptaTerminos()"
									v-model="aceptaTerminos"
									value="true"
								/>
								<label
									class="form-check-label nav nav-pills montserrat"
									for="flexCheckDefault"
								>
									Acepto
									<b>
										<a
											class="montserrat"
											style="color:black"
											data-bs-toggle="tab"
											data-bs-target="#terminos"
											href="#terminos"
											>Términos y condiciones</a
										>
									</b>
								</label>

								<!-- <div class="mb-3 nav nav-pills">
									<a
										style="color:black"
										data-bs-toggle="tab"
										data-bs-target="#terminos"
										href="#terminos"
									>
										<b> Terminos y condiciones</b>
									</a>
								</div> -->
							</div>
							<div class="mb-3">
								<input
									type="submit"
									class="form-control ingresar"
									value="Registrarse"
									@click="crearUsuario(registro)"
									:style="botonDeshabilitado"
								/>
							</div>
							<!-- <router-link
								to="/carrito"
								type="submit"
								class="form-control ingresar"
								>Registrarse
							</router-link> -->
						</form>
					</div>
				</div>

				<!-- Tabs content -->
			</div>
		</div>
		<!-- mobile inicio -->
		<div class="row d-block d-sm-none"></div>
		<!--mobile fin -->
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	name: 'Home',

	data() {
		return {
			nombre: 'Ytalo',
			valor: {},
			aceptaTerminos: '',
			botonDeshabilitado: 'pointer-events: none;',
			users: [],
			user: {
				id: '',
				username: '',
				email: '',
				contrasena: '',
				terminos: true,
				is_verified: true,
				is_staff: true,
				is_active: true,
			},
			inicioSesion: {
				email: '',
				contrasena: '',
			},
			registro: {
				id: '',
				username: '',
				email: '',
				contrasena: '',
				contrasena2: '',
				terminos: true,
				is_verified: true,
				is_staff: true,
				is_active: true,
			},
		};
	},
	computed: {
		//	//	...mapState(['contactos', 'ini', 'fin']),
		//	...mapState(['programas']),
		...mapState({ usersA: (state) => state.usersA }),
	},
	components: {
		//	ContactCard,
		//	Modal,
		//	Spinner,
	},
	methods: {
		...mapMutations({
			getUsersMutation: 'usersA/getUsersMutation',
		}),
		...mapActions({
			getUsersAction: 'usersA/getUsersAction',
		}),

		validaAceptaTerminos() {
			alert(this.aceptaTerminos);
			if (this.botonDeshabilitado == 'pointer-events: none;') {
				this.botonDeshabilitado = '';
			} else {
				this.botonDeshabilitado = 'pointer-events: none;';
			}
		},
		refrescar(valor) {
			//console.log('refrescando' + JSON.stringify(valor));
			this.valor = valor;
		},
		correo() {
			alert('Envio de correo');
		},
		procesarRegistro() {
			alert('Procesando Registro');
			//	this.$router.push('home');
			//	window.location.href = '/inicio';
			this.$router.push({ path: 'inicio' });
		},
		procesarInicioSesion(datosLogin) {
			//	alert('Procesando Inicio de Sesion');
			//alert(datosLogin);
			//alert(this.usersA.usersA);
			//alert(datosLogin.email);
			//{ commit, state },
			//	alert(datosLogin.email);
			//alert(datosLogin.contrasena);
			//	alert(usersA.usersA);
			const validarLogueo = this.usersA.usersA.find(
				(usuario) =>
					usuario.email === datosLogin.email &&
					usuario.contrasena === datosLogin.contrasena
			);
			if (validarLogueo != null) {
				//	alert(validarLogueo.email);
				alert('Bienvenido');
				this.$router.push({ path: 'carrito' });
			} else {
				alert('Usuario y/o contraseña invalido');
			}
			console.log(validarLogueo);
			//	this.$router.push('home');
			//	window.location.href = '/inicio';
			//	this.$router.push({ path: 'inicio' });
		},
		...mapMutations({
			crearUserMutation: 'usersA/crearUserMutation',
			getUsersMutation: 'usersA/getUsersMutation',
		}),
		...mapActions({
			getUsersAction: 'usersA/getUsersAction',
			crearUserAction: 'usersA/crearUserAction',
		}),
		crearUsuario(usuario) {
			alert(usuario.username);
			this.crearUserAction(usuario);
		},
		validarIngreso() {
			alert('estoy validando el ingreso');
		},
	},
	created() {
		this.getUsersAction();
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.mb20 {
	margin-bottom: 20px;
}
.roboto12 {
	font-family: 'Roboto Regular', sans-serif;
	font-size: 12px;
}
.container2 {
	height: 100vh;
}
.ladoA {
	background-image: url('../assets/img/background_login2.png');
	background-size: cover;
	background-repeat: no-repeat;
	/* min-height: 100vh; */
	/* height: 100vh; */
	color: white;
	padding-left: 85px;
	padding-right: 75px;
	padding-bottom: 31.9px;
}
.ladoB {
	background-color: white;
	height: 100vh;
	padding: 0 50px;
}
.header {
	position: relative;
	top: 5%;
	left: 00%;
	text-align: left;
}
.section {
	font-family: 'Poppins', sans-serif;
	position: relative;
	top: 40%;
	left: 00%;
	text-align: right;
}
.footer2 {
	position: relative;
	top: 70%;
	left: 0%;
	text-align: left;
}
.roboto {
	font-family: 'Roboto Regular', sans-serif;
	font-size: 12px;
}
img {
	margin-left: 10px;
}
h2 {
	font-family: 'Poppins', sans-serif;
	font-size: 26px;
	font-weight: bold;
	text-align: right;
	margin: 0 auto;
}
h3 {
	font-family: 'Poppins Medium', sans-serif;
	font-size: 16px;
	/* font-weight: bold; */
	text-align: right;
	margin: 0 auto;
}
.nav-tabs .nav-link {
	color: black;

	/*	border-color: #1266f1;*/
	border-top-color: white;
	border-left-color: white;
	border-right-color: white;
	border-bottom-color: white;
}
.nav-item {
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	font-weight: bold;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
	color: black;
	font-weight: bold;
	/*	border-color: #1266f1;*/
	border-top-color: white;
	border-left-color: white;
	border-right-color: white;
	border-bottom-color: black;
	border-bottom-width: 5px;
}
.tab-pane {
	margin-top: 30px;
}
.form-text {
	color: red;
	text-align: right;
}
.ingresar {
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
.olvido {
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: bold;
	color: #5640ff;
	text-align: center;
	align-content: center;
}
.emailHelp {
	font-family: 'Roboto Regular', sans-serif;
	font-size: 10px;
	margin-top: 0px;
	margin-bottom: 272px;
}
.passhelp {
	margin-top: 0px;
	margin-bottom: 0px;
}
.contrasena {
	background-image: url('../assets/img/eye.png');
	background-repeat: no-repeat;
	background-position: 95%, 50%;
	/* font-size: 10px; */
}
.montserrat {
	font-family: 'Montserrat', sans-serif;
	font-size: 12px;
}
/* .form-check-input {
	 display: none; 
} */
/* input[type='checkbox']:checked {
	box-shadow: 0 0 0 3px hotpink;
	
} */
/* input[type='checkbox']:checked:before {
	box-shadow: 0 0 0 3px hotpink;

	background-color: green;
} */
</style>
