import Vue from  'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import UsersPosts from './views/UsersPosts.vue'
import UsersDetail from './views/UsersDetail.vue'
import HeaderDisplay from './views/HeaderDisplay.vue'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        { path: "/", components: {
            default:Home,
            header:HeaderDisplay
        }}, 
        { path: "/users/:id", 
            components:{
                default:Users, 
                header:HeaderDisplay,
            },
            // component:Users,
            props:{
                default:true,
                header:false
            },
            children:[
                { path: "posts",  component: UsersPosts },
                { path: "detail", component: UsersDetail, name: "users-id-detail"}
            ]

        } ]
})