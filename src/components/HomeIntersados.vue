<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="formulario">
        <div>
          <h2 class="formulario-titulo">
            Postula y obtén un 10% de descuento en el programa
          </h2>
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
.grupo {
  border: 1px solid black;
  border-radius: 10px;
}
.formulario-titulo {
  font-size: 14px;
  padding: 1em;
  font-weight: bold;
}
.formulario-form-padding {
  padding-bottom: 0.5em;
  font-size: 12px;
}
.input {
  font-size: 10px;
  border-radius: 2px;
  width: 83%;
}
.formulario-input {
  padding: 0.5em 0;
  font-size: 10px;
  width: 83%;
  margin: 0 auto;
}
.formulario-button {
  padding-bottom: 1em;
}
.button {
  color: white;
  border-radius: 2px;
  padding: 0.3em;
  background: #5640ff;
  font-weight: bold;
}
</style>
