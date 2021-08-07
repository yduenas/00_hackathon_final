<template>
	<header class="header">
		<div class="row headerrow">
			<div class="col-8 col-md-6 ladoA d-none d-sm-block">
				<router-link to="/pachacutec">
					<img src="@/assets/img/pachacutec.svg" alt="" />
				</router-link>
			</div>
			<div class="col-12 ladoA d-block d-sm-none mensaje">
				<router-link to="/login" class="routerdecoration">
					<h3 class="poppins14">
						<img
							src="../assets/img/flecha_izquierda_blanca.svg"
							alt=""
							style="margin-right:10px"
						/>
						<!-- <i class="bi bi-arrow-left"></i>  -->
						{{ mensaje }}
					</h3>
				</router-link>
			</div>

			<div class="col-4 col-md-6 ladoB d-none d-sm-block">
				<i class="bi bi-cart" @click="carrito"></i>
				<span class="numero">{{ shoppingcartA.contador }}</span>
				<!-- 
				<i class="bi bi-list"></i> -->
				<MenuBar />
			</div>
		</div>
	</header>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import MenuBar from '@/components/MenuBar.vue';
export default {
	name: 'HeaderBlack',
	data() {
		return { apellido: 'Duenas' };
	},
	props: {
		mensaje: String,
	},
	components: {
		MenuBar,
	},
	computed: { ...mapState({ shoppingcartA: (state) => state.shoppingcartA }) },
	methods: {
		carrito: function() {
			alert('Diste click en el carrito');
		},
	},
};
</script>

<style scoped>
.ladoA {
	text-align: start;
	padding-top: 10px;
}
.ladoB {
	text-align: end;
	/* padding-top: 5px;
	padding-bottom: 5px; */
}

i {
	margin-left: 20px;
	font-size: 30px;
}
.numero {
	position: absolute;
	/* margin-top: 14px; */
	/* right: -4px; */
	/* bottom: 16px; */
	padding-top: 3px;
	font-size: 9px;
	height: 15px;
	width: 15px;
	border-radius: 50%;

	text-align: center;
	font-weight: bold;
	background: #5640ff;
	color: white;
}
.mensaje {
	color: white;
	margin: 10px 15px 0 0;
}
.routerdecoration {
	color: white;
	text-decoration: none;
}
.headerrow {
	margin: 0 0;
}
.poppins14 {
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	font-weight: bold;
}

@media only screen and (max-width: 600px) {
	.header {
		padding-top: 10px;
		padding-left: 85px;
		padding-right: 85px;
		background-color: black;
		height: 9vh;
		color: white;
	}
}
@media only screen and (max-width: 1500px) {
	.header {
		padding-top: 10px;
		padding-left: 20px;
		padding-right: 55px;
		background-color: black;
		height: 9vh;
		color: white;
	}
}

@media only screen and (max-width: 768px) {
	.phone {
		padding-left: 0;
	}
}
</style>
