<template>
  <section class="container">
    <div class="grupo">
      <div class="footer">
        <div>Con el respaldo de:</div>
        <div>
          <img
            class="img"
            src="../assets/img/logo_intercorp_white.svg"
            alt=""
          />
          <img class="img" src="../assets/img/logo_idat_white.svg" alt="" />
          <img class="img" src="../assets/img/logo_zegel_white.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
.grupo {
  background: chartreuse;
  margin: 0;
  padding: 0;
}
.footer {
  color: white;
  background: #000d29;
  width: 100%;
  padding: 1.5em;
  text-align: left;
  font-size: 10px;
}
.img {
  padding: 0.5em 1em 0 0;
}
@media (min-width: 361px) {
  .img {
    padding-right: 2em;
  }
}
</style>
