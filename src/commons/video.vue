<template>
	<div class="video">	
			<div class="video_img">
				<img :src="video.src" alt="">
				<span class="time" v-if="video.type==1">{{ video.time }}</span>
				<span class="now" v-if="video.type==2">{{ video.now }}</span>
			</div>
			<div class="video_til">
				<p>{{ video.title }}</p>
				<span><i></i>{{ video.playTimes }}万</span>
				<span><i></i>{{ video.commentsTimes }}</span>
			</div>		
	</div>
</template>
<style scoped lang="less">
	.video{
		display: inline-block;
		width: 44%;
		display:inline-block;
		background: #f5f5f5;
		font-size: .12rem;
		.video_img{
			position: relative;
			img{
				width: 100%;
			}
			span{
				position: absolute;
				bottom:0;
				right: 0;
				color:#fff;
			}
			.now{
				left: 0;
				text-align: left;
			}
		}
		.video_til{
			p{
				text-overflow:ellipsis;
			}
			span{
				text-align: center;
			}
		}
	
}
</style>
<script>
	export default{
		props:['video']
	} 
</script>