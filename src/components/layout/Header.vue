<template>
  <header class="py-3">
    <h1 class="my-0 text-lowercase">{{ company }}</h1>
    <span class="text-uppercase">{{ slogan }}</span>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    company: String,
    slogan: String
  }
};
</script>

<style scoped>
header {
  background-color: #7b8841;
  color: #fff;
  text-shadow: 1px 3px 3px #14210578;
}

h1 {
  font-size: 5rem;
}

.btn-primary {
  background-color: #728032;
  border-color: #677527;
}

.btn-group > .btn-group:not(:last-child) > .btn,
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:first-child) > .btn,
.btn-group > .btn:not(:first-child) {
  border-radius: 0;
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle,
.btn-primary:hover {
  background-color: #899851;
  border-color: #788645;
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus,
.btn-primary.focus,
.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem #bcd852;
}

button {
  font-size: 1.25rem;
}
</style>