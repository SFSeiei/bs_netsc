<template>
    <footer class="footer">
        <div class="pt-4">
            <!-- <div class="bottom_bg"></div> -->
            <div class="container ">
                <div class="row ">
                    <div class="col-md-8" >
                        <div class="bs_qa_t1 col-md-4 text-secondary">
                            <ul class="list list-unstyled ">
                                <h6 class="text-secondary" ><img :src="icon1"><span class="ml-2">我是新手</span></h6>
                                <li class="small "><a class="text-secondary ml-5" href="#" >什么是外卖平台</a>
                                </li>
                                <li class="small "><a class="text-secondary ml-5" href="#">如何购买</a>
                                </li>
                                <li class="small "><a class="text-secondary ml-5" href="#">如何赠送</a>
                                </li>
                                <!-- <li class="small "><a class="text-secondary ml-5" href="#">如何获取聚豆</a>
                                </li> -->
                            </ul>
                        </div>
                        <div class="bs_qa_t1 col-md-4 text-secondary">
                            <ul class="list list-unstyled ">
                                <h6 class="text-secondary" ><img :src="icon2"><span class="ml-3">个人中心</span></h6>
                                <li class="small "><a class="text-secondary ml-5" href="#">发货时间</a>
                                </li>
                                <li class="small "><a class="text-secondary ml-5" href="#">如何收货</a>
                                </li>
                                <li class="small "><a class="text-secondary ml-5" href="#">商品状态</a>
                                </li>
                                <!-- <li class="small "><a class="text-secondary" href="#">如何获取聚豆</a>
                                </li> -->
                            </ul>
                        </div>
                        <div class="bs_qa_t1 col-md-4 text-secondary">
                            <ul class="list list-unstyled ">
                               <h6 class="text-secondary" ><img :src="icon3"><span class="ml-3">支付方式</span></h6>
                                <li class="small "><a class="text-secondary ml-5" href="#">支付方式</a>
                                </li>
                                <li class="small "><a class="text-secondary ml-5" href="#">如何充值</a>
                                </li>
                                <!-- <li class="small "><a class="text-secondary" href="#">如何赠送</a>
                                </li> -->
                                <li class="small "><a class="text-secondary ml-5" href="#">如何开通钱包</a>
                                </li>
                            </ul>
                        </div>
                        <div class="bs_qa_t1 col-md-4 text-secondary">
                            <ul class="list list-unstyled text-secondary">
                                <h6 class="text-secondary" ><img :src="icon4" style="{width: 33px;height:34px;}"><span class="ml-3">在线服务</span></h6>
                                <li class="small "><a class="text-secondary ml-5" href="#">在线服务</a>
                                </li>
                                <li class="small "><a class="text-secondary ml-5" href="#">在线客服</a>
                                </li>
                                <li class="small "><a class="text-secondary ml-5" href="#">平台合作</a>
                                </li>
                                <!-- <li class="small "><a class="text-secondary" href="#">如何获取聚豆</a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="bphoto">
                            <img :src="bphotourl" style="{width: 100px;height:100px;}"><br>
                            <span class="text-white"> 扫一扫</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="copyrightMsg text-secondary">
                            <ul class="list-inline list-unstyled">
                                <li class="list-inline-item small text-secondary mr-0 pr-2"><a class="text-secondary" href="#">服务条款</a></li>
                                <li class="list-inline-item small text-secondary mr-0 pr-2"><a class="text-secondary" href="#">广告服务</a></li>
                                <li class="list-inline-item small text-secondary mr-0 pr-2"><a class="text-secondary" href="#">平台客服</a></li>
                                <li class="list-inline-item small text-secondary mr-0 pr-2"><a class="text-secondary" href="#">商务合作</a></li>
                                <li class="list-inline-item small text-secondary mr-0 pr-2"><a class="text-secondary" href="#">平台招聘</a></li>
                                <li class="list-inline-item small text-secondary mr-0 pr-2"><a class="text-secondary" href="#">成长总览</a></li>
                                <li class="list-inline-item small text-secondary mr-0 pr-2" style="border:0">
                                    <a class="text-secondary" href="#">网站导航</a>
                                </li>
                            </ul>
                            <p class="small text-secondary">
                                Copyright@{{author}}
                            </p>
                            <p class="small text-secondary">
                                版权所有，违者必究
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
/* eslint-disable */
export default {
    name: 'footerDiv',
    data(){
        return {
            author:'2019 – 2019 ZhangXP. ALL RIGHTS RESERVED.',
            icon1:require('@/pages/index/assets/img/icons/icon8.jpg'),
            icon2:require('@/pages/index/assets/img/icons/icon9.jpg'),
            icon3:require('@/pages/index/assets/img/icons/icon10.jpg'),
            icon4:require('@/pages/index/assets/img/icons/icon12.jpg')
        }
    },
    computed: {
    },
    props: ["bphotourl"]
}
</script>
<style>
    .footer{
        background-color: rgb(59,63,74);
    }
    .bs_qa_t1{
        width: 25%;
        float: left;
        text-align: left;
        border: 1px;
        border-style: none solid none none ;
        }
    .bs_qa_t1 ul li{
        margin-top: 5px;
    }
    .bottom_bg{
        position: absolute;
        height: 40%;
        width: 100%;
        background-position: center center;
        background-size: cover;
        background-color: gray;
    }
    .copyrightMsg{
        margin-top: 20px;
        padding-top: 25px;
        border:1px;
        border-style: solid none none none;
    }
    .copyrightMsg ul li {
        border:1px;
        border-style: none solid none none;
    }
    .bphoto{
        
    }
</style>
