<template>
	<div id="perCenter" class="mt-3 mb-3">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<nav>
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="#">蔬菜外卖平台</a>
							</li>
							<li class="breadcrumb-item active">
								个人中心
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div class="row">
				<!-- start left list group -->
				<div class="col-md-2 pr-0">
					<div class="list-group text-left bg-light">
						<a href="/perCenter/perMessage" class="list-group-item list-group-item-action ">
							<div class="list-group-item text-muted">
								个人中心首页
							</div>
						</a>
						<a href="/perCenter/perInfo" class="list-group-item list-group-item-action ">
							<div class="list-group-item text-muted">
								完善资料
							</div>
						</a>
						<a href="/perCenter/myorders" class="list-group-item list-group-item-action ">
							<div class="list-group-item text-muted">
								我的订单
							</div>
						</a>
						<!-- <a href="#" class="list-group-item list-group-item-action ">
							<div class="list-group-item text-muted">
								我的特权
							</div>
						</a>
						<a href="#" class="list-group-item list-group-item-action ">
							<div class="list-group-item text-muted">
								我的任务
							</div>
						</a> -->
						<a href="/perCenter/submitSellerMeasage" class="list-group-item list-group-item-action " v-if="!isSeller && !isAdmin">
							<div class="list-group-item text-muted">
								申请成为商家
							</div>
						</a>
						<a href="/perCenter/sellerAudit" class="list-group-item list-group-item-action " v-if="isAdmin">
							<div class="list-group-item text-muted">
								商家申请审核
							</div>
						</a>
						<a href="/perCenter/myshops" class="list-group-item list-group-item-action " v-if="isSeller">
							<div class="list-group-item text-muted">
								我的店铺
							</div>
						</a>
					</div>
				</div>
				<!-- end left list group -->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import {setCookie,getCookie,delCookie} from '@/pages/index/assets/js/cookie.js'
	export default {
		name: 'perCenter',
		data () {
			return {
				isSeller:false,
				isAdmin:false
			}
		},
		components: {
		},
		mounted(){
			/*页面挂载获取username,id*/
			this.username=getCookie('username')
			this.userId=getCookie('id')
			if(getCookie('roleId')==="3"){
				this.isSeller=true
			}else if(getCookie('roleId')==="1"){
				this.isAdmin=true
			}
			console.log(typeof getCookie('roleId'))
			console.log(getCookie('roleId'))
			console.log(this.isSeller)
			console.log(this.isAdmin)
		},
		methods:{
		}
	}
</script>
	
<style>
	/*#hasBuy img{
		max-width: 75px;
	}*/
</style>
