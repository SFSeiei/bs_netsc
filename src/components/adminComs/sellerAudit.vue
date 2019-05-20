<template>
	<!-- start personal Info  -->
	<div id="sellerAudit" class="col-md-10 ">
		<div class="col-md-12 bg-light">
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link active show" href="#applyMessages" data-toggle="tab">商家申请列表</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#applySucMessages" data-toggle="tab">已通过审核列表</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#applyUnsucMessages" data-toggle="tab">未通过审核列表</a>
					</li>
				</ul>
				<div class="tab-content border ">
					<div class="tab-content ml-3 mr-3 ">
						<!-- start applyMessage tab -->
						<div class="tab-pane active" id="applyMessages">
							<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，请在这里审核提交申请的用户。</h6>
							<form role="form" class="p-4 table-responsive" @submit.prevent=''>
								<table class="table table-hover table-bordered">
									<thead class="thead-light" >
										<tr>
											<th>用户编号</th>
											<th>用户名</th>
											<th>用户状态</th>
											<th>商家类型</th>
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(applyUser,index) in applyUsers" v-bind:key="applyUser.index">
											<td>{{index+1}}</td>
											<td>{{applyUser.username}}</td>
											<td class="text-info">{{applyUser.ustate}}</td>
											<td>{{applyUser.sType}}</td>
											<td>
												<button class="btn btn-info btn-sm " data-toggle="modal" data-target="#myModal" @click="detInfoMation(applyUser,'applybutton')" >详细信息</button>
												<!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
											</td>
										</tr>
									</tbody>
								</table>
							</form>
						</div>
						<!-- end applyMessage tab -->
						<!-- start applySucMessage Tab -->
						<div class="tab-pane" id="applySucMessages">
							<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，这里展示通过审核的用户。</h6>
							<form role="form" class="p-4 table-responsive" @submit.prevent=''>
								<table class="table table-hover table-bordered">
									<thead class="thead-light" >
										<tr>
											<th>用户编号</th>
											<th>用户名</th>
											<th>用户状态</th>
											<th>商家类型</th>
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(applySucUser,index) in applySucUsers" v-bind:key="applySucUser.index">
											<td>{{index+1}}</td>
											<td>{{applySucUser.username}}</td>
											<td class="text-danger">{{applySucUser.ustate}}</td>
											<td>{{applySucUser.sType}}</td>
											<td>
												<button class="btn btn-info btn-sm " data-toggle="modal" data-target="#myModal" @click="detInfoMation(applySucUser)">详细信息</button>
												<!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
											</td>
										</tr>
									</tbody>
								</table>
							</form>
						</div>
						<!-- end applySucMessage Tab -->
						<!-- start applyUnsucMessage Tab -->
						<div class="tab-pane" id="applyUnsucMessages">
							<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，这里展示未通过审核的用户。</h6>
							<form role="form" class="p-4 table-responsive" @submit.prevent=''>
								<table class="table table-hover table-bordered">
									<thead class="thead-light" >
										<tr>
											<th>用户编号</th>
											<th>用户名</th>
											<th>用户状态</th>
											<th>商家类型</th>
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(applyUnsucUser,index) in applyUnsucUsers" v-bind:key="applyUnsucUser.index">
											<td>{{index+1}}</td>
											<td>{{applyUnsucUser.username}}</td>
											<td class="text-muted">{{applyUnsucUser.ustate}}</td>
											<td>{{applyUnsucUser.sType}}</td>
											<td>
												<button class="btn btn-info btn-sm " data-toggle="modal" data-target="#myModal " @click="detInfoMation(applyUnsucUser)">详细信息</button>
												<!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
											</td>
										</tr>
									</tbody>
								</table>
							</form>
						</div>
						<!-- end applyUnsucMessage Tab -->
						<!-- 按钮：用于打开模态框 -->
						<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
							打开模态框
						</button> -->
						<!-- start infomations modal(模态框) -->
						<div class="modal fade" id="myModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">详细信息</h4>
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent='imply'>
											<div class="form-inline mt-3 mb-3">
												<label>
													头像信息：
												</label>
												<img alt="Bootstrap Image Preview" :src="myphoto" class="rounded-circle ml-3" style="{width: 100px;height: 100px;}" />
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													用&nbsp;户&nbsp;名：
												</label>
												<label class="ml-3" >
													{{username}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													昵&nbsp;&nbsp;&nbsp;&nbsp;称：
												</label>
												<label class="ml-3">
													{{nickname}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													真实姓名：
												</label>
												<label class="ml-3">
													{{realname}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													性&nbsp;&nbsp;&nbsp;&nbsp;别：
												</label>
												<label class="ml-3">
													{{usex}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													邮&nbsp;&nbsp;&nbsp;&nbsp;箱：
												</label>
												<label class="ml-3">
													{{email}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													联系电话：
												</label>
												<label class="ml-3">
													{{uTel}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													身份证号：
												</label>
												<label class="ml-3">
													{{uIDcard}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													居&nbsp;住&nbsp;地：
												</label>
												<label class="ml-3">
													{{address}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													店铺类型：
												</label>
												<label class="ml-3">
													{{sType}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													用户状态：
												</label>
												<label class="ml-3 text-info">
													{{uState}}
												</label>
											</div>
											
										</form>
									</div>

									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div id="footerButton" class="text-center">
											<button id="b4" type="button" class="btn btn-light border mt-5 mr-5" @click="notPass" data-dismiss="modal" v-if="auditButtonShow">
												审核未通过
											</button>
											<input id="b1" type="submit" class="btn btn-primary mt-5 ml-4" @click="pass" value="审核通过" data-dismiss="modal" v-if="auditButtonShow">
											<button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="!auditButtonShow">关闭</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end infomations modal(模态框) -->
					</div>
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
					roleId:null,
					applyUsers:[],
					applyingUsers:[],
					applySucUsers:[],
					applyUnsucUsers:[],
					myphoto:require("@/pages/index/assets/img/userImage/00.png"),
					nickname:null,
					realname:null,
					usex:null,
					email:null,
					uTel:0,
					uIDcard:'',
					address:null,
					sType:null,
					uState:null,
					auditButtonShow:true,
					uId:null
				}
			},
			components: {
			},
			mounted(){
				/*页面挂载获取username,id*/
				this.username=getCookie('username');
				this.userId=getCookie('id');
				this.roleId = getCookie('roleId');
				console.log(this.userId);
				this.$axios.get('/netsc/userinfos/'+'待审核').then((res)=>{
					console.log(res.data);
					this.applyUsers = res.data.result;
					console.log(this.applyUsers);
				});
				this.$axios.get('/netsc/userinfos/'+'已通过').then((res)=>{
					console.log(res.data);
					this.applySucUsers = res.data.result;
					console.log(this.applySucUsers);
				});
				this.$axios.get('/netsc/userinfos/'+'未通过').then((res)=>{
					console.log(res.data);
					this.applyUnsucUsers = res.data.result;
					console.log(this.applyUnsucUsers);
				});
			},
			methods:{
				pass(){
				 	let data = {"ustate":"已通过","urole":"个人商家","roleId":3};
				 	let id = this.uId;
				 	// console.log(id);
				 	// console.log(data);
				 	this.$axios.put('/netsc/userinfo/'+id,data).then((res)=>{
				 		console.log(this.userId);
				 		console.log(res.data);
				 		this.$axios.get('/netsc/userinfos/'+'待审核').then((res)=>{
				 			console.log(res.data);
				 			this.applyUsers = res.data.result;
				 			console.log(this.applyUsers);
				 		});
				 		this.$axios.get('/netsc/userinfos/'+'已通过').then((res)=>{
				 			console.log(res.data);
				 			this.applySucUsers = res.data.result;
				 			console.log(this.applySucUsers);
				 		});
				 		this.$axios.get('/netsc/userinfos/'+'未通过').then((res)=>{
				 			console.log(res.data);
				 			this.applyUnsucUsers = res.data.result;
				 			console.log(this.applyUnsucUsers);
				 		});
				 		alert("审核确认通过！");
				 	});
				 	this.$forceUpdate();
				},
				notPass(){
					let data = {"ustate":"未通过"};
				 	let id = this.uId;
				 	// console.log(id);
				 	// console.log(data);
				 	this.$axios.put('/netsc/userinfo/'+id,data).then((res)=>{
				 		// console.log(this.userId);
				 		// console.log(res.data);
				 		this.$axios.get('/netsc/userinfos/'+'待审核').then((res)=>{
				 			console.log(res.data);
				 			this.applyUsers = res.data.result;
				 			console.log(this.applyUsers);
				 		});
				 		this.$axios.get('/netsc/userinfos/'+'已通过').then((res)=>{
				 			console.log(res.data);
				 			this.applySucUsers = res.data.result;
				 			console.log(this.applySucUsers);
				 		});
				 		this.$axios.get('/netsc/userinfos/'+'未通过').then((res)=>{
				 			console.log(res.data);
				 			this.applyUnsucUsers = res.data.result;
				 			console.log(this.applyUnsucUsers);
				 		});
				 		alert("审核确认未通过！");
				 	});
				 	this.$forceUpdate();
				},
				detInfoMation(userinfo,ref){
					console.log(ref);
					if(ref==="applybutton"){
						this.auditButtonShow = true;
					}else{
						this.auditButtonShow = false;
					}
					if(userinfo.userImage != null){
						this.myphoto = userinfo.userImage;
					}
					this.nickname = userinfo.nickname;
					this.realname = userinfo.realname;
					this.usex = userinfo.uSex;
					this.email = userinfo.email;
					this.uTel = userinfo.uTel;
					this.uIDcard = userinfo.uIDcard;
					this.address = userinfo.address;
					this.sType = userinfo.sType;
					this.uState = userinfo.ustate;
					this.uId = userinfo.uId;
				}
			}

		}
	</script>
	
	<style>
	#recommendedHead img{
		max-width: 90px;
		max-height: 90px;
	}
	#footerButton{
		width: 100%;
		margin: auto;
	}
</style>
