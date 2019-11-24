import Vue from 'vue'
import Router from 'vue-router'
import Users from "../components/Users";
import UsersForm from "../components/Users/Form";

Vue.use(Router)

const routes = [
    {
        name: "home",
        path: "/",
        component: Users
    },
    {
        name:"new",
        path:"/users/new",
        component: UsersForm
    },
    {
        name:"edit",
        path:"/users/:id/edit",
        component: UsersForm,
    }
]

const router = new Router({ routes })

export default router;