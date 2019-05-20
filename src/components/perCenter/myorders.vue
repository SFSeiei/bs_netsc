<template>
	<!-- start my shops Info  -->
	<div id="myorders" class="col-md-10 ">
		<div class="col-md-12 bg-light pb-3">
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link active show text-muted font-weight-bold" href="#shops" data-toggle="tab">我的订单</a>
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
											<th>时间</th>
											<th>订单状态</th>
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(oreder,index) in myorders" v-bind:key="oreder.index">
											<td>{{index+1}}</td>
											<!-- <td>{{}}</td> -->
											<td >{{oreder.createTime}}</td>
											<td class="text-info">{{oreder.oState}}</td>
											<td>
												<button class="btn btn-info btn-sm "data-toggle="modal" data-target="#myModal" @click="detInfoMation(oreder)" >订单详情</button>
												<!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
											</td>
										</tr>
									</tbody>
									<tfoot class="text-center">
									</tfoot>
								</table>
								<!-- <div id="addButton" class="text-center">
									<button class="btn btn-danger  " data-toggle="modal" data-target="#addModal" @click="">添加店铺</button>
								</div> -->
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
										<h4 class="modal-title">订单详细信息</h4>
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent=''>
											<div class="form-inline mt-3 mb-3">
												<label>
													收货地址：
												</label>
												<label class="ml-3" id="getAddress" >
													{{getAddress}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													收货人名：
													<!-- 用&nbsp;&nbsp;户&nbsp;名： -->
												</label>
												<label class="ml-3">
													{{linkmanName}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													收货号码：
												</label>
												<label class="ml-3">
													{{telphone}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													收货方式：
													<!-- 昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称： -->
												</label>
												<label class="ml-3">
													{{getGWay}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label v-if="payShow">
													付款时间：
												</label>
												<label class="ml-3">
													{{payTime}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3" v-if="payShow">
												<label for="payWay">
													付款方式：
												</label>
												<label class="ml-3" id="payWay">
													{{payWay}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3" v-if="paymoneyShow">
												<label for="sendGTime">
													发货时间：
												</label>
												<label class="ml-3" id="sendGTime">
													{{sendGTime}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3" v-if="paymoneyShow">
												<label>
													配送人员：
												</label>
												<label class="ml-3">
													{{dName}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													商品详情：
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label class="ml-3" id="tel">
													<table class="table table-hover table-bordered ">
														<thead class="thead-light" >
															<tr>
																<th>商品编号</th>
																<th>商品名称</th>
																<th>商品数量</th>
																<th>商家价格</th>
															</tr>
														</thead>
														<tbody>
															<tr v-for="(pro,index) in orderinfos" v-bind:key="pro.pId">
																<td>{{index+1}}</td>
																<td>{{pro.pName}}</td>
																<td class="">{{pro.pNumber}}</td>
																<td class="text-danger">{{pro.pPrice}}元/斤</td>
															</tr>
														</tbody>
													</table>
												</label>
											</div>
											<div class="form-inline mt-3 mb-3" v-if="myCommentButtonShow">
												<label>
													订单评价：
												</label>
												<label class="ml-3">
													{{oComment}}
												</label>
												<button ref="" type="button" class="btn btn-danger btn-sm order ml-3" @click=""  data-toggle="modal" data-target="#commentModal" data-dismiss="modal" v-if="">
													我要评价
												</button>
											</div>
										</form>
									</div>

									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div class="footerButton text-center">
											<button ref="payRightNowButton" type="button" class="btn btn-danger border mt-5 mr-5" @click="pay" data-dismiss="modal" v-if="payButtonShow">
												立即付款
											</button>
											<button ref="checkGetGoodsButton" type="button" class="btn btn-danger border mt-5 mr-5" @click="checkGetGoods" data-dismiss="modal" v-if="getGoodsButtonShow">
												确认收货
											</button>
											<button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="!payButtonShow && !getGoodsButtonShow">关闭</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end my shop infomations modal(模态框) -->
						<!-- 按钮：用于打开付钱模态框 -->
						<button ref="payButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#payModal" style="display:none; ">
							打开付钱模态框
						</button>
						<!-- start pay  modal(模态框) -->
						<div class="modal fade" id="payModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">付款信息</h4>
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent=''>
											<div class="form-inline mt-3 mb-3">
												<label>
													付款方式：
												</label>
												<label class="ml-3">
													个人钱包
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													钱包余额：
													<!-- 用&nbsp;&nbsp;户&nbsp;名： -->
												</label>
												<label class="ml-3" >
													<span class="text-primary">{{myMoney}}</span>元
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label >
													待付款项：
												</label>
												<label class="ml-3">
													<span class="text-danger">{{mPrice}}</span>元
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label >
													付款后余额：
												</label>
												<label class="ml-3">
													<span class="text-danger">{{lastMoney}}</span>元
												</label>
											</div>
										</form>
									</div>

									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div class="footerButton text-center">
											<button ref="" type="button" class="btn btn-danger border mt-5 mr-5" @click="payPass" data-dismiss="modal" v-if="">
												确认付款
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end pay infomations modal(模态框) -->
						<!-- 按钮：用于打开支付密码模态框 -->
						<button ref="payPasswordButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#payPasswordModal" style="display:none; ">
							打开支付密码模态框
						</button>
						<!-- start payPassword modal(模态框) -->
						<div class="modal fade" id="payPasswordModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">正在付款...</h4>
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form ref="payPasswordform" role="form" class="p-4 border" @submit.prevent='checkPayPassword'>
											<div class="form-inline mt-3 mb-3">
												<label>
													支付密码：
												</label>
												<input type="password" class="form-control ml-3" id="payPassword" v-model="payPassword">
												<button ref="payPasswordButtonSubmit" type="submit" style="display: none;">提交</button>
											</div>
										</form>
									</div>
									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div class="footerButton text-center">
											<button ref="closePayPasswordButton" type="button" class="btn btn-danger border mt-5 mr-5" @click="" data-dismiss="modal" v-if="">
												关闭
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end payPassword modal(模态框) -->
						<!-- 按钮：用于打开评价模态框 -->
						<button ref="commentButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#commentModal" style="display:none; ">
							打开评价模态框
						</button>
						<!-- start my comments  modal(模态框) -->
						<div class="modal fade" id="commentModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">请评价！</h4>
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent=''>
											<div class="form-inline mt-3 mb-3">
												<label>
													您的评价：
												</label>
												<input type="text" class="form-control ml-3" v-model="myCommets">
											</div>
										</form>
									</div>

									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div class="footerButton text-center">
											<button ref="" type="button" class="btn btn-primary border mt-5 mr-5" @click="submitComment" data-dismiss="modal" v-if="">
												提交
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end my comments infomations modal(模态框) -->
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
			name: 'myorders',
			data () {
				return {
					username:null,
					userId:null,
					roleId:null,
					myorders:[],
					orderinfos:[],
					myMoney:0,
					lastMoney:0,
					payPassword:"",
					orderId:"",
					myCommets:null,
					dId:null,
					dName:null,
					linkmanName:"",
					telphone:0,
					getAddress:null,
					getGWay:null,
					getGTime:null,
					mPrice:null,
					oComment:null,
					payTime:null,
					payWay:null,
					sendGTime:null,
					payButtonShow:false,
					getGoodsButtonShow:false,
					myCommentButtonShow:false,
					payShow:false,
					paymoneyShow:false
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
				this.$axios.get('/netsc/order/uid='+this.userId).then((res)=>{
					console.log(res.data);
					if (res.data.result != null) {
						this.myorders = res.data.result;
						console.log(this.myorders)
					}
				})
			},
			methods:{
				detInfoMation(orderinfo){
					console.log(orderinfo);
					this.orderId = orderinfo.orderId;
					this.dId = orderinfo.dId;
					this.dName = orderinfo.dName;
					this.getAddress = orderinfo.getAddress;
					this.linkmanName = orderinfo.linkmanName;
					this.telphone = orderinfo.telphone;
					this.getGWay = orderinfo.getGWay;
					this.getGTime = orderinfo.getGTime;
					this.mPrice = orderinfo.mPrice;
					this.oComment = orderinfo.oComment;
					this.payTime = orderinfo.payTime;
					this.payWay = orderinfo.payWay;
					this.sendGTime = orderinfo.sendGTime;
					this.$axios.get('/netsc/orderinfo/oid='+orderinfo.orderId).then((res)=>{
						console.log(res.data);
						this.orderinfos = res.data.result;
						console.log(this.orderinfos)
					});
					if (orderinfo.oState === "未付款") {
						this.payButtonShow = true;
						this.getGoodsButtonShow = false;
						this.myCommentButtonShow = false;
					}else if(orderinfo.oState === "已发货"){
						this.payButtonShow = false;
						this.getGoodsButtonShow = true;
						this.myCommentButtonShow = false;
					}else if(orderinfo.oState === "已收货" || orderinfo.oState === "已完成"){
						this.payButtonShow = false;
						this.getGoodsButtonShow = false;
						this.myCommentButtonShow = true;
					}
					if (orderinfo.oState === "未付款") {
						this.payShow = false;
						this.paymoneyShow = false;
					}else if (orderinfo.oState === "已付款") {
						this.payShow = true;
						this.paymoneyShow = false;
					}else if(orderinfo.oState === "已发货"||orderinfo.oState === "已收货" || orderinfo.oState === "已完成"){
						this.paymoneyShow = true;
						this.payShow = true;
					}
				},
				pay(){
					this.$axios.get('/netsc/wallet/uid='+this.userId).then((res)=>{
						console.log(res.data);
						if (res.data.result == null) {
							alert("请先开通个人钱包！")
						}else if(res.data.result.money-this.mPrice<0){
							alert("余额不足！请充值后在尝试。")
						}else{
							this.$refs.payButton.click();
							this.myMoney = res.data.result.money;
							this.lastMoney = (res.data.result.money-this.mPrice).toFixed(2)
						}
					})
				},
				payPass(){
					this.$refs.payPasswordButton.click()
				},
				checkPayPassword(){
					this.$axios.get('/netsc/wallet/uid='+this.userId).then((res)=>{
						// console.log(res.data)
						if(this.payPassword === res.data.result.payPassword){
							let data = {"money":this.lastMoney};
							console.log(data);
							var myDate = this.getNowFormatDate();
							this.$axios.put('/netsc/wallet/'+this.userId,data).then((res)=>{
								console.log(myDate);
								let sencondData = {"payTime":myDate,"payWay":"在线付款","ostate":"已付款"};
								this.$axios.put('/netsc/order/'+this.orderId,sencondData).then((res)=>{
									console.log(res.data);
									alert("付款成功");
									window.location.reload()
								})
							})
						}

					})
				},
				getNowFormatDate() {//获取当前时间
					var date = new Date();
					var seperator1 = "-";
					var seperator2 = ":";
					var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
					var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
					var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
					+ " "  + date.getHours()  + seperator2  + date.getMinutes()
					+ seperator2 + date.getSeconds();
					return currentdate;
				},
				checkGetGoods(){
					let nowDate = this.getNowFormatDate();
					let data = {"getGTime":nowDate,"ostate":"已收货","ocomment":"无"};
					console.log(data);
					this.$axios.put('/netsc/order/'+this.orderId,data).then((res)=>{
						console.log(res.data);
						this.$axios.put('/netsc/distributor/'+this.dId,{"dstate":"空闲"}).then((res)=>{
							console.log(res.data);
							alert("商品已确认收到，请给一个小小的评价吧！");
							this.$refs.commentButton.click()
						})
					})
				},
				submitComment(){
					if(this.myCommets != null && this.myCommets !== ""){
						let data = {"ocomment":this.myCommets};
						this.$axios.put('/netsc/order/'+this.orderId,data).then((res)=>{
							console.log(res.data);
							alert("非常感谢您的评价！");
							window.location.reload()
						})
					}else{
						alert("欢迎随时对本次购物做出评价！")
					}
				}
			},
			watch: { //深度 watcher
				payPassword: {
					handler: function (val, oldVal) { 
						if (this.payPassword.length ===6) {
							this.$refs.payPasswordButtonSubmit.click()
						} 

					},
					deep: true
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
