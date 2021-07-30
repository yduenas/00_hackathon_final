<template>
	<header class="header">
		<div class="row">
			<div class="col-8 ladoA">
				<img src="@/assets/img/pachacutec.svg" alt="" />
			</div>
			<div class="col-4 ladoB">
				<i class="bi bi-cart"></i>

				<i class="bi bi-list"></i>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
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
