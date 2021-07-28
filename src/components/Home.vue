<template>
  <section class="contenedor">
    <div class="grupo-caja">
      <div class="caja caja__item">
        <div class="caja__internet">
          <img
            src="../assets/movil/Senial_Internet.jpg"
            alt="Señal de Internet"
          />
        </div>
        <div class="caja__carrier">Carrier</div>
        <div class="caja__wifi">
          <img src="../assets/movil/wifi.jpg" alt="Wifi" />
        </div>
      </div>
      <div class="caja caja__hora">{{ hora }}:{{ minutos }}</div>
      <div class="caja">
        <div class="caja__bateria">
          <div>
            <img src="../assets/movil/estado-de-la-bateria.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="grupo-caja">
      <div>
        <img class="caja__file" src="../assets/movil/file.jpg" alt="" />
      </div>
    </div>
    <div class="grupo-caja">
      <div>
        <img
          src="../assets/movil/movil-1.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hora: new Date().getHours(),
      minutos: new Date().getMinutes(),
    };
  },
  methods: {
    async formatAMPM(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    },
  },
  create() {},
};
</script>

<style scoped>
.grupo-caja {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.caja {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 33.3%;
}
.caja__item {
  display: flex;
  justify-content: flex-start;
}
.caja__internet,
.caja__carrier {
  padding-right: 0.3em;
}
.caja__carrier {
  font-size: larger;
}
.caja__hora {
  display: flex;
  justify-content: center;
  font-weight: bold;
}
.caja__bateria {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.caja__file {
  width: 350px;
  border-radius: 4px;
}
</style>