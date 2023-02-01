<template>
  <main>
    <section>
      <h1>Counter: {{ counter }}</h1>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const counter = ref<number>(0)

  function increment() {
    counter.value += 1
  }

  function decrement() {
    counter.value -= 1
  }
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

section {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  gap: 1rem;
}

h1 {
  width: 100%;
  font-size: 3rem;
  line-height: 3.25rem;
  text-align: center;
  padding-bottom: .5rem;
}

button {
  width: 6rem;
  height: 2.5rem;
  cursor: pointer;
}
</style>