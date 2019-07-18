import Vue from 'vue';
import Vuex from 'vuex';
import Login from './modules/login'

Vue.use(Vuex);

const store=new Vuex.Store({
    strict:false,
    modules:{
        Login
    }
})

window.$store=store;
export default store;