<template>
	<!-- start personal massage  -->
	<div class="col-md-10 " id="perMessage">
		<div class="container bg-light">
			<!-- start basic personal massage  -->
			<div class="row">
				<div class="col-md-3 mt-4">
					<a href="/perCenter/perInfo">
						<img alt="Bootstrap Image Preview" :src="user.userImage" class="rounded-circle" style="{width: 140px;height: 140px;width: 140px;}" />
					</a>
				</div>
				<div class="col-md-9 mt-2">
					<div class="card text-left">
						<h5 class="card-header">
							用户名：{{username}}
						</h5>
						<div class="card-body">
							<p class="card-text">
								是否为商家：<span v-if="isSeller" class="text-danger">是</span><span v-if="!isSeller" class="text-danger">否</span> 
							</p>
						</div>
						<div class="card-footer">
							联系方式：{{user.utel}}
						</div>
					</div>
				</div>
			</div>
			<!-- end basic personal massage  -->
			<!-- start personal shopping points  -->
			<div class="row pt-1 pb-1 border border-left-0 border-right-0 mt-3 mb-2">
				<div class="col-md-12 text-left mt-2" >
					<label class="ml-2">个人账户：</label>
					<label v-if="walletIsOpening && !isFirstUse">
						<span class="text-danger">{{money}}</span>元
					</label>
					<label v-if="!walletIsOpening">
						您还未开通个人钱包！
					</label>
					<label v-if="walletIsOpening && isFirstUse">
						请设置个人密码！
					</label>
				</div>
			</div>
			<!-- end personal shopping points  -->
			<div class="row">
				<!-- start recently has buy -->
				<div class="col-md-3">
					<h6 class="text-left mt-2 p-2">推荐蔬菜：</h6>
					<div class="row" id="hasBuy">
						<div class="col-md-4 p-0" v-for="(product,index) in threeProducts" :key="product.index">
							<img alt="Bootstrap Image Preview" :src="product.pPhoto" class="rounded-circle" style="{width: 70px;height:70px;width: 70px;}" />
							<span>{{product.pName}}</span>
						</div>
					</div>
				</div>
				<!-- end recently has buy -->
				<!-- start comsume sum -->
				<div class="col-md-9 ">
					<div class="container border border-bottom-0 border-right-0 border-top-0">
						<h6 class="text-left mt-2 p-2">消费累计：</h6>
						<div class="row">
							<div class="col-md-4">
								<h6 class="text-muted mt-2 p-2">
									消费总金额(元)
								</h6>
								<h4 class="text-danger">
									{{consumptionSum}}
								</h4>
							</div>
							<div class="col-md-4">
								<h6 class="text-muted mt-2 p-2">
									完成订单数(笔)
								</h6>
								<h4 class="text-danger">
									{{orderNumber}}
								</h4>
							</div>
							<div class="col-md-4">
								<h6 class="text-muted mt-2 p-2">
									消费排名
								</h6>
								<h4 class="text-danger">
									暂无排名
								</h4>
							</div>
						</div>
					</div>
				</div>
				<!-- end comsume sum -->
			</div>
			<!-- start my privilege -->
			<!-- <div class="row border border-left-0 border-right-0 pt-1 pb-1 mt-2 mb-2">
				<div class="col-md-12">
					<h6 class="text-left mt-2 p-2">我的特权：</h6>
					<div class="row">
						<div class="col-md-3">
							<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle img-thumbnail" />
							<h6 class="text-muted mt-2 p-2">专享优惠券</h6>
						</div>
						<div class="col-md-3">
							<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle img-thumbnail"/>
							<h6 class="text-muted mt-2 p-2">首次消费礼</h6>
						</div>
						<div class="col-md-3">
							<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle img-thumbnail"/>
							<h6 class="text-muted mt-2 p-2">商城活动礼</h6>
						</div>
						<div class="col-md-3">
							<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle img-thumbnail"/>
							<h6 class="text-muted mt-2 p-2">消费积分礼</h6>
						</div>
					</div>
				</div>
			</div> -->
			<!-- end my privilege -->
			<!-- start my mission -->
			<div class="row pt-1 pb-1 border border-left-0 border-right-0 mt-3 mb-2">
				<div class="col-md-12">
					<h6 class="text-left mt-2 p-2">我的任务：</h6>
					<div class="row">
						<div class="col-md-3">
							<img alt="Bootstrap Image Preview" :src="mission1" class=""/>
							<h6 class="text-muted mt-2 p-2">每日签到</h6>
						</div>
						<div class="col-md-3">
							<img alt="Bootstrap Image Preview" :src="mission2" class=""/>
							<h6 class="text-muted mt-2 p-2">完善资料</h6>
						</div>
						<div class="col-md-3">
							<img alt="Bootstrap Image Preview" :src="mission3" class=""/>
							<h6 class="text-muted mt-2 p-2">首笔消费</h6>
						</div>
						<div class="col-md-3">
							<img alt="Bootstrap Image Preview" :src="mission4" class=""/>
							<h6 class="text-muted mt-2 p-2">每日消费</h6>
						</div>
					</div>
				</div>
			</div>
			<!-- end my mission -->
			<!-- start my order -->
			<div class="row pt-1 pb-1 mt-3 mb-2">
				<div class="col-md-12">
					<h6 class="text-left mt-2 p-2">未付款订单：</h6>
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
					</form>
				</div>
			</div>
			<!-- end my order -->
			<!-- start you love -->
			<div class="row pt-1 pb-1 border border-left-0 border-right-0 mt-3 mb-2">
				<div class="col-md-12">
					<h6 class="text-left mt-2 p-2">猜你喜欢</h6>
					<div class="table-responsive">
						<table class="table table-bordered bg-light" id="mainBodyTwoTable">
							<tbody>
								<tr>
									<td v-for="(product,index) in sixProducts" :key="product.index">
										<div class="">
											<img :src="product.pPhoto" style="{width: 88px;height: 72px;width: 88px;}">
										</div>
										<div class="">
											<strong class="small">[{{product.bCName}}]</strong><br>
											<span class="text-secondary">{{product.pName}}</span><br>
											<span class="text-left small text-danger">平台价：{{product.pMemPrice}}/斤</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- end you love -->
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
									<label class="ml-3">
										<span class="text-primary">{{myMoney}}</span>元
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
										待付款项：
									</label>
									<label class="ml-3">
										<span class="text-danger">{{mPrice}}</span>元
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
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
		</div>
	</div>
	<!-- end person massage  -->
</template>

<script>
	import {setCookie,getCookie,delCookie} from '@/pages/index/assets/js/cookie.js'
	export default {
		name: 'perMessage',
		data () {
			return {
				isSeller:false,
				sellerName:'',
				contactWay:'暂无',
				consumeSum:0,
				orderNem:0,
				shoppingPoint:0,
				userId:'',
				username:'您还未登录！',
				roleId:null,
				user:{"userImage":this.myphoto,"utel":0},
				myphoto:require("@/pages/index/assets/img/userImage/00.png"),
				walletIsOpening:false,
				isFirstUse:true,
				money:null,
				consumptionSum:0,
				orderNumber:0,
				allProducts:[],
				sixProducts:[],
				threeProducts:[],
				mission1:require('@/pages/index/assets/img/icons/mission1.png'),
				mission2:require('@/pages/index/assets/img/icons/mission2.png'),
				mission3:require('@/pages/index/assets/img/icons/mission3.png'),
				mission4:require('@/pages/index/assets/img/icons/mission4.png'),
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
			this.$axios.get('/netsc/products').then((res)=>{
				console.log(res.data);
				if (res.data.result != null) {
					this.allProducts = res.data.result;
					this.sixProducts = this.getRandomArrayElements(this.allProducts,6);
					this.threeProducts = this.getRandomArrayElements(this.allProducts,3)
				}
			});
			/*页面挂载获取username,id*/
			if(getCookie('username')){
				this.username=getCookie('username');
				this.userId=getCookie('id');
				this.roleId=getCookie('roleId');
				if(this.roleId!==1 && this.roleId!==2){
					this.isSeller=true
				}
				this.$http.get('/netsc/userinfo/'+this.userId).then((res)=>{
					console.log(res.data);
					this.user = res.data.result;
					if(this.user.userImage == null){
						this.user.userImage = this.myphoto
					}
				});
				this.$axios.get("/netsc/wallet/uid="+this.userId).then((res)=>{
					console.log(res.data);
					// console.log(res.data.result.firstUse)
					if (res.data.result != null) {
						this.walletIsOpening = true;
						if(res.data.result.firstUse ==="false"){
							this.isFirstUse = false;
							this.money = res.data.result.money
						}
					}
				});
				this.$http.get('/netsc/order/uid='+this.userId).then((res)=>{
					console.log(res.data);
					if (res.data.result != null) {
						var orders = [];
						var sum = 0;
						for (var i = 0;i<res.data.result.length; i++) {
							if(res.data.result[i].oState === "已完成"){
								orders.push(res.data.result[i]);
								sum = sum + res.data.result[i].mPrice;
							}
						}
						this.consumptionSum = sum.toFixed(2);
						this.orderNumber = orders.length
					}
				});
				this.$axios.get('/netsc/order/uid='+this.userId).then((res)=>{
					console.log(res.data);
					if (res.data.result != null) {
						var noPayOrder =[];
						for (var i = 0; i < res.data.result.length; i++) {
							if (res.data.result[i].oState === "未付款") {
								noPayOrder.push(res.data.result[i])
							}
						}
						this.myorders = noPayOrder;
						console.log(this.myorders)
					}
				})
			}else{
				this.user = {"userImage":this.myphoto,"utel":0}
			}
		},
		methods:{
			getRandomArrayElements(arr, count) {
				var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
				while (i-- > min) {
					index = Math.floor((i + 1) * Math.random());
					temp = shuffled[index];
					shuffled[index] = shuffled[i];
					shuffled[i] = temp;
				}
				return shuffled.slice(min);
			},
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
					this.myCommentButtonShow = false
				}else if(orderinfo.oState === "已发货"){
					this.payButtonShow = false;
					this.getGoodsButtonShow = true;
					this.myCommentButtonShow = false
				}else if(orderinfo.oState === "已收货" || orderinfo.oState === "已完成"){
					this.payButtonShow = false;
					this.getGoodsButtonShow = false;
					this.myCommentButtonShow = true
				}
				if (orderinfo.oState === "未付款") {
					this.payShow = false;
					this.paymoneyShow = false
				}else if (orderinfo.oState === "已付款") {
					this.payShow = true;
					this.paymoneyShow = false
				}else if(orderinfo.oState === "已发货"||orderinfo.oState === "已收货" || orderinfo.oState === "已完成"){
					this.paymoneyShow = true;
					this.payShow = true
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
.footerButton{
	width: 100%;
	margin: auto;
}
</style>
