<template>
  <div id="test">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import HeaderDiv from '@/components/layout/header'
export default {
  name: 'test',
  data () {
    return {
        logmsg: 'zhangxp',
        logourl: require('./assets/logoshop.png'),
        payimgurl: require("./assets/pay.jpg")
    }
    },
    components: {
        HeaderDiv
  }
}

</script>

<style>
#test {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
