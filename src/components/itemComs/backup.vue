<template>
	<!-- start personal Info  -->
	<div id="trolley" class="col-md-10 ">
		<div class="col-md-12 bg-light">
			<!-- start trolley  -->
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a ref='a1' class="nav-link  disabled" :class="{active:isActive1,'font-weight-bold':isActive1}" href="" data-toggle="tab">购物车</a>
					</li>
				</ul>
				<div class="tab-content border ">
					<div class="tab-pane active" id="selectType">
						<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，这里展示您的购物车里的商品。</h6>
						<form role="form" class="p-4 table-responsive" @submit.prevent=''>
							<table class="table table-hover table-bordered">
								<thead class="thead-light" >
									<tr>
										<th>商品编号</th>
										<th>商品名称</th>
										<th>商品数量</th>
										<th>商家价格</th>
										<th>
											<div class="form-check p-0">
												<label class="form-check-label">
													全选
												</label>
												<input type="checkbox" class="form-check-input ml-1" v-model='checked' v-on:click='checkedAll'>
											</div>
										</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(pro,index) in checkboxList" v-bind:key="pro.pId">
										<td>{{index+1}}</td>
										<td>{{pro.pName}}</td>
										<td class="">
											<form class="form-inline " @submit.prevent=''>
												<div class="numberInput">
													<button class="btn btn-info btn-sm " @click = "pro.pNumber-- ">&lt;</button>
													<input type="text" class="form-control" v-model='pro.pNumber'>
													<button class="btn btn-info btn-sm " @click = "pro.pNumber++">&gt;</button>
													<span class="ml-1">斤</span>
												</div>
											</form>
										</td>
										<td class="text-danger">{{pro.pPrice}}元/斤</td>
										<td>
											<div class="form-check">
												<input type="checkbox" class="form-check-input" v-model='checkboxList' :value="pro">
											</div>
										</td>
										<td>
											<button class="btn btn-info btn-sm " data-toggle="modal" data-target="#myModal" @click="">删除</button>
											<!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
										</td>
									</tr>
								</tbody>
							</table>
							<div id="addButton" class="text-right">
								<label>checkboxList:{{checkboxList}}</label>
								<label class="mt-2">总共：</label><label class="mt-2 mr-4 text-danger">{{pSum}}元</label>
								<button class="btn btn-danger float-right mr-4" data-toggle="modal" data-target="#trolleyInfo" @click="checkOrder">提交订单</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<!-- end trolley -->
			<!-- start trolley infomations modal(模态框) -->
			<div class="modal fade" id="trolleyInfo">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<!-- 模态框头部 -->
						<div class="modal-header">
							<h4 class="modal-title">订单信息</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>

						<!-- 模态框主体 -->
						<div class="modal-body">
							<form role="form" class="p-4 border" @submit.prevent='imply'>
								<div class="form-inline mt-3 mb-3">
									<label>
										用&nbsp;&nbsp;户&nbsp;名：
									</label>
									<label class="ml-3">
										{{username}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
										收获地址：
									</label>
									<label class="ml-3">
										<form>
											<div class="form-group">
												<select class="form-control" id="sel1">
													<option v-for="(address,index) in addressList" v-bind:key="index" @click="adressinfo(address)">{{address.addName}}</option>
												</select>
												<br>
											</div>
										</form>
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
										联系人名：
									</label>
									<label class="ml-3">
										{{address.linkmanName}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
										联系电话：
									</label>
									<label class="ml-3">
										{{address.telphone}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
										商品明细：
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label class="ml-3">
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
												<tr v-for="(pro,index) in checkboxList" v-bind:key="pro.pId">
													<td>{{index+1}}</td>
													<td>{{pro.pName}}</td>
													<td class="">{{pro.pNumber}}</td>
													<td class="text-danger">{{pro.pPrice}}元/斤</td>
												</tr>
											</tbody>
										</table>
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
										总共价钱：
									</label>
									<label class="ml-3 text-danger">
										{{pSum}} <span class="ml-1">元</span>
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
										订单状态：
									</label>
									<label class="ml-3 text-info">
										{{orderState}}
									</label>
								</div>
							</form>
						</div>

						<!-- 模态框底部 -->
						<div class="modal-footer align-content-center">
							<div id="footerButton" class="text-center">
								<!-- <button id="b4" type="button" class="btn btn-light border mt-5 mr-5" @click="notPass" data-dismiss="modal" v-if="auditButtonShow">
									审核未通过
								</button> -->
								<input  name="" id="b1" type="submit" class="btn btn-primary mt-5" @click="submitOrder" value="确认提交" data-dismiss="modal">
							<!-- <button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="!auditButtonShow">关闭</button> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end trolley infomations modal(模态框) -->
		</div>
	</div>
	<!-- end person Info  -->
</template>

<script>
	import {setCookie,getCookie,delCookie} from '@/pages/index/assets/js/cookie.js'
	export default {
		name: 'trolley',
		data () {
			return {
				username:null,
				userId:null,
				roleId:1,
				allPros:[],
				pSum:null,
				isActive1: true,
				isActive2: false,
				isActive3: false,
				isNotActive:false,
				sType:"个人店铺",
				uPreState:null,
				orderState:"订单未提交",
				nickname:null,
				realname:null,
				usex:null,
				email:null,
				uTel:0,
				uIDcard:'',
				address:null,
				addressList:[],
				checkboxList:[],
				checked: false
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
			this.$axios.get('/netsc/trolleys/uid='+this.userId).then((res)=>{
				console.log(res.data);
				this.allPros = res.data.result;
				this.checkboxList = this.allPros;
				var sum = 0;
				for (var i=0;i<this.checkboxList.length;i++){
					sum = sum+this.allPros[i].pNumber*this.allPros[i].pPrice;
				}
				this.pSum = sum.toFixed(2);
			});
			this.$axios.get('/netsc/address/'+this.userId).then((res)=>{
				console.log(res.data);
				this.addressList = res.data.result;
				this.address = this.addressList[0];
			})
		},
		methods:{
			buyNow(product){
				console.log(product);
				this.$router.push({
					path: '/allitems/item',
					query: {
						item: product
					}
				})
			},
			checkedAll: function() {
            if (this.checked) {//实现反选
            	this.checkboxList = [];
            } else { //实现全选
            	this.checkboxList = [];
            	this.allPros.forEach( (item) => {
            		this.checkboxList.push(item);
            	});
            }
            console.log(this.checkboxList)
            // console.log(this.checkboxList[0].pName)
            // console.log(this.checkboxList[1].pName)
            // console.log(this.checkboxList[2].pName)
            // console.log(this.checkboxList[0].pNumber)
            // console.log(this.checkboxList[1].pNumber)
            // console.log(this.checkboxList[2].pNumber)
        	},
        	adressinfo(address){
        		this.address = address
        	},
        	submitOrder(){
        		if(this.checkboxList.length===0){
        			alert("订单中没有要购买的商品！");
        		}else{
        			for (var i=0;i<this.checkboxList.length;i++){
        				if(this.checkboxList[i].pNumber<=0){
        					alert("要购买的商品数量至少为1！");
        					break
        				}else{
        					console.log("ok")
        				}
        			}
        		}
        	}
		},
		computed: {
			classObject(){
				return{
					active: this.isNotActive
					// console.log(this.isNotActive)
				}
			},
			commitOrder(){

			}
		},
		watch: { //深度 watcher
			checkboxList: {
				handler: function (val, oldVal) { 
					if (this.checkboxList.length === this.allPros.length) {
						this.checked=true;
					} else {
						this.checked=false;
					}
					// var sum = 0
					// for (var i=0;i<this.checkboxList.length;i++){
					// 	if(this.checkboxList[i].pNumber<0){
					// 		alert("请输入正确的商品数量！")
					// 	}else{
					// 		sum = sum+this.checkboxList[i].pNumber*this.checkboxList[i].pPrice
					// 	}
					// }
					// this.pSum = sum.toFixed(2)

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
	.numberInput{
		margin:auto;
	}
	.numberInput input{
		width: 35px;
	}
	#footerButton{
		margin: auto;
	}
</style>
