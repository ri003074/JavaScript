<template>
    <div>
        <h1> Home </h1>
        <button v-on:click="toUsers">go to Users page</button>
    </div>
</template>

<script>
export default {
    methods:{
        toUsers(){
            // this.$router.push({path:'users'});
            this.$router.push({
                name: "users-id-detail",
                params:{ id:1 }
            });
        }
    }
}
</script>