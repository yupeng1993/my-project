<template>
	<div class="iii">
		首页
		<transition name="fadeIn">
			<router-view></router-view>			
		</transition>
		<router-view name="x"></router-view>
	</div>
</template>
<style>
	
</style>
<script>
	export default{
		created(){
			this.$ajax({
			method:'get',
			baseURL:'/api',
			url:'neihan/service/tabs/',
			// params:{
			// 	dev1
			// }
			// data:{} post请求写这里
			}).then((data) => {
				this.article = data.data.data
			})
		},
		data(){
			return {
				article: ''
			}
		}
	}
</script>