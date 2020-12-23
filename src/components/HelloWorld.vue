<template>
  <div class="box">
    <input type="text" v-model="stu.id">
    <input type="text" v-model="stu.name">
    <input type="text" v-model="stu.age">
    <button @click="add">添加</button>
    <li v-for="item in state.stus" :key="item.id" @click="deFn(item.id)">{{item.name}}  --  {{item.age}}</li>
  </div>
</template>

<script>
import {reactive, ref, watchEffect} from "vue"
import ToDoAdd from "./add.js"
import ToDoListFn from "./delete.js"
export default {
  name: "app",
  setup() {
    let {state,deFn}=ToDoListFn();
    let {stu,add}=ToDoAdd(state);
    return {state,deFn,stu,add}
  },
};


</script>
