<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="formulario-form">
        <div>
          <form action="" autocomplete="off">
            <div class="phone">
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
                required
                pattern="[A-Za-z]{4-20}"
              />
              <input
                class="form-control"
                type="tel"
                name=""
                id=""
                placeholder="CELULAR"
                autocomplete="off"
                required
                pattern="[0-9]{9}"
              />
              <input
                class="form-control"
                type="email"
                name=""
                id=""
                placeholder="CORREO ELECTRONICO"
                autocomplete="off"
                required
              />
              <input
                class="form-control"
                type="text"
                name=""
                id=""
                placeholder="PROGRAMA"
                autocomplete="off"
                required
              />
              <div class="formulario-input">
                <input
                  class="checkbox"
                  type="checkbox"
                  id="cbox"
                  value="checkbox"
                  autocomplete="off"
                  required
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
              <div class="inscripcion-whassap">
                <img
                  class="whassap__logo"
                  src="../assets/img/logo_whatsapp.svg"
                  alt="Icono de Whassap"
                />
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
.formulario-titulo {
  padding: 2em 1em 1em;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  font-family: "Poppins", sans-serif;
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
  border-radius: 6px;
  border: none;
}
.phone {
  padding: 55px 50px;
  background-image: url("../assets/img/phone.png");
  background-size: 100%;
  background-repeat: no-repeat;
  /* background-color: blue; */
  position: fixed;
  z-index: 10;
  bottom: 500;
  left: 68%;
  top: 10%;
  height: 500px;
  width: 320px;
}
.form-control {
  margin: 1em;
  padding: 1em;
  width: 89%;
  font-size: 12px;
  font-family: "Roboto Regular";
}
.inscripcion-whassap {
  position: absolute;
  bottom: 0;
  right: -22%;
}

@media (min-width: 767px) {
  .phone {
    left: 53%;
    top: 0%;
  }
  .inscripcion-whassap {
    position: absolute;
    bottom: 0;
    right: -8%;
  }
}
@media (min-width: 1024px) {
  .phone {
    top: 10%;
    left: 58%;
  }
  .inscripcion-whassap {
    position: absolute;
    bottom: 0;
    right: -20%;
  }
}

@media (min-width: 1365px) {
  .phone {
    top: 21%;
    left: 68%;
  }
  .inscripcion-whassap {
    position: absolute;
    bottom: 0;
    right: 10;
  }
}
</style>
