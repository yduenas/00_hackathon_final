<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="caja">
        <img class="caja__img" src="../assets/movil/img-10.png" alt="" />
        <div class="caja-texto">
          <h2 class="texto__titulo">Sé parte de la comunidad</h2>
          <p>
            Programas semi-presenciales para el desarrollo de habilidades de
            programación a lo largo de todo el Stack tecnológico.
          </p>
          <p>
            Al finalizar sabrás cómo crear una página web y desarrollar la
            lógica detrás del funcionamiento de una aplicación, así como formar
            parte de una gran comunidad de desarrolladores.
          </p>
        </div>
        <div class="espacio"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.grupo {
  padding-top: 20%;
}
.caja {
  height: 530px;
  background-image: linear-gradient(#3116fd, #553fff);
  margin-top: 5em;
}
.caja__img {
  width: 200px;
  position: relative;
  top: -14.5%;
}
.caja-texto {
  color: white;
  text-align: left;
  margin: 0% 1em;
  font-size: 14px;
}
.texto__titulo {
  padding-bottom: 1em;
  font-weight: bold;
}
@media (min-width: 361px) {
  .grupo {
    padding-top: 0%;
  }
  .caja {
    height: 250px;
    display: flex;
    justify-content: space-between;
  }
  .caja__img {
    left: -10%;
  }
  .caja-texto {
    margin: 6em 0 0;
    padding: 0%;
    font-size: 10px;
    width: 50%;
    position: relative;
    left: -16%;
  }
  .texto__titulo {
    font-size: 12px;
  }
}
</style>
