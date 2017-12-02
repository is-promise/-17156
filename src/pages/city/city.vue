<template>
	<div>
 		<city-header/>
 		<city-input/>
 		<city-list/>
 	</div>
</template>

<script>
import cityHeader from "./components/cityHeader";
import cityInput from "./components/cityInput";
import cityList from "./components/cityList";

export default {
	components: {
		"city-header":cityHeader,	
		"city-input":cityInput,
		"city-list":cityList
	},
	
	mounted() {
		if(!this.$store.state.hotcity.length){
			this.$store.dispatch("gethotcity");				
		}		
	}
}
</script>


<style>


</style>
