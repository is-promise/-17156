<template>
	<div class="cityHeader">
		<a class="back iconfont icon-fanhui"></a>
		<div class="city-header-title">
			<span class="title-position1">国内</span>
			<span class="title-position2">国外</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.cityHeader {
		float: left;		
		position: fixed;
		height:.88rem;
		width: 100%;
		background: #00afc7;
	}
	.back {
		display: block;
		font-size: 0.36rem;
		font-weight: bolder;
		color: white;	
		line-height: .88rem;	
		padding: 0 .18rem;
		float: left;
	}
	.city-header-title {
		float: left;
		display: flex;
		width: 84%;
		justify-content: center;
	}
	.city-header-title span {
		display: inline-block;
	    width: 2rem;
	    height: .56rem;
	    line-height: .56rem;
	    margin-top: .15rem;   
	    font-size: .28rem;
	    border: .02rem solid #fff;
	    
	    text-align: center;
	}
	.title-position1 {
		background: white;
		color: #00afc7;	
	}
	.title-position2 {
		color: white;	
	}
	
</style>