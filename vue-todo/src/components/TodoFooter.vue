<template>
  <div>
    <span class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    </span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    // clearTodo() {
    //   // this.$emit('clearItems');
    //   this.$store.commit('clearAllItems');
    // }
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
  cursor: pointer;
}
</style>