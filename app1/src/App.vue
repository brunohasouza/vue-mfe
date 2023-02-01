<template>
  <main>
    <h1>ToDo</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todo">
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(item, index) in todos" :key="index">{{ item }}</li>
    </ul>
  </main>
</template>

<script>
  export default {
    methods: {
      addTodo() {
        if (!this.todo) {
          return
        }

        this.todos.push(this.todo)
        this.todo = ''
      }
    },
    data() {
      return {
        todo: '',
        todos: []
      }
    }
  }
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

h1 {
  font-size: 3rem;
  line-height: 3.25rem;
}

input {
  width: 15rem;
  height: 2.5rem;
  margin-right: 1rem;
  padding: .5rem 1rem;
  font-size: 1rem;
}

button {
  height: 2.5rem;
  width: 6rem;
  padding: 0;
}

ul {
  list-style: none;
  width: 30rem;
}

li {
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: center;
  padding: .5rem 1rem;
}

li:nth-child(2n + 1) {
  background-color:#DDD;
}
</style>