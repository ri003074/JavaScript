<template>
<div>
    <p>child {{ obj[0].a }}</p>
    <p>child {{ obj[0].c }}</p>
    <button v-on:click="click">btn</button>
</div>
    
</template>

<script>
export default {
    props:["obj"],

    computed:{
    },
    methods:{
        click(){
            console.log("click")
        },
        keydown(){
            console.log("keydown!")
            this.$emit("my-click")
        }

    },
    mounted(){
        window.addEventListener('keydown', this.keydown);
    }

}
</script>
