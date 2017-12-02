<template>
	<div class="cityList" ref="listTop">
		<div class="position">
			<span>您的位置</span>
		</div>
		<div class="positionOne">
			<span>北京</span>
		</div>
		<div class="position1">
			<span>热门城市</span>
		</div>
		<div class="position-now">
			<ul>
				<li v-for="item in hotcity" :key="item.id">{{item.city}}</li>
			</ul>
		</div>
		<div class="position-list" v-for="items in list">
			<div class="positions" :ref="items[0]">{{items[0]}}</div>
			<ol>
				<li v-for="item in items[1]" :key="item.id">{{item.cityarea}}</li>
			</ol>
		</div>
		<div class="cityListFiexd" ref="boos">
			<span @touchstart="handleStart" v-for="items in list" >{{items[0]}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				eventTop:[]
			}
		},
		
		computed: {
			hotcity() {
				return this.$store.state.hotcity.hotcity
			},
			
			list() {
				return this.$store.state.list.list					
			}
		},
		
		methods: {
			handleStart:function(e) {									
				var a = e.touches[0].clientY;
				var b = this.$refs.boos.offsetTop
				var c = this.$refs.boos.offsetHeight/22				
				var d = a-b;
				var e = parseInt(d/c);
				var f = this.eventTop[e];				
				document.documentElement.scrollTop = f-45;
				document.addEventListener("touchmove",this.handleMoveTouch, false);
        		document.addEventListener("touchend",this.handleMoveEnd, false);
			},						
			
			handleMoveTouch:function(e) {
				var a1 = e.touches[0].clientY
				var b1 = this.$refs.boos.offsetTop
				var c1 = this.$refs.boos.offsetHeight/22	
				var d1 = a1-b1;
				var e1 = parseInt(d1/c1);
				var f1 = this.eventTop[e1];
				document.documentElement.scrollTop = f1-45;
			},
			
			handleMoveEnd() {
        		document.removeEventListener("touchmove", this.handleMoveTouch);
        		document.removeEventListener("touchend", this.handleMoveEnd);
        	}
		},
		
		updated() {			
			for(var i in this.list){					
				var Top=this.list[i][0]
				this.eventTop.push(this.$refs[Top][0].offsetTop)	
			}
			
		}
	}
</script>

<style>
	.position{
		line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	    background: #E5E7E8;
	    border-bottom:0.02rem solid #00AFC7 ;
	}
	.positionOne{
		height: 1.1rem;
		overflow: hidden;
	}
	.positionOne span{
		display: block;
		text-align: center;
		line-height:28px ;
		width: 2rem;
		border: .02rem solid #c9cccd;
		border-radius: .06rem;
		color: #25A4BB;
		margin: 0.2rem 0 0 0.3rem;
		
	}
	.position1{
		line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	    background: #E5E7E8;
	    border-bottom:0.02rem solid #00AFC7 ;
	}
	.position-now{
		float: left;
		padding-left: .2rem;
	}
	.position-now ul{		
		float: left;
		margin-bottom: .2rem;
	}	
	.position-now ul li{
		float: left;
		line-height:28px ;
		width: 2rem;
		border: .02rem solid #c9cccd;
		text-align: center;
		margin: .2rem .14rem 0 .1rem;
	}
	.positions{
		float: left;
		width: 100%;
		line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	    background: #E5E7E8;	   
	}
	.position-list ol li {
		line-height: .76rem;
	    padding-left: .2rem;
	    font-size: .28rem;
	    color: #212121;
	    border-bottom:0.01rem solid #E5E7E8;
	}
	.cityListFiexd {		
		position: fixed;
		right: 0;
		top: 25%;
	}
	.cityListFiexd span {
		display: block;
		width: .42rem;
	    line-height: .36rem;
	    padding-left: .3rem;
	    color: #00afc7;
	    font-size: .24rem;
	    text-align: center;
	}
</style>