<template>
  <section class="container">
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
body {
  min-height: 100vh;
  background: white;
  margin: 0%;
  padding: 0%;
}
.grupo {
  padding-top: 20%;
  border: 1px solid #f2f3f5;
}
.caja {
  height: 550px;
  background-image: linear-gradient(#3116fd, #553fff);
  margin-top: 5em;
  position: relative;
}
.caja__img {
  width: 300px;
  position: relative;
  top: -22.5%;
  padding-bottom: 0;
  margin-bottom: 0;
}
.caja-texto {
  color: white;
  text-align: left;
  margin: 0% 1em;
  font-size: 14px;
  top: -16%;
  position: relative;
}
.texto__titulo {
  padding-bottom: 1em;
  font-weight: bold;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
.caja-texto p {
  font-size: 14px;
  font-family: "Roboto Regular";
}
@media (min-width: 279px) {
  .caja__img {
    top: -15%;
    width: 200px;
    height: 257px;
  }
  .caja-texto {
    top: 0;
  }
}
@media (min-width: 319px) {
  .caja-texto {
    top: -7%;
  }
}
@media (min-width: 359px) {
  .caja__img {
    width: 270px;
    height: 346px;
    top: -20%;
  }
  .caja-texto {
    top: -10%;
  }
}
@media (min-width: 767px) {
  .grupo {
    padding-top: 0%;
  }
  .caja {
    height: 250px;
    display: flex;
    justify-content: space-between;
  }
  .caja__img {
    left: -9%;
    top: -24.5%;
    width: 270px;
    height: 346px;
  }
  .caja-texto {
    margin: 6em 0 0;
    padding: 0%;
    font-size: 10px;
    width: 50%;
    position: relative;
    left: -15%;
    width: 48%;
  }
  .texto__titulo {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
  }
}
@media (min-width: 1023px) {
  .caja__img {
    left: -6%;
  }
  .caja-texto {
    left: -20%;
  }
}
</style>
