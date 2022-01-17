<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: futura-pt, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0c0e05;
}

.btn-primary {
  background-color: #728032;
  border-color: #677527;
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle,
.btn-primary:hover {
  background-color: #a5b948;
  border-color: #9bb53c;
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus,
.btn-primary.focus,
.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem #bcd852;
}

.card-header {
  background-color: #8ba336;
  color: #fff;
  border-radius: 0;
}

.card-header:first-child {
  border-radius: 0;
}

.card-header p {
  margin-bottom: 0;
}

h4.card-title {
  margin-bottom: 0;
}

.btn {
  font-size: 1.25rem;
  border-radius: 0;
}

footer {
  background-color: #111305;
  height: 100px;
}

footer nav a {
  color: #fff !important;
}
</style>
