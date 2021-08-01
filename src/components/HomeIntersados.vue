<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="formulario">
        <!-- <div>
          <h2 class="formulario-titulo">
            Postula y obtén un 10% de descuento en el programa
          </h2>
        </div> -->
        <div class="formulario-form">
          <form action="" autocomplete="off">
            <!-- <div class="formulario-form-padding">
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
            </div> -->
            <div class="phone">
              <!-- <img src="../assets/img/phone.svg" alt="" /> -->
              <div>
                <h2 class="formulario-titulo">
                  Postula y obtén un 10% de descuento en el programa
                </h2>
              </div>
              <input
                class="form-control"
                type="text"
                name=""
                id=""
                placeholder="NOMBRE"
                autocomplete="off"
              />
              <input
                class="form-control"
                type="text"
                name=""
                id=""
                placeholder="CELULAR"
                autocomplete="off"
              />
              <input
                class="form-control"
                type="text"
                name=""
                id=""
                placeholder="CORREO ELECTRONICO"
                autocomplete="off"
              />
              <input
                class="form-control"
                type="text"
                name=""
                id=""
                placeholder="correo"
                autocomplete="off"
              />
              <input
                class="form-control"
                type="text"
                name=""
                id=""
                placeholder="PROGRAMA"
                autocomplete="off"
              />
              <div class="formulario-input">
                <input
                  class="checkbox"
                  type="checkbox"
                  id="cbox"
                  value="checkbox"
                  autocomplete="off"
                />
                <div class="politica">
                  Acepto las Políticas de privacidad.
                </div>
              </div>
              <div class="formulario-button">
                <button class="button" type="button">
                  Quiero postular
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* .grupo {
  border-radius: 10px;
} */
.formulario-titulo {
  font-size: 14px;
  padding: 2em 1em 1em;
  font-weight: bold;
  text-align: center;
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
  display: flex;
  align-items: center;
  padding: 0.5em 0;
  font-size: 10px;
  width: 90%;
  margin: 0 auto;
}
.formulario-input:focus {
  background: skyblue;
}
.politica {
  padding-left: 0.7em;
  font-weight: bold;
}
.formulario-button {
  padding-bottom: 1em;
  width: 100%;
  margin-top: 1em;
}
.button {
  color: white;
  border-radius: 2px;
  padding: 0.3em;
  background: #5640ff;
  font-weight: bold;
  width: 90%;
  margin: 0 auto;
}

.phone {
  padding: 50px;
  background-image: url("../assets/img/phone.png");
  background-size: 100%;
  background-repeat: no-repeat;
  /* background-color: blue; */
  position: fixed;
  bottom: 500;
  left: 57%;
  right: 10%;
  top: 10%;
  height: 500px;
  width: 320px;
}
.form-control {
  margin: 1em;
  padding: 0.7em;
  width: 89%;
  font-size: 12px;
}
</style>
