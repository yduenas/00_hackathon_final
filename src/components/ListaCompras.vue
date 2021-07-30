<template>
	<table class="table borderless">
		<tbody>
			<tr>
				<td width="20%">
					<img
						class="img_curso"
						src="../assets/img/c_desarrollo_frondend.svg"
						alt=""
					/>
				</td>
				<td width="50%">
					<h5><b> Desarrollo Frond End </b></h5>
					<div class="row">
						<div class="col-6">
							<a href="#">Eliminar</a>
						</div>
						<div class="col-6">
							<b class="d-block d-sm-none"> S/.269.00</b>
						</div>
					</div>
				</td>
				<td class="d-none d-sm-block" width="30%">
					<b> S/.269.00</b>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {};
</script>

<style scoped>
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
	width: 80%;
}
a {
	color: #5640ff;
	font-weight: bold;
}
</style>
