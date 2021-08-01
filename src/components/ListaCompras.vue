<template>
	<div class="row compras">
		<div class="col-5 comprasa">
			<img
				class="img_curso"
				src="../assets/img/c_desarrollo_frondend.svg"
				alt=""
			/>
		</div>
		<div class="col-5 comprasa">
			<b class="nombrecurso">Desarrollo Frond End </b>
			<br />
			<a href="#" class="eliminar">Eliminar</a>
		</div>
		<div class="col-2 comprasa">
			<b class="importe"> S/.269.00</b>
		</div>
	</div>
	<!-- <table class="table borderless" width="80%">
			<tbody>
				<tr>
					<td width="20%">
						<img
							class="img_curso"
							src="../assets/img/c_desarrollo_frondend.svg"
							alt=""
						/>
					</td>
					<td width="30%">
						<div class="row">
							<div class="col-12">
								<h5 class="nombrecurso">
									<b class="nombrecurso">Desarrollo Frond End </b>
								</h5>
							</div>
						</div>
						<div class="row">
							<div class="col-6 eliminar">
								<a href="#">Eliminar</a>
							</div>
							<div class="col-6 d-block d-sm-none">
								<b class="importe"> S/.269.00</b>
							</div>
						</div>
					</td>
					<td class="d-none d-sm-block" width="20%">
						<b class="importe"> S/.269.00</b>
					</td>
				</tr>
			</tbody>
		</table> -->
</template>

<script>
export default {};
</script>

<style scoped>
.compras {
	margin-top: 25px;
	margin-bottom: 25px;
	margin-left: 10px;
	margin-right: 10px;
}
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
	font-size: 12px;
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
</style>
