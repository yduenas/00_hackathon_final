<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="grupo-titulo">
        <div class="caja-texto">
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
      <!-- <div class="grupo-programa">
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
      </div> -->
      <div class="grupo-programa">
        <div class="programa">
          <img
            class="programa__frontend"
            src="../assets/img/c_desarrollo_frondend.png"
            alt=""
          />
          <div class="programa_nombre">Desarrollo</div>
          <div class="programa_nombre">Frond-End</div>
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
        <div class="programa">
          <img
            class="programa__backend"
            src="../assets/img/c_desarrollo_backend.png"
            alt=""
          />
          <div class="programa_nombre">Desarrollo</div>
          <div class="programa_nombre">Backend-End</div>
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
        <div class="programa">
          <img
            class="programa__aplicmoviles"
            src="../assets/img/c_desarrollo_aplicaciones_moviles.png"
            alt=""
          />
          <div class="programa_nombre">Desarrollo de</div>
          <div class="programa_nombre">Aplicaciones Moviles</div>
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
        <div class="programa">
          <img
            class="programa__diseniousuario"
            src="../assets/img/c_diseño_experiencia.png"
            alt=""
          />
          <div class="programa_nombre">Diseño Experiencia</div>
          <div class="programa_nombre">De Usuario</div>
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
        <div class="programa">
          <img
            class="programa__videojuegos"
            src="../assets/img/c_desarrollo_videojuegos.png"
            alt=""
          />
          <div class="programa_nombre">Desarrollo de</div>
          <div class="programa_nombre">Videojuegos</div>
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
        <div class="programa">
          <img
            class="programa__marketing"
            src="../assets/img/c_marketing_digital.png"
            alt=""
          />
          <div class="programa_nombre">Marketing</div>
          <div class="programa_nombre">Digital</div>
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
        <div class="programa">
          <img
            class="programa__analitycs"
            src="../assets/img/c_diseño_experiencia.png"
            alt=""
          />
          <div class="programa_nombre">Data</div>
          <div class="programa_nombre">Analytics</div>
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
        <div class="programa">
          <img
            class="programa__frontendavanzado"
            src="../assets/img/c_desarrollo_frondend.png"
            alt=""
          />
          <div class="programa_nombre">Desarrollo</div>
          <div class="programa_nombre">Front-End Avanzado</div>
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
  padding-left: 0.5em;
  height: 120px;
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
  top: -88%;
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
  top: -81%;
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
  width: 100%;
  box-sizing: border-box;
}
.programa {
  height: 200px;
  margin: 0.5em 0;
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
  width: 100%;
  height: 200px;
  object-fit: cover;
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
  top: -45%;
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
@media (min-width: 767px) {
  .grupo {
    margin: 0%;
    padding: 0%;
  }
  .inscripcion-whassap {
    top: -140%;
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
    top: 0;
    width: 98%;
  }
  .programa {
    width: 35%;
    height: 200px;
    box-sizing: border-box;
  }
  .programa_nombre {
    top: -50%;
    left: 5%;
    font-size: 14px;
    margin: 0%;
  }
  .carrito {
    width: 100%;
    align-items: center;
    left: -10px;
  }
  .carrito__img {
    width: 60%;
    padding-left: 0;
  }
  .vermas {
    width: 250px;
    font-size: 12px;
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
  .texto-dinscripcion {
    position: relative;
    top: 50%;
  }
}
</style>
