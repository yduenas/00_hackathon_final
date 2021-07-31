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
              />
            </div>
            <div class="formulario-form-padding">
              <input
                class="input"
                type="text"
                name="celular"
                placeholder="CELULAR"
              />
            </div>
            <div class="formulario-form-padding">
              <input
                class="input"
                type="text"
                name="correo"
                placeholder="CORREO ELECTRÓNICO"
              />
            </div>
            <div class="formulario-form-padding">
              <input
                class="input"
                type="text"
                name="programa"
                placeholder="PROGRAMA"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="formulario-input">
        <input class="checkbox" type="checkbox" id="cbox" value="checkbox" />
        Acepto las Políticas de privacidad.
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
}
.formulario-form-padding {
  padding: 0 0.5em 1em 0;
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
}
.checkbox {
  padding-left: 0.5em;
  width: 30px;
}
.button {
  width: 100%;
  color: white;
  border-radius: 10px;
  padding: 1em;
  background: #5640ff;
  font-weight: bold;
}
@media (min-width: 361px) {
  .contenedor {
    display: none;
  }
}
</style>
