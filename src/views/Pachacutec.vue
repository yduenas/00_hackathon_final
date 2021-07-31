<template>
  <div>
    <Home />
    <Programas />
    <Comunidad />
    <Beneficio />
    <Interesados />
    <Footer />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import Programas from "@/components/Programas.vue";
import Comunidad from "@/components/Comunidad.vue";
import Beneficio from "@/components/Beneficio.vue";
import Interesados from "@/components/Interesados.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Pachacutec",
  components: {
    Home,
    Programas,
    Comunidad,
    Beneficio,
    Interesados,
    Footer,
  },
};
</script>

<style></style>
