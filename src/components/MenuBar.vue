<template>
	<page>
		<div
			class="offcanvas offcanvas-start w-25"
			tabindex="-1"
			id="offcanvas"
			data-bs-keyboard="false"
			data-bs-backdrop="false"
		>
			<div class="offcanvas-header">
				<h6 class="offcanvas-title d-none d-sm-block" id="offcanvas">
					Datos de usuario:
				</h6>
				<button
					type="button"
					class="btn-close text-reset"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
					style="color: white;"
				>
					<b> X </b>
				</button>
			</div>
			<!-- <hr /> -->
			<div class="offcanvas-body px-3">
				<div>
					<h3><b>Bienvenido !!!</b></h3>
					<p>Nombre : Ytalo Edgar</p>
					<p>Correo : Dueñas de Chang</p>

					<p>Fecha de logueo : 01/08/2021</p>
				</div>
				<div>
					<div id="nav">
						<ul class="nav navbar-nav">
							<li>
								<i class="bi bi-rss">
									<router-link to="/"> - Home</router-link></i
								>
							</li>
							<li>
								<i class="bi bi-rss">
									<router-link to="/about"> - About</router-link></i
								>
							</li>
							<li>
								<i class="bi bi-rss">
									<router-link to="/pachacutec"> - Pachacutec</router-link></i
								>
							</li>
							<li>
								<i class="bi bi-rss">
									<router-link to="/pachacutec/1">
										- Curso Individual</router-link
									></i
								>
							</li>
							<li>
								<i class="bi bi-rss">
									<router-link to="/login"> - Login</router-link></i
								>
							</li>
							<li>
								<i class="bi bi-rss">
									<router-link to="/carrito"> - Carrito Compras</router-link></i
								>
							</li>
							<li>
								<i class="bi bi-rss">
									<router-link to="/pasarelapago">
										- Pasarela de Pago
									</router-link></i
								>
							</li>
							<li>
								<i class="bi bi-rss">
									<router-link to="/resumencompra">
										- Resumen Compra</router-link
									></i
								>
							</li>
							<li>
								<i class="bi bi-rss">
									<router-link to="/pruebas">
										- Pruebas conexion</router-link
									></i
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="container-fluid">
			<div class="row">
				<div class="col min-vh-100 p-4"> -->
		<!-- toggler -->
		<button
			class="btn float-end"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvas"
			role="button"
			style="color:white;"
		>
			<!-- <i
				class="bi bi-arrow-right-square-fill fs-3"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvas"
			></i> -->
			<i
				class="bi bi-list"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvas"
			></i>
		</button>
		<!-- <h3>Sample Content...</h3>
					<p>
						Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia
						salvia mustache 90's code editing brunch. Butcher polaroid VHS art
						party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag
						wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v
						taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd
						Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony,
						street art organic Bushwick artisan cliche semiotics ugh synth
						chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice.
						Vice sustainable cardigan, Williamsburg master cleanse hella DIY
						90's blog.
					</p>
					<p>
						Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art
						Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf
						pug. Godard sustainable you probably haven't heard of them, vegan
						farm-to-table Williamsburg slow-carb readymade disrupt deep v.
						Meggings seitan Wes Anderson semiotics, cliche American Apparel
						whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1
						direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
						Shoreditch selfies, forage fingerstache food truck occupy YOLO
						Pitchfork fixie iPhone fanny pack art party Portland.
					</p>
					<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia cor magni dolores eos qui
					ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
					dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
					quia non numquam eius modi tempora incidunt ut labore et dolore magnam
					aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
					ea commodi consequatur?
					</p> -->
		<!-- </div>
			</div>
		</div> -->
	</page>
</template>

<script>
export default {};
</script>

<style scoped>
.offcanvas-title {
	/* color: #5640ff; */
	color: white;
	font-weight: bold;
	/* background-color: black; */
}
.offcanvas-header {
	background-color: black;
	height: 8vh;
}
.offcanvas-body {
	color: black;
	text-align: start;
}
i {
	margin-left: 20px;
	font-size: 20px;
}
hr {
	background-color: #3926c5;
	height: 10px;
}
a {
	text-decoration: none;
}
button {
	color: white;
}
.btn-close {
	color: white;
}
</style>
