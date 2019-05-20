<template>
	<!-- start personal Info  -->
	<div id="perInfo" class="col-md-10 ">
		<div class="col-md-12 bg-light pb-3">
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a ref='a1' class="nav-link  disabled" :class="{active:isActive1,'font-weight-bold':isActive1}" href="" data-toggle="tab">开店类型</a>
						<a ref='a4' class="nav-link d-none" href="#selectType" data-toggle="tab"></a>
					</li>
					<li class="nav-item">
						<a ref='a2' class="nav-link  disabled" :class="{active:isActive2,'font-weight-bold':isActive2}" href="" data-toggle="tab">申请须知</a>
						<a ref='a5' class="nav-link d-none" href="#mustKonw" data-toggle="tab"></a>
					</li>
					<li class="nav-item">
						<a ref='a3' class="nav-link disabled" :class="{active:isActive3,'font-weight-bold':isActive3}" href="" data-toggle="tab">确认申请</a>
						<a ref='a6' class="nav-link d-none" href="#oncheck" data-toggle="tab" ></a>
					</li>
				</ul>
				<div class="tab-content border ">
					<div class="tab-pane active" id="selectType">
						<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，先填写好个人资料，更容易通过审核哦。</h6>
						<form role="form" class="p-4">
							<div class=" mt-3 mb-3">
								<img alt="Bootstrap Image Preview" :src="shopPreIcon" class="rounded-circle img-thumbnail ml-3" style="{width:150px;height: 150px;}"/>
								<h4 class="p-2 mt-2 mb-2">个人店铺</h4>
								<p class="text-muted mt-4">通过个人实名认证的商家创建的</p>
								<p class="text-muted mb-4">店铺, 就是个人店铺。</p>
							</div>
							<!-- <a ref='a4' href="#mustKonw" data-toggle="tab"></a> -->
							<button id="b1" type="button" class="btn btn-primary" @click="activeM" v-model="sType">
								创建个人店铺
							</button>
						</form>
					</div>
					<!-- start contact way Tab -->
					<div class="tab-pane" id="mustKonw" @click.stop>
						<h4 class="mt-3 p-2 ml-3">声明条款</h4>
						<!-- <a ref='a5' class="active" href="#selectType" data-toggle="tab"></a> -->
						<div class="container">
							<p class="text-left">&nbsp;&nbsp;
							第一条、为促进开放、透明、分享、责任的新商业文明，保障平台用户合法权益，维护平台正常经营秩序，根据《平台宣言》及《平台服务协议》，制定本规则。</p>
							<p class="text-left">&nbsp;&nbsp;第二条、平台规则，是对平台用户增加基本义务或限制基本权利的条款。</p>
							<p class="text-left">&nbsp;&nbsp;第三条、违规行为的认定与处理，应基于平台认定的事实并严格依规执行。	平台用户在适用规则上一律平等。</p>
							<p class="text-left">&nbsp;&nbsp;第四条、用户应遵守国家法律、行政法规、部门规章等规范性文件。对任何涉嫌违反国家法律、行政法规、部门规章的行为，本规则已有规定的，适用本规则；本规则尚无规定的，平台有权酌情处理。但平台对用户的处理不免除其应尽的法律责任。用户在平台上的任何行为，应同时遵守与平台及其关联公司所签订的各项协议。平台有权随时变更本规则并在网站上予以公告。若用户不同意相关变更，应立即停止使用平台的相关服务或产品。平台有权对用户行为及应适用的规则进行单方认定，并据此处理。</p>
							<p class="text-left">&nbsp;&nbsp;第五条、用户，指具有完全民事行为能力的平台各项服务的使用者。</p>
							<p class="text-left">&nbsp;&nbsp;第六条、会员，指与平台签订《平台服务协议》并完成注册流程的用户。一个会员可以拥有多个账户，每个账户对应唯一的会员名。</p>
							<p class="text-left">&nbsp;&nbsp;第七条、买家，指在平台上浏览或购买商品的用户。</p>
							<p class="text-left">&nbsp;&nbsp;第八条、卖家，指在平台上发布商品的会员。</p>
							<p class="text-left">&nbsp;&nbsp;第九条、拍下，指买家在平台上点击并确认购买的行为。</p>
							<p class="text-left">&nbsp;&nbsp;第十条、交易，指平台上单次拍下同一商品。</p>
							<p class="text-left">&nbsp;&nbsp;第十一条、绑定，指平台账户与个人账户一一对应。</p>
							<p class="text-left">&nbsp;&nbsp;第十二条、商品发布数量，指卖家在平台上出售中及在线上仓库中商品数量的总和。</p>
						</div>
						<button id="b2" type="button" class="btn btn-light border mt-2 mb-3 mr-4" @click="activeM">
							上一步
						</button>
						<!-- <a ref='a6' href="#oncheck" data-toggle="tab" ></a> -->
						<button id="b3" type="button" class="btn btn-primary mt-2 mb-3 ml-4" @click="activeM">
							我知道了，下一步
						</button>
					</div>
					<!-- end contact way Tab -->
					<!-- start contact way Tab -->
					<div class="tab-pane" id="oncheck" @click.stop>
						<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，请确认您的信息，并提交申请。</h6>
						<!-- start basic message tab -->
						<div class="tab-pane active" id="tabBasicMessage">
							<form role="form" class="p-4 text-center" @submit.prevent='imply'>
								<div class="form-inline mt-3 mb-3">
									<label>
										头像信息：
									</label>
									<img alt="Bootstrap Image Preview" :src="myphoto" class="rounded-circle ml-3" style="width: 100px; height: 100px;"/>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label>
										用&nbsp;户&nbsp;名：
									</label>
									<label class="ml-3">
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
										{{uPreState}}
									</label>
								</div>
								<!-- <a ref='a7' href="#mustKonw" data-toggle="tab"></a> -->
								<button id="b4" type="button" class="btn btn-light border mt-5 mr-5" @click="activeM">
									上一步
								</button>
								<!-- <a class="" href="" data-toggle="tab"> -->
									<input  name="" id="b5" type="submit" class="btn btn-primary mt-5 ml-4" value="确定申请">
								<!-- </a> -->
							</form>
						</div>
						<!-- end basic message tab -->
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
				isActive1: true,
				isActive2: false,
				isActive3: false,
				isNotActive:false,
				myphoto:require("@/pages/index/assets/img/userImage/00.png"),
				shopPreIcon:require("@/pages/index/assets/img/icons/shopIcon.jpg"),
				sType:"个人店铺",
				uPreState:null,
				uState:"待审核",
				nickname:null,
				realname:null,
				usex:null,
				email:null,
				uTel:0,
				uIDcard:'',
				address:null
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
			this.$axios.get('/netsc/userinfo/'+this.userId).then((res)=>{
				console.log(res.data);
				if (res.data.result.userImage != null) {
					this.myphoto = res.data.result.userImage;
				}
				this.nickname = res.data.result.nickname;
				this.realname = res.data.result.realname;
				this.usex = res.data.result.usex;
				this.email = res.data.result.email;
				this.uTel = res.data.result.utel;
				this.uIDcard = res.data.result.uidcard;
				this.address = res.data.result.address;
				this.uPreState = res.data.result.ustate;
			})
		},
		methods:{
			activeM(even){
				var id = even.target.id;
				console.log(id);
				var a = even.target.parentElement;
				a.style="{active:false}";
				console.log(a);
				if (id === "b1") {
					this.isActive1 = false;
					this.isActive2 = true;
					this.$refs.a5.click();
					console.log(this.$refs.a2)
				}else if(id === "b2"){
					this.isActive1 = true;
					this.isActive2 = false;
					this.$refs.a4.click();
					// this.$refs.a5.active = false
				}else if(id ==="b3"){
					this.isActive2 = false;
					this.isActive3 = true;
					this.$refs.a6.click();
					// this.$refs.a6.active = false
				}else if(id ==="b4"){
					this.isActive2 = true;
					this.isActive3 = false;
					this.$refs.a5.click();
					// this.$refs.a7.active = false
				}
				this.$forceUpdate()
			},
			imply(){
				if(this.uPreState === "待审核"){
					alert("您已提交申请，请等待审核！");
				}else if(this.uPreState === "已通过"){
					alert("您已通过申请，无需在申请");
				}else if(this.realname == null || this.usex == null ||this.email == null ||this.uTel === 0 ||this.uIDcard == null || this.address== null ){
					alert("请输入完整的个人信息！");
				}else{
					let data = {"ustate":this.uState,"stype":this.sType};
					let id = this.userId;
					console.log(id);
					console.log(data);
					this.$axios.put('/netsc/userinfo/'+this.userId,data).then((res)=>{
					// console.log("调用userinfo");
					// console.log(this.userId);
						console.log(res.data);
						this.$axios.get('/netsc/userinfo/'+this.userId).then((res)=>{
							console.log(res.data);
							if (res.data.result.userImage != null) {
								this.myphoto = res.data.result.userImage;
							}
							this.nickname = res.data.result.nickname;
							this.realname = res.data.result.realname;
							this.usex = res.data.result.usex;
							this.email = res.data.result.email;
							this.uTel = res.data.result.utel;
							this.uIDcard = res.data.result.uidcard;
							this.address = res.data.result.address;
							this.uPreState = res.data.result.ustate;
							if(res.data.status === "ok"){
								alert("申请成功！")
							}
						})
					})
				}
			}
		},
		computed: {
			classObject(){
				return{
					active: this.isNotActive
					// console.log(this.isNotActive)
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
