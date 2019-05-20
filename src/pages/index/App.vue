<template>
  <div id="index">
    <HeaderDiv :logourl="logourl" :payimgurl="payimgurl" :key="menuKey" @mt="menutree"></HeaderDiv>
<!--     <img src="./assets/logo.png">-->
    <router-view @mt="menutree"/> 
    <FooterDiv :bphotourl="bphotourl"></FooterDiv>
  </div>
</template>

<script>
import HeaderDiv from '@/components/layout/header'
import FooterDiv from '@/components/layout/footer'
export default {
  name: 'index',
  data () {
    return {
        logmsg: 'zhangxp',
        logourl: require('./assets/logoshop.png'),
        payimgurl: require("./assets/img/logo.png"),
        bphotourl: require('./assets/pay.jpg'),
        isActive:true,
        menuKey:1
    }
    },
    watch:{
      
    },
    components: {
        HeaderDiv,
        FooterDiv
    },
    methods:{
      menutree(){
        console.log("调用mt")
        ++this.menuKey
      },
      logout(){
        console.log("调用mt")
        ++this.menuKey
      }
    }
    
}

</script>

<style>
#index {
  font-family: KaiTi,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-position: absolute;
  background-size: cover;
  background-image: url("./assets/img/bg/timg1.jpg");
  /*background-color: rgb(243,244,246);*/
  /*margin-top: 60px;*/
}
</style>
