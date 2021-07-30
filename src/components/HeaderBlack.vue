<template>
	<header class="header">
		<div class="row">
			<div class="col-8 col-md-6 ladoA">
				<router-link to="/pachacutec">
					<img src="@/assets/img/pachacutec.svg" alt="" />
				</router-link>
			</div>
			<div class="col-4 col-md-6 ladoB d-none d-sm-block">
				<i class="bi bi-cart"></i>
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
};
</script>

<style scoped>
.ladoA {
	text-align: start;
}
.ladoB {
	text-align: end;
}
.header {
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 100px;
	background-color: black;
	height: 8vh;
	color: white;
}
i {
	margin-left: 20px;
	font-size: 30px;
}
</style>
