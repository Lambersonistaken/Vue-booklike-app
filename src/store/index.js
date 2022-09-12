import {createStore} from "vuex";

export default createStore({
    state : {
        user : null,

    },

    getters : {
        _isAuthenticated: state => state.user != null,
        _getCurrentUser(state){
            const user = state.user
            delete user?.password
            return user
        }
    }
})