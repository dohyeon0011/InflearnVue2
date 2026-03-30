<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keydown.enter="addTodo">
    <!-- <button v-on:click="addTodo">Add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
      <!-- slot을 사용하게 되면 하위 컴포넌트의 내용을 다시 재정의할 수 있음 -->
      <h3 slot="header">
        경고!
      </h3>

      <div slot="body">
        추가하려는 값을 입력해주세요.
      </div>

      <div slot="footer">
        <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      "newTodoItem": '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        // this.$emit('addTodoItem', this.newTodoItem);
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
  cursor: pointer;
}

.closeModalBtn {
  color:#42b983;
  cursor: pointer;
}
</style>