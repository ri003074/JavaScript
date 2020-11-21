<template>
    <div>
        <h2>Users</h2>
        <router-link to ="/users/1">user1</router-link>
        <router-link to ="/users/2">user2</router-link>
        <hr>
        <h1>Use No. {{ id }}</h1>
        <router-link :to="'/users/' + (Number(id) + 1 ) + '/detail/'">next</router-link>
        <router-link :to="{name:'users-id-detail', params:{id: Number(id) + 1}, query:{lang:'ja'}}">next</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ["id"],
    watch: {
        $route(to, from){
            console.log(to);
            console.log(from);
            console.log("changed");
        }
    }
}
</script>