<!--  -->
<template>
  <div class="register">
    <div class="logoImg">
      <i class="iconfont icon-xiaomi"></i>
    </div>
   <h2>小米账号注册</h2>
   <div class="register-form">
          <label for="" class="labelbox">
            <input class="item-account" type="text"  name="user" autocomplete="off" placeholder="邮箱/手机号码">
          </label>
          <label for="" class="labelbox">
            <input class="item-account" type="password"  name="password" autocomplete="off" placeholder="密码">
            <div class="eye-wrap">
              <i class="icon iconfont icon-yanjing"></i>
            </div>
          </label>
        </div>
        <div class="btnRegister">
          <input type="button" class="btn-register" value="注册" @click="register">
        </div>
        <div class="btnBack">
          <input type="button" class="btn-back" value="返回" @click="back">
        </div>
  </div>
</template>

<script>
//import $ from 'jquery'
// import { MessageBox } from 'mint-ui'
export default {
  data() {
    //这里存放数据
    return {
      userName: '',
      password: ''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    register(){
        /*$.get("http://jx.xuzhixiang.top/ap/api/reg.php",{
          userName: "adminsy",
          password: 123456
        },data =>{
          
        if(this.userName == data.userName && this.password == data.password){
          // 本地localStorage存储用户信息
          console.log("111");
          localStorage.getItem('userId', '0001');
          this.$router.push({path: 'login'});
        }else{
          //MessageBox.alert('用户名或者密码错误！', '提示');
        }
          
        })*/
    },
    back(){
      this.$router.push({path: 'mine'});
    }
  },
  
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  components: {

  },
};
</script>
<style  scoped>
.register{
  width: 100%;
  height: 100%;
  padding-top: 1.875rem;
}
.logoImg{
  width: 3.125rem;
  height: 3.125rem;
  line-height: 3.125rem;
  text-align: center;
  background: orangered;
  margin:auto;
}
.icon-xiaomi{
  font-size: 1.875rem;
  color: #fff;
}
h2{
  width: 100%;
  text-align: center;
  color: #4a4a4a;
  margin: 1.875rem 0;
}
.register-form {
  display: block;
  margin: 0 1.875rem;
}
.register-form .labelbox {
  display: flex;
  margin-bottom: 0.05rem;
  border-bottom: 0.0625rem solid #d3d3d3;
}
.register-form .labelbox .item-account {
  display: block;
  width: 100%;
  font-size: 1.25rem;
  line-height: normal;
  padding: 1rem 0;
  border: none;
  color: #4a4a4a;
}

.register-form .labelbox .eye-wrap {
  display: flex;
  align-items: center;
}
.register-form .labelbox .eye-wrap i {
  font-size: 1.2rem;
}
.btnRegister,.btnBack{
  margin: 1.25rem 1.875rem;
}
.btn-register,.btn-back{
  width: 100%;
  height: 3.125rem;
  font-size: 1.25rem;
  border: none;
}
.btn-register{
  background: orangered;
  color: #fff;
}
input{
  outline: none;
}
</style>