<template>
	<div class="home">
		<router-link to="/oneday">
			<button class="f-homeBtn">点击跳转一日游页</button>
		</router-link>
		<router-link to="/city">
			<button class="f-homeBtn1">点击跳转城市列表</button>
		</router-link>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.f-homeBtn {
		height: 1rem;
		font-size: .4rem;
	}
	.f-homeBtn1 {
		height: 1rem;
		font-size: .4rem;
	}
</style>