<template>
  <section class="container">
    <div class="grupo">
      <div class="beneficio">
        <div class="beneficio-titulo">
          <h2>Beneficios</h2>
        </div>
        <div class="beneficios">
          <div class="beneficios-item">
            <div class="beneficios-item-img">
              <img src="../assets/img/beneficio_002.svg" alt="" />
            </div>
            <div class="beneficios-item-text">
              <div class="beneficios__titulo">Aprende de Expertos</div>
              <div class="beneficios__descripcion">
                Aprende directamente de expertos del mercado a través del
                análisis y solución de problemas de programación. Utilizando los
                frameworks y herramientas de mayor relevancia dentro del mundo
                del coding.
              </div>
            </div>
          </div>
          <div class="beneficios-item">
            <div class="beneficios-item-img">
              <img src="../assets/img/beneficio_001.svg" alt="" />
            </div>
            <div class="beneficios-item-text">
              <div class="beneficios__titulo">Clases Virtuales</div>
              <div class="beneficios__descripcion">
                Aprovecha tu tiempo al máximo en nuestras clases virtuales y
                participa presencialmente de nuestras hackathones semanales para
                conocer y participar de la comunidad profesional que liderará la
                transformación tecnológica del Perú.
              </div>
            </div>
          </div>
          <div class="beneficios-item">
            <div class="beneficios-item-img">
              <img src="../assets/img/beneficio_003.svg" alt="" />
            </div>
            <div class="beneficios-item-text">
              <div class="beneficios__titulo">Empleabilidad</div>
              <div class="beneficios__descripcion">
                Al finalizar el programa y certificarte a nombre de IDAT, podrás
                acceder a ofertas laborales especialmente identificadas para la
                comunidad PachaQTec, a través de nuestra plataforma de
                empleabilidad IDAT JOB.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
body {
  min-height: 100vh;
  background: white;
  margin: 0%;
  padding: 0%;
}
.grupo {
  padding: 3em 0;
  margin-bottom: 0;
  padding-bottom: 0;
  width: 100%;
  background: white;
}
.beneficio {
  width: 90%;
  margin: 0em auto;
}
.beneficio-titulo {
  font-weight: bold;
  text-align: left;
  padding-left: 0;
  margin: 2em 0;
  font-size: 20px;
  font-family: "Poppins Medium", sans-serif;
}
.beneficios-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  background: #f2f3f5;
  border-radius: 10px;
  margin: 0.5em 0;
}
.beneficios-item-img {
  width: 30%;
}
.beneficios-item-text {
  width: 70%;
}
.beneficios__titulo {
  font-weight: bold;
  text-align: left;
  padding: 1em 1em 0.5em;
  font-size: 16px;
  font-family: "Poppins Medium", sans-serif;
  text-align: center;
}
.beneficios__descripcion {
  display: none;
}
@media (min-width: 361px) {
  .grupo {
    margin-bottom: 1em;
  }
  .beneficio {
    width: 70%;
  }
  .beneficios-item {
    padding: 0.5em;
  }
  .beneficios__descripcion {
    text-align: left;
    padding: 1em 1em 0.5em;
  }
}
@media (min-width: 374px) {
  .beneficio {
    width: 95%;
  }
}
@media (min-width: 410px) {
  .beneficio {
    width: 90%;
  }
}
@media (min-width: 767px) {
  .beneficio-titulo {
    font-size: 26px;
    font-family: "Poppins", sans-serif;
    padding-left: 0;
  }
  .beneficios__titulo {
    font-size: 20px;
    font-family: "Poppins Medium", sans-serif;
    padding-left: 0;
    text-align: left;
  }
  .beneficios__descripcion {
    display: block;
    font-size: 14px;
    font-family: "Roboto Regular";
    padding-left: 0;
    text-align: left;
  }
}
@media (min-width: 1023px) {
  /* .grupo {
    padding: 0;
    margin: 0;
  } */
  .beneficio {
    width: 62%;
    margin-left: 3em;
    padding-bottom: 1em;
  }
}
</style>
