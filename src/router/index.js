import {createRouter,createWebHashHistory} from "vue-router";


const routes = [
    {
        name: "HomePage",
        path : "/",
        component : () => import("@/views/HomePage")
    },
    {
        name: "LoginPage",
        path : "/login",
        component : () => import("@/views/LoginPage")
    },
    {
        name: "RegisterPage",
        path : "/register",
        component : () => import("@/views/RegisterPage")
    },
    {
        name: "NewBookmarkPage",
        path : "/newbookmark",
        component : () => import("@/views/newBookmark")
    }

]



export default createRouter({
    routes,
    history : createWebHashHistory()
})

