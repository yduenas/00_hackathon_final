<template>
  <section class="contenedor">
    <div class="grupo">
      <div class="grupo-caja caja-margen">
        <div class="caja caja-item">
          <div class="caja-internet">
            <img
              src="../assets/movil/Senial_Internet.jpg"
              alt="Señal de Internet"
            />
          </div>
          <div class="caja-carrier">Carrier</div>
          <div>
            <img src="../assets/movil/wifi.jpg" alt="Wifi" />
          </div>
        </div>
        <div class="caja caja-hora">{{ hora }}:{{ minutos }}</div>
        <div class="caja">
          <div class="caja-bateria">
            <div>
              <img src="../assets/movil/estado-de-la-bateria.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="grupo-caja">
        <div class="caja-file">
          <div class="file-url">
            <img src="../assets/movil/respaldo.jpg" alt="bloquear" />
            <div class="url__marginText">files.design</div>
          </div>
          <div>
            <img src="../assets/movil/flecha-curva.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="grupo-caja">
        <div class="caja-imgPchacutec">
          <img
            class="imgPchacutec__img360"
            src="../assets/movil/pachacutec.jpg"
            alt=""
          />
          <img
            class="imgPchacutec__img"
            src="../assets/img/header.svg"
            alt=""
          />
          <div class="grupo-logoPachacutec">
            <div class="logoPachacutec">
              <img src="../assets/movil/logo-pachacutec.jpg" alt="logo" />
              <img src="../assets/movil/lista.jpg" alt="Menu" />
            </div>
            <div class="logoPachacutec__titulo">
              !Explota todo tu potencial tecnólogico!
            </div>
            <div class="logoPachacutec__subtitulo">
              Con nuestros programas de especialización
            </div>
          </div>
          <div class="interesaso"><Interesados /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
