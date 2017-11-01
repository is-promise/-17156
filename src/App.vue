<template>
  <div id="app">
   		<div class="test">{{msg}}{{age}}</div>
  </div>
</template>

<script>
export default {
  name:"HelloWorld",
  data(){
  	return {
  		msg:"欢迎来到我的王国",
  		age:18
  	}
  }
}
</script>

<style>
	@import "./reset.css";
		.test{
			background: blue;
		}
</style>
