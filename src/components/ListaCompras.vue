<template>
	<div>
		<!-- {{ shoppingcartA.programasSeleccionados }} -->
		<div
			class="row compras"
			v-for="(programa, index) in shoppingcartA.programasSeleccionados"
			:key="index"
		>
			<div class="col-3 comprasa" style="text-align:left">
				<img
					class="img_curso"
					:src="require(`@/assets/img/${programa.image}`)"
					alt=""
				/>
			</div>

			<div class="col-6 comprasa" style="text-align:left; padding-left:5px;">
				<b class="nombrecurso">{{ programa.name }} </b>
				<br />
				<a
					href="#"
					class="eliminar"
					style="font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: bold;"
					@click="accionEliminarPrograma(programa)"
					>Eliminar</a
				>
			</div>
			<div class="col-3 comprasa">
				<b class="importe"> S/.{{ programa.price }}</b>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	name: 'ListaCompras',
	data() {
		return { apellido: 'Duenas' };
	},
	props: {
		mensaje: String,
	},
	components: {},
	computed: { ...mapState({ shoppingcartA: (state) => state.shoppingcartA }) },
	methods: {
		...mapMutations({
			mutationEliminarPrograma: 'shoppingcartA/mutationEliminarPrograma',
		}),
		...mapActions({
			accionEliminarPrograma: 'shoppingcartA/accionEliminarPrograma',
		}),
		carrito: function() {
			alert('Diste click en el carrito');
		},
	},
};
</script>

<style scoped>
.comprasa {
	margin: 0 0;
	padding: 0 1px;
	text-align: left;
	overflow: hidden;
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
	width: 133px;
	height: 100px;
}
td {
	padding: 0 auto;
}
a {
	color: #5640ff;
	font-size: 12px;
	font-weight: bold;
}
b {
	font-size: 12px;
	font-weight: bold;
	margin: 0;
}
h5 {
	margin-block-start: 0em;
	margin-block-end: 0em;
}

.nombrecurso {
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	font-weight: bold;
	text-align: left;
}
.eliminar .importe {
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-weight: bold;
	text-align: left;
}
table {
	table-layout: fixed;
	width: 100%;
}

@media only screen and (max-width: 600px) {
	.compras {
		margin-top: 25px;
		margin-bottom: 25px;
		margin-left: 10px;
		margin-right: 10px;
	}
}
@media only screen and (max-width: 1500px) {
	.compras {
		margin-top: 25px;
		margin-bottom: 25px;
		margin-left: 0px;
		margin-right: 0px;
	}
}
</style>
