<template>
    <div class="main mb-2">
        <!-- start main banner -->
        <div id="mainBanner">
            <div class="container ">
                <div class="row">
                    <!-- start carousel -->
                    <div class="col-md-8 offset-md-2 p-0 d-none d-lg-block" style="height: 347px;">
                        <div id="miancarousel" class="carousel slide" data-ride="carousel" data-interval="1000">
                            <!-- 指示符 -->
                            <ul class="carousel-indicators">
                                <li data-target="#miancarousel" data-slide-to="0"></li>
                                <li data-target="#miancarousel" data-slide-to="1"></li>
                                <li data-target="#miancarousel" data-slide-to="2"></li>
                            </ul>
                            <!-- 轮播图片 -->
                            <div id='maincarouselInner' class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="" :src="bannerurl1">
                                </div>
                                <div class="carousel-item">
                                    <img class="" :src="bannerurl2">
                                </div>
                                <div class="carousel-item">
                                    <img class="" :src="bannerurl3">
                                </div>
                            </div>

                            <!-- 左右切换按钮 -->
                            <a class="carousel-control-prev" href="#miancarousel" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#miancarousel" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                    <!-- end carousel -->
                    <!-- start msg card -->
                    <div class="col-lg-2 pl-0" style="{height:347px;}">
                        <div class="card">
                            <div class="card-body pl-0 pr-0">
                                <img class="rounded-circle" :src="user.userImage" style="{width:50px;height:50px;}"><span class="float-right mt-3 mr-2 d-inline-block">{{username}}</span>
                            </div>
                        </div>
                        <div class="card">
                             <div class="card-body p-0">
                                <h6 class="card-title w-50 font-weight-bold mt-1 mb-1">推荐蔬菜</h6>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body pl-0 pr-0 pt-1">
                                <div class="row pt-2">
                                    <div class="col-lg-4 pr-0 " v-for="(product,index) in threeProducts1" v-if="index < 1" :key="product.index" @click="buyNow(product)">
                                        <img class="rounded-circle" :src="product.pPhoto" style="{height: 40px;width: 40px;height: 40px;}">
                                        <span class="d-block mt-1">{{product.pName}}</span>
                                    </div>
                                    <div class="col-lg-4 pr-0 pl-0 " v-for="(product,index) in threeProducts2" v-if="index < 1" :key="product.index" @click="buyNow(product)">
                                        <img class="rounded-circle" :src="product.pPhoto" style="{height: 40px;width: 40px;height: 40px;}">
                                        <span class="d-block mt-1">{{product.pName}}</span>
                                    </div>
                                    <div class="col-lg-4 pr-0 pl-0 " v-for="(product,index) in threeProducts3" v-if="index < 1" :key="product.index" @click="buyNow(product)">
                                        <img class="rounded-circle" :src="product.pPhoto" style="{height: 40px;width: 40px;height: 40px;}">
                                        <span class="d-block mt-1">{{product.pName}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                             <div class="card-body p-0">
                                <h6 class="card-title w-50 font-weight-bold mt-1 mb-1 pr-4">公告</h6>
                            </div>
                        </div>
                        <div class="card">
                             <div class="card-body pl-0 pr-0 pt-0 pb-0">
                                <ul class="p-0 mb-0">
                                    <li class="text-sm-left ml-4">卷心菜已开售！</li>
                                    <li class="text-sm-left ml-4">波菜已开售！</li>
                                    <li class="text-sm-left ml-4">章鱼已开售！</li>
                                    <li class="text-sm-left ml-4">草鱼已开售！</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- end msg card -->
                </div>
            </div>
        </div>
        <!-- end main banner -->
        <!-- start main body-one -->
        <div id="mainBodyOne" class="mt-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 ">
                        <div class="col-12 pr-0">
                            <h5 class="float-left"><img :src="mainIcon1" class="pb-1"><span class="ml-2">热卖推荐</span></h5>
                            <table class="table table-bordered bg-light">
                                <tbody>
                                    <tr>
                                        <td v-for="(product,index) in threeProducts1" :key="product.index">
                                            <div class="float-left" @click="buyNow(product)">
                                                <img :src="product.pPhoto" style="{width: 77px;height:65px;width: 85px;}">
                                            </div>
                                            <div class="float-left ml-2">
                                                <strong class="text-left small">[{{product.bCName}}]{{product.pName}}</strong><br>
                                                <span class="text-left small text-danger">平台价：{{product.pMemPrice}}元/斤</span><br>
                                                <span class="text-left small">剩余时间：{{product.day}}天</span><br>
                                                <button  @click="buyNow(product)" class="float-left btn btn-danger btn-sm">立即抢购</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td v-for="(product,index) in threeProducts2" :key="product.index">
                                            <div class="float-left" @click="buyNow(product)">
                                                <img :src="product.pPhoto" style="{width: 77px;height:65px;width: 85px;}">
                                            </div>
                                            <div class="float-left ml-2">
                                                <strong class="text-left small">[{{product.bCName}}]{{product.pName}}</strong><br>
                                                <span class="text-left small text-danger">平台价：{{product.pMemPrice}}元/斤</span><br>
                                                <span class="text-left small">剩余时间：{{product.day}}天</span><br>
                                                <button  @click="buyNow(product)" class="float-left btn btn-danger btn-sm">立即抢购</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-2 pl-0">
                        <div class="col-12 p-0">
                            <h5 class="float-left"><img :src="mainIcon8" class="pb-1"><span class="ml-2">每日惊喜</span></h5>
                            <table class="table table-bordered bg-faded bg-light pb-2" style="height:257px;">
                                <tbody>
                                    <tr>
                                        <td class="p-1 m-1" v-for="(product,index) in threeProducts3" v-if="index < 1" :key="product.index" @click="buyNow(product)">
                                            <div>
                                                <img class="" style="{width:165px;height:137px;width:165px;}" :src="product.pPhoto">
                                            </div>
                                            <div class="float-left ml-2 mr-2 w-100 pr-3 ">
                                                <strong class="text-left small mt-1">[{{product.bCName}}]{{product.pName}}</strong><br>
                                                <span class="text-left small text-danger">秒杀价：{{product.pMemPrice}}元/斤</span><br>
                                                <button class="float-left btn btn-danger btn-sm w-100 mt-2 mb-2">查看详情</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main body-one -->
        <!-- start main body-two -->
        <div id="mainBodyTwo" class="mt-2 mb-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <div class="col-12 pr-0">
                            <h5 class="float-left"><img :src="mainIcon2" class="pb-1"  style="{width: 24px;height:28px;}"><span class="ml-2">猜你喜欢</span></h5>
                            <div class="table-responsive">
                                <table class="table table-bordered bg-light" id="mainBodyTwoTable">
                                    <tbody>
                                        <tr>
                                            <td v-for="(product,index) in sixProducts" :key="product.index"  @click="buyNow(product)">
                                                <div class="">
                                                    <img :src="product.pPhoto" style="{width: 88px;height: 72px;}">
                                                </div>
                                                <div class="">
                                                    <strong class="small">[{{product.bCName}}]</strong><br>
                                                    <span class="text-secondary">{{product.pName}}</span><br>
                                                    <span class="text-left small text-danger">平台价：{{product.pMemPrice}}元/斤</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 pl-0">
                        <h5 class="float-left"><img :src="mainIcon2" class="pb-1" style="{width: 24px;height:28px;}"><span class="ml-2">每日签到</span></h5>
                        <table class="table table-bordered bg-faded bg-light" style="height: 170px;">
                            <tbody>
                                <tr>
                                    <td class="p-1 m-1">
                                        <div>
                                            <button class="float-left btn btn-secondary btn-lg w-100 disabled">暂无签到</button>
                                        </div>
                                        <div class="float-left ml-2 mr-2 w-100 pr-3">
                                            <strong class="text-left small">已累计签到0天，你的消费总计0元</strong><br>
                                            <span class="text-left small ">点此查看<a href="#">消费详细情况</a></span><br>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main body-two -->
        <!-- start main body-three -->
        <div id="mainBodyThree" class="mt-0 mb-2">
            <div class="container">
                <div class="container pr-0">
                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="float-left"><img :src="mainIcon3" class="pb-2" style="{width: 20px;height:24px;}"><span class="ml-2">精彩活动</span></h5>
                        </div>
                    </div>
                    <div class="container pr-0 bg-light border" id="mainBodyThreeDiv">
                    <div class="row pl-2 pr-3">
                        <div class="col-md-4 p-1">
                            <img :src="activity1url">
                        </div>
                        <div class="col-md-4 p-1">
                            <img :src="activity2url">
                        </div>
                        <div class="col-md-4 p-1">
                            <img :src="activity3url">
                        </div>
                    </div>                                  
                    <div class="row pl-2 pr-3">
                        <div class="col-md-4 p-1">
                            <img :src="activity4url">
                        </div>
                        <div class="col-md-4 p-1">
                            <img :src="activity5url">
                        </div>
                        <div class="col-md-4 p-1">
                            <img :src="activity6url">
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        </div>
        <!-- end main body-three -->
        <!-- start main body-four --> 
        <div id="mainBodyFour" class="mt-3 mb-2">
            <div class="container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="float-left"><img :src="mainIcon4" class="pb-1" style="{width: 24px;height:28px;}"><span class="ml-2">肉类专区</span></h5>
                        </div>
                    </div>
                </div>
                <div class="container pr-0">
                    <div class="container bg-light border">
                        <div class="row">
                                <img class="d-none d-lg-block" :src="class1" style="{width:240px;height: 305px;width:240px;}">
                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <table id="bodyFourTable" class="table table-bordered bg-faded h-100 border-top-0 border-bottom-0 table-responsive pt-4" >
                                    <tbody class="">
                                        <tr>
                                            <td v-for="(product,index) in threeProductsOne1" :key="product.index" @click="buyNow(product)">
                                                <div class="float-left ml-2">
                                                    <strong class="float-left">{{product.pName}}</strong><br>
                                                    <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span><br>
                                                    <span class="float-left small">原价:<del>{{product.pPrice}}</del>元/斤</span>
                                                </div>
                                                <div class="float-left ml-2">
                                                    <img :src="product.pPhoto" style="height: 72px;width:90px;">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td v-for="(product,index) in threeProductsOne2" :key="product.index" @click="buyNow(product)">
                                                <div class="float-left">
                                                    <img :src="product.pPhoto" style="width: 56px;height: 48px;">
                                                </div>
                                                <div class="float-left ml-2">
                                                    <strong class="float-left small">{{product.pName}}</strong><br>
                                                    <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span><br>
                                                    <span class="float-left small">原价:<del>{{product.pPrice}}</del>元/斤</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-lg-2 p-0 col-sm-12 d-none d-xl-block">
                                <table class="ml-auto mr-auto table-responsive">
                                    <tbody>
                                        <tr class="pt-2 mb-1">
                                            <td class="pt-2 pb-2" v-for="(product,index) in OneProductsOne" :key="product.index" @click="buyNow(product)">
                                                <div class="float-left ml-2 mr-2">
                                                    <strong class="float-left small">{{product.pName}}</strong><br>
                                                    <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span>
                                                </div>
                                                <div class="float-right">
                                                    <img :src="product.pPhoto" style="width: 55px;height: 45px;">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="pt-1 mb-1" v-for="(product,index) in FourProductsOne" :key="product.index" @click="buyNow(product)">
                                            <td class="pt-2 pb-2" >
                                                <div class="float-left ml-2 mr-2">
                                                    <strong class="float-left small">{{product.pName}}</strong><br>
                                                    <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span>
                                                </div>
                                                <div class="float-right">
                                                    <img :src="product.pPhoto" style="width: 55px;height: 45px;">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main body-four -->
        <!-- start main body-five -->
        <div id="mainBodyFive" class="mt-3 mb-2">
            <div class="container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="float-left"><img :src="mainIcon5" class="pb-1" style="{width: 24px;height:28px;}"><span class="ml-2">蔬果类专区</span></h5>
                        </div>
                    </div>
                </div>
                <div class="container pr-0">
                    <div class="container bg-light border">
                        <div class="row">
                            <img class="d-none d-lg-block" :src="class2" style="{width:240px;height: 305px;width:240px;}">
                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <table id="bodyFiveTable" class="table table-bordered bg-faded h-100 border-top-0 border-bottom-0 table-responsive pt-4" >
                                    <tbody class="">
                                    <tr>
                                        <td v-for="(product,index) in threeProductsTow1" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left ml-2">
                                                <strong class="float-left">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span><br>
                                                <span class="float-left small">原价:<del>{{product.pPrice}}</del>元/斤</span>
                                            </div>
                                            <div class="float-left ml-2">
                                                <img :src="product.pPhoto" style="height: 72px;width:90px;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td v-for="(product,index) in threeProductsTow2" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left">
                                                <img :src="product.pPhoto" style="width: 56px;height: 48px;">
                                            </div>
                                            <div class="float-left ml-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span><br>
                                                <span class="float-left small">原价:<del>{{product.pPrice}}</del>元/斤</span>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-lg-2 p-0 col-sm-12 d-none d-xl-block">
                                <table class="ml-auto mr-auto table-responsive">
                                    <tbody>
                                    <tr class="pt-2 mb-1">
                                        <td class="pt-2 pb-2" v-for="(product,index) in OneProductsTow" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left ml-2 mr-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span>
                                            </div>
                                            <div class="float-right">
                                                <img :src="product.pPhoto" style="width: 55px;height: 45px;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="pt-1 mb-1" v-for="(product,index) in FourProductsTow" :key="product.index" @click="buyNow(product)">
                                        <td class="pt-2 pb-2" >
                                            <div class="float-left ml-2 mr-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span>
                                            </div>
                                            <div class="float-right">
                                                <img :src="product.pPhoto" style="width: 55px;height: 45px;">
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main body-five -->
        <!-- start main body-six -->
        <div id="mainBodySix" class="mt-3 mb-2">
            <div class="container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="float-left"><img :src="mainIcon6" class="pb-1" style="{width: 24px;height:28px;}"><span class="ml-2">水产类专区</span></h5>
                        </div>
                    </div>
                </div>
                <div class="container pr-0">
                    <div class="container bg-light border">
                        <div class="row">
                            <img class="d-none d-lg-block" :src="class3" style="{width:240px;height: 305px;width:240px;}">
                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <table id="bodySixTable" class="table table-bordered bg-faded h-100 border-top-0 border-bottom-0 table-responsive pt-4" >
                                    <tbody class="">
                                    <tr>
                                        <td v-for="(product,index) in threeProductsThree1" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left ml-2">
                                                <strong class="float-left">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span><br>
                                                <span class="float-left small">原价:<del>{{product.pPrice}}</del>元/斤</span>
                                            </div>
                                            <div class="float-left ml-2">
                                                <img :src="product.pPhoto" style="height: 72px;width:90px;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td v-for="(product,index) in threeProductsThree2" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left">
                                                <img :src="product.pPhoto" style="width: 56px;height: 48px;">
                                            </div>
                                            <div class="float-left ml-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span><br>
                                                <span class="float-left small">原价:<del>{{product.pPrice}}</del>元/斤</span>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-lg-2 p-0 col-sm-12 d-none d-xl-block">
                                <table class="ml-auto mr-auto table-responsive">
                                    <tbody>
                                    <tr class="pt-2 mb-1">
                                        <td class="pt-2 pb-2" v-for="(product,index) in OneProductsThree" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left ml-2 mr-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span>
                                            </div>
                                            <div class="float-right">
                                                <img :src="product.pPhoto" style="width: 55px;height: 45px;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="pt-1 mb-1" v-for="(product,index) in FourProductsThree" :key="product.index" @click="buyNow(product)">
                                        <td class="pt-2 pb-2" >
                                            <div class="float-left ml-2 mr-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span>
                                            </div>
                                            <div class="float-right">
                                                <img :src="product.pPhoto" style="width: 55px;height: 45px;">
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main body-six -->
        <!-- start main body-seven -->
        <div id="mainBodySeven" class="mt-3 mb-2">
            <div class="container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="float-left"><img :src="mainIcon7" class="pb-1" style="{width: 24px;height:28px;}"><span class="ml-2">青菜类专区</span></h5>
                        </div>
                    </div>
                </div>
                <div class="container pr-0">
                    <div class="container bg-light border">
                        <div class="row">
                            <img class="d-none d-lg-block" :src="class4" style="{width:240px;height: 305px;width:240px;}">
                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <table id="bodySevenTable" class="table table-bordered bg-faded h-100 border-top-0 border-bottom-0 table-responsive pt-4" >
                                    <tbody class="">
                                    <tr>
                                        <td v-for="(product,index) in threeProductsFour1" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left ml-2">
                                                <strong class="float-left">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span><br>
                                                <span class="float-left small">原价:<del>{{product.pPrice}}</del>元/斤</span>
                                            </div>
                                            <div class="float-left ml-2">
                                                <img :src="product.pPhoto" style="height: 72px;width:90px;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td v-for="(product,index) in threeProductsFour2" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left">
                                                <img :src="product.pPhoto" style="width: 56px;height: 48px;">
                                            </div>
                                            <div class="float-left ml-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span><br>
                                                <span class="float-left small">原价:<del>{{product.pPrice}}</del>元/斤</span>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-lg-2 p-0 col-sm-12 d-none d-xl-block">
                                <table class="ml-auto mr-auto table-responsive">
                                    <tbody>
                                    <tr class="pt-2 mb-1">
                                        <td class="pt-2 pb-2" v-for="(product,index) in OneProductsFour" :key="product.index" @click="buyNow(product)">
                                            <div class="float-left ml-2 mr-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span>
                                            </div>
                                            <div class="float-right">
                                                <img :src="product.pPhoto" style="width: 55px;height: 45px;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="pt-1 mb-1" v-for="(product,index) in FourProductsFour" :key="product.index" @click="buyNow(product)">
                                        <td class="pt-2 pb-2" >
                                            <div class="float-left ml-2 mr-2">
                                                <strong class="float-left small">{{product.pName}}</strong><br>
                                                <span class="float-left small text-danger">平台价:{{product.pMemPrice}}元/斤</span>
                                            </div>
                                            <div class="float-right">
                                                <img :src="product.pPhoto" style="width: 55px;height: 45px;">
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main body-seven -->
        <!-- start main body-eight -->
        <div id="mainBodyEight" class="mt-3 mb-3">
            <div class="container">
                <div class="container pr-0 ">
                    <div class="container pr-0 bg-light">
                        <div class="row pl-0 pr-2">
                            <div class="col-md-4 p-1">
                                <img :src="activity3url">
                            </div>
                            <div class="col-md-4 p-1">
                                <img :src="activity6url">
                            </div>
                            <div class="col-md-4 p-1">
                                <img class="mr-2":src="activity4url">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main body-eight -->
    </div>
</template>

<script>
import {setCookie,getCookie,delCookie} from '@/pages/index/assets/js/cookie.js'
export default {
    name: 'mainDiv',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            username: "您还未登录！",
            uId: null,
            roleId: null,
            user: {"userImage": require("@/pages/index/assets/img/userImage/00.png")},
            myphoto: require("@/pages/index/assets/img/userImage/00.png"),
            bannerurl1: require('@/pages/index/assets/img/banner/banner1.jpg'),
            bannerurl2: require('@/pages/index/assets/img/banner/banner2.jpg'),
            bannerurl3: require('@/pages/index/assets/img/banner/banner3.jpg'),
            class1: require('@/pages/index/assets/img/classes/timg (1).jpg'),
            class2: require('@/pages/index/assets/img/classes/timg (2).jpg'),
            class3: require('@/pages/index/assets/img/classes/timg (3).jpg'),
            class4: require('@/pages/index/assets/img/classes/timg (4).jpg'),
            testurl: require('@/pages/index/assets/img/test/test.jpg'),
            test2url: require('@/pages/index/assets/img/test/test2.jpg'),
            test3url: require('@/pages/index/assets/img/test/test3.jpg'),
            activity1url: require('@/pages/index/assets/img/activity/activity1.jpg'),
            activity2url: require('@/pages/index/assets/img/activity/activity2.jpg'),
            activity3url: require('@/pages/index/assets/img/activity/activity3.jpg'),
            activity4url: require('@/pages/index/assets/img/activity/activity4.jpg'),
            activity5url: require('@/pages/index/assets/img/activity/activity5.jpg'),
            activity6url: require('@/pages/index/assets/img/activity/activity6.jpg'),
            test5url: require('@/pages/index/assets/img/test/test5.jpg'),
            test6url: require('@/pages/index/assets/img/test/test6.jpg'),
            test7url: require('@/pages/index/assets/img/test/test7.jpg'),
            furl1: require('@/pages/index/assets/img/test/first.png'),
            furl2: require('@/pages/index/assets/img/test/second.png'),
            furl3: require('@/pages/index/assets/img/test/third.png'),
            furl4: require('@/pages/index/assets/img/test/fourth.png'),
            furl5: require('@/pages/index/assets/img/test/fifth.png'),
            mainIcon1: require('@/pages/index/assets/img/icons/icon1.jpg'),
            mainIcon2: require('@/pages/index/assets/img/icons/icon2.jpg'),
            mainIcon3: require('@/pages/index/assets/img/icons/icon3.jpg'),
            mainIcon4: require('@/pages/index/assets/img/icons/icon4.jpg'),
            mainIcon5: require('@/pages/index/assets/img/icons/icon5.jpg'),
            mainIcon6: require('@/pages/index/assets/img/icons/icon6.jpg'),
            mainIcon7: require('@/pages/index/assets/img/icons/icon7.jpg'),
            mainIcon8: require('@/pages/index/assets/img/icons/icon11.jpg'),
            allProducts: [],
            sixProducts: [],
            threeProducts1: [],
            threeProducts2: [],
            threeProducts3: [],
            type1:'肉类',
            allProducts1: [],
            threeProductsOne1:[],
            threeProductsOne2:[],
            OneProductsOne:[],
            FourProductsOne:[],
            type2:'蔬果类',
            allProducts2: [],
            threeProductsTow1:[],
            threeProductsTow2:[],
            OneProductsTow:[],
            FourProductsTow:[],
            type3:'水产类',
            allProducts3: [],
            threeProductsThree1:[],
            threeProductsThree2:[],
            OneProductsThree:[],
            FourProductsThree:[],
            type4:'青菜类',
            allProducts4: [],
            threeProductsFour1:[],
            threeProductsFour2:[],
            OneProductsFour:[],
            FourProductsFour:[],
        }
    },
    mounted(){
        this.$axios.get('/netsc/products').then((res)=>{
            console.log(res.data)
            if (res.data.result != null) {
                this.allProducts = res.data.result
                this.sixProducts = this.getRandomArrayElements(this.allProducts,6);
                this.threeProducts1 = this.getRandomArrayElements(this.allProducts,3);
                this.threeProducts2 = this.getRandomArrayElements(this.allProducts,3);
                this.threeProducts3 = this.getRandomArrayElements(this.allProducts,3);
                for (var i = 0;i<this.threeProducts1.length;i++) {
                    this.threeProducts1[i].day = this.randomNum(1,30)
                }
                for (var i = 0;i<this.threeProducts2.length;i++) {
                    this.threeProducts2[i].day = this.randomNum(1,30)
                }
            }
        });
        this.$axios.get('/netsc/products/bCName='+this.type1).then((res) => {
            console.log(res.data);
            if (res.data.result != null) {
                this.allProducts1 = res.data.result;
                this.threeProductsOne1 = this.getRandomArrayElements(this.allProducts1, 3);
                this.threeProductsOne2 = this.getRandomArrayElements(this.allProducts1, 3);
                this.OneProductsOne = this.getRandomArrayElements(this.allProducts1, 1);
                this.FourProductsOne = this.getRandomArrayElements(this.allProducts1, 4);
            }
        });
        this.$axios.get('/netsc/products/bCName='+this.type2).then((res) => {
            console.log(res.data)
            if (res.data.result != null) {
                this.allProducts2 = res.data.result
                this.threeProductsTow1 = this.getRandomArrayElements(this.allProducts2, 3);
                this.threeProductsTow2 = this.getRandomArrayElements(this.allProducts2, 3);
                this.OneProductsTow = this.getRandomArrayElements(this.allProducts2, 1);
                this.FourProductsTow = this.getRandomArrayElements(this.allProducts2, 4);
            }
        });
        this.$axios.get('/netsc/products/bCName='+this.type3).then((res) => {
            console.log(res.data)
            if (res.data.result != null) {
                this.allProducts3 = res.data.result
                this.threeProductsThree1 = this.getRandomArrayElements(this.allProducts3, 3);
                this.threeProductsThree2 = this.getRandomArrayElements(this.allProducts3, 3);
                this.OneProductsThree = this.getRandomArrayElements(this.allProducts3, 1);
                this.FourProductsThree = this.getRandomArrayElements(this.allProducts3, 4);
            }
        });
        this.$axios.get('/netsc/products/bCName='+this.type4).then((res) => {
            console.log(res.data)
            if (res.data.result != null) {
                this.allProducts4 = res.data.result
                this.threeProductsFour1 = this.getRandomArrayElements(this.allProducts4, 3);
                this.threeProductsFour2 = this.getRandomArrayElements(this.allProducts4, 3);
                this.OneProductsFour = this.getRandomArrayElements(this.allProducts4, 1);
                this.FourProductsFour = this.getRandomArrayElements(this.allProducts4, 4);
            }
        });
        /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
        if(getCookie('username')){
            this.username = getCookie('username')
            this.uId = getCookie('id')
            this.roleId = getCookie('roleId')
            // this.username = getCookie('username').key
            this.$axios.get("/netsc/userinfo/"+this.uId).then((res)=>{
                console.log(res.data)
                if (res.data.result != null) {
                    this.user = res.data.result
                    if(this.user.userImage == null){
                        this.user.userImage = this.myphoto
                    }
                }
            })
        }else{
            this.user = {"userImage":this.myphoto}
        }
    },
    methods:{
        buyNow(product){
            console.log(product)
            this.$router.push({
                path: '/allitems/item',
                query: {
                    item: product
                }
            })
        },
        randomNum(minNum,maxNum){ 
            switch(arguments.length){ 
                case 1: 
                return parseInt(Math.random()*minNum+1,10); 
                break; 
                case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
                break; 
                default: 
                return 0; 
                break; 
            } 
        },
        getRandomArrayElements(arr, count) {
            var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(min);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    #miancarousel{
        display: block;
        height: 100%;
    }
    #maincarouselInner{
        height: 100%;
    }
    #maincarouselInner img{
        width: 100%;
        height: 347px;
    }
    #mainBodyTwoTable img{
        width: 88px;
        height:72px;
    }
    #mainBodyThreeDiv img{
        width: 100%;
        height: 100%;
    }
    #mainBodyEight img{
        width: 350px;
        height: 180px;
    }
    #bodyFourTable tbody tr td{
        vertical-align: middle;
    }
    #bodyFiveTable tbody tr td{
        vertical-align: middle;
    }
    #bodySixTable tbody tr td{
        vertical-align: middle;
    }
    #bodySevenTable tbody tr td{
        vertical-align: middle;
    }
</style>
