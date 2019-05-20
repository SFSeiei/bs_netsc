<template>
	<!-- start my shops Info  -->
	<div id="orderinfo" class="col-md-10 ">
		<div class="col-md-12 bg-light">
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link active show text-muted font-weight-bold" href="#shops" data-toggle="tab">订单详情</a>
					</li>
					<!-- <li class="nav-item">
						<a class="nav-link" href="#applySucMessages" data-toggle="tab">已通过审核列表</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#applyUnsucMessages" data-toggle="tab">未通过审核列表</a>
					</li> -->
				</ul>
				<div class="tab-content border ">
					<div class="tab-content ml-3 mr-3 ">
						<!-- start my shop messages tab -->
						<div class="tab-pane active" id="shops">
							<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，在这里您可以查看您的订单信息。</h6>
							<form role="form" class="p-4 table-responsive" @submit.prevent=''>
								<table class="table table-hover table-bordered">
									<thead class="thead-light" >
										<tr>
											<th>订单号</th>
											<th>店铺名</th>
											<th>店铺状态</th>
											<th>经营范围</th>
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(shop,index) in myshops" v-bind:key="shop.index">
											<td>{{index+1}}</td>
											<td>{{shop.sName}}</td>
											<td class="text-info">{{shop.shopState}}</td>
											<td>{{shop.bScope}}</td>
											<td>
												<button class="btn btn-info btn-sm " data-toggle="modal" data-target="#myModal" @click="detInfoMation(shop)" >详细信息</button>
												<!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
											</td>
										</tr>
									</tbody>
									<tfoot class="text-center">
									</tfoot>
								</table>
								<div id="addButton" class="text-center">
									<button class="btn btn-danger  " data-toggle="modal" data-target="#addModal" @click="">添加店铺</button>
								</div>
							</form>
						</div>
						<!-- end my shop messages tab -->
						<!-- 按钮：用于打开模态框 -->
						<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
							打开模态框
						</button> -->
						<!-- start my shop infomations modal(模态框) -->
						<div class="modal fade" id="myModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">店铺详细信息</h4>
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent=''>
											<div class="form-inline mt-3 mb-3">
												<label>
													店铺联系人名字：
												</label>
												<label class="ml-3" id="username" >
													{{shopMan}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													店铺联系方式：
													<!-- 用&nbsp;&nbsp;户&nbsp;名： -->
												</label>
												<label class="ml-3">
													{{shopManTel}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													店铺地址：
												</label>
												<label class="ml-3">
													{{sAddress}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													付款通道：
													<!-- 昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称： -->
												</label>
												<label class="ml-3">
													{{sPayDescribe}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													收款账号：
												</label>
												<label class="ml-3">
													{{sPayNumber}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label for="sex">
													店铺简述：
												</label>
												<label class="ml-3" id="sex">
													{{sDescribe}}
												</label>
											</div>
										</form>
									</div>

									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div class="footerButton text-center">
											<!-- <button id="b4" type="button" class="btn btn-light border mt-5 mr-5" @click="notPass" data-dismiss="modal" v-if="auditButtonShow">
												审核未通过
											</button>
											<input  name=""id="b1" type="submit" class="btn btn-primary mt-5 ml-4" @click="pass" value="审核通过" data-dismiss="modal" v-if="auditButtonShow">
											</input> -->
											<button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="!auditButtonShow">关闭</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end my shop infomations modal(模态框) -->
						<!-- start add shops modal(模态框) -->
						<div class="modal fade" id="addModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">添加店铺</h4>	
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent='imply'>
											<div class="form-inline mt-3 mb-3">
												<label>
													店铺名称：
												</label>
												<input type="text" class="form-control ml-3" v-model="sName">
												<!-- <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle img-thumbnail ml-3"/> -->
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													店铺地址：
												</label>
												<input type="text" class="form-control ml-3" v-model="sAddress">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													联系人名：
												</label>
												<input type="text" class="form-control ml-3" v-model="shopMan">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													联系方式：
													<!-- 用&nbsp;&nbsp;户&nbsp;名： -->
												</label>
												<input type="text" class="form-control ml-3" v-model="shopManTel">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													店铺状态：
												</label>
												<input type="text" class="form-control ml-3" v-model="shopState">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													经营范围：
												</label>
												<input type="text" class="form-control ml-3" v-model="bScope">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													付款通道：
													<!-- 昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称： -->
												</label>
												<input type="text" class="form-control ml-3" v-model="sPayDescribe">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													收款账号：
												</label>
												<input type="text" class="form-control ml-3" v-model="sPayNumber">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label for="sex">
													店铺简述：
												</label>
												<input type="text" class="form-control ml-3" v-model="sDescribe">
											</div>
										</form>
									</div>

									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div class="footerButton text-center">
											<!-- <button id="b4" type="button" class="btn btn-light border mt-5 mr-5" @click="notPass" data-dismiss="modal" v-if="auditButtonShow">
												审核未通过
											</button>
											<input  name=""id="b1" type="submit" class="btn btn-primary mt-5 ml-4" @click="pass" value="审核通过" data-dismiss="modal" v-if="auditButtonShow">
											</input> -->
											<button type="button" class="btn btn-primary" data-dismiss="modal" @click="addShops">提交</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end add shops modal(模态框) -->
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
			name: 'orderinfo',
			data () {
				return {
					username:null,
					userId:null,
					roleId:null,
					myshops:[],
					sName:null,
					sAddress:null,
					shopState:null,
					bScope:null,
					shopMan:null,
					shopManTel:null,
					sRegisteTime:null,
					sDescribe:null,
					sPayDescribe:null,
					sPayNumber:null,
					deliveryDescribe:null
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
				this.$axios.get('/netsc/shops/'+this.userId).then((res)=>{
					console.log(res.data);
					this.myshops = res.data.result;
					console.log(this.myshops);
				})
			},
			methods:{
				addShops(){
				 	let data = {"sname":this.sName,"bscope":this.bScope,"deliveryDescribe":this.deliveryDescribe,"sdescribe":this.sDescribe,"shopMan":this.shopMan,"shopManTel":this.shopManTel,"shopState":this.shopState,"spayDescribe":this.sPayDescribe,"spayNumber":this.sPayNumber,"uid":this.userId};
				 	// console.log(data)
				 	this.$axios.post('/netsc/shop',data).then((res)=>{
				 		console.log(res.data);
				 		alert("添加成功！");
				 	});
				 	this.$forceUpdate();
				},
				detInfoMation(shopinfo){
					console.log(shopinfo);
					this.shopMan = shopinfo.shopMan;
					this.shopManTel = shopinfo.shopManTel;
					this.sRegisteTime = shopinfo.sRegisteTime;
					this.sDescribe = shopinfo.sDescribe;
					this.sPayDescribe = shopinfo.sPayDescribe;
					this.sPayNumber = shopinfo.sPayNumber;
					this.deliveryDescribe = shopinfo.deliveryDescribe;
					this.sAddress = shopinfo.sAddress;
				}
			}

		}
	</script>
	
	<style>
	#recommendedHead img{
		max-width: 90px;
		max-height: 90px;
	}
	.footerButton{
		width: 100%;
		margin: auto;
	}
	/*#addButton{
		width: 100%;
		margin: auto;
	}*/
</style>
