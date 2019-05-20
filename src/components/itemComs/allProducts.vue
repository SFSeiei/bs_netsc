<template>
	<!-- start personal Info  -->
	<div id="allProducts" class="col-md-10 ">
		<!-- <div class="col-md-12 bg-light mb-4">
			<div>
				<form role="form" class="pt-1 pb-1 " @submit.prevent='imply'>
					<div class="form-inline mt-3 mb-3 ">
						<div class="input-group col-md-12">
							<label>
								搜索结果：
							</label>
							<input type="search" for="#searchbutton" class="w-75 form-control ml-3" id="searchInput"></input>
							<div class="input-group-append">
								<input id="searchbutton" type="submit" class="btn btn-danger ml-3 btn-outline-light" value="重新搜索"></input>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div> -->
		<div class="col-md-12 bg-light pb-3">
			<div class="tabbable pt-3" id="tabPerInfo">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a ref='a1' class="nav-link  disabled" :class="{active:isActive1,'font-weight-bold':isActive1}" href="" data-toggle="tab">全部商品</a>
					</li>
				</ul>
				<div class="tab-content border ">
					<div class="tab-pane active" id="selectType">
						<div class="row">
							<div class="col-3 mt-3 " v-for="(pro,index) in allPros" v-bind:key="pro.index">
								<div class="border">
									<img alt="Bootstrap Image Preview" :src="pro.pPhoto" class="img-thumbnail ml-3 mt-2" style="width: 100px;height: 100px;" />
									<h5 class="mt-1 mb-1">{{pro.pName}}</h5>
									<p class="mt-1 mb-1">
										<del>原价：{{pro.pPrice}}</del>
									</p>
									<p class="mt-1 mb-1 text-danger">
										平台价：{{pro.pMemPrice}}
									</p>
									<p class="mt-1 mb-1 text-primary">
										店铺：{{pro.sName}}
									</p>
									<button type="button" class="btn btn-danger btn-sm mb-2" @click="buyNow(pro)" >
										立即购买
									</button>
								</div>
							</div>
						</div>
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
		name: 'allProducts',
		data () {
			return {
				username:null,
				userId:null,
				roleId:1,
				allPros:[],
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
			this.username=getCookie('username');
			this.userId=getCookie('id');
			if(getCookie('id')===2){
				this.isSeller=true;
				this.roleId=2;
			}
			var pName = this.$route.query.searchMessage;
			console.log(pName);
			if(pName == null){
				this.$axios.get('/netsc/products').then((res)=>{
				console.log(res.data);
				this.allPros = res.data.result;
			})
			}else{
				this.$axios.get('/netsc/products/pName='+pName).then((res)=>{
				console.log(res.data);
				this.allPros = res.data.result;
			})
			}	
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
