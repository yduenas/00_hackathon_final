<template>
	<header class="header">
		<div class="row">
			<div class="col-8 col-md-6 ladoA">
				<router-link to="/pachacutec">
					<img src="@/assets/img/pachacutec.svg" alt="" />
				</router-link>
			</div>
			<div class="col-4 col-md-6 ladoB d-none d-sm-block">
				<i class="bi bi-cart" @click="carrito"></i>
				<span class="numero">3</span>
				<!-- 
				<i class="bi bi-list"></i> -->
				<MenuBar />
			</div>
		</div>
	</header>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue';
export default {
	name: 'HeaderBlack',
	components: {
		MenuBar,
	},
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
.header {
	padding-top: 10px;
	padding-left: 20px;
	padding-right: 90px;
	background-color: black;
	height: 9vh;
	color: white;
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
</style>
