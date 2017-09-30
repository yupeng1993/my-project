<template>
	<div class="test">
		<slot></slot>
		<h1>{{ toutou }}</h1>
		<input type="text" name="" @keydown.enter="addTask">
		<p v-for="(item,index) in tasks">
			<input type="checkbox" @click="item.checked = !item.checked">
			<span :class="{isfinish:item.checked}">{{ item.content }}</span>
			<button @click="remove(index)">删除</button>
		</p>
		<h2 v-if="!tasks.length">你已经完成所有任务</h2> 
	</div>
</template>

<style scoped>
	.isfinish{
		color: #ccc;
	}

	
</style>

<script>
export default{
	props:['toutou'],
   created(){
   	if(localStorage.getItem('tasks')){
   		var data = localStorage.getItem("tasks")
   		this.tasks = JSON.parse(data)
   	}
   },
   data(){
   	return {
   		tasks: []
   	}
   },
   watch:{
   	tasks(newVal){
   		console.log("new="+newVal.length)
   	}
   },
   methods:{
   	addTask (e) {
   		var task = {
   			content:e.target.value,
   			checked:false
   		}
   		e.target.value = ""
   		this.tasks.push(task)
   		var data=JSON.stringify(this.tasks)
   		localStorage.setItem('tasks',data)
   		this.$emit('hi',this.tasks)
   	},
   	remove(index){
   		this.tasks.splice(index, 1)
   		var data=JSON.stringify(this.tasks)
   		localStorage.setItem('tasks',data)
   	}
   }
}
</script>







