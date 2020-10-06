<!--  -->
<template>
  <div class="login">
    <div class="logoImg">
      <i class="iconfont icon-xiaomi"></i>
    </div>
   <h2>小米账号登录</h2>
   <div class="login-form">
          <label for="" class="labelbox">
            <input class="item-account" type="text" name="user" autocomplete="off" placeholder="邮箱/手机号码/小米ID" maxlength="11" v-model="myName">
          </label>
          <label for="" class="labelbox">
            <input class="item-account" type="password" name="password" autocomplete="off" placeholder="密码" v-model="myPassWord">
            <div class="eye-wrap">
              <i class="icon iconfont icon-yanjing"></i>
            </div>
          </label>
        </div>
        <div class="btnLogin">
          <input type="button" class="btn-login" value="登录" @click="login">
        </div>
        <div class="btnBack">
          <input type="button" class="btn-back" value="注册" @click="goRegister">
        </div>
  </div>
</template>

<script>
/// token "36419c604878bf5e52f0c41b0b529ba3"  用户名 13131313131  密码  admin
import axios from 'axios'
export default {
  data() {
    //这里存放数据
    return {
      myName: '',
      myPassWord: ''
     
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login(){
        // alert("即将登录")
        var reg1=/^1[34578]\d{9}$/;//电话号码
        if(reg1.test(this.myName)==true){
          // alert("手机号输入正确");
          var reg2=/^[A-Za-z0-9]+$/;//由数字和26个英文字母组成的字符串
           if(reg2.test(this.myPassWord)==true){
            //  alert("密码输入正确");
             //进行调用登录的接口
        axios.get("http://jx.xuzhixiang.top/ap/api/login.php",{
            username:this.myName,
            password:this.myPassWord
        }).then(res=>{
          console.log(res.data);
          location.href="../home"+"?"+this.myName
          // alert("登录成功")
        }
        )
           }else{
             alert("密码输入错误");
           }
        }else{
          alert("请输入正确的用户名和密码")
        }

      
    },
    goRegister(){
      this.$router.push({path: 'register'});
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
.login{
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
.login-form {
  display: block;
  margin: 0 1.875rem;
}
.login-form .labelbox {
  display: flex;
  margin-bottom: 0.05rem;
  border-bottom: 0.0625rem solid #d3d3d3;
}
.login-form .labelbox .item-account {
  display: block;
  width: 100%;
  font-size: 1.25rem;
  line-height: normal;
  padding: 1rem 0;
  border: none;
  color: #4a4a4a;
}

.login-form .labelbox .eye-wrap {
  display: flex;
  align-items: center;
}
.login-form .labelbox .eye-wrap i {
  font-size: 1.2rem;
}
.btnLogin,.btnBack{
  margin: 1.25rem 1.875rem;
}
.btn-login,.btn-back{
  width: 100%;
  height: 3.125rem;
  font-size: 1.25rem;
  border: none;
}
.btn-login{
  background: orangered;
  color: #fff;
}
input{
  outline: none;
}
</style>