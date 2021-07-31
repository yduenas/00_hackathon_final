<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="grupo-caja caja-margen">
        <div class="caja caja-item">
          <div class="caja-internet">
            <img
              src="../assets/movil/Senial_Internet.jpg"
              alt="Señal de Internet"
            />
          </div>
          <div class="caja-carrier">Carrier</div>
          <div>
            <img src="../assets/movil/wifi.jpg" alt="Wifi" />
          </div>
        </div>
        <div class="caja caja-hora">{{ hora }}:{{ minutos }}</div>
        <div class="caja">
          <div class="caja-bateria">
            <div>
              <img src="../assets/movil/estado-de-la-bateria.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="grupo-caja">
        <div class="caja-file">
          <div class="file-url">
            <img src="../assets/movil/respaldo.jpg" alt="bloquear" />
            <div class="url__marginText">files.design</div>
          </div>
          <div>
            <img src="../assets/movil/flecha-curva.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="grupo-caja">
        <div class="caja-imgPchacutec">
          <img
            class="imgPchacutec__img360"
            src="../assets/movil/pachacutec.jpg"
            alt=""
          />
          <img
            class="imgPchacutec__img"
            src="../assets/img/header.png"
            alt=""
          />
          <div class="grupo-logoPachacutec">
            <div class="logoPachacutec">
              <img src="../assets/movil/logo-pachacutec.jpg" alt="logo" />
              <router-link to="/login"
                ><img src="../assets/movil/lista.jpg" alt="Menu"
              /></router-link>
            </div>
            <div class="logoPachacutec__titulo">
              !Explota todo tu potencial tecnólogico!
            </div>
            <div class="logoPachacutec__subtitulo">
              Con nuestros programas de especialización
            </div>
          </div>
          <div class="interesaso"><HomeIntersados /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeIntersados from "@/components/HomeIntersados.vue";
export default {
  name: "Home",
  components: {
    HomeIntersados,
  },
  data() {
    return {
      hora: new Date().getHours(),
      minutos: new Date().getMinutes(),
    };
  },
  methods: {
    async formatAMPM(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    },
  },
  create() {},
};
</script>

<style scoped>
.interesaso {
  display: none;
}
.grupo-caja {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.caja {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 33.3%;
}
.caja-item {
  display: flex;
  justify-content: flex-start;
}
.caja-internet,
.caja-carrier {
  padding-right: 0.3em;
}
.caja-carrier {
  font-size: larger;
}
.caja-hora {
  display: flex;
  justify-content: center;
  font-weight: bold;
}
.caja-bateria {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.caja-file {
  width: 340px;
  border-radius: 10px;
  background: #e3e3e3;
  display: flex;
  justify-content: center;
  margin: 0.7em auto;
  padding: 0.4em;
}
.file-url {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5.5em;
}
.caja-imgPchacutec {
  height: 240px;
}
.imgPchacutec__img {
  display: none;
}
.url__marginText {
  padding: 0 0.4em;
  font-weight: bold;
}
.grupo-logoPachacutec {
  margin: 1em;
  position: relative;
  top: -120%;
}
.logoPachacutec {
  display: flex;
  justify-content: space-between;
}
.logoPachacutec__titulo,
.logoPachacutec__subtitulo {
  color: white;
  text-align: left;
}
.logoPachacutec__titulo {
  font-weight: bold;
  font-size: 25px;
  margin-top: 30%;
}
.logoPachacutec__subtitulo {
  font-weight: 300;
  margin-top: 3%;
  width: 60%;
}
@media (min-width: 361px) {
  .caja-margen {
    padding: 1em;
  }
  .caja-file {
    margin: 0 1em 1em;
    width: 100%;
  }
  .imgPchacutec__img {
    display: table;
    width: 575px;
    height: auto;
    width: 100%;
  }
  .imgPchacutec__img360 {
    display: none;
  }
  .grupo-logoPachacutec {
    top: -90%;
  }
  .logoPachacutec__titulo {
    margin-top: 10%;
  }
}
@media (min-width: 575px) {
  .grupo {
    margin-bottom: 0%;
    padding-bottom: 0%;
  }
  .interesaso {
    display: block;
    width: 35%;
    position: relative;
    top: -168%;
    left: 52%;
    border-radius: 15px;
  }
  .caja-margen,
  .caja-file {
    display: none;
  }
  .grupo-logoPachacutec {
    width: 70%;
  }
  .grupo-logoPachacutec {
    width: 100%;
  }
  .logoPachacutec {
    width: 95%;
  }
  .logoPachacutec__titulo {
    width: 45%;
    font-size: 20px;
  }
  .logoPachacutec__subtitulo {
    font-size: 14px;
  }
}
</style>
