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
            <div class="beneficios-item-text">Aprende de Expertos</div>
          </div>
          <div class="beneficios-item">
            <div class="beneficios-item-img">
              <img src="../assets/img/beneficio_001.svg" alt="" />
            </div>
            <div class="beneficios-item-text">Clases Virtuales</div>
          </div>
          <div class="beneficios-item">
            <div class="beneficios-item-img">
              <img src="../assets/img/beneficio_003.svg" alt="" />
            </div>
            <div class="beneficios-item-text">Empleabilidad</div>
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
.beneficios-item-img,
.beneficios-item-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.beneficios-item-img {
  width: 30%;
}
.beneficios-item-text {
  width: 70%;
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
}
</style>
