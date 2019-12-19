<template>
    <header class="header">
        <!-- start header-top -->
        <div class="header-top">
            <nav class="navbar navbar-expand-sm bg-light navbar-dark">
                <!-- Brand -->
                <img :src="icon" class="pb-2 ml-2 mt-1" style="{width: 45px;height:45px;}"><a href="#" class="navbar-brand text-muted ml-2">蔬菜外卖平台</a>
                <!-- the first navbar links -->
                <!-- Toggler/collapsibe Button -->
                <button class="navbar-toggler ml-auto bg-danger" type="button" data-toggle="collapse" data-target="#collapsibleNavbar1">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <!-- Navbar links -->
                <div class="collapse navbar-collapse " id="collapsibleNavbar1">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="/">主页</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">关于</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">联系我们</a>
                        </li> 
                    </ul>
                </div> 
                <!-- the second navbar links -->
                <!-- Toggler/collapsibe Button -->
                <button class="navbar-toggler ml-auto bg-danger" type="button" data-toggle="collapse" data-target="#collapsibleNavbar2">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <!-- Navbar links -->
                <div class="collapse navbar-collapse " id="collapsibleNavbar2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" v-if="showlogin">
                            <span class="nav-link text-muted pr-0" >你还未登录，请</span>
                        </li>
                        <li class="nav-item" v-if="showlogin">
                            <a class="nav-link text-muted pl-0" href="/login">登录</a>
                        </li>
                        <li class="nav-item" v-if="showsignup">
                            <span class="nav-link text-muted pr-0" >欢迎您，</span>
                        </li>
                        <li class="nav-item" v-if="showsignup">
                            <a class="nav-link text-muted pl-0" href="/login" >{{username}}</a>
                        </li>
                        <li class="nav-item" v-if="showsignup">
                            <a ref="quit" class="nav-link text-muted pl-0" href="#" @click="quit()">退出</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted"  @click="checkDirect('/perCenter/myorders')">我的订单</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted"  @click="checkDirect('/perCenter/perMessage')">个人中心</a>
                        </li> 
                        <li class="nav-item" v-if="walletIsOpening">
                            <a class="nav-link text-muted" data-toggle="modal" data-target="#myWallet" href="#">我的钱包</a>
                        </li> 
                        <li class="nav-item" v-if="!walletIsOpening">
                            <a class="nav-link text-muted" data-toggle="modal" data-target="#myWallet" href="#">开通个人钱包</a>
                        </li> 
                        <!-- <li class="nav-item">
                            <a class="nav-link text-muted" href="#">官方论坛</a>
                        </li>  -->
                    </ul>
                </div>
            </nav>
        </div>
        <!-- end header-top -->
        <!-- start header-middle -->
        <div class="header-middle" id="header-middle" :background-image="bgimage">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-8">
                        <div id="logo-left">
                            <a href="#">
                                <img v-bind:src="logourl" class="img-responsive center-block" align="absmiddle">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-6 hidden-xs">
                        <div class="input-group mt-5 input-group-sm inputgroup1">
                            <input class="form-control" for="#searchinput" type="search" name="search" placeholder="请输入要搜索的商品！" @keyup.enter="search" v-model="searchMessage"/>
                            <div class="input-group-append">
                                <button id="searchinput" class="btn btn-danger btn-outline-secondary" type="button" @click="search"><img id='inputImg' class="" :src="searchicon"alt="Search Icon"  />
                                </button>
                            </div>                            
                        </div>
                    </div>
                    <div class="col-md-3 col-xs-4 col-sm-6">
                        <div id="logo-right" class="mt-4">
                            <a href="#">
                                <img v-bind:src="payimgurl" class="img-responsive center-block">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end header-middle -->
        <!-- start header-bottom -->
        <div class="header-bottom bg-secondary">
            <div class="container">
                <div class="row">
                    <!-- start category-list-menu  -->
                    <div class="col-10 col-lg-2 p-0 d-none d-lg-block">
                        <div>
                            <div class="float-sm-right border border-danger border-left-1">
                                <a class="btn btn-danger dropdown-toggle pl-1 pr-1" data-toggle="dropdown" href="" rel="button">
                                    <span class="dropdownName">
                                        全部蔬菜类型&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </a>
                                <!-- show -->
                                <ul ref="allDropdownItems" id="allDropdownItem" class="dropdown-menu bg-danger dropdown-menu-right  border border-danger border-1" :class="{'show':allitemsShow}">
                                    <li class="dropdown-item dropright">
                                        <a class="text-white" data-toggle="dropdown" id="dropdownMenu1">
                                            <span>肉类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </a>
                                        <div class="dropdown-menu ml-4 text-center" id="dropDownCur" v-show="showAllItem">
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('鸡肉')">鸡肉</a>
                                            <div class="dropdown-divider bg-dark"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('鸭肉')">鸭肉</a>
                                            <div class="dropdown-divider bg-info "></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('鹅肉')">鹅肉</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('猪肉')">猪肉</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('羊肉')">羊肉</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('牛肉')">牛肉</a>
                                        </div>
                                    </li>
                                    <div class="dropdown-divider bg-info"></div>
                                    <li class="dropdown-item dropright">
                                        <a class="text-white" data-toggle="dropdown">
                                            <span>鱼类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </a>
                                        <div class="dropdown-menu ml-4 text-center">
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('鲭鱼')">鲭鱼</a>
                                            <div class="dropdown-divider bg-dark"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('草鱼')">草鱼</a>
                                            <div class="dropdown-divider bg-info "></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('鲢鱼')">鲢鱼</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('鳙鱼')">鳙鱼</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('鲫鱼')">鲫鱼</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('章鱼')">章鱼</a>
                                            <!--<table class="mx-auto table-responsive">-->
                                                <!--<tr class="mx-auto">-->
                                                    <!--<td><div class="mx-auto">&nbsp;&nbsp;鲭鱼</div></td>-->
                                                    <!--<td>草鱼</td>-->
                                                <!--</tr>-->
                                                <!--<tr class="mx-auto">-->
                                                    <!--<td>鲢鱼</td>-->
                                                    <!--<td>鳙鱼</td>-->
                                                <!--</tr>-->
                                                <!--<tr class="mx-auto">-->
                                                    <!--<td>鲫鱼</td>-->
                                                    <!--<td>章鱼</td>-->
                                                <!--</tr>-->
                                            <!--</table>-->
                                        </div>
                                    </li>
                                    <div class="dropdown-divider"></div>
                                    <li class="dropdown-item dropright">
                                        <a class="text-white" data-toggle="dropdown">
                                            <span>瓜类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </a>
                                        <div class="dropdown-menu ml-4 text-center">
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('西瓜')">西瓜</a>
                                            <div class="dropdown-divider bg-dark"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('哈密瓜')">哈密瓜</a>
                                            <div class="dropdown-divider bg-info "></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('南瓜')">南瓜</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('冬瓜')">冬瓜</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('香瓜')">香瓜</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('丝瓜')">丝瓜</a>
                                        </div>
                                    </li>
                                    <div class="dropdown-divider"></div>
                                    <li class="dropdown-item dropright">
                                        <a class="text-white" data-toggle="dropdown">
                                            <span>菌类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </a>
                                        <div class="dropdown-menu ml-4 text-center">
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('木耳')">木耳</a>
                                            <div class="dropdown-divider bg-dark"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('金针菇')">金针菇</a>
                                            <div class="dropdown-divider bg-info "></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('香菇')">香菇</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('银耳')">银耳</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('平菇')">平菇</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('茶树菇')">茶树菇</a>
                                        </div>
                                    </li>
                                    <div class="dropdown-divider"></div>
                                    <li class="dropdown-item dropright">
                                        <a class="text-white" data-toggle="dropdown">
                                            <span>蔬果类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </a>
                                        <div class="dropdown-menu ml-4 text-center">
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('西红柿')">西红柿</a>
                                            <div class="dropdown-divider bg-dark"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('土豆')">土豆</a>
                                            <div class="dropdown-divider bg-info "></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('青椒')">青椒</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('胡萝卜')">胡萝卜</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('白萝卜')">白萝卜</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('茄子')">茄子</a>
                                        </div>
                                    </li>
                                    <div class="dropdown-divider"></div>
                                    <li class="dropdown-item dropright">
                                        <a class="text-white" data-toggle="dropdown">
                                            <span>水产类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </a>
                                        <div class="dropdown-menu ml-4 text-center">
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('泥鳅')">泥鳅</a>
                                            <div class="dropdown-divider bg-dark"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('扇贝')">扇贝</a>
                                            <div class="dropdown-divider bg-info "></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('海参')">海参</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('甲鱼')">甲鱼</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('虾')">虾</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('蟹')">蟹</a>
                                        </div>
                                    </li>
                                    <div class="dropdown-divider"></div>
                                    <li class="dropdown-item dropright">
                                        <a class="text-white" data-toggle="dropdown">
                                            <span>青菜类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </a>
                                        <div class="dropdown-menu ml-4 text-center">
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('卷心菜')">卷心菜</a>
                                            <div class="dropdown-divider bg-dark"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('花菜')">花菜</a>
                                            <div class="dropdown-divider bg-info "></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('白菜')">白菜</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('韭菜')">韭菜</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('菠菜')">菠菜</a>
                                            <div class="dropdown-divider bg-info"></div>
                                            <a class="dropdown-item text-center " href="#" @click="selectgoods('油麦菜')">油麦菜</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- end category-list-menu  -->
                    <!-- the second navbar links -->
                    <nav class="navbar navbar-expand-sm bg-secondary navbar-light p-0 col-lg-8">
                        <!-- Toggler/collapsibe Button -->
                        <button class="navbar-toggler ml-auto bg-danger" type="button" data-toggle="collapse" data-target="#collapsibleNavbar3">
                            <span class="navbar-toggler-icon "></span>
                        </button>
                        <!-- Navbar links -->
                        <div class="collapse navbar-collapse " id="collapsibleNavbar3">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item ml-1 mr-2 ">
                                    <a ref="home" class="nav-link text-white" href="/">商城首页</a>
                                </li>
                                <li class="nav-item ml-2 mr-3 ">
                                    <a class="nav-link text-white" href="/allitems/allProducts">全部商品</a>
                                </li>
                                <!-- <li class="nav-item ml-2 mr-2">
                                    <a class="nav-link text-white" href="#" @click="test2">活动中心</a>
                                </li>
                                <li class="nav-item ml-2 mr-2">
                                    <a class="nav-link text-white" href="#" @click="test1">积分商城</a>
                                </li> -->
                                <li class="nav-item ml-2 mr-3">
                                    <a class="nav-link text-white" @click="checkDirect('/perCenter/perMessage')">个人中心</a>
                                </li>
                                <li class="nav-item ml-2 mr-3">
                                    <a class="nav-link text-white" @click="checkDirect('/perCenter/myorders')">我的订单</a>
                                </li>
                                <!--<li class="nav-item ml-2 mr-3">-->
                                    <!--<a class="nav-link text-white" href="/perCenter/perMessage">我的特权</a>-->
                                <!--</li>-->
                                <li class="nav-item ml-2 mr-3">
                                    <a class="nav-link text-white" @click="checkDirect('/perCenter/perMessage')">我的资料</a>
                                </li>
                                
                                <!--<li class="nav-item ml-1 mr-2">-->
                                    <!--<a class="nav-link text-white" href="/perCenter/perMessage">我的任务</a>-->
                                <!--</li>-->
                            </ul>
                        </div>
                    </nav>
                    <!-- start main menu -->
                    <!-- <div class="col-2 col-lg-8">
                        <nav class="navbar navbar-expand-sm bg-secondary navbar-light p-0">
                            
                        </nav>
                    </div> -->
                    <!-- end main menu -->
                    <!-- start cart list -->
                    <div class="col-lg-2 pl-0 d-none d-lg-block">
                        <div id="cartlist" class="float-lg-left">
                            <a id="cartlistButton" class="btn btn-danger text-white" @click="checkDirect('/allitems/trolley')"rel="button" >
                                <span class="border border-left-0 border-bottom-0 border-top-0 float-left pl-2 pr-4">
                                    购物车
                                </span>
                                <span class="float-right pr-1">
                                    {{cartNumber}}
                                </span>
                            </a>
                        </div>
                    </div>
                    <!-- start cart list -->
                </div>
                <!-- start myWallet modal(模态框) -->
                <div class="modal fade" id="myWallet">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <!-- 模态框头部 -->
                            <div class="modal-header">
                                <h4 class="modal-title">我的钱包</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- 模态框主体 -->
                            <div class="modal-body">
                                <form role="form" class="p-4 border" @submit.prevent=''>
                                    <div class=" mt-3 mb-3" v-if="!isFirstUse && walletIsOpening">
                                        <label>
                                            余额：
                                        </label>
                                        <label class="ml-3">
                                            <span class="text-info">{{money}}</span>元
                                        </label>
                                    </div>
                                    <div class=" mt-3 mb-3 " v-if="!isFirstUse && walletIsOpening">
                                        <button data-toggle="modal" data-target="#recharge" type="button" class="ml-3 btn btn-danger">
                                            充值
                                        </button>
                                    </div>
                                    <div class=" mt-3 mb-3" v-if="!walletIsOpening">
                                        <label class="">
                                            亲爱的 <span class="text-danger">{{username}}</span>,你还未开通个人钱包哦！
                                        </label>
                                    </div>
                                    <div class=" mt-3 mb-3 " v-if="!walletIsOpening">
                                        <button type="button" class="ml-3 btn btn-primary" id="checkAndOpenButton" @click="addWallet">
                                            确认并开通
                                        </button>
                                    </div>
                                    <div class=" mt-3 mb-3" v-if="walletIsOpening && isFirstUse">
                                        <label class="">
                                            您已开通个人钱包，请设置一个支付密码。
                                        </label>
                                    </div>
                                    <div class="form-inline mt-3 mb-3 " v-if="walletIsOpening && isFirstUse">
                                        <div class="input-group payPasswordInputGroup">
                                            <label>
                                                支付密码：
                                            </label>
                                            <div class="input-group-append">
                                                <input type="password" maxlength="6" class="form-control ml-3" v-model="payPassword" />
                                            </div>
                                        </div>  
                                    </div>
                                    <div class=" mt-3 mb-3 " v-if="walletIsOpening && isFirstUse">
                                        <button type="button" class="ml-3 btn btn-primary" @click="checkWallet">
                                            确认设置
                                        </button>
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
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="">关闭</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end myWallet modal(模态框) -->
                <!-- start myWallet modal(模态框) -->
                <div class="modal fade" id="recharge">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <!-- 模态框头部 -->
                            <div class="modal-header">
                                <h4 class="modal-title">充值</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- 模态框主体 -->
                            <div class="modal-body">
                                <form role="form" class="p-4 border" @submit.prevent=''>
                                    <div class=" mt-3 mb-3">
                                        <label class="">
                                            请输入充值金额。
                                        </label>
                                    </div>
                                    <div class="form-inline mt-3 mb-3 ">
                                        <div class="input-group payPasswordInputGroup">
                                            <label>
                                                重置金额：
                                            </label>
                                            <div class="input-group-append">
                                                <input type="text" class=" form-control ml-3" v-model="rechargeMoney" />
                                            </div>
                                            <label >
                                                元
                                            </label>
                                        </div>  
                                    </div>
                                    <div class=" mt-3 mb-3 ">
                                        <button data-dismiss="modal" type="button" class="ml-3 btn btn-primary" id="checkAndRechageButton" @click="recharge">
                                            确认充值
                                        </button>
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
                                    </input>
                                -->                                    
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="">关闭</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end myWallet modal(模态框) -->
            </div>
        </div>
        <!-- end header-bottom -->
    </header>
</template>
<script>
    import {setCookie,getCookie,delCookie} from '@/pages/index/assets/js/cookie.js'
    $("#dropdownMenu1").hover(
        function(){
            $("#dropDownCur").show();
        });//为了鼠标可以进入下拉框
    $("#dropDownCur").hover(function() {
        $(this).show();//鼠标进入下拉框
    }, function() {
        $(this).hide();//鼠标离开下拉框后，就会消失
    });
/* eslint-disable */
export default {
    name: 'headerDiv',
    data: function(){
        return{
            searchicon: require('@/pages/index/assets/img/icons/icon-search.png'),
            bgimage: require('@/pages/index/assets/img/bg/timg.jpg'),
            icon:require('@/pages/index/assets/img/icons/cart.jpg'),
            cartNumber:0,
            showlogin: true,
            showsignup: false,
            user:null,
            username:'',
            uId:null,
            roleId:null,
            payPassword:"",
            walletIsOpening:false,
            isFirstUse:true,
            money:null,
            rechargeMoney:0,
            menuKey:1,
            searchMessage:null,
            showAllItem:true
        }
    },
    props: ['logourl','payimgurl'],
    mounted(){
        /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
        if(getCookie('username')){
            this.username = getCookie('username');
            this.uId = getCookie('id');
            this.roleId = getCookie('roleId');
            // this.username = getCookie('username').key;
            this.showlogin = false;
            this.showsignup = true;
            this.$axios.get("/netsc/wallet/uid="+this.uId).then((res)=>{
                console.log(res.data);
                if (res.data.result != null) {
                    this.walletIsOpening = true;
                    if(res.data.result.firstUse==="false"){
                        this.isFirstUse = false;
                        this.money = res.data.result.money;
                    }
                }
            });
            this.$axios.get("/netsc/userinfo/"+this.uId).then((res)=>{
                console.log(res.data);
                if (res.data.result != null) {
                    this.user = res.data.result;
                }
            })
            this.$axios.get("/netsc/trolleys/uid="+this.uId).then((res)=>{
                console.log(res.data);
                if (res.data.result != null) {
                    this.cartNumber = res.data.result.length;
                }
            })
        }
    },
    methods:{
        quit(){
            /*删除cookie*/
            this.$axios.post('/netsc/logout').then((res)=>{
            });
            delCookie('username');
            delCookie('id');
            delCookie('roleId');
            this.username = null;
            this.uId = null;
            this.roleId = null;
            this.showlogin = true;
            this.showsignup = false;
            alert("退出成功！");
            this.$router.push({
                path: '/'
            });
            window.location.reload();
        },
        test1(){
            this.allitemsShow=true;
        },
        test2(){
            this.allitemsShow=false;
        },
        search(){
            console.log("调用search");
            this.$router.push({
                path: '/allitems/allProducts',
                query: {
                    searchMessage: this.searchMessage
                }
            });
            window.location.reload();
        },
        selectgoods(item){
            this.searchMessage = item;
            this.search();
        },
        addWallet(){
            if(getCookie('username')){
                let data = {"firstUse":"true","money":0,"payPassword":null,"uid":this.uId,"wname":this.username+"的钱包"};
                // console.log(data)
                this.$axios.post('/netsc/wallet',data).then((res)=>{
                    console.log(res.data);
                    if (res.data.status ==="ok") {
                        alert("开通成功！");
                    }else{
                        alert("开通失败！");
                    }
                });
                this.walletIsOpening = true;
                this.isFirstUse = true;
                this.$forceUpdate();
            }else {
                alert("请登录后再试！")
            }
        },
        checkWallet(){
            let data = {"firstUse":"false","money":0,"payPassword":this.payPassword};
            console.log(this.payPassword);
            this.$axios.put('/netsc/wallet/'+this.uId,data).then((res)=>{
                console.log(res.data);
                if (res.data.status ==="ok") {
                    this.$axios.get("/netsc/wallet/uid="+this.uId).then((res)=>{
                        console.log(res.data);
                        if (res.data.result != null) {
                            this.walletIsOpening = true;
                            if(res.data.result.firstUse==="false"){
                                alert("设置成功！");
                                this.isFirstUse = false;
                                this.money = res.data.result.money;
                            }
                        }
                    })
                }else{
                    alert("设置失败！");
                }
            });
            this.$forceUpdate();
        },
        recharge(){
            var sum = parseFloat(this.money)+parseFloat(this.rechargeMoney);
            let data = {"money":sum};
            console.log(sum);
            this.$axios.put('/netsc/wallet/'+this.uId,data).then((res)=>{
                console.log(res.data);
                if (res.data.status ==="ok") {
                    this.$axios.get("/netsc/wallet/uid="+this.uId).then((res)=>{
                        console.log(res.data);
                        if (res.data.result != null) {
                            this.walletIsOpening = true;
                            if(res.data.result.firstUse==="false"){
                                alert("充值成功！");
                                this.isFirstUse = false;
                                this.money = res.data.result.money;
                            }
                        }
                    })
                }else{
                    alert("充值失败！");
                }
            })

        },
        checkDirect(str){
            if (getCookie('username')){
                this.$router.push({
                    path: str
                });
            }
            else {
                alert('请登录后再试！');
            }
        }
    },
    watch: {
        payPassword(curVal) {
            if(/[^\d]/g.test(curVal)) {
                this.payPassword = this.payPassword.replace(/[^\d]/g, '');
            }
        },
    },
    computed:{
        allitemsShow:function(){
            if (this.$route.path === "/") {
                return true
            }else{
                return false
            }
        }
    }
}
</script>
<style>
    body{
        text-align: center;
    }
    /*header-middle css*/
    #logo-left {
        max-width:123px;
        margin: 25px auto;
    }
    #logo-left img{
        width: 100%;
        height: 85%;
    }
    #searchinput{
        width: 50%;
    }
    #inputImg{
        width: 100%;
        height: 85%;
    }
    #logo-right {
        max-width:270px;
        margin:auto;
    }
    #logo-right img{
        width: 100%;
        height: 85%;
    }
    /*header-bottom css*/
    /*category-list-menu css*/
    #allDropdownItem{
        border-radius: 0;
    }
    /*cart list css*/
    #cartlist{
        display: block;
        width: 100%;
    }
    #cartlist #cartlistButton{
        width: 100%;
    }
    .payPasswordInputGroup{
        margin:auto;
    }
    /*------------------------修改type=number的样式------------------------------------------------*/
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
</style>
