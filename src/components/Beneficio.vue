<template>
  <section class="contenedor">
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
<style>
.beneficio-titulo {
  font-weight: bold;
  text-align: left;
  padding-left: 0.5em;
  margin: 2em 0;
}
.beneficios-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  background: #d3d3d3;
  border-radius: 10px;
  margin: 0.5em;
}
/* .beneficios-item-img,
.beneficios-item-text {
  display: flex;
  justify-content: center;
  align-items: center;
} */

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
    display: block;
    text-align: left;
    padding: 1em 1em 0.5em;
  }
}
</style>
