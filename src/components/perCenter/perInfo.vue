<template>
	<!-- start personal Info  -->
	<div id="perInfo" class="col-md-10">
		<div class="col-md-12 bg-light pb-3">
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link active show" href="#tabPerMessage" data-toggle="tab">个人信息</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#tabContactWay" data-toggle="tab">收货地址</a>
					</li>
				</ul>
				<div class="tab-content border ">
					<!-- start personal Message Tab -->
					<div class="tab-pane active pb-3" id="tabPerMessage">
						<div class="tabbable" id="PerMessage">
							<ul class="nav nav-tabs mt-3 ml-3 mr-3">
								<li class="nav-item">
									<a class="nav-link active show small" href="#tabBasicMessage" data-toggle="tab">基本资料</a>
								</li>
								<li class="nav-item">
									<a class="nav-link small" href="#tabPhoto" data-toggle="tab">头像照片</a>
								</li>
								<li class="nav-item">
									<a class="nav-link small" href="#tabPassword" data-toggle="tab">修改密码</a>
								</li>
							</ul>
							<div class="tab-content ml-3 mr-3 border ">
								<!-- start basic message tab -->
								<div class="tab-pane active" id="tabBasicMessage">
									<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，请填写真实的资料，享有优惠更便捷。</h6>
									<form role="form" class="p-4" @submit.prevent='userinfo'>
										<div class="form-inline mt-3 mb-3">
											<label>
												当前头像：
											</label>
											<img alt="Bootstrap Image Preview" :src="myphoto" class="rounded-circle ml-3" width="100" height="100" />
										</div>
										<div class="form-inline mt-3 mb-3" id="recommendedHead">
											<label>
												推荐头像：
											</label>
											<img alt="Bootstrap Image Preview" :src="examplephoto1" class="rounded-circle ml-3" width="50" height="50" @click="useExamplePhoto(examplephoto1)"/>
											<img alt="Bootstrap Image Preview" :src="examplephoto2" class="rounded-circle ml-3" width="50" height="50" @click="useExamplePhoto(examplephoto2)"/>
											<img alt="Bootstrap Image Preview" :src="examplephoto3" class="rounded-circle ml-3" width="50" height="50" @click="useExamplePhoto(examplephoto3)"/>
											<img alt="Bootstrap Image Preview" :src="examplephoto4" class="rounded-circle ml-3" width="50" height="50" @click="useExamplePhoto(examplephoto4)"/>
										</div>
										<div class="form-inline mt-3 mb-3">
											<label>
												昵&nbsp;&nbsp;&nbsp;&nbsp;称：
											</label>
											<input type="text" class="form-control ml-3" v-model="nickname"/>
										</div>
										<div class="form-inline mt-3 mb-3">
											<label>
												真实姓名：
											</label>
											<input type="text" class="form-control ml-3" v-model="realname"/>
										</div>
										<div class="form-inline mt-3 mb-3">
											<label for="sex">
												性&nbsp;&nbsp;&nbsp;&nbsp;别：
											</label>
											<input type="text" class="form-control ml-3" id="sex" v-model="usex"/>
										</div>
										<div class="form-inline mt-3 mb-3">
											<label for="birthday">
												邮&nbsp;&nbsp;&nbsp;&nbsp;箱：
											</label>
											<input type="text" class="form-control ml-3" id="birthday"
											v-model="email"/>
										</div>
										<div class="form-inline mt-3 mb-3">
											<label for="tel">
												联系电话：
											</label>
											<input type="text" class="form-control ml-3" id="tel" v-model="uTel"/>
										</div>
										<div class="form-inline mt-3 mb-3">
											<label for="idCard">
												身份证号：
											</label>
											<input type="text" class="form-control ml-3" id="idCard" v-model="uIDcard"/>
										</div>
										<div class="form-inline mt-3 mb-3">
											<label for="constellation">
												居&nbsp;住&nbsp;地：
											</label>
											<input type="text" class="form-control ml-3" id="constellation" v-model="address"/>
										</div>
										<button type="submit" class="btn btn-primary">
											保存
										</button>
									</form>
								</div>
								<!-- end basic message tab -->
								<!-- start photo tab -->
								<div class="tab-pane" id="tabPhoto">
									<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，在这里你可以上传你的专属头像。</h6>
									<form role="form" class="p-4">
										<div class="form-inline mt-3 mb-3">
											<label>
												当前头像：
											</label>
											<img id="myPhotoShow" alt="Bootstrap Image Preview" :src="myphoto" class="rounded-circle ml-3" width="100" height="100" />
										</div>
										<div class="form-inline mt-3 mb-3">
											<label>
												选择图片：
											</label>
											<form action="" enctype="multipart/form-data">
												<input type="button" id="i-check" value="浏览" class="btn btn-success ml-2 pl-5 pr-5" onclick="$('#i-file').click();">
												<input type="file" id='i-file' @change="changepic($event)" accept="image/gif,image/jpeg,image/jpg,image/png" style="display: none">
											</form>
										</div>
										<button type="button" class="btn btn-primary" @click="uploadMyPhoto">
											上传
										</button>
									</form>
								</div>
								<!-- end photo tab -->
								<!-- start photo tab -->
								<div class="tab-pane" id="tabPassword">
									<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，在这里你可以修改您的密码。</h6>
									<form role="form" class="p-4">
										<div class="form-inline mt-3 mb-3">
											<label>
												新的密码：
											</label>
											<input type="password" class="form-control ml-3" v-model="newPassword"/>
										</div>
										<div class="form-inline mt-3 mb-3">
											<label>
												确认密码：
											</label>
											<input type="password" class="form-control ml-3" v-model="newPasswordComfirm"/>
										</div>
										<button type="button" class="btn btn-primary" @click="newPasswordSubmit">
											修改
										</button>
									</form>
								</div>
								<!-- end photo tab -->
							</div>
						</div>
					</div>
					<!-- end personal Message Tab -->
					<!-- start contact way Tab -->
					<div class="tab-pane" id="tabContactWay">
						<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，请确认您的收货地址。</h6>
						<form role="form" class="p-4 table-responsive" @submit.prevent=''>
							<table class="table table-hover table-bordered">
								<thead class="thead-light" >
									<tr>
										<th>地址编号</th>
										<th>地址名称</th>
										<th>联系人</th>
										<th>联系电话</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(add,index) in addresses" v-bind:key="add.index">
										<td>{{index+1}}</td>
										<td>{{add.addName}}</td>
										<td>{{add.linkmanName}}</td>
										<td>{{add.telphone}}</td>
										<th>
											<button class="btn btn-danger btn-sm" @click="delAddress(add.addId)">删除</button>
										</th>
									</tr>
								</tbody>
							</table>
							<div class="mt-3 mb-3 border pb-3">
								<h6 class="text-left mt-2 p- ml-3">添加新的收货地址：</h6>
								<div class="form-inline mt-3 mb-3">
									<label class="ml-3" >
										地址名称：
									</label>
									<input type="text" class="form-control ml-3" v-model='getaddress'/>
									<label class="ml-3" >
										联系人：
									</label>
									<input type="text" class="form-control ml-3" v-model="linkmanName"/>
									<label class="ml-3" >
										联系方式：
									</label>
									<input type="text" class="form-control ml-3" v-model='linkmanTel'/>
								</div>
								<button type="submit" class="btn btn-primary" @click="addAddress">
									添加
								</button>
							</div>
						</form>
					</div>
					<!-- end contact way Tab -->
				</div>
			</div>
		</div>
	</div>
	<!-- end person Info  -->
</template>

<script>
	import {setCookie,getCookie,delCookie} from '@/pages/index/assets/js/cookie.js'
	export default {
		name: 'perInfo',
		data () {
			return {
				username:null,
				userId:null,
				roleId:1,
				myphoto:require("@/pages/index/assets/img/userImage/00.png"),
				uploadFile:"",
				examplephoto1:require("@/pages/index/assets/img/userImage/0.png"),
				examplephoto2:require("@/pages/index/assets/img/userImage/1.png"),
				examplephoto3:require("@/pages/index/assets/img/userImage/2.png"),
				examplephoto4:require("@/pages/index/assets/img/userImage/3.png"),
				nickname:null,
				realname:null,
				usex:null,
				email:null,
				uTel:0,
				uIDcard:'',
				address:null,
				addresses:[],
				getaddress:null,
				linkmanName:null,
				linkmanTel:null,
				newPassword:null,
				newPasswordComfirm:null
			}
		},
		components: {
		},
		mounted(){
			/*页面挂载获取username,id*/
			this.username=getCookie('username');
			this.userId=getCookie('id');
			if(getCookie('id')===2){
				this.isSeller=true;
				this.roleId=2
			}
			console.log(this.userId);
			this.$axios.get('/netsc/userinfo/'+this.userId).then((res)=>{
				console.log(res.data);
				if (res.data.result != null) {
					this.nickname = res.data.result.nickname;
					this.realname = res.data.result.realname;
					this.usex = res.data.result.usex;
					this.email = res.data.result.email;
					this.uTel = res.data.result.utel;
					this.uIDcard = res.data.result.uidcard;
					this.address = res.data.result.address;
					if(res.data.result.userImage == null){
						this.myphoto = this.myphoto;
					}else{
						this.myphoto = res.data.result.userImage;
					}
				}
			});
			this.$axios.get('/netsc/address/'+this.userId).then((res)=>{
				console.log(res.data);
				if (res.data.result != null) {
					this.addresses = res.data.result;
				}
			})
		},
		methods:{
			userinfo(){
				let data = {"email":this.email,"nickname":this.nickname,"realname":this.realname,"uidcard":this.uIDcard,"utel":this.uTel,"usex":this.usex,"address":this.address};
				let id = this.userId;
				console.log(id);
				console.log(data);
				this.$axios.put('/netsc/userinfo/'+id,data).then((res)=>{
					// console.log("调用userinfo")
					// console.log(this.userId)
					// console.log(res.data)
					if (this.uploadFile==="") {
						this.$axios.put('/netsc/userinfo/'+this.userId,{"userImage":this.myphoto}).then((res)=>{
						// console.log("调用userinfo")
						// console.log(this.userId)
						console.log(res.data);
						alert("保存成功！");
						window.location.reload();
						})
					}else{
						var formData = new FormData();
						// formFile.append("file", this.myphoto);
						formData.append('file', this.uploadFile);
						// preUploadList.forEach((file) => {
						// 	formData.append('file', file);
						// });
						// let config = {
						// 	headers:{'Content-Type':'multipart/form-data'}
						// }
						console.log(formData);
						this.$axios.put('/netsc/userinfo/uploadPic/'+this.userId,formData).then((res)=>{
						// console.log("调用userinfo")
						// console.log(this.userId)
						console.log(res.data);
						alert("保存成功！");
						window.location.reload();
						})
					}				
				})
			},
			addAddress(){
				let data = {"addName":this.getaddress,"linkmanName":this.linkmanName,"telphone":this.linkmanTel,"uid":this.userId};
				console.log(data);
				this.$axios.post('/netsc/address',data).then((res)=>{
					// console.log("调用userinfo")
					// console.log(this.userId)
					console.log(res.data);
					alert("添加成功！");
					this.$axios.get('/netsc/address/'+this.userId).then((res)=>{
						console.log(res.data);
						this.addresses = res.data.result;
						this.getaddress = null;
						this.linkmanName = null;
						this.linkmanTel = null;
					})
				})
			},
			delAddress(addId){
				this.$axios.delete('/netsc/address/'+addId).then((res)=>{
					// console.log("调用userinfo")
					// console.log(this.userId)
					console.log(res.data);
					alert("删除成功！");
					this.$axios.get('/netsc/address/'+this.userId).then((res)=>{
						console.log(res.data);
						this.addresses = res.data.result;
					})
				})			
			},
			changepic(obj) {
		        // console.log(obj);//这里可以获取上传文件的name
		        var newsrc=this.getObjectURL(obj.explicitOriginalTarget.files[0]);
		        this.myphoto=newsrc;
		        this.uploadFile = obj.explicitOriginalTarget.files[0]
		        // console.log(this.myphoto)
		    },
			//建立一個可存取到該file的url
			getObjectURL(file) {
				var url = null ;
		        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
		        if (window.createObjectURL!==undefined) { // basic
		        	url = window.createObjectURL(file) ;
		        } else if (window.URL!==undefined) { // mozilla(firefox)
		        	url = window.URL.createObjectURL(file) ;
		        } else if (window.webkitURL!==undefined) { // webkit or chrome
		        	url = window.webkitURL.createObjectURL(file) ;
		        }
		        return url ;
		    },
		    useExamplePhoto(examplephoto){
		    	console.log(examplephoto);
		    	this.myphoto = examplephoto;
		    	this.uploadFile = "";
		    },
		    uploadMyPhoto(){
		    	var formData = new FormData();
				// formFile.append("file", this.myphoto);
				formData.append('file', this.uploadFile);
				// preUploadList.forEach((file) => {
				// 	formData.append('file', file);
				// });
				// let config = {
				// 	headers:{'Content-Type':'multipart/form-data'}
				// }
				console.log(formData);
				this.$axios.put('/netsc/userinfo/uploadPic/'+this.userId,formData).then((res)=>{
						// console.log("调用userinfo")
						// console.log(this.userId)
						console.log(res.data);
						alert("上传成功！");
						window.location.reload();
					})
		    },
		    newPasswordSubmit(){
		    	if(this.newPasswordComfirm === "" ||this.newPassword === ""){
					alert("输入的新密码为空！");
				}else if(this.newPasswordComfirm !== this.newPassword){
					alert("新密码不一致！请重新输入。");
				}else{
					let data = {'password':this.newPassword};
					this.$http.put('/netsc/user/'+this.userId,data).then((res)=>{
						console.log(res);
						if (res.data.result === 1) {
							alert("修改成功！");
						}else{
							alert("修改失败！");
						}
					})
				}		
		    }
		}
	}
</script>
<style>
	#recommendedHead img{
		max-width: 90px;
		max-height: 90px;
	}
</style>
