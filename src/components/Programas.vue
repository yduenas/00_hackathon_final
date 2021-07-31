<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="grupo-titulo">
        <div class="caja-texto">
          <div class="texto-titulo">
            Con respaldo de:
          </div>
          <div class="caja-logos">
            <img class="logos__img" src="../assets/movil/logos.jpg" alt="" />
          </div>
          <div class="texto-dinscripcion">
            Conoce nuestros Programas de Especialización
          </div>
        </div>
        <div class="inscripcion-whassap">
          <img
            class="whassap__logo"
            src="../assets/movil/whassap.jpg"
            alt="Icono de Whassap"
          />
        </div>
        <div class="inscripcion">
          <div class="inscripcion-boton">
            <div>
              <img src="../assets/movil/lapiz.jpg" alt="Lapiz" />
            </div>
            <div>Inscribete</div>
          </div>
        </div>
      </div>
      <div class="grupo-programa">
        <div
          class="programa"
          v-for="(programa, index) in programasA.programasA"
          :key="index"
        >
          <img
            class="programa__frontend"
            :src="require(`@/assets/img/${programa.image}`)"
            alt=""
          />
          <div class="programa_nombre">{{ programa.name }}</div>
          <div class="carrito">
            <div>
              <img
                class="carrito__img"
                src="../assets/movil/agregarCarritoCompras.png"
                alt=""
              />
            </div>
            <div class="vermas">
              <div>
                <img class="vermas__img" src="../assets/movil/mas.png" alt="" />
              </div>
              <div class="vermas__boton">Ver más</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {},
  computed: {
    ...mapState({ programasA: (state) => state.programasA }),
  },
  actions: {},
  methods: {
    ...mapMutations({
      getProgramasMutation: "programasA/getProgramasMutation",
    }),
    ...mapActions({
      getProgramasActionA: "programasA/getProgramasAction",
    }),
  },
  created() {
    this.getProgramasActionA();
  },
};
</script>

<style scoped>
.grupo-titulo {
  padding: 2.5em 0 0;
  height: 200px;
}
.grupo {
  padding: 2.5em 0 0;
  height: 200px;
}
.caja-texto {
  margin: 2em 0;
  padding: 0 1em;
}
.texto-titulo {
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  padding-bottom: 0.5em;
}
.texto-dinscripcion {
  width: 75%;
  font-weight: bold;
  text-align: left;
  line-height: 25px;
  padding: 3em 0 1em 0;
}
.caja-logos {
  padding: 1em 0 2em -1em;
  width: 75%;
}
.inscripcion-whassap {
  position: relative;
  top: -89%;
  text-align: right;
  padding-right: 0.9em;
}
.whassap__logo {
  border-radius: 50%;
}
.inscripcion {
  padding-right: 0.9em;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -80%;
}
.inscripcion-boton {
  display: flex;
  justify-content: space-around;
  background: #ff1558;
  border-radius: 50px;
  padding: 1em;
  color: white;
  width: 150px;
  font-weight: bold;
}
.grupo-programa {
  margin-top: 3.1em;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}
.programa {
  height: 325px;
  padding-top: 1.6em;
}
.programa__frontend,
.programa__backend,
.programa__aplicmoviles,
.programa__diseniousuario,
.programa__videojuegos,
.programa__marketing,
.programa__analitycs,
.programa__frontendavanzado {
  padding: 0.25em 0.5em;
  border-radius: 25px;
  width: 350px;
}
.programa_nombre {
  color: white;
  position: relative;
  top: -45%;
  left: 3%;
  text-align: left;
  padding-left: 1em;
  font-weight: bold;
  width: 100%;
  font-size: 18px;
}
.carrito {
  position: relative;
  top: -35%;
  left: 0%;
  display: flex;
  justify-content: center;
  width: 100%;
}
.carrito__img {
  width: 70%;
}
.vermas {
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
  font-weight: bold;
}
.vermas__img {
  width: 20px;
}
.vermas__boton {
  padding-left: 0.5em;
}
@media (min-width: 361px) {
  .grupo {
    height: 100%;
    margin: 0%;
    padding: 0%;
  }
  .grupo-titulo {
    height: 110px;
  }
  .caja-logos {
    display: flex;
    justify-content: flex-start;
  }
  .inscripcion-whassap {
    top: -305%;
  }
  .whassap__logo {
    width: 50px;
  }
  .inscripcion {
    display: none;
  }
  .grupo-programa {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 40%;
    margin-top: 0%;
  }
  .programa {
    width: 35%;
    height: 200px;
    box-sizing: border-box;
  }
  .programa__frontend {
    width: 90%;
  }
  .programa_nombre {
    top: -40%;
    left: 10%;
    font-size: 10px;
  }
  .carrito {
    width: 90%;
    align-items: center;
  }
  .carrito__img {
    width: 60%;
    padding-left: 7px;
  }
  .vermas {
    width: 250px;
    font-size: 10px;
    padding: 0%;
  }
  .vermas__img {
    width: 10px;
  }
  .logos__img {
    width: 60%;
  }
  .texto-dinscripcion {
    padding: 2em 0 1em;
  }
  .caja-texto {
    height: 100px;
  }
  .texto-titulo,
  .caja-logos,
  .texto-dinscripcion {
    position: relative;
    top: -60%;
  }
}
</style>
