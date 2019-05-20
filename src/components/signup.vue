<template>
	<div class="signup p-4">
		<div class="container">
			<div class="row">
				<div class="col-md-4 offset-md-4">
					<form class="border border-primary bg-light p-4" @submit.prevent="register">
						<h5 class="mb-4 mt-2">您可以在这进行注册哦！</h5>
						<div class="form-inline mb-2 ">
							<label for="username">用&nbsp;户&nbsp;名：</label>
							<input type="username" class="form-control" id="username" v-model='newUsername'>
						</div>
						<div class="form-inline mb-2 mt-2">
							<label for="pwd1">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
							<input type="password" class="form-control" id="pwd1" v-model='newPassword1'>
						</div>
						<div class="form-inline mb-2 mt-2">
							<label for="pwd2">确认密码：</label>
							<input type="password" class="form-control" id="pwd2" v-model='newPassword2'>
						</div>
						<input  type="submit" class="btn btn-primary mr-4 mb-3 mt-2" value="注册" >
						<input type="reset" class="btn btn-danger ml-4 mb-3 mt-2" value="重置" >
						<label class="mt-2">已有账号，<a class="text-muted" href="/login">立即登录</a></label>
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
		name: 'signup',
		data: function(){
			return{
				showLogin: true,
        showRegister: false,
        username: '',
        password: '',
        ischongfu:false,
				newUsername:'',
				newPassword1:'',
				newPassword2:'',
				lastTime: "string",
				onLineState: "string",
				registeTime: "string",
				roleId: 1,
				uRole: "string",
			}
		},
		methods:{
			register(){
				if(this.newUsername === "" || this.newPassword1 === "" ||this.newPassword2 === ""){
					alert("请输入用户名或密码")
				}else if(this.newPassword1 !==this.newPassword2){
					alert("密码不一致！请重新输入。")
				}else{
					this.$http.get('/netsc/users').then((res)=>{
						for(var i=0;i<res.data.result.length;i++){
							if (this.newUsername === res.data.result[i].username) {
								this.ischongfu=true;
								break
							}
						}
						if(this.ischongfu===true){
							alert("该用户名已经注册，请重新输入！");
							this.ischongfu=false
						}else{
							let data = {'username':this.newUsername,'password':this.newPassword1,'roleId':this.roleId};
							console.log(data);
							this.$http.post('/netsc/user',data).then((res)=>{
								console.log(res);
								if(res.data.status === "ok"){
									// alert("注册成功！")
									let data = {'username':this.newUsername,'password':this.newPassword1};
									/*接口请求*/
									this.$http.post('/netsc/login',data).then((res)=>{
										console.log(res.data);
										/*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
										if(res.data === -1){
											this.tishi = "该用户不存在";
											this.showTishi = true
										}else if(res.data === 0){
											this.tishi = "密码输入错误";
											this.showTishi = true
										}else if(res.data === 'admin'){
											/*路由跳转this.$router.push*/
											this.$router.push('/main')
										}else{
											this.tishi = "注册成功，请开始购物吧！";
											this.showTishi = true;
											alert(this.tishi);
											setCookie('username',this.newUsername,1000*60);
											setCookie('id',res.data.map.id,1000*60);
											setCookie('roleId',res.data.map.roleId,1000*60);
											this.$emit("mt");
											this.newUsername=null;
											this.newPassword1=null;
											this.newPassword2=null;
											setTimeout(function(){
												this.$router.push('/')
											}.bind(this),1000)
										}
									})
									/*注册成功之后再跳回登录页*/
									// setTimeout(function(){
									// 	console.log("注册失败！")
									// }.bind(this),1000)
								}
							})
						}
					})	
				}
			}
		}
	}
</script>
<style>
	
</style>
