<template>
  <nav class="mt-3">
    <ul>
      <li v-for="link in links" :key="link.id">
        <router-link :to="link.url">{{ link.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data: function() {
    return {
      links: [
        //  { title: "Home", url: "http://www.test.com" },
        //  { title: "Order Online", url: "http://www.test.com" },
        { title: "Home", url: "/" },
        { title: "Menu", url: "/menu" },
        { title: "Nutrition Information", url: "/nutrition-info" },
        { title: "Calculate Your Plate", url: "/calculate-your-plate" }
      ]
    };
  }
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}
nav ul {
  display: flex;
}
nav li {
  list-style: none;
}
nav a {
  font-size: 1.25rem;
  color: rgba(40, 66, 28);
  padding: 1rem;
}
</style>