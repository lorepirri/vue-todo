<template>
  <div>
    <div class="overlay" v-if="this.editingTodoId != -1"></div>
    <input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo">
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        <div v-if="todo.editing == false">
          <input type="checkbox" @click="checkAsDoneTodo(todo)" value="todo.completed">
          <span :class="{checkedTodo: todo.completed}" @dblclick="editTodo(todo)">{{ todo.label }}</span>
          <button @click="removeTodo(todo)">Delete</button>
        </div>
        <div v-if="todo.editing == true">
          <input class="updateTodo" ref="editingTodo" v-model="editingTodo" @keydown.esc="stopEditingTodo()" @keydown.enter="updateTodo(todo)" placeholder="Enter a new label" value="todo.label">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: '',
      editingTodoId: -1,
      editingTodo: ''
    };
  },
  created() {
    window.addEventListener('click', this.onClick);
    window.addEventListener('keydown', this.onKeydown);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.onClick)
    window.removeEventListener('keydown', this.onKeydown);
  },  
  methods: {
    addTodo() {
      if (this.currentTodo.trim() != '') {
        this.todos.push({id: this.todos.length, label: this.currentTodo, completed: false, editing: false});
        this.currentTodo = '';
      }
    },
    removeTodo(todo) {
      if (this.editingTodoId == -1) {      
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      }
    },
    updateTodo(todo) {
      if (this.editingTodo.trim() != '' && this.editingTodoId == todo.id) {      
        var index = this.todos.indexOf(todo);
        this.todos[index].label = this.editingTodo;
        this.stopEditingTodo();
      }
    },    
    editTodo(todo) {
      if (this.editingTodoId == -1) {
        let index = this.todos.indexOf(todo);
        this.todos[index].editing = true;
        this.editingTodoId = index;
        this.editingTodo = this.todos[index].label;
      }
    },
    checkAsDoneTodo(todo) {
      var index = this.todos.indexOf(todo);
      // remove the todo
      this.todos.splice(index, 1);
      // created a new todo with the completed property toggled
      let checkedTodo = { ...todo, completed: !todo.completed };
      if (todo.completed) {
        //  and add back to the top of the list
        this.todos.unshift(checkedTodo);
      } else {
        // remove and add to the bottom of the list
        this.todos.push(checkedTodo);
      }
    },
    onClick(e) {
      if (this.$refs.editingTodo && !this.$refs.editingTodo.includes(e.target)) {
        this.stopEditingTodo();
      }      
    },
    stopEditingTodo() {
      if (this.editingTodoId != -1) {
        // set this todo as not anymore in editing mode
        this.todos[this.editingTodoId].editing = false;
        // reset id in editing mode
        this.editingTodoId = -1;
      }
    },
    onKeydown(e) {
      console.log("key");
      if(e.key == "Escape") {
        this.stopEditingTodo();
      }
    }          
  }
};
</script>

<style>
.checkedTodo {
  color: lightgray;
  text-decoration: line-through;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.5); /*dim the background*/
}

.updateTodo {
  position: relative;
  z-index: 11; /* 1px higher than the overlay layer */
}
</style>
