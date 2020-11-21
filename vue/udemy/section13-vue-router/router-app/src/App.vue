<template>
  <div style="width:700px; margin:auto">
    
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.link{
  margin-right:10px;
}
.active--link{
  font-size:20px;
}
</style>