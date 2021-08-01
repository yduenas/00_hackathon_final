<template>
  <section class="contenedor">
    <div class="grupo">
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
            <!-- <div class="titulo-subtitulo"> -->
            <div class="logoPachacutec__titulo">
              <div>
                !Explota todo tu potencial tecnólogico!
              </div>
            </div>
            <div class="logoPachacutec__subtitulo">
              <div>
                Con nuestros programas de especialización
              </div>
            </div>
            <!-- </div> -->
          </div>
          <div class="interesaso"><HomeIntersados /></div>
        </div>
      </div>
      <div class="caja-texto">
        <div class="texto-titulo">
          Con respaldo de:
        </div>
        <div class="logos-acordeon">
          <div class="caja-logos">
            <img class="logos__img" src="../assets/movil/logos.jpg" alt="" />
          </div>
          <div style="acordeon">
            <img
              class="acordeon__img"
              src="../assets/movil/Acordeon.jpg"
              alt=""
            />
          </div>
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
/* .imgPchacutec__img360 {
  width: 100%;
  object-fit: cover;
} */
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
  width: 90%;
}
.logoPachacutec__subtitulo {
  font-weight: 300;
  margin-top: 3%;
  width: 60%;
}
.caja-texto {
  padding-top: 4em;
  padding-left: 0.5em;
}
.caja-logos {
  padding: 0%;
}
.caja-logos,
.caja-texto {
  text-align: left;
}
.acordeon,
.acordeon__img {
  display: none;
}
@media (min-width: 767px) {
  .imgPchacutec__img360 {
    display: none;
  }
  .caja-imgPchacutec {
    min-height: 80vh;
    background: sandybrown;
    width: 960px;
  }
  .imgPchacutec__img {
    display: block;
    height: 100%;
    width: 960px;
    object-fit: cover;
    margin: 0%;
    padding: 0%;
  }
  .grupo-logoPachacutec {
    top: -47.5%;
    width: 960px;
  }
  .logoPachacutec {
    position: absolute;
    top: -125%;
    width: 900px;
  }
  /* .titulo-subtitulo {
    margin-left: 2em;
    height: 200px;
    background: chartreuse;
    box-sizing: border-box;
    position: absolute;
    top: 0%;
    width: 100%;
    padding: 4em;
  } */
  .logoPachacutec__titulo,
  .logoPachacutec__subtitulo {
    height: 120px;
    margin: 0%;
    display: flex;
    align-items: flex-start;
  }
  .logoPachacutec__titulo {
    font-size: 40px;
    width: 60%;
  }
  .logoPachacutec__subtitulo {
    align-items: center;
  }
  .interesaso {
    display: block;
    width: 35%;
    position: relative;
    top: -70%;
    left: 53%;
    /* width: 35%;
    position: relative;
    top: -168%;
    left: 52%;
    border-radius: 15px; */
  }
  .caja-texto {
    padding-top: 1em;
    margin: 0%;
    padding-left: 1em;
  }
  .logos-acordeon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
  }
  .acordeon,
  .acordeon__img {
    display: table;
    margin-left: 20px;
  }
  .acordeon__img {
    width: 50px;
  }
  .acordeon img {
    display: table;
    width: 10px;
  }
  .texto-titulo {
    font-weight: bold;
  }

  /* .logoPachacutec__titulo {
    font-size: 40px;
    width: 60%;
    margin-left: 2em;
    height: 130px;
    background: chartreuse;
  }
  .logoPachacutec__subtitulo {
    font-size: 20px;
    width: 60%;
    margin-left: 2em;
    height: 130px;
    background: chartreuse;
  } */
  /* .caja-margen {
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
  }*/
}

/* @media (min-width: 575px) {
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
} */
</style>
