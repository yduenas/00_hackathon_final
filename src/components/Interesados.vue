<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="formulario">
        <div class="formulario-titulo">
          <h2>Postula y obtén un 10% de descuento en el programa</h2>
        </div>
        <div class="formulario-form">
          <form action="">
            <div class="formulario-form-padding">
              <input
                class="input"
                type="text"
                name="nombre"
                placeholder="NOMBRE"
                autocomplete="off"
                required
                pattern="[A-Za-z]{4-20}"
              />
            </div>
            <div class="formulario-form-padding">
              <input
                class="input"
                type="tel"
                name="celular"
                placeholder="CELULAR"
                autocomplete="off"
                pattern="[0-9]{9}"
              />
            </div>
            <div class="formulario-form-padding">
              <input
                class="input"
                type="email"
                name="correo"
                placeholder="CORREO ELECTRÓNICO"
                autocomplete="off"
              />
            </div>
            <div class="formulario-form-padding">
              <input
                class="input"
                type="text"
                name="programa"
                placeholder="PROGRAMA"
                autocomplete="off"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="formulario-input">
        <div class="formulario-input-flex">
          <input class="checkbox" type="checkbox" id="cbox" value="checkbox" />
          <div class="condicion">Acepto las Políticas de privacidad.</div>
        </div>
      </div>

      <div class="formulario-button">
        <button class="button" type="button">
          Quiero postular
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.formulario {
  margin: 3em 0 0 1em;
}
.formulario-titulo {
  text-align: left;
  font-weight: bold;
  padding-bottom: 1em;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}
.formulario-titulo h2 {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 70%;
}
.formulario-form-padding {
  padding: 0 1em 1em 0;
}
.formulario-form-padding:focus {
  background: skyblue;
}
.formulario-input {
  text-align: left;
  padding: 1em;
}
.formulario-button {
  padding: 1em;
}
.input {
  padding: 1em;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  width: 100%;
  font-weight: bold;
  font-family: "Roboto Regular";
  font-size: 12px;
}
.formulario-input-flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-family: "Roboto Regular";
  font-size: 12px;
}
.checkbox {
  padding-left: 0.5em;
  width: 30px;
}
.condicion {
  font-weight: bold;
  font-family: "Roboto Regular";
  font-size: 12px;
}
.button {
  width: 100%;
  color: white;
  border-radius: 10px;
  padding: 1em;
  background: #5640ff;
  font-weight: bold;
  border: none;
}
.condicion {
  font-family: "Roboto Medium", sans-serif;
  font-size: 12px;
}
@media (min-width: 280px) {
  .formulario-titulo h2 {
    width: 100%;
  }
}
@media (min-width: 320px) {
  .formulario-titulo h2 {
    width: 90%;
  }
}

@media (min-width: 360px) {
  .formulario-titulo h2 {
    width: 90%;
  }
}
@media (min-width: 375px) {
  .formulario-titulo h2 {
    width: 100%;
  }
}
@media (min-width: 767px) {
  .contenedor {
    display: none;
  }
}
</style>
