<template>
  <div class="vue3页面模板测试">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <vue2code></vue2code>
    <el-input></el-input>
    <el-button>提交</el-button>
  </div>
</template>

<script>
import vue2code from './components/vue2code/index.vue'
import HelloWorld from './components/HelloWorld.vue'
import clonedeep from 'lodash.clonedeep'

export default {
  name: 'App',
  components: {
    HelloWorld,
    vue2code,
  },
  created() {
    const o = {
      a: 1,
      b: 2,
    }
    const o2 = clonedeep(o)
    console.log(o === o2)
  },
}
</script>

<style>
.vue3页面模板测试 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
