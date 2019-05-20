<template>
	<!-- start my shops Info  -->
	<div id="myshops" class="col-md-10 ">
		<div class="col-md-12 bg-light pb-3">
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link active show font-weight-bold" href="#shops" data-toggle="tab">我的店铺</a>
					</li>
					<li class="nav-item">
						<a class="nav-link  font-weight-bold" href="#shopOrders"  data-toggle="tab">店铺订单</a>
					</li>
					<li class="nav-item">
						<a class="nav-link  font-weight-bold" href="#shopDistributors" data-toggle="tab">派送人员</a>
					</li>
					<li class="nav-item">
						<a class="nav-link  font-weight-bold" href="#shopProducts" data-toggle="tab">我的商品</a>
					</li>
				</ul>
				<div class="tab-content border ">
					<div class="tab-content ml-3 mr-3 ">
						<!-- start my shop messages tab -->
						<div class="tab-pane active" id="shops">
							<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，在这里您可以查看和编辑您的店铺商品信息。</h6>
							<form role="form" class="p-4 table-responsive" @submit.prevent=''>
								<table class="table table-hover table-bordered">
									<thead class="thead-light" >
										<tr>
											<th>店铺编号</th>
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
												<button class="btn btn-info btn-sm " data-toggle="modal" data-target="#shopModal" @click="detInfoMation(shop)" >详细信息</button>
												<!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
												<button class="btn btn-danger btn-sm " @click="delShop(shop.sId)" >删除</button>
											</td>
										</tr>
									</tbody>
									<tfoot class="text-center">
									</tfoot>
								</table>
								<div class="text-center">
									<button class="btn btn-danger  " data-toggle="modal" data-target="#addModal" @click="">添加店铺</button>
								</div>
							</form>
						</div>
						<!-- end my shop messages tab -->
						<!-- start the orders of shops tab -->
						<div class="tab-pane " id="shopOrders">
							<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，在这里您可以查看店铺订单信息。</h6>
							<div id="accordion" class="mb-2">
								<div class="card " v-for="(shop,index) in myshops" v-bind:key="shop.index">
									<div class="card-header">
										<a class="collapsed card-link font-italic" data-toggle="collapse" :href="'#orderCollapse'+index" @click="myOrders(shop.sId)">
											<span class="float-left">{{index+1}}:</span><span class="float-left ml-3 ">{{shop.sName}}</span>
										</a>
									</div>
									<div :id="'orderCollapse'+index" class="collapse" data-parent="#accordion">
										<div class="card-body">
											<form role="form" class="p-4 table-responsive" @submit.prevent=''>
												<table class="table table-hover table-bordered">
													<thead class="thead-light" >
														<tr>
															<th>订单编号</th>
															<th>时间</th>
															<th>订单状态</th>
															<th>操作</th>
														</tr>
													</thead>
													<tbody>
														<tr v-for="(order,index) in orders" v-bind:key="order.index">
															<td>{{index+1}}</td>
															<!-- <td>{{}}</td> -->
															<td class="text-info">{{order.createTime}}</td>
															<td>{{order.oState}}</td>
															<td>
																<button class="btn btn-info btn-sm " data-toggle="modal" data-target="#orderModal" @click="detInfoOrder(order)" >订单详情</button>
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
								</div>
							</div>
						</div>
						<!-- end the orders of shops tab -->
						<!-- start the distributors of shops tab -->
						<div class="tab-pane " id="shopDistributors">
							<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，在这里您可以查看店铺的派送人员信息。</h6>
							<div id="distributorAccordion" class="mb-2">
								<div class="card " v-for="(shop,index) in myshops" v-bind:key="shop.index">
									<div class="card-header">
										<a class="collapsed card-link font-italic" data-toggle="collapse" :href="'#distributorCollapse'+index" @click="myDistributors(shop.sId)">
											<span class="float-left">{{index+1}}:</span><span class="float-left ml-3 ">{{shop.sName}}</span>
										</a>
									</div>
									<div :id="'distributorCollapse'+index" class="collapse" data-parent="#distributorAccordion">
										<div class="card-body">
											<form role="form" class="p-4 table-responsive" @submit.prevent=''>
												<table class="table table-hover table-bordered">
													<thead class="thead-light" >
														<tr>
															<th>人员编号</th>
															<th>人员姓名</th>
															<th>人员状态</th>
															<th>操作</th>
														</tr>
													</thead>
													<tbody>
														<tr v-for="(distributor,index) in distributors" v-bind:key="distributor.index">
															<td>{{index+1}}</td>
															<!-- <td>{{}}</td> -->
															<td>{{distributor.dName}}</td>
															<td class="text-info">{{distributor.dState}}</td>
															<td>
																<button class="btn btn-danger btn-sm " @click="delDistributors(distributor.dId)" >删除</button>
																<!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
															</td>
														</tr>
													</tbody>
													<tfoot class="text-center">
													</tfoot>
												</table>
											</form>
											<div class="text-center">
												<button class="btn btn-danger mt-1 mb-3" data-toggle="modal" data-target="#addDistributorsModal" @click="clearDistributorsMsg">添加人员</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end the distributors of shops tab -->
						<!-- start products messages tab -->
						<div class="tab-pane " id="shopProducts">
							<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，在这里您可以上架和查看商品信息。</h6>
							<div id="productsAccordion" class="mb-2">
								<div class="card" v-for="(shop,index) in myshops" v-bind:key="shop.index">
									<div class="card-header">
										<a class="collapsed card-link font-italic" data-toggle="collapse" :href="'#productscollapse'+index" @click="myproducts(shop)">
											<span class="float-left">{{index+1}}:</span><span class="float-left ml-3 ">{{shop.sName}}</span>
										</a>
									</div>
									<div :id="'productscollapse'+index" class="collapse" data-parent="#productsAccordion">
										<div class="card-body">
											<form role="form" class="p-4 table-responsive" @submit.prevent=''>
												<table class="table table-hover table-bordered">
													<thead class="thead-light" >
														<tr>
															<th>商品编号</th>
															<th>商品名</th>
															<th>商品原价</th>
															<th>平台价格</th>
															<th>商品状态</th>
															<th>商品类别</th>
															<th>操作</th>
														</tr>
													</thead>
													<tbody>
														<tr v-for="(product,index) in products" v-bind:key="product.index">
															<td>{{index+1}}</td>
															<td>{{product.pName}}</td>
															<td class="text-info">{{product.pPrice}}/斤</td>
															<td class="text-danger">{{product.pMemPrice}}/斤</td>
															<td>{{product.pState}}</td>
															<td>{{product.bCName}}</td>
															<td>
																<button class="btn btn-info btn-sm mr-1" data-toggle="modal" data-target="#productsModal" @click="detProduct(product)" >详细信息</button>
																<button class="btn btn-danger btn-sm ml-1" data-toggle="modal" @click="delProducts(product.pId)" >删除</button>
															</td>
														</tr>
													</tbody>
													<tfoot class="text-center">
													</tfoot>
												</table>
											</form>
											<div class="text-center">
												<button class="btn btn-danger mt-1 mb-3" data-toggle="modal" data-target="#addProductsModal" @click="clearProductMsg">添加商品</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end products messages tab -->
						<!-- 按钮：用于打开模态框 -->
						<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
							打开模态框
						</button> -->
						<!-- start my shop infomations modal(模态框) -->
						<div class="modal fade" id="shopModal" draggable="true">
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
												<label class="ml-3">
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
													店铺简述：
												</label>
												<label class="ml-3">
													{{sDescribe}}
												</label>
											</div>
										</form>
									</div>

									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div class="footerButton text-center">
											<button type="button" class="btn btn-primary border mr-5" @click="" data-dismiss="modal" data-toggle="modal" data-target="#updateShopModal" v-if="">
												修改信息
											</button>
											<!-- <input  name=""id="b1" type="submit" class="btn btn-primary mt-5 ml-4" @click="pass" value="审核通过" data-dismiss="modal" v-if="auditButtonShow">
											</input> -->
											<button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="">关闭</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end my shop infomations modal(模态框) -->
						<!-- start order infomations modal(模态框) -->
						<div class="modal fade" id="orderModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">订单详细信息</h4>
										<button ref="orderinfoCloseButton" type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent=''>
											<div class="form-inline mt-3 mb-3">
												<label>
													收货地址：
												</label>
												<label class="ml-3">
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
												<label>
													付款时间：
												</label>
												<label class="ml-3">
													{{payTime}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													付款方式：
												</label>
												<label class="ml-3">
													{{payWay}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3" v-if="checkDistributorShow">
												<label>
													配送人员：
												</label>
												<label class="ml-3">
													<form>
														<div class="form-group">
															<select class="form-control">
																<option v-for="(sendGoodsDistributor,index) in sendGoodsDistributors" v-bind:key="sendGoodsDistributor.index" @click="sendGoodsDistributorInfo(sendGoodsDistributor)">{{sendGoodsDistributor.dName}}</option>
															</select>
															<br>
														</div>
													</form>
												</label>
											</div>
											<div class="form-inline mt-3 mb-3" v-if="myDistributorShow">
												<label>
													配送人员：
												</label>
												<label class="ml-3">
													{{dName}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3" v-if="myDistributorShow">
												<label>
													发货时间：
												</label>
												<label class="ml-3">
													{{sendGTime}}
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
											<div class="form-inline mt-3 mb-3" v-if="myCommentsShow">
												<label>
													订单评价：
												</label>
												<label class="ml-3">
													{{oComment}}
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
											<button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="!sendGoodsRightNow && !checkGetMoneyButton">关闭</button>
											<button type="button" class="btn btn-danger" data-dismiss="modal" v-if="checkGetMoneyButton" @click="checkGetMoney">确认收款</button>
											<button type="button" class="btn btn-danger" data-dismiss="modal" v-if="sendGoodsRightNow" @click="sendGoods">立即发货</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end order infomations modal(模态框) -->
						<!-- 按钮：用于打开确认发货模态框 -->
						<button ref="checkSendGoodsModalShowButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#checkSendGoodsModal" style="display: none;">
							打开模态框
						</button>
						<!-- start check send goods modal(模态框) -->
						<div class="modal fade" id="checkSendGoodsModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">您确认发货吗？</h4>
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent=''>
											<div class="form-inline mt-3 mb-3">
												<button class="btn btn-danger btn-lg" @click="checkSendGoods">确认发货</button>
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
											<button ref="checkSendGoodsCloseButton" type="button" class="btn btn-secondary" data-dismiss="modal" v-if="">关闭</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end check send goods modal(模态框) -->
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
												<input type="text" class="form-control ml-3" id="username" v-model="sName">
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
												<label class="ml-3" v-model="shopState">
													<form>
														<div class="form-group">
															<select class="form-control">
																<option>营业中</option>
															</select>
															<br>
														</div>
													</form>
												</label>
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
												<label class="ml-3">
													<form>
														<div class="form-group">
															<select class="form-control">
																<option>个人钱包付款</option>
															</select>
															<br>
														</div>
													</form>
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
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
						<!-- start update shops modal(模态框) -->
						<div class="modal fade" id="updateShopModal" >
							<div class="modal-dialog modal-lg" >
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">修改店铺信息</h4>	
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body" style="height:450px; overflow-y:scroll; overflow-x:hidden;">
										<form role="form" class="p-4 border">
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
												<input type="text" class="form-control ml-3"v-model="shopManTel">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													店铺状态：
												</label>
												<label class="ml-3" v-model="shopState">
													<form>
														<div class="form-group">
															<select class="form-control">
																<option>营业中</option>
															</select>
															<br>
														</div>
													</form>
												</label>
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
												<label class="ml-3">
													<form>
														<div class="form-group">
															<select class="form-control" id="">
																<option>个人钱包付款</option>
															</select>
															<br>
														</div>
													</form>
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
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
											<button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateShop()">保存修改</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end add shops modal(模态框) -->
						<!-- start add products modal(模态框) -->
						<div class="modal fade" id="addProductsModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">添加商品</h4>	
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border">
											<div class="form-inline mt-3 mb-3">
												<label>
													商品名称：
												</label>
												<input type="text" class="form-control ml-3" v-model="pName">
												<!-- <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle img-thumbnail ml-3"/> -->
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													商品原价：
												</label>
												<input type="text" class="form-control ml-3" v-model="pPrice">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													平台价格：
												</label>
												<input type="text" class="form-control ml-3" v-model="pMemPrice">
											</div>
											<div class="form-inline mt-3 mb-3">
												<label >
													商品类型：
												</label>
												<label class="ml-3" v-model="bCName">
													<form>
														<div class="form-group">
															<select class="form-control">
																<option v-for="bigcategorie in bigcategories" :key="bigcategorie.index" @click="bigcategorieInfo(bigcategorie)">{{bigcategorie.bcname}}</option>
															</select>
															<br>
														</div>
													</form>
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													商品状态：
												</label>
												<label class="ml-3" v-model="pState">
													<form>
														<div class="form-group">
															<select class="form-control">
																<option>在售</option>
															</select>
															<br>
														</div>
													</form>
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													商品图片：
												</label>
												<form action="" enctype="multipart/form-data">
													<input type="button" value="浏览" class="btn btn-success ml-3 pl-3 pr-3" onclick="$('#i-file').click();">
													<input type="file" id='i-file' @change="changepic($event)" accept="image/gif,image/jpeg,image/jpg,image/png" style="display: none">
													<input id='location' class="form-control" disabled>
													<img alt="" :src="pPhoto" class="rounded-circle ml-3" width="50" height="50" @click=""/>
												</form>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													商品描述：
												</label>
												<input type="text" class="form-control ml-3" v-model="pDescribe">
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
											<button type="button" class="btn btn-primary" data-dismiss="modal" @click="addProducts">添加</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end add products modal(模态框) -->
						<!-- start products infomations modal(模态框) -->
						<div class="modal fade" id="productsModal" draggable="true">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">商品详细信息</h4>
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border" @submit.prevent=''>
											<div class="form-inline mt-3 mb-3">
												<label>
													商品名字：
												</label>
												<label class="ml-3">
													{{pName}}
												</label>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													商品图片：
													<!-- 用&nbsp;&nbsp;户&nbsp;名： -->
												</label>
												<img alt="Bootstrap Image Preview" :src="pPhoto" class="rounded-circle ml-3" width="50" height="50" @click=""/>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													更多图片：
												</label>
												<form action="" enctype="multipart/form-data">
													<input type="button" value="浏览" class="btn btn-success ml-3 pl-3 pr-3" onclick="$('#i-file2').click();">
													<input type="file" id='i-file2' @change="changepic2($event)" accept="image/gif,image/jpeg,image/jpg,image/png" style="display: none">
													<input id='location2' class="form-control" disabled>
													<button type="button" class="btn btn-primary" @click="addMorePhotos">上传</button>
												</form>
											</div>
											<div class="form-inline mt-3 mb-3">
												<div class="row pl-2">
													<div class="mt-3 border ml-1" v-for="(pPhoto,index) in pPhotos" v-bind:key="pPhoto.index">
														<div class="border m-1">
															<img alt="Bootstrap Image Preview" :src="pPhoto.pPurl" class="" width="130" height="130"/>
														</div>
														<span class="badge badge-pill badge-primary" @click="delPhoto(pPhoto.pPId)">X</span>
													</div>
													<div class="mt-3 border ml-1 hid" v-if="ifShowPhoto">
														<div class="border m-1">
															<img id="showPhoto" alt="添加图片" :src="pMorePhoto" class="" width="130" height="130" />
														</div>
													</div>
												</div>
											</div>
											<div class="form-inline mt-3 mb-3">
												<label>
													商品描述：
												</label>
												<label class="ml-3">
													{{pDescribe}}
												</label>
											</div>
										</form>
									</div>

									<!-- 模态框底部 -->
									<div class="modal-footer align-content-center">
										<div class="footerButton text-center">
											<!-- <button id="" type="button" class="btn btn-primary border mr-5" @click="" data-dismiss="modal" v-if="">
												保存
											</button> -->
											<!-- <input  name=""id="b1" type="submit" class="btn btn-primary mt-5 ml-4" @click="pass" value="审核通过" data-dismiss="modal" v-if="auditButtonShow">
											</input> -->
											<button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="">关闭</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- end products infomations modal(模态框) -->
						<!-- start add distributors modal(模态框) -->
						<div class="modal fade" id="addDistributorsModal">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<!-- 模态框头部 -->
									<div class="modal-header">
										<h4 class="modal-title">添加人员</h4>	
										<button type="button" class="close" data-dismiss="modal">&times;</button>
									</div>

									<!-- 模态框主体 -->
									<div class="modal-body">
										<form role="form" class="p-4 border">
											<div class="form-inline mt-3 mb-3">
												<label>
													人员姓名：
												</label>
												<input type="text" class="form-control ml-3" v-model="distributorName">
										</div>
									</form>
								</div>
								<!-- 模态框底部 -->
								<div class="modal-footer align-content-center">
									<div class="footerButton text-center">
										<button type="button" class="btn btn-primary" data-dismiss="modal" @click="addDistributors">添加</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- end add distributors modal(模态框) -->
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
			name: 'myshops',
			data () {
				return {
					username:null,
					userId:null,
					roleId:null,
					myshops:[],
					sId:null,
					distributorName:null,
					distributors:[],
					sendGoodsDistributors:[],
					products:[],
					sendGoodsDistributor:null,
					orders:[],
					orderinfos:[],
					bigcategories:[],
					bigcategorie:[],
					pPhotos:[],
					orderId:null,
					sName:null,
					sAddress:null,
					bScope:null,
					shopMan:null,
					shopManTel:null,
					sRegisteTime:null,
					sDescribe:null,
					sPayDescribe:null,
					sPayNumber:null,
					deliveryDescribe:"配送",
					getAddress:null,
					linkmanName:null,
					telphone:null,
					getGWay:null,
					getGTime:null,
					mPrice:null,
					oComment:null,
					payTime:null,
					payWay:null,
					sendGTime:null,
					dName:null,
					sendGoodsRightNow:false,
					checkGetMoneyButton:false,
					checkDistributorShow:false,
					myDistributorShow:false,
					myCommentsShow:false,
					pId:null,
					pName:null,
					pPrice:null,
					pMemPrice:null,	
					shopState:null,	
					bCName:null,
					pState:null,
					pPhoto:null,
					pPhotoFile:null,
					pDescribe:null,
					pMorePhoto:null,
					pMoreFile:null,
					ifShowPhoto:false

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
					console.log(this.myshops)
				});
				this.$axios.get('/netsc/bigcategories').then((res)=>{
					console.log(res.data);
					this.bigcategories = res.data.result;
					this.bigcategorie = res.data.result[0];
					console.log(this.bigcategories)
				})

			},
			methods:{
				myOrders(sid){
					console.log(sid);
					this.sId = sid;
					this.$axios.get('/netsc/order/sid='+sid).then((res)=>{
						console.log(res.data);
						var getOrders = [];
						for (var i = 0; i<res.data.result.length; i++) {
							if(res.data.result[i].oState !== "未付款"){
								getOrders.push(res.data.result[i])
							}
						}
						this.orders = getOrders;
						console.log(this.orders)
					})
				},
				myDistributors(sid){
					console.log(sid);
					this.sId = sid;
					this.$axios.get('/netsc/distributors/'+sid).then((res)=>{
						console.log(res.data);
						this.distributors = res.data.result;
						console.log(this.distributors)
					})
				},
				myproducts(shop){
					this.sId = shop.sId;
					this.sName = shop.sName;
					this.$axios.get('/netsc/products/sid='+shop.sId).then((res)=>{
						console.log(res.data);
						this.products = res.data.result
					})
				},
				addShops(){
					let data = {"sname":this.sName,"bscope":this.bScope,"deliveryDescribe":this.deliveryDescribe,"sdescribe":this.sDescribe,"shopMan":this.shopMan,"shopManTel":this.shopManTel,"shopState":"营业中","spayDescribe":"个人钱包付款","uid":this.userId,"saddress":this.sAddress}
				 	// console.log(data)
				 	this.$axios.post('/netsc/shop',data).then((res)=>{
				 		console.log(res.data);
				 		this.$axios.get('/netsc/shops/'+this.userId).then((res)=>{
				 			console.log(res.data);
				 			this.myshops = res.data.result;
				 			alert("添加成功！");
				 			console.log(this.myshops)
				 		})
				 	});
				 	this.$forceUpdate()
				 },
				 delShop(sId){
				 	this.$axios.delete('/netsc/shop/'+sId).then((res)=>{
				 		// console.log(res.data)
				 		this.$axios.get('/netsc/shops/'+this.userId).then((res)=>{
				 			// console.log(res.data)
				 			this.myshops = res.data.result;
				 			alert("删除成功！");
				 			console.log(this.myshops)
				 		})
				 	})
				 },
				 updateShop(){
				 	let data = {"sname":this.sName,"bscope":this.bScope,"deliveryDescribe":this.deliveryDescribe,"sdescribe":this.sDescribe,"shopMan":this.shopMan,"shopManTel":this.shopManTel,"shopState":"营业中","spayDescribe":"个人钱包付款","saddress":this.sAddress}
				 	console.log(this.sId);
				 	console.log(this.sId);
				 	this.$axios.put('/netsc/shop/'+this.sId,data).then((res)=>{
				 		console.log(res.data);
				 		this.$axios.get('/netsc/shops/'+this.userId).then((res)=>{
				 			console.log(res.data);
				 			this.myshops = res.data.result;
				 			alert("保存成功！");
				 			console.log(this.myshops)
				 		})
				 	})
				 },
				 detInfoMation(shopinfo){
				 	console.log(shopinfo);
				 	this.sId = shopinfo.sId;
				 	this.sName = shopinfo.sName;
				 	this.shopMan = shopinfo.shopMan;
				 	this.shopManTel = shopinfo.shopManTel;
				 	this.sRegisteTime = shopinfo.sRegisteTime;
				 	this.sDescribe = shopinfo.sDescribe;
				 	this.sPayDescribe = shopinfo.sPayDescribe;
				 	this.sPayNumber = shopinfo.sPayNumber;
				 	this.deliveryDescribe = shopinfo.deliveryDescribe;
				 	this.sAddress = shopinfo.sAddress
				 },
				 detInfoOrder(orderinfo){
				 	console.log(orderinfo);
				 	this.orderId = orderinfo.orderId;
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
				 	this.dName = orderinfo.dName;
				 	this.$axios.get('/netsc/orderinfo/oid='+orderinfo.orderId).then((res)=>{
				 		console.log(res.data);
				 		this.orderinfos = res.data.result;
				 		console.log(this.orderinfos)
				 	});
				 	this.$axios.get('/netsc/distributorsByDstate/'+orderinfo.sId+"?dstate="+"空闲").then((res)=>{
				 		console.log(res.data);
				 		this.sendGoodsDistributors = res.data.result;
				 		this.sendGoodsDistributor = res.data.result[0]
						// console.log(this.sendGoodsDistributors)
					});
				 	if(orderinfo.oState==="已付款"){
				 		this.sendGoodsRightNow = true;
				 		this.checkGetMoneyButton = false;
				 	}else if(orderinfo.oState==="已收货"){
				 		this.checkGetMoneyButton = true;
				 		this.sendGoodsRightNow = false
				 	}else if(orderinfo.oState==="已发货" || orderinfo.oState==="已完成"){
				 		this.sendGoodsRightNow = false;
				 		this.checkGetMoneyButton = false;
				 	}
				 	if(orderinfo.oState==="已付款"){
				 		this.checkDistributorShow = true;
				 		this.myDistributorShow = false;
				 	}else if(orderinfo.oState==="已收货" || orderinfo.oState==="已发货" || orderinfo.oState==="已完成"){
				 		this.checkDistributorShow = false;
				 		this.myDistributorShow = true;
				 	}
				 	if(orderinfo.oState==="已付款" || orderinfo.oState==="已发货"){
				 		this.myCommentsShow = false
				 	}else{
				 		this.myCommentsShow = true
				 	}

				 },
				 sendGoods(){
				 	if(this.sendGoodsDistributor==null){
				 		alert("暂无空闲的配送人员，无法进行发货！");
				 		this.$refs.orderinfoCloseButton.click()
				 	}else{
				 		this.$refs.checkSendGoodsModalShowButton.click()
				 	}
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
				checkSendGoods(){
					let nowDate = this.getNowFormatDate();
					let data = {"sendGTime":nowDate,"ostate":"已发货","did":this.sendGoodsDistributor.dId,"dname":this.sendGoodsDistributor.dName};
					console.log(data);
					this.$axios.put('/netsc/order/'+this.orderId,data).then((res)=>{
						console.log(res.data);
						this.$axios.put('/netsc/distributor/'+this.sendGoodsDistributor.dId,{"dstate":"忙碌"}).then((res)=>{
							console.log(res.data);
							alert("发货成功！");
							this.$refs.checkSendGoodsCloseButton.click();
							window.location.reload()
						})
					})
				},
				sendGoodsDistributorInfo(distributor){
					this.sendGoodsDistributor = distributor
				},
				checkGetMoney(){
					alert("确认收款吗！");
					this.$axios.get('/netsc/wallet/uid='+this.userId).then((res)=>{
						console.log(res.data);
						let getMoney = this.mPrice+res.data.result.money;
						// console.log(getMoney.toFixed(2));
						this.$axios.put('/netsc/wallet/'+this.userId,{"money":getMoney.toFixed(2)}).then((res)=>{
							console.log(res.data);
							this.$axios.put('/netsc/order/'+this.orderId,{"ostate":"已完成"}).then((res)=>{
								console.log(res.data);
								alert("收款成功,订单已完成！");
								window.location.reload();
							})
						})
					})				
				},
				bigcategorieInfo(bigcategorie){
					this.bigcategorie = bigcategorie
					// "pphoto":this.deliveryDescribe,
				},
				addProducts(){
					let data = {"bcid":this.bigcategorie.bcid,"bcname":this.bigcategorie.bcname,"pdescribe":this.pDescribe,"pmemPrice":this.pMemPrice,"pname":this.pName,"pprice":this.pPrice,"pstate":"在售","sid":this.sId,"sname":this.sName};
				 	console.log(data);
				 	this.$axios.post('/netsc/product',data).then((res)=>{
				 		console.log(res.data);
				 		this.$axios.get('/netsc/products/sid='+this.sId).then((res)=>{
				 			console.log(res.data);
				 			var pId = res.data.result[res.data.result.length-1].pId;
				 			var formData = new FormData();
				 			formData.append('file', this.pPhotoFile);
				 			console.log(formData);
				 			this.$axios.put('/netsc/product/uploadPic/'+pId,formData).then((res)=>{
								console.log(res.data);
								this.$axios.get('/netsc/products/sid='+this.sId).then((res)=>{
									console.log(res.data);
									this.products = res.data.result;
									alert("添加成功！");
									console.log(this.products);
								})
							})
				 		})
				 	})
				},
				delProducts(pId){
					console.log(pId);
					this.$axios.delete('/netsc/product/'+pId).then((res)=>{
				 		// console.log(res.data);
				 		this.$axios.get('/netsc/products/sid='+this.sId).then((res)=>{
				 			// console.log(res.data);
				 			this.products = res.data.result;
				 			alert("删除成功！");
				 		})
				 	})
				},
				changepic(obj) {
		        	// console.log(obj);//这里可以获取上传文件的name
		        	var newsrc=this.getObjectURL(obj.target.files[0]);
		        	$('#location').val($('#i-file').val());
		        	this.pPhoto=newsrc;
		        	this.pPhotoFile = obj.target.files[0];
		       		 // console.log(this.myphoto);
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
			    detProduct(product){
			    	this.pId = product.pId;
			    	this.pName = product.pName;
			    	this.pDescribe = product.pDescribe;
			    	this.pPhoto = product.pPhoto;
			    	this.$axios.get('/netsc/productPhotos/'+product.pId).then((res)=>{
				 		// console.log(res.data)
				 		this.pPhotos = res.data.result
				 	})
			    	
			    },
			    changepic2(obj) {
		        	// console.log(obj);//这里可以获取上传文件的name
		        	var newsrc=this.getObjectURL(obj.target.files[0]);
		        	$('#location2').val($('#i-file2').val());
		        	this.pMorePhoto =newsrc;
		        	this.pMoreFile = obj.target.files[0];
		        	this.ifShowPhoto = true
		       		 // console.log(this.myphoto)
		       	},
		       	addMorePhotos(){
		       		var formData = new FormData();
		       		formData.append('file', this.pMoreFile);
		       		this.$axios.post('/netsc/productPhoto/uploadPic/'+this.pId,formData).then((res)=>{
				 		console.log(res.data);
				 		this.$axios.get('/netsc/productPhotos/'+this.pId).then((res)=>{
				 			console.log(res.data);
				 			this.pPhotos = res.data.result;
				 			alert("添加成功！");
				 			this.pMorePhoto = null;
				 			$('#location2').val(null);
				 			this.ifShowPhoto = false;
				 			console.log(this.pPhotos)
				 		})
				 	})
		       	},
		       	delPhoto(ppid){
		       		if(confirm("确定删除吗？")){
		       			this.$axios.delete('/netsc/productPhoto/'+ppid).then((res)=>{
		       				console.log(res.data);
		       				this.$axios.get('/netsc/productPhotos/'+this.pId).then((res)=>{
		       					console.log(res.data);
		       					this.pPhotos = res.data.result;
		       					alert("删除成功！");
		       					console.log(this.pPhotos)
		       				})
		       			})
		       		}
		       	},
		       	clearProductMsg(){
		       		$('#location').val(null);
		       		this.pName =null;
		       		this.pDescribe = null;
		       		this.pPhoto = null;
		       		this.pPrice = null;
		       		this.pMemPrice = null;
		       	},
		       	clearDistributorsMsg(){
		       		this.distributorName = null
		       	},
		       	addDistributors(){
		       		let data = {  "dname":this.distributorName,"dstate":"空闲","sid":this.sId};
		       		this.$axios.post('/netsc/distributor',data).then((res)=>{
		       			// console.log(res.data);
		       			this.$axios.get('/netsc/distributors/'+this.sId).then((res)=>{
		       				console.log(res.data);
		       				alert("添加成功！");
		       				this.distributors = res.data.result;
		       			})
		       		})
		       	},
		       	delDistributors(did){
		       		this.$axios.delete('/netsc/distributor/'+did).then((res)=>{
		       			// console.log(res.data);
		       			this.$axios.get('/netsc/distributors/'+this.sId).then((res)=>{
		       				console.log(res.data);
		       				alert("删除成功！");
		       				this.distributors = res.data.result;
		       			})
		       		})
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
