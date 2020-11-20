<template>

<div>
  <LikeHeader></LikeHeader>
  <h2>{{number}}</h2>

  <!-- こっちはケバブケース kebabu-case -->
  <!-- HTMLではケバブケースを推奨 -->
  <LikeNumber total-number="8"></LikeNumber> 
  <LikeNumber v-bind:total-number="number"></LikeNumber>
</div>

</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import LikeNumber from './components/LikeNumber.vue'

export default {
  name: 'App',
  data:function(){
    return {
      number:5,
    }
  },
  components: {
    LikeHeader,
    LikeNumber
  }
}

</script>

<style scoped>
</style>