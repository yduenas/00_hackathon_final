<template>
	<div>
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/pachacutec">Pachacutec</router-link> |
			<router-link to="/login">Login</router-link> |
			<router-link to="/carrito">Carrito Compras</router-link> |
			<router-link to="/pasarelapago">Pasarela de Pago </router-link> |
			<router-link to="/resumencompra">Resumen Compra</router-link> |
			<router-link to="/pruebas">Pruebas conexion</router-link>
		</div> -->

		<!-- <div>{{ nombre }}</div> -->
		<router-view />
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'Home',

	data() {
		return {
			nombre: 'Ytalo',
			valor: {},
		};
	},
	computed: {
		//	//	...mapState(['contactos', 'ini', 'fin']),
		//	...mapState(['programas']),
	},
	components: {
		//	ContactCard,
		//	Modal,
		//	Spinner,
	},
	methods: {
		refrescar(valor) {
			//console.log('refrescando' + JSON.stringify(valor));
			this.valor = valor;
		},
		// ...mapActions([
		// 	'getProgramasAction',
		// 	// 'deleteContactoAction',
		// 	// 'actualizarContactoAction',
		// 	// 'nextContactoAction',
		// 	// 'prevContactoAction',
		// ]),
	},
	created() {
		//	this.getProgramasAction();
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
body {
	min-height: 100vh;
	background: white;
	margin: 0%;
	padding: 0%;
	overflow: scroll;
	background: #f2f3f5;
}

.contenedor {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
/* .container {
	max-width: 1366px;
	margin: 0 auto;
	padding: 0%;
	background: #f2f3f5;
} */
.grupo {
	background: #f2f3f5;
	margin: 0%;
	padding: 0%;
}
.caja-margen {
	margin: 0 0.5em;
}
/* @media (min-width: 576px) {
  .contenedor {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .grupo {
    width: 960px;
    margin: 0% auto;
  }
} */
</style>
