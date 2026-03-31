import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webapck-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    // headerText: 'TODO it'
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {complete: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, index) {
      localStorage.removeItem(state.item);
      state.todoItems.splice(index, 1);  // slice()는 새로운 배열을 반환
    },
    toggleOneItem(state, index) {
      // todoItem.completed = !todoItem.completed; // 자식 컴포넌트에게서 받은 데이터를 통짜로 받아서 값 수정하고 다시 내리는 거는 좋지 않은 패턴
      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem(state.item); // update하는 API가 없어서 삭제 후, 변경된 completed 값으로 set
      localStorage.setItem(state.item, JSON.stringify(state));
    },
    clearAllItems() {
      localStorage.clear();
      this.state.todoItems = [];
    }
  }
});