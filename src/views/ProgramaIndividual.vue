<template>
	<div class="containerPI">
		<HeaderBlack />

		<!-- <h1>Desde programa individual</h1> -->
		<section class="banner">
			<h1 class="nombre">{{ programa.name }}</h1>
		</section>

		<div class="row">
			<div class="col-8 ladoD">
				<h2>
					<i class="bi bi-book"></i>
					<b> ¿En qué consiste el Diplomado en {{ programa.name }}?</b>
				</h2>
				<h3>
					<i class="bi bi-bookmark-check-fill"></i>
					Entiende la gestión actual en {{ programa.name }} y aplica lo
					aprendido como colaborador dentro una empresa
				</h3>
				<p>
					El presente programa tiene por finalidad brindar todo el conocimiento
					necesario para que el participante sea capaz de entender la gestión
					actual en las organizaciones y poder aplicar lo aprendido como
					colaborador dentro una empresa
				</p>
				<h3>
					<i class="bi bi-bookmark-check-fill"></i>
					Conocerás la estructura y funcionamiento básico de una organización
				</h3>
				<p>
					Logrando destacar, ser eficiente y ganar proyección o asegurar éxito
					iniciando un emprendimiento contando con las bases necesarias para
					hacerlo sostenible.
				</p>
				<h4>
					<i class="bi bi-arrow-down-right-square-fill"></i>
					Dirigido a:
				</h4>
				<p>
					Este diplomado está dirigido a egresados de carreras técnicas y de
					educación superior interesados en la Gestión Empresarial, también a
					colaboradores de empresas que buscan adquirir conocimientos que les
					permitan desarrollarse profesionalmente y emprendedores que necesitan
					conocimientos que sirvan de base para su negocio.
				</p>
				<h4>
					<i class="bi bi-calendar-date"></i>
					Duracion:
				</h4>
				<p>{{ programa.duration }}</p>
				<h4>
					<i class="bi bi-clock"></i>
					Horarios:
				</h4>
				<p>{{ programa.horario }}</p>
				<h4>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
							stroke="#000"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
						<path
							d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
							stroke="#000"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>

					IDAT otorga:
				</h4>
				<p>Diploma virtual en Gestión Empresarial</p>
			</div>
			<div class="col-4"><CelularInteresados /></div>
		</div>
		<!-- <Footer /> -->
		<section class="contenedor">
			<!-- <div class="grupo"> -->
			<div class="footer">
				<div>Con el respaldo de:</div>
				<div>
					<img
						class="img"
						src="../assets/img/logo_intercorp_white.svg"
						alt=""
					/>
					<img class="img" src="../assets/img/logo_idat_white.svg" alt="" />
					<img class="img" src="../assets/img/logo_zegel_white.svg" alt="" />
				</div>
			</div>
			<!-- </div> -->
		</section>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import HeaderBlack from '@/components/HeaderBlack.vue';
import CelularInteresados from '@/components/CelularInteresados.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'ProgramaIndividual',
	components: {
		HeaderBlack,
		CelularInteresados,
		Footer,
	},
	data() {
		return {
			message: 'Hola',
			programa: {},
		};
	},
	computed: {
		...mapState({ shoppingcartA: (state) => state.shoppingcartA }),
	},
	methods: {
		...mapMutations({
			mutationIncrementar: 'shoppingcartA/mutationIncrementar',
			getShoppingCartMutation: 'shoppingcartA/getShoppingCartMutation',
		}),
		...mapActions({
			accionIncrementar: 'shoppingcartA/accionIncrementar',
			getProgramasActionA: 'programasA/getProgramasAction',
		}),

		async getPrograma() {
			const programa = 'this.$route.params.id ';
			const data = await fetch(
				`http://localhost:3000/programs/${this.$route.params.id}`
			);
			const info = await data.json();
			this.programa = info;
			console.log(info);
		},
		detalle() {
			alert('Diste click en el nombre de : ' + this.programa.name);
		},
	},
	created() {
		this.getPrograma();
	},
};
</script>
HeaderBlack

<style scoped>
.containerPI {
	margin: 0 auto;
}
.banner {
	background-image: url('../assets/img/B-GES-DEP-D.png');
	height: 40vh;
}
.nombre {
	position: relative;
	top: 70%;
	left: 5%;
	text-align: left;
	color: white;
}
.ladoD {
	text-align: left;
	padding: 30px 90px;
}
/* h2 {
}
h3 {
}
h4 {
}
p {
} */
</style>
