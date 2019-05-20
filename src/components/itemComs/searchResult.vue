<template>
	<!-- start personal Info  -->
	<div id="perInfo" class="col-md-10 ">
		<div class="col-md-12 bg-light">
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a ref='a1' class="nav-link  disabled" :class="{active:isActive1,'font-weight-bold':isActive1}" href="" data-toggle="tab">开店类型</a>
						<a ref='a4' class="nav-link " href="#selectType" data-toggle="tab"></a>
					</li>
					<li class="nav-item">
						<a ref='a2' class="nav-link  disabled" :class="{active:isActive2,'font-weight-bold':isActive2}" href="" data-toggle="tab">申请须知</a>
						<a ref='a5' class="nav-link " href="#mustKonw" data-toggle="tab"></a>
					</li>
					<li class="nav-item">
						<a ref='a3' class="nav-link disabled" :class="{active:isActive3,'font-weight-bold':isActive3}" href="" data-toggle="tab">确认申请</a>
						<a ref='a6' class="nav-link " href="#oncheck" data-toggle="tab"></a>
					</li>
				</ul>
				<div class="tab-content border ">
					<div class="tab-pane active" id="selectType">
						<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，先填写好个人资料，更容易通过审核哦。</h6>
						<form role="form" class="p-4">
							<div class=" mt-3 mb-3">
								<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle img-thumbnail ml-3"/>
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
						<h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，请确认您的收货地址。</h6>
						<!-- <a ref='a5' class="active" href="#selectType" data-toggle="tab"></a> -->
						<button id="b2" type="button" class="btn btn-light border" @click="activeM">
							上一步
						</button>
						<!-- <a ref='a6' href="#oncheck" data-toggle="tab" ></a> -->
						<button id="b3" type="button" class="btn btn-primary" @click="activeM">
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
									<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle img-thumbnail ml-3"/>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="#username">
										用&nbsp;&nbsp;户&nbsp;名：
									</label>
									<label type="text" class="ml-3" id="username" >
										{{username}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="#nickname">
										昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：
									</label>
									<label type="text" class="ml-3" id="nickname" >
										{{nickname}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="#realname">
										真实姓名：
									</label>
									<label type="text" class="ml-3" id="realname">
										{{realname}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="sex">
										性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：
									</label>
									<label type="text" class="ml-3" id="sex">
										{{usex}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="birthday">
										邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：
									</label>
									<label type="text" class="ml-3" id="birthday">
										{{email}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="tel">
										联系电话：
									</label>
									<label type="text" class="ml-3" id="tel">
										{{uTel}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="idCard">
										身份证号：
									</label>
									<label class="ml-3" id="idCard">
										{{uIDcard}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="constellation">
										居&nbsp;&nbsp;住&nbsp;地：
									</label>
									<label type="text" class="ml-3" id="constellation">
										{{address}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="sType">
										店铺类型：
									</label>
									<label type="text" class="ml-3" id="sType">
										{{sType}}
									</label>
								</div>
								<div class="form-inline mt-3 mb-3">
									<label for="sType">
										用户状态：
									</label>
									<label type="text" class="ml-3 text-info" id="sType">
										{{uPreState}}
									</label>
								</div>
								<!-- <a ref='a7' href="#mustKonw" data-toggle="tab"></a> -->
								<button id="b4" type="button" class="btn btn-light border mt-5 mr-5" @click="activeM">
									上一步
								</button>
								<!-- <a class="" href="" data-toggle="tab"> -->
									<input  name=""id="b1" type="submit" class="btn btn-primary mt-5 ml-4" value="确定申请">

								</input>
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
				sType:"个人店铺",
				uPreState:null,
				uState:"审核中",
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
			this.username=getCookie('username')
			this.userId=getCookie('id')
			if(getCookie('id')==2){
				this.isSeller=true
				this.roleId=2
			}
			this.$axios.get('http://localhost:8080/netsc/userinfo/'+this.userId).then((res)=>{
				console.log(res.data)
				this.nickname = res.data.result.nickname
				this.realname = res.data.result.realname
				this.usex = res.data.result.usex
				this.email = res.data.result.email
				this.uTel = res.data.result.utel
				this.uIDcard = res.data.result.uidcard
				this.address = res.data.result.address
				this.uPreState = res.data.result.ustate
			})
		},
		methods:{
			activeM(even){
				var id = even.target.id
				console.log(id)
				var a = even.target.parentElement
				a.style="{active:false}"
				console.log(a)
				if (id == "b1") {
					this.isActive1 = false
					this.isActive2 = true
					this.$refs.a5.click()
					console.log(this.$refs.a2)
				}else if(id == "b2"){
					this.isActive1 = true
					this.isActive2 = false
					this.$refs.a4.click()
					// this.$refs.a5.active = false
				}else if(id =="b3"){
					this.isActive2 = false
					this.isActive3 = true
					this.$refs.a6.click()
					// this.$refs.a6.active = false
				}else if(id =="b4"){
					this.isActive2 = true
					this.isActive3 = false
					this.$refs.a5.click()
					// this.$refs.a7.active = false
				}
				this.$forceUpdate()
			},
			imply(){
				let data = {"ustate":this.uState,"urole":this.sType}
				let id = this.userId
				console.log(id)
				console.log(data)
				this.$axios.put('http://localhost:8080/netsc/userinfo/'+id,data).then((res)=>{
					// console.log("调用userinfo")
					// console.log(this.userId)
					console.log(res.data)
				})
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
