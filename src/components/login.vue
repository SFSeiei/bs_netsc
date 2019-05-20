<template>
	<div class="login p-4">
		<div class="container">
			<div class="row">
				<div class="col-md-4 offset-md-4">
					<form class="border border-primary bg-light p-4" @submit.prevent="login">
						<h5 class="mb-4 mt-2">亲爱的，在此登录您的账号吧！</h5>
						<div class="form-inline mb-2 ">
							<label for="username">用户名：</label>
							<input type="username" class="form-control" id="username" v-model="username">
						</div>
						<div class="form-inline mb-2 mt-2">
							<label for="pwd">密&nbsp;&nbsp;码：</label>
							<input type="password" class="form-control" id="pwd" v-model="password">
						</div>
						<div class="form-check mt-2 pl-5 ml-3 mb-3">
							<!-- <label class="form-check-label float-left">
								<input class="form-check-input float-left" type="checkbox">记住密码
							</label>
							<label ><a class="text-muted" href="#">忘记密码？</a></label> -->
						</div>
						<input  type="submit" class="btn btn-primary mr-4 mb-3 mt-2" value="登录">
						<input type="reset" class="btn btn-danger ml-4 mb-3 mt-2" value="重置">
						<label class="mt-2">还没有账号，<a class="text-muted" href="/signup">立即注册</a></label>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import {setCookie,getCookie,delCookie} from '@/pages/index/assets/js/cookie.js'
	export default {
		name: 'login',
		data: function(){
			return{
				username:'',
				password:'',
				tishi:'',
				showTishi:false

			}
		},
		mounted(){
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if(getCookie('username')){
				this.$router.push('/')
			}
		},
		methods:{
			login(){
				if(this.username === "" || this.password === ""){
					alert("请输入用户名或密码")
				}else{
					let data = {'username':this.username,'password':this.password};
					/*接口请求*/
					this.$http.post('/netsc/login',data).then((res)=>{
						console.log(res.data);
						/*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
						if(res.data === -1){
							this.tishi = "该用户不存在";
							this.showTishi = true
						}else if(res.data.message === "您输入的密码不正确"){
							this.tishi = "密码输入错误";
							this.showTishi = true;
							alert(this.tishi)
						}else if(res.data === 'admin'){
							/*路由跳转this.$router.push*/
							this.$router.push('/main')
						}else{
							this.tishi = "登录成功";
							this.showTishi = true;
							alert(this.tishi);
							setCookie('username',this.username,1000*60);
							setCookie('id',res.data.map.id,1000*60);
							setCookie('roleId',res.data.map.roleId,1000*60);
							this.$emit("mt");
							setTimeout(function(){
								this.$router.push('/')
							}.bind(this),1000)
						}
					})
				}
			}
		}
	}
</script>
<style>

</style>
