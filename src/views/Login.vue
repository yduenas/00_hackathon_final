<template>
	<div class="container">
		<div class="row ">
			<div class="col-8 ladoA d-none d-sm-block">
				<!-- <h1>Estoy en Login</h1> -->
				<header class="header">
					<img src="@/assets/img/pachacutec.svg" alt="" />
				</header>
				<section class="section">
					<h2><b> ¡Explota todo tu potencial</b></h2>
					<h2><b>tecnológico!</b></h2>
					<h3>Con nuestros programas</h3>
					<h3>de especialización</h3>
				</section>
				<footer class="footer">
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
				</ul>
				<div class="tab-content" id="myTabContent">
					<div
						class="tab-pane fade show active"
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<p>
							Puedes iniciar sesion con:
						</p>
						<img src="../assets/img/logo_facebook.svg" alt="" />
						<img src="../assets/img/logo_linkedin.svg" alt="" />
						<br /><br /><br /><br />
						<p>Tambien puedes iniciar sesion con tu correo:</p>
						<form>
							<div class="mb-3">
								<input
									type="email"
									class="form-control"
									id="correo"
									name="correo"
									placeholder="name@example.com"
									autocomplete="new-text"
								/>
								<div id="emailHelp" class="form-text ">
									ingrese un correo valido.
								</div>
							</div>
							<div class="mb-3">
								<input
									type="password"
									class="form-control"
									id="contrasena"
									name="contrasena"
									placeholder="ingrese contraseña"
									autocomplete="off"
								/>
							</div>
							<div class="mb-3">
								<input
									type="submit"
									class="form-control ingresar"
									value="Ingresar"
								/>
								<router-link
									to="/carrito"
									type="submit"
									class="form-control ingresar"
									>Ingresar
								</router-link>
							</div>
							<div class="mb-3">
								<a class="olvido" href="#"
									><b> ¿Olvidaste tu contraseña? </b></a
								>
							</div>
						</form>
					</div>
					<div
						class="tab-pane fade"
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<p>
							Puedes iniciar sesion con:
						</p>
						<img src="../assets/img/logo_facebook.svg" alt="" />
						<img src="../assets/img/logo_linkedin.svg" alt="" />
						<br /><br /><br /><br />
						<p>Tambien puedes iniciar sesion con tu correo:</p>
						<form>
							<div class="mb-3">
								<input
									type="text"
									class="form-control"
									id="name"
									name="name"
									placeholder="nombres y npellidos"
									autocomplete="new-text"
								/>
							</div>
							<div class="mb-3">
								<input
									type="email"
									class="form-control"
									id="correo"
									name="correo"
									placeholder="name@example.com"
									autocomplete="new-text"
								/>
							</div>
							<div class="mb-3">
								<input
									type="password"
									class="form-control"
									id="contrasena"
									name="contrasena"
									placeholder="ingrese contraseña"
									autocomplete="off"
								/>
							</div>
							<div class="mb-3">
								<input
									type="password"
									class="form-control"
									id="contrasena2"
									name="contrasena2"
									placeholder="ingrese nuevamente contraseña"
									autocomplete="off"
								/>
							</div>
							<div class="mb-3 form-check">
								<input
									class="form-check-input"
									type="checkbox"
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									Acepto
									<b>
										<a href="#" style="color:black"
											>Terminos y condiciones</a
										></b
									>
								</label>
							</div>
							<div class="mb-3">
								<input
									type="submit"
									class="form-control ingresar"
									value="Registrarse"
								/>
							</div>
							<router-link
								to="/carrito"
								type="submit"
								class="form-control ingresar"
								>Registrarse
							</router-link>
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
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.container {
	height: 100vh;
}
.ladoA {
	background-image: url('../assets/img/background_login.png');
	background-size: cover;
	background-repeat: no-repeat;
	/* min-height: 100vh; */
	/* height: 100vh; */
	color: white;
	padding-left: 30px;
	padding-right: 20px;
}
.ladoB {
	background-color: white;
	height: 100vh;
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
.footer {
	position: relative;
	top: 60%;
	left: 00%;
	text-align: left;
}
img {
	margin-left: 10px;
}
h3 {
	font-size: 20px;
}
.nav-tabs .nav-link {
	color: black;

	/*	border-color: #1266f1;*/
	border-top-color: white;
	border-left-color: white;
	border-right-color: white;
	border-bottom-color: white;
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
}
.tab-pane {
	margin-top: 30px;
}
.form-text {
	color: red;
	text-align: right;
}
.ingresar {
	color: white;
	background-color: #5640ff;
	font-weight: bold;
}
.olvido {
	color: #5640ff;
}
</style>
