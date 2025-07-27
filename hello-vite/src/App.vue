<script setup>
import HelloWorld from './components/HelloWorld.vue'
import HelloApi from './components/HelloApi.vue'
</script>

<template>
  <div>
    <HelloApi />
  </div>
  <div>
    <a>
      <img src="/coming_soon.jpg" class="titleImg"/>
    </a>
  </div>
  <HelloWorld msg="Coming Soon..." />
</template>

<style scoped>
.titleImg {
  height: 60em;
  padding: 15em;
  will-change: filter;
  transition: filter 300ms;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
