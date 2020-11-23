<template>
<div>
    <p>child {{ number }}</p>
</div>
    
</template>

<script>
export default {
    props:["number"],

    computed:{
        childdata(){
            return this.randomNum
        }
    },

}
</script>
