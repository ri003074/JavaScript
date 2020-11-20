<template>
<div>
  <p>iine({{totalNumber}})</p>
  <p>iine({{halfNumber}})</p>
</div>
</template>

<script>
export default{
  props:{
    // こっちはキャメルケース camelCase
    // JavaScriptではキャメルケースgt
    totalNumber:{
      type:Number,
      defalt:10,
      // required:true,
    }
  },
  computed:{
    halfNumber(){
      return this.totalNumber/2;
    }
  }
}
</script>

<style scoped>
    div{
        border:1px solid red;
    }
</style>
