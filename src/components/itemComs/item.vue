<template>
    <!-- start item div-->
    <div id="item" class="col-md-10">
        <div class="col-md-12 bg-light mb-2 pb-3">
            <div class="tabbable pt-3" id="tabPerInfo">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a ref='a1' class="nav-link disabled active font-weight-bold" href="" data-toggle="tab">当前商品</a>
                    </li>
                </ul>
                <div class="tab-content border ">
                    <div class="tab-pane active" id="selectType">
                        <div class="">
                            <h6 class="text-left mt-1 p-2 mb-1">亲爱的 <span class="text-danger">{{username}}</span>,把您看中的商品加入购物车吧！</h6>
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-md-4" id="currentItem">
                                <img alt="Bootstrap Image Preview" :src="preItem.pPhoto" style="width: 260px;height: 173px;" />
                            </div>
                            <div class="col-md-8">

                                <div class="card">
                                    <h5 class="card-header">
                                        {{preItem.pName}}
                                    </h5>
                                    <div class="card-body">
                                        <p class="card-text text-danger ">
                                            价钱：{{preItem.pMemPrice}}元/斤
                                        </p>
                                        <!-- <del>原价：{{this.preItem.pPrice}}元/斤</del> -->
                                    </div>
                                    <div class="card-footer">
                                        <p class="card-text">
                                            店铺：<span class="text-info">{{shopinfo}}</span>
                                        </p>
                                    </div>
                                </div> 
                                <button type="button" class="btn btn-lg btn-primary mt-4 mb-4" @click="addTrolley()">
                                    加入购物车
                                </button> 
                                <!-- <button type="button" class="btn btn-lg btn-danger ml-4 mt-4 mb-4">
                                    立即购买
                                </button> -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h5 class="text-left mt-2 p-2 font-weight-bold border">商品详情：</h5>
                                <div class=" mb-4 p-3">
                                    <p class="text-left lead">
                                        &nbsp;&nbsp;&nbsp;&nbsp;{{this.preItem.pDescribe}}
                                        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;卷心菜 （cabbage），学名结球甘蓝，结球甘蓝是十字花科、芸薹属的植物，为甘蓝（Brassica oleracea L.）的变种。又名洋白菜、疙瘩白、包菜、圆白菜、包心菜、莲花白等。 -->
                                    </p>
                                    <!-- <p class="text-left lead">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甘蓝具有耐寒、抗病、适应性强、易贮耐运、产量高、品质好等特点，在中国各地普遍栽培，是中国东北、西北、华北等地区春、夏、秋季的主要蔬菜之一。
                                    </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12" id="itemPhoto">
                                <h5 class="text-left mt-2 p-2 font-weight-bold border">商品图片：</h5>
                                <div class=" mb-4 p-3">
                                    <img class="m-1" alt="Bootstrap Image Preview" v-for="(preItemPhoto,index) in preItemPhotos" :key="preItemPhoto.index" :src="preItemPhoto.pPurl" style="width: 245px;height: 245px"/>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="row border">
                            <div class="col-md-12">
                                <h5 class="text-left mt-2 p-2 font-weight-bold border">注意事项：</h5> -->
                                <!-- <div class="border mb-4 p-3">
                                    <h6 class="text-left mt-2 p-2 text-muted border">适宜人群：</h6>
                                    <p class="text-left  border">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般人群均可食用。特别适合动脉硬化、胆结石症患者、肥胖患者、孕妇及有消化道溃疡食用。
                                    </p>
                                    <h6 class="text-left mt-2 p-2 text-muted border">不适宜人群：</h6>
                                    <p class="text-left  border">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.皮肤瘙痒性疾病、眼部充血患者忌食。包心菜含有粗纤维量多，且质硬，故脾胃虚寒、泄泻以及小儿脾弱者不宜多食；另外对于腹腔和胸外科手术后，胃肠溃疡及其出血特别严重时，腹泻及肝病时不宜吃。
                                    </p>
                                    <p class="text-left  border">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 卷心菜具有补血的作用，血液黏稠的人不能吃。
                                    </p>
                                    <h6 class="text-left mt-2 p-2 text-muted border ">保存方法：</h6>
                                    <p class="text-left  border">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;切开的卷心菜容易从刀口处变质，所以最好买完整的卷心菜，从外层按顺序食用会保存很长时间。用刀从卷心菜的根部至菜心斜切可以很容易地剥掉外皮，
                                        为防止卷心菜干燥变质，可以用保鲜膜包好入冰箱冷藏保存。
                                    </p>
                                </div> -->
                            <!-- </div>
                        </div> -->
                        <!--<img alt="Bootstrap Image Preview" :src="pProduct.pPhoto" style="width: 260px;height: 173px;" />-->
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- end item div-->
</template>
<script>
    /* eslint-disable */
    import {setCookie,getCookie,delCookie} from '@/pages/index/assets/js/cookie.js'
    export default {
        name: 'item',
        data(){
            return{
                username:null,
                userId:null,
                roleId:1,
                preItem:null,
                shopinfo:"",
                cabbage4url:require('@/pages/index/assets/img/vegetables/cabbage/cabbage4.jpg'),
                cabbage1url:require('@/pages/index/assets/img/vegetables/cabbage/cabbage1.jpg'),
                cabbage2url:require('@/pages/index/assets/img/vegetables/cabbage/cabbage2.jpg'),
                cabbage3url:require('@/pages/index/assets/img/vegetables/cabbage/cabbage3.jpg'),
                preItemPhotos:[]
            } 
        },
        props: ['pProduct'],
        mounted(){
            this.username=getCookie('username');
            this.userId=getCookie('id');
            if(getCookie('id')===2){
                this.isSeller=true;
                this.roleId=2;
            }
            this.preItem = this.$route.query.item;
            console.log(this.preItem);
            this.$axios.get('/netsc/shop/'+this.preItem.sId).then((res)=>{
                console.log(res.data);
                this.shopinfo = res.data.result.sname;
            })
            this.$axios.get('/netsc/productPhotos/'+this.preItem.pId).then((res)=>{
                console.log(res.data);
                this.preItemPhotos = res.data.result;
            })
        },
        methods:{
            addTrolley(){
                this.$axios.get('/netsc/trolleyOne/uId='+this.userId+"?pId="+this.preItem.pId).then((res)=>{
                    console.log(res.data);
                    if (res.data.result!=null) {
                        alert("您的购物车中已存在该商品，请到购物车中付款吧！");
                    }else if (getCookie('username')) {
                        let data = {"uid":this.userId,"pid":this.preItem.pId,"pnumber":1,"pprice":this.preItem.pPrice,"pname":this.preItem.pName,"sid":this.preItem.sId};
                        console.log(data);
                        this.$axios.post('/netsc/trolley',data).then((res)=>{
                            console.log(res.data);
                            if(res.data.status ==="ok"){
                                alert("添加成功！");
                            }
                        })
                    }else {
                        alert("请登录后再试！");
                    }
                })
                
            }
        }
    }
</script>
<style>
    #currentItem img{
        max-width: 260px;
        max-height: 180px;    
    }
    #itemPhoto img{
        max-width: 300px;
        max-height: 300px;
    }
</style>
