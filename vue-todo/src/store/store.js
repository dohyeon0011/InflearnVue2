import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
  /*state: {
    // headerText: 'TODO it'
    todoItems: storage.fetch()
  },*/
  /*getters,
  mutations*/
  // getters: {
  //   storedTodoItems(state) {
  //     return state.todoItems;
  //   }
  // },
  /*mutations: {
    addOneItem(state, todoItem) {
      const obj = {complete: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);  // slice()는 새로운 배열을 반환
    },
    toggleOneItem(state, payload) {
      // todoItem.completed = !todoItem.completed; // 자식 컴포넌트에게서 받은 데이터를 통짜로 받아서 값 수정하고 다시 내리는 거는 좋지 않은 패턴
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item); // update하는 API가 없어서 삭제 후, 변경된 completed 값으로 set
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }*/
});