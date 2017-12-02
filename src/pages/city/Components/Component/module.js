import axios from "axios";
export default {
	state:{
		hotcity: [],
		list:[]
	},
	actions:{
		gethotcity(context) {			
			axios.get("../static/city.json")
			  .then((res) => {
				  	if (res.status === 200) {
						const {data} = res	
						context.commit("changehotcityInfo",data);
						context.commit("changehotcityListInfo",data);
					}
			  })
		}			
				
	},
	mutations:{
		changehotcityInfo(state,data){		
			state.hotcity = data.hotcity				
		},
		
		changehotcityListInfo(state,data){		
			state.list = data.data		
		},
	},
	getters:{}
}