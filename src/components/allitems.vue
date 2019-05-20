<template>
    <!-- start item div-->
    <div id="allitems" class="mt-3 mb-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#">商城首页</a>
                            </li>
                            <li class="breadcrumb-item active">
                                全部商品
                            </li>
                            <!-- <li class="breadcrumb-item ">
                                <a href="#">商品详情</a>
                            </li> -->
                        </ol>
                    </nav>
                    <div class="row">
                        <div class="col-md-2 ">
                            <div class="list-group bg-light">
                                <h6 class="p-2 pt-3 pb-3 strong border m-0">猜你喜欢</h6>
                                <div class="list-group">
                                    <div class="list-group-item" v-for="(product,index) in threeProducts1" :key="product.index"  @click="buyNow(product)">
                                        <img :src="product.pPhoto" style="{width: 77px;height:65px;width: 85px;}"><br>
                                        <strong class="text-left small">[{{product.bCName}}]{{product.pName}}</strong><br>
                                        <span class="text-left small text-danger">平台价：{{product.pMemPrice}}/斤</span><br>
                                    </div>
                                </div>
                                <h6 class=" p-2 pt-3 pb-3 strong border m-0">热卖推荐</h6>
                                <div class="list-group">
                                    <div class="list-group-item" v-for="(product,index) in threeProducts2" :key="product.index"  @click="buyNow(product)">
                                        <img :src="product.pPhoto" style="{width: 77px;height:65px;width: 85px;}"><br>
                                        <strong class="text-left small">[{{product.bCName}}]{{product.pName}}</strong><br>
                                        <span class="text-left small text-danger">平台价：{{product.pMemPrice}}/斤</span><br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end item div-->
</template>
<script>
/* eslint-disable */
export default {
    name: 'allitems',
    data(){
        return{
            cabbage4url:require('@/pages/index/assets/img/vegetables/cabbage/cabbage4.jpg'),
            cabbage1url:require('@/pages/index/assets/img/vegetables/cabbage/cabbage1.jpg'),
            cabbage2url:require('@/pages/index/assets/img/vegetables/cabbage/cabbage2.jpg'),
            cabbage3url:require('@/pages/index/assets/img/vegetables/cabbage/cabbage3.jpg'),
            allProducts:null,
            threeProducts1:null,
            threeProducts2:null
        } 
    },
    mounted(){
        this.$axios.get('/netsc/products').then((res)=>{
            console.log(res.data)
            this.allProducts = res.data.result
            this.threeProducts1 = this.getRandomArrayElements(this.allProducts,3)
            this.threeProducts2 = this.getRandomArrayElements(this.allProducts,3)
        })
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
        buyNow(product){
            console.log(product)
            this.$router.push({
                path: '/allitems/item',
                query: {
                    item: product
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
