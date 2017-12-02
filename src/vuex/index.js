import Vue from 'vue'
import Vuex from 'vuex'
import oneday from "../pages/oneday/Components/Component/module.js"
import hotcity from "../pages/city/Components/Component/module.js"

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		nav: oneday,
		datagoInfo: oneday,
		hotcity: hotcity,
		list:hotcity
	}
})
