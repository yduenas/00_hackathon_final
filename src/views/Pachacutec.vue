<template>
  <div>
    <Home />
    <Programas />
    <Comunidad />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import Programas from "@/components/Programas.vue";
import Comunidad from "@/components/Comunidad.vue";
export default {
  name: "Pachacutec",
  components: {
    Home,
    Programas,
    Comunidad,
  },
};
</script>

<style></style>
