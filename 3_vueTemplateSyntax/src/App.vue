<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> Attributes</router-link>|
      <router-link to="/modifiers"> Modifiers</router-link>|
      <router-link to="/shorthands"> Shorthands</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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
</style>
