<template>
    <!-- start personal Info  -->
    <div id="trolley" class="col-md-10 ">
        <div class="col-md-12 bg-light pb-3">
            <!-- start trolley  -->
            <div class="tabbable pt-3" id="tabPerInfo">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a ref='a1' class="nav-link  disabled" :class="{active:isActive1,'font-weight-bold':isActive1}"
                           href="" data-toggle="tab">购物车</a>
                    </li>
                </ul>
                <div class="tab-content border ">
                    <div class="tab-pane active" id="selectType">
                        <h6 class="text-left mt-3 p-2 ml-3">亲爱的 <span class="text-danger">{{username}}</span>，这里展示您的购物车里的商品。
                        </h6>
                        <form role="form" class="p-4 table-responsive" @submit.prevent=''>
                            <table class="table table-hover table-bordered">
                                <thead class="thead-light">
                                <tr>
                                    <th>商品编号</th>
                                    <th>商品名称</th>
                                    <th>商品数量</th>
                                    <th>商家价格</th>
                                    <th>
                                        <div class="form-check p-0">
                                            <label class="form-check-label">
                                                全选
                                            </label>
                                            <input type="checkbox" class="form-check-input ml-1" v-model='checked'
                                                   v-on:click='checkedAll'>
                                        </div>
                                    </th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(pro,index) in allPros" v-bind:key="pro.pId">
                                    <td>{{index+1}}</td>
                                    <td>{{pro.pName}}</td>
                                    <td class="">
                                        <form class="form-inline " @submit.prevent=''>
                                            <div class="numberInput">
                                                <button class="btn btn-info btn-sm " @click="pro.pNumber-- ">&lt;
                                                </button>
                                                <input class="form-control" v-model='pro.pNumber' type="number">
                                                <button class="btn btn-info btn-sm " @click="pro.pNumber++">&gt;
                                                </button>
                                                <span class="ml-1">斤</span>
                                            </div>
                                        </form>
                                    </td>
                                    <td class="text-danger">{{pro.pPrice}}元/斤</td>
                                    <td>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" v-model='checkboxList'
                                                   :value="pro">
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-info btn-sm " @click="deleteCartPro(pro.pId)">删除</button>
                                        <!-- <button class="btn btn-danger btn-sm">审核通过</button> -->
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="addButton" class="text-right">
                                <!--<label>checkboxList:{{checkboxList}}</label>-->
                                <label class="mt-2">总共：</label><label class="mt-2 mr-4 text-danger">{{pSum}}元</label>
                                <button class="btn btn-danger float-right mr-4" data-toggle="modal"
                                        data-target="#trolleyInfo" @click="">提交订单
                                </button>
                                <!--<label>dest:{{dest}}</label>-->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- end trolley -->
            <!-- start trolley infomations modal(模态框) -->
            <div class="modal fade" id="trolleyInfo">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <!-- 模态框头部 -->
                        <div class="modal-header">
                            <h4 class="modal-title">订单信息</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- 模态框主体 -->
                        <div class="modal-body">
                            <form role="form" class="p-4 border" @submit.prevent='imply'>
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
                                        收货地址：
                                    </label>
                                    <label class="ml-3">
                                        <form>
                                            <div class="form-group">
                                                <select class="form-control" id="sel1">
                                                    <option v-for="(address,index) in addressList" v-bind:key="index"
                                                            @click="adressinfo(address)">{{address.addName}}
                                                    </option>
                                                </select>
                                                <br>
                                            </div>
                                        </form>
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        联系人名：
                                    </label>
                                    <label class="ml-3">
                                        {{address.linkmanName}}
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        联系电话：
                                    </label>
                                    <label class="ml-3">
                                        {{address.telphone}}
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        商品明细：
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label class="ml-3">
                                        <table class="table table-hover table-bordered ">
                                            <thead class="thead-light">
                                            <tr>
                                                <th>商品编号</th>
                                                <th>商品名称</th>
                                                <th>商品数量</th>
                                                <th>商品价格</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(pro,index) in checkboxList" v-bind:key="pro.pId">
                                                <td>{{index+1}}</td>
                                                <td>{{pro.pName}}</td>
                                                <td class="">{{pro.pNumber}}斤</td>
                                                <td class="text-danger">{{pro.pPrice}}元/斤</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        总共价钱：
                                    </label>
                                    <label class="ml-3 text-danger">
                                        {{pSum}} <span class="ml-1">元</span>
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        订单状态：
                                    </label>
                                    <label class="ml-3 text-info">
                                        {{orderState}}
                                    </label>
                                </div>
                            </form>
                        </div>

                        <!-- 模态框底部 -->
                        <div class="modal-footer align-content-center">
                            <div class="footerButton text-center">
                                <!-- <button id="b4" type="button" class="btn btn-light border mt-5 mr-5" @click="notPass" data-dismiss="modal" v-if="auditButtonShow">
                                    审核未通过
                                </button> -->
                                <input ref="submitOrderButton" id="b1" type="submit" class="btn btn-primary mt-2"
                                       @click="submitOrder" value="确认提交" data-dismiss="modal">
                                <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal" v-if="!auditButtonShow">关闭</button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end trolley infomations modal(模态框) -->
            <!-- 按钮：用于打开选择付款模态框 -->
            <button ref="selectPayButton" type="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#selectPayModal" style="display:none; ">
                打开选择付款模态框
            </button>
            <!-- start my comments  modal(模态框) -->
            <div class="modal fade" id="selectPayModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <!-- 模态框头部 -->
                        <div class="modal-header">
                            <h4 class="modal-title">请选择付款时间！</h4>
                            <button type="button" class="close" data-dismiss="modal" @click="windowReload">&times;
                            </button>
                        </div>

                        <!-- 模态框主体 -->
                        <div class="modal-body">
                            <form role="form" class="p-4 border" @submit.prevent=''>
                                <div class="form-inline mt-3 mb-3 r">
                                    <div id="selectButtonGroup">
                                        <button ref="" type="button" class="btn btn-danger btn-lg border mr-5"
                                                @click="pay"
                                                data-dismiss="modal" v-if="">
                                            立即付款
                                        </button>
                                        <button ref="" type="button" class="btn btn-secondary btn-lg border ml-3 mr-5"
                                                @click="windowReload" data-dismiss="modal" v-if="">
                                            稍后付款
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- 模态框底部 -->
                        <div class="modal-footer align-content-center">
                            <div class="footerButton text-center">
                                <button ref="" type="button" class="btn btn-secondary border mt-5 mr-5"
                                        @click="windowReload" data-dismiss="modal" v-if="">
                                    关闭
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end my comments infomations modal(模态框) -->
            <!-- 按钮：用于打开付钱模态框 -->
            <button ref="payButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#payModal"
                    style="display:none; ">
                打开付钱模态框
            </button>
            <!-- start pay  modal(模态框) -->
            <div class="modal fade" id="payModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <!-- 模态框头部 -->
                        <div class="modal-header">
                            <h4 class="modal-title">付款信息</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- 模态框主体 -->
                        <div class="modal-body">
                            <form role="form" class="p-4 border" @submit.prevent=''>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        付款方式：
                                    </label>
                                    <label class="ml-3">
                                        个人钱包
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        钱包余额：
                                        <!-- 用&nbsp;&nbsp;户&nbsp;名： -->
                                    </label>
                                    <label class="ml-3">
                                        <span class="text-primary">{{myMoney}}</span>元
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        待付款项：
                                    </label>
                                    <label class="ml-3">
                                        <span class="text-danger">{{paySum}}</span>元
                                    </label>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        付款后余额：
                                    </label>
                                    <label class="ml-3">
                                        <span class="text-danger">{{lastMoney}}</span>元
                                    </label>
                                </div>
                            </form>
                        </div>

                        <!-- 模态框底部 -->
                        <div class="modal-footer align-content-center">
                            <div class="footerButton text-center">
                                <button ref="" type="button" class="btn btn-danger border mt-5 mr-5" @click="payPass"
                                        data-dismiss="modal" v-if="">
                                    确认付款
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end my pay modal(模态框) -->
            <!-- 按钮：用于打开支付密码模态框 -->
            <button ref="payPasswordButton" type="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#payPasswordModal" style="display:none; ">
                打开支付密码模态框
            </button>
            <!-- start payPassword modal(模态框) -->
            <div class="modal fade" id="payPasswordModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <!-- 模态框头部 -->
                        <div class="modal-header">
                            <h4 class="modal-title">正在付款...</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- 模态框主体 -->
                        <div class="modal-body">
                            <form ref="payPasswordform" role="form" class="p-4 border"
                                  @submit.prevent='checkPayPassword'>
                                <div class="form-inline mt-3 mb-3">
                                    <label>
                                        支付密码：
                                    </label>
                                    <input type="password" class="form-control ml-3" id="payPassword"
                                           v-model="payPassword">
                                    <button ref="payPasswordButtonSubmit" type="submit" style="display: none;">提交
                                    </button>
                                </div>
                            </form>
                        </div>
                        <!-- 模态框底部 -->
                        <div class="modal-footer align-content-center">
                            <div class="footerButton text-center">
                                <button ref="closePayPasswordButton" type="button"
                                        class="btn btn-danger border mt-5 mr-5" @click="" data-dismiss="modal" v-if="">
                                    关闭
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end payPassword modal(模态框) -->
            <!-- 按钮：用于打开付钱模态框 -->
            <button ref="addAddressButton" type="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#addAddressModal" style="display:none; ">
                打开添加地址模态框
            </button>
            <!-- start pay  modal(模态框) -->
            <div class="modal fade" id="addAddressModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <!-- 模态框头部 -->
                        <div class="modal-header">
                            <h4 class="modal-title">添加新地址</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- 模态框主体 -->
                        <div class="modal-body">

                            <div class="form mt-3 mb-3">
                                <div class="form-inline mt-3 mb-3">
                                    <label for="addAddress" class="ml-3">
                                        地址名称：
                                    </label>
                                    <input type="text" class="form-control ml-3" id="addAddress" v-model='getaddress'/>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label for="addMan" class="ml-3">
                                        联&nbsp;系&nbsp;人：
                                    </label>
                                    <input type="text" class="form-control ml-3" id="addMan" v-model="linkmanName"/>
                                </div>
                                <div class="form-inline mt-3 mb-3">
                                    <label for="addContactWay" class="ml-3">
                                        联系方式：
                                    </label>
                                    <input type="text" class="form-control ml-3" id="addContactWay"
                                           v-model='linkmanTel'/>
                                </div>
                            </div>
                        </div>
                        <!-- 模态框底部 -->
                        <div class="modal-footer align-content-center">
                            <div class="footerButton text-center">
                                <button ref="" type="button" class="btn btn-danger border mt-5 mr-5" @click="addAddress"
                                        data-dismiss="modal" v-if="">
                                    添加
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end my pay modal(模态框) -->
        </div>
    </div>
    <!-- end person Info  -->
</template>
<script>
    import {setCookie, getCookie, delCookie} from '@/pages/index/assets/js/cookie.js'

    export default {
        name: 'trolley',
        data() {
            return {
                username: null,
                userId: null,
                roleId: 1,
                allPros: [],
                pSum: null,
                paySum:null,
                myMoney: null,
                lastMoney: null,
                payPassword: null,
                theOrderIds: [],
                isActive1: true,
                isActive2: false,
                isActive3: false,
                isNotActive: false,
                sType: "个人店铺",
                uPreState: null,
                orderState: "订单未提交",
                nickname: null,
                realname: null,
                usex: null,
                email: null,
                uTel: 0,
                uIDcard: '',
                address: "ddd",
                addressList: [],
                checkboxList: [],
                checked: false,
                dest: [],
                getaddress: null,
                linkmanName: null,
                linkmanTel: null
            }
        },
        beforeCreate() {

        },
        components: {},
        mounted() {
            /*页面挂载获取username,id*/
            this.username = getCookie('username');
            this.userId = getCookie('id');
            if (getCookie('id') === 2) {
                this.isSeller = true;
                this.roleId = 2;
            }
            this.$axios.get('/netsc/trolleys/uid=' + this.userId).then((res) => {
                console.log(res.data);
                if (res.data.result != null) {
                    this.allPros = res.data.result;
                    this.checkboxList = this.allPros;
                    var sum = 0;
                    for (var i = 0; i < this.checkboxList.length; i++) {
                        sum = sum + this.allPros[i].pNumber * this.allPros[i].pPrice;
                    }
                    this.pSum = sum.toFixed(2);
                    this.paySum = this.pSum;
                }
            });
            this.$axios.get('/netsc/address/' + this.userId).then((res) => {
                // console.log("地址列表1："+res.data.result);
                if (res.data.result.length !== 0) {
                    console.log("是null")
                    this.addressList = res.data.result;
                    this.address = this.addressList[0];
                } else {
                    this.address = {linkmanName: "无", telphone: "无"};
                }
            })
            // console.log("地址列表："+this.addressList)
            // console.log("地址："+this.address)
        },
        methods: {
            buyNow(product) {
                console.log(product);
                this.$router.push({
                    path: '/allitems/item',
                    query: {
                        item: product
                    }
                })
            },
            checkedAll: function () {
                if (this.checked) {//实现反选
                    this.checkboxList = [];
                } else { //实现全选
                    this.checkboxList = [];
                    this.allPros.forEach((item) => {
                        this.checkboxList.push(item);
                    });
                }
                console.log(this.checkboxList)
            },
            adressinfo(add) {
                // console.log(this.address);
                this.address = add
            },
            submitOrder() {
                if (this.checkboxList.length === 0) {
                    alert("订单中没有要购买的商品！")
                } else if (this.addressList.length === 0) {
                    this.$refs.addAddressButton.click()
                } else {
                    var cont = true;
                    for (var i = 0; i < this.checkboxList.length; i++) {
                        if (this.checkboxList[i].pNumber <= 0 || this.checkboxList[i].pNumber == null) {
                            alert("请输入购买数量！");
                            cont = false;
                            break
                        }
                    }
                    if (cont == true) {
                        //根据商品的sId将checkboxList里商品进行分组
                        var map = {}, dest = [];
                        for (var i = 0; i < this.checkboxList.length; i++) {
                            var ai = this.checkboxList[i];
                            if (!map[ai.sId]) {
                                dest.push({
                                    sId: ai.sId,
                                    data: [ai]
                                });
                                map[ai.sId] = ai;
                            } else {
                                for (var j = 0; j < dest.length; j++) {
                                    var dj = dest[j];
                                    if (dj.sId === ai.sId) {
                                        dj.data.push(ai);
                                        break;
                                    }
                                }
                            }
                        }
                        this.dest = dest;
                        //根据分组结果生成不同店铺的订单
                        for (var i = 0; i < this.dest.length; i++) {
                            // console.log(this.address)
                            var sum = 0;
                            for (var j = 0; j < this.dest[i].data.length; j++) {
                                sum = sum + this.dest[i].data[j].pNumber * this.dest[i].data[j].pPrice
                            }
                            console.log(sum.toFixed(2));

                            let data = {
                                "getAddress": this.address.addName,
                                "linkmanName": this.address.linkmanName,
                                "telphone": this.address.telphone,
                                "mprice": sum.toFixed(2),
                                "ostate": "未付款",
                                "uid": this.userId,
                                "sid": this.dest[i].sId,
                                "getGWay": "配送"
                            };
                            this.addOrders(data, this.dest[i].data);  //因为axios是异步过程，所以不能放在for循环中，另写方法addOrders(data)。
                            // for(var k = 0; k < this.dest[i].data.length; k++){
                            // console.log(this.dest[i].data[k].pName)
                            // var pros = this.dest[i].data; //因为axios是异步过程，所以不能放在for循环中，另写方法addOrderInfo(pro)。
                            // this.addOrderInfo(pros)
                            // }
                            console.log("checkboxList:"+this.checkboxList);
                            console.log("dest:"+this.dest);
                        }
                        this.$refs.selectPayButton.click();
                        for (var i = 0; i < this.checkboxList.length; i++) {
                            this.delTrolley(this.checkboxList[i].tId);
                        }
                    }
                }
            },
            delTrolley(tId) {
                this.$axios.delete('/netsc/trolley/' + tId).then((res) => {
                    console.log(res.data);
                    this.$axios.get('/netsc/trolleys/uid=' + this.userId).then((res) => {
                        console.log(res.data);
                        if (res.data.result != null) {
                            this.allPros = res.data.result;
                            this.checkboxList = this.allPros;
                            var sum = 0;
                            for (var i = 0; i < this.checkboxList.length; i++) {
                                sum = sum + this.allPros[i].pNumber * this.allPros[i].pPrice;
                            }
                            this.pSum = sum.toFixed(2);
                        }
                    });
                })
            },
            trim(pNumber) {
                return pNumber.replace(/[^\w]/g, '')
            },
            addOrders(data, pros) {
                console.log(data);
                this.$axios.post('/netsc/order', data).then((res) => {
                    console.log(res.data);
                    this.$axios.get('/netsc/order/sid=' + pros[0].sId).then((res) => {
                        // console.log("结果");
                        console.log(res.data.result);
                        if ($.inArray(res.data.result[res.data.result.length - 1].orderId, this.theOrderIds) == -1) {
                            this.theOrderIds.push(res.data.result[res.data.result.length - 1].orderId)
                        }
                        for (var k = 0; k < pros.length; k++) {
                            // console.log("我是TheOrderIds:"+this.theOrderIds)
                            let pro = pros[k];
                            let data = {
                                "orderId": res.data.result[res.data.result.length - 1].orderId,
                                "pid": pro.pId,
                                "pname": pro.pName,
                                "pnumber": pro.pNumber,
                                "pprice": pro.pPrice
                            }
                            console.log(data);
                            this.$axios.post('/netsc/orderinfo', data).then((res) => {
                                console.log(res.data)
                            })
                        }
                    })
                })
            },
            addOrderInfo(pros) {
            },
            pay() {
                this.$axios.get('/netsc/wallet/uid=' + this.userId).then((res) => {
                    console.log(res.data);
                    if (res.data.result == null) {
                        alert("请先开通个人钱包！");
                    } else if (res.data.result.money - this.pSum < 0) {
                        alert("余额不足！请充值后在尝试。");
                    } else {
                        this.$refs.payButton.click();
                        this.myMoney = res.data.result.money;
                        this.lastMoney = (res.data.result.money - this.paySum).toFixed(2);
                    }
                })
            },
            payPass() {
                this.$refs.payPasswordButton.click();
            },
            checkPayPassword() {
                this.$axios.get('/netsc/wallet/uid=' + this.userId).then((res) => {
                    // console.log(res.data)
                    if (this.payPassword === res.data.result.payPassword) {
                        let data = {"money": this.lastMoney};
                        console.log(data);
                        this.$axios.put('/netsc/wallet/' + this.userId, data).then((res) => {
                            console.log(myDate);
                            for (var i = 0; i < this.theOrderIds.length; i++) {
                                console.log(this.theOrderIds);
                                console.log(this.theOrderIds[i]);
                                var myDate = this.getNowFormatDate();
                                let sencondData = {"payTime": myDate, "payWay": "在线付款", "ostate": "已付款"};
                                this.payOrders(this.theOrderIds[i], sencondData);
                            }
                            alert("支付成功！");
                            window.location.reload();
                        })
                    } else {
                        alert("付款码错误！");
                        this.payPassword = null;
                    }
                })
            },
            payOrders(orderId, sencondData) {
                this.$axios.put('/netsc/order/' + orderId, sencondData).then((res) => {
                    console.log(res.data);
                })
            },
            windowReload() {
                window.location.reload();
            },
            getNowFormatDate() {//获取当前时间
                var date = new Date();
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + date.getHours() + seperator2 + date.getMinutes()
                    + seperator2 + date.getSeconds();
                return currentdate;
            },
            addAddress() {
                let data = {
                    "addName": this.getaddress,
                    "linkmanName": this.linkmanName,
                    "telphone": this.linkmanTel,
                    "uid": this.userId
                };
                console.log(data);
                this.$axios.post('/netsc/address', data).then((res) => {
                    console.log(res.data);
                    this.$axios.get('/netsc/address/' + this.userId).then((res) => {
                        console.log(res.data);
                        if (res.data.result !== "") {
                            this.addressList = res.data.result;
                            this.address = this.addressList[0];
                            this.$refs.submitOrderButton.click();
                        } else {
                            this.addressList = "";
                            this.address = {linkmanName: "无", telphone: "无"};
                        }
                    })
                })
            },
            deleteCartPro(pId) {
                this.$axios.delete('/netsc/trolley/pid=' + pId).then((res) => {
                    this.$axios.get('/netsc/trolleys/uid=' + this.userId).then((res) => {
                        console.log(res.data);
                        if (res.data.result != null) {
                            this.allPros = res.data.result;
                            this.checkboxList = this.allPros;
                            var sum = 0;
                            for (var i = 0; i < this.checkboxList.length; i++) {
                                sum = sum + this.allPros[i].pNumber * this.allPros[i].pPrice;
                            }
                            this.pSum = sum.toFixed(2);
                        }
                        alert("删除成功！");
                    });
                })
            }
        },
        computed: {
            classObject() {
                return {
                    active: this.isNotActive
                    // console.log(this.isNotActive)
                }
            },
            commitOrder() {
            }
        },
        watch: { //深度 watcher
            checkboxList: {
                handler: function (val, oldVal) {
                    if (this.checkboxList.length === this.allPros.length) {
                        this.checked = true;
                    } else {
                        this.checked = false;
                    }
                    var sum = 0;
                    for (var i = 0; i < this.checkboxList.length; i++) {
                        if (this.checkboxList[i].pNumber < 0) {
                            alert("数量不能再少了哦！");
                            this.checkboxList[i].pNumber = 0;
                        } else {
                            sum = sum + this.checkboxList[i].pNumber * this.checkboxList[i].pPrice;
                        }
                    }
                    this.pSum = sum.toFixed(2);
                },
                deep: true
            },
            payPassword: {
                handler: function (val, oldVal) {
                    if (this.payPassword.length === 6) {
                        this.$refs.payPasswordButtonSubmit.click();
                    }
                },
                deep: true
            }
        }
    }
</script>
	
<style>
	#recommendedHead img{
		max-width: 90px;
		max-height: 90px;
	}
	.numberInput{
		margin:auto;
	}
	.numberInput input{
		width: 35px;
	}
	.footerButton{
		margin: auto;
	}
	#selectButtonGroup{
		margin: auto;
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
