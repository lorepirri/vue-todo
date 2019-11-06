<template>
  <div>
    <div class="overlay" v-if="this.editingTodoId != -1"></div>
    <md-field>
      <md-input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo"></md-input>
    </md-field>
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        <div v-if="todo.editing == false">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-10"><md-checkbox type="checkbox" @click="checkAsDoneTodo(todo)" v-model="todo.completed" /></div>
            <div class="md-layout-item md-layout md-alignment-center-left">
            <span :class="{checkedTodo: todo.completed}" @dblclick="editTodo(todo)">{{ todo.label }}</span></div>
            <div class="md-layout-item md-size-25"><md-button class="md-raised" @click="removeTodo(todo)">Delete</md-button></div>
            <div class="md-layout-item md-small-hide"></div>
          </div>    
        </div>
        <div v-if="todo.editing == true">
          <md-field class="updateTodo">
            <md-input 
              class="updateTodo" 
              ref="editingTodo" 
              v-model="editingTodo"
              v-todo-focus="true"
              @blur="stopEditingTodo()"
              @keydown.esc="stopEditingTodo()" 
              @keydown.enter="updateTodo(todo)" 
              placeholder="Enter a new label" 
              value="todo.label"></md-input>
          </md-field>
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
      if(e.key == "Escape") {
        this.stopEditingTodo();
      }
    }          
  },
  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }  
};
</script>

<style>
.todos {
  list-style-type: none;
}

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
  background: white;
  z-index: 11; /* 1px higher than the overlay layer */
}
</style>
