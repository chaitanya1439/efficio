<template>
  <div class="todo">
    <input type="checkbox" :checked="todo.done" @change="toggleTodo" style="margin-left: 210px;margin-top: 10px;">
    <span :class="{ done: todo.done }" style="margin-right: 40px;">{{ todo.text }}</span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    todo: {
      type: Object as () => { done: boolean; text: string },
      required: true
    }
  },
  methods: {
    toggleTodo(): void {
      this.$emit('toggle-todo', this.todo);
    },
    deleteTodo(): void {
      this.$emit('delete-todo', this.todo);
    }
  }
});
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>
