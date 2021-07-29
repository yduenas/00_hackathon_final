<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/pachacutec">Pachacutec</router-link> |
      <router-link to="/card">Card</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/pasarelapagopaypal">Pago paypal</router-link> |
      <router-link to="/pasarelapagoefectivo">Pago Efectivo</router-link>
      | <router-link to="/registro">Registro</router-link> |
      <router-link to="/resumencompra">Resumen Compra</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background: #f2f3f5;
  min-height: 100vh;
}
.contenedor {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.caja-margen {
  margin: 0 0.5em;
}
</style>
