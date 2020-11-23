<template>
  <div id="app">
    <ChildVue  v-bind:number="randomNum"></ChildVue>
    <ChildVueObj  v-bind:obj="objdata" v-on:my-click="click"></ChildVueObj>
  </div>
</template>

<script>
import ChildVue from './components/ChildVue.vue'
import ChildVueObj from './components/ChildVueObj.vue'

export default {
  name: 'App',
  components: {
    ChildVue,
    ChildVueObj
  },
  data:function(){
    return {
      randomNum:9,
      objdata:[
        { a:'A', c:'C', },
        { a:'a', c:'c', },
      ]
    }
  },
  methods:{
    click(){
      console.log("emit!!!")
      this.objdata[0].a = 'X'
    }
  }
}
</script>
