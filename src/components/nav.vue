<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const path = computed(() => route.path);
</script>

<template>
  <nav>
    <router-link to="/" :class="path == '/' ? 'active' : ''">Home</router-link>
    <router-link :class="path == '/counter' ? 'active' : ''" to="/counter"
      >Counter</router-link
    >
  </nav>
</template>

<style scoped>
nav {
  box-shadow: 0px 1px 10px 0px rgba(147, 146, 146, 0.5);
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
}

a {
  color: #b2a9c1;
  text-decoration: none;
  font-size: 1.2rem;
}

a:hover {
  color: #fff;
}

.router-link-active {
  color: rgb(139, 139, 15);
  font-weight: 600;
}
</style>
