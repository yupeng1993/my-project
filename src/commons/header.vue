<template>
	<div class="header">
		<div class="header_l">
			<img @click="go" src="../assets/yklogo@2x.png" alt="">
			<span><i></i>频 道 </span>
		</div>
		<div class="header_r">
			<router-link :to="{name: 'yup'}" tag="span"><i class="search"></i>搜索</router-link>
			<span ><i class="login"></i>登录</span>
		</div>
	</div>
</template>
<style scoped lang="less">
	.disf{
		display: flex;
	}
	.jsb{
		justify-content: space-between;
	}
	.fots(@font-size: 0.12rem){
		font-size:@arguments;
	}
	.wid(@width: 1rem){
		width:@arguments;
	}
	.hei(@height: 1rem){
		height:@arguments;
	}
	.disi{
		display: inline-block;
	}
	.disb{
		display: block;
	}
	.texc{
		text-align: center;
	}
	.header{
		.disf;
		.jsb;
		padding: 0 .1rem;
		.fots(0.12rem);
		.header_l,.header_r{
			.disf;
			align-items:flex-start;
			img{
				.wid(2.4rem);
			}
			span{
				.disi;
				i{
					.disb;
					.wid(.32rem);
					.hei(.32rem);
					margin:0 auto;
					background: url(../assets/mheader@2x.png) no-repeat;
					background-size: 1.92rem 2.88rem;
					
				}
				.search{
					background-position: -.48rem 0;
				}
				.login{
					background-position: -0 -.48rem;
				}
			}
			.on{
				color: red;
			}
		}
		
	}
	
</style>
<script>
	export default{
		data(){
			return{
				pdClick: false
			}
		},
		methods: {
			go(){
				this.$router.push('/yup')
			}
			
		}
	}
</script>