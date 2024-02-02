<template>
    <div class="todo">
    <input type="checkbox" :checked="todo.done" @change="toggleTodo" style="margin-left: 240px;margin-top: 20px;">
    <span :class="{ done: todo.done }" style="margin-left: 10px;margin-right: 40px;">{{ todo.text }}</span>
    <button @click="deleteTodo">Delete</button>
  </div>
  </template>
  
  <script>

  export default {
    props: {
      todo: Object
    },
    methods: {
      toggleTodo() {
        this.$emit('toggle-todo', this.todo);
      },
      deleteTodo() {
        this.$emit('delete-todo', this.todo);
      }
    }
  }
  </script>
  
  <style>
  .done {
    text-decoration: line-through;
  }
  </style>
  