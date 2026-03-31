<template>
  <div id="app">
    <TodoHeader></TodoHeader>
<!--    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>-->
<!--    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>-->
<!--    <TodoFooter v-on:clearItems="clearAllItems"></TodoFooter>-->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {  // mutations
    // addOneItem(todoItem) {
    //   // 하위 컴포넌트로부터 받은 이벤트(+값)을 기반으로 item을 저장하는 로직
    //   const obj = {complete: false, item: todoItem};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);  // slice()는 새로운 배열을 반환
    // },
    // toggleOneItem(todoItem, index) {
    //   // todoItem.completed = !todoItem.completed; // 자식 컴포넌트에게서 받은 데이터를 통짜로 받아서 값 수정하고 다시 내리는 거는 좋지 않은 패턴
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item); // update하는 API가 없어서 삭제 후, 변경된 completed 값으로 set
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
