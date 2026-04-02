const addOneItem = (state, todoItem) => {
  const obj = {complete: false, item: todoItem};
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);  // slice()는 새로운 배열을 반환
}

const toggleOneItem = (state, payload) => {
    // todoItem.completed = !todoItem.completed; // 자식 컴포넌트에게서 받은 데이터를 통짜로 받아서 값 수정하고 다시 내리는 거는 좋지 않은 패턴
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item); // update하는 API가 없어서 삭제 후, 변경된 completed 값으로 set
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

// export를 하면 화살표 함수로 선언하여 가져올 수 있음
export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
