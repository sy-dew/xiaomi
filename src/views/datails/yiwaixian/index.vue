<!--  -->
<template>
      <div class="">
        
        <div class="mint-cont">
          <div class="mint-cont-wrap">
            <div class="mint-cont-w1">
              <ul>
                <li>
                  <img src="../../../assets/1.jpg" alt="">
                </li>
                <li>
                  <img src="../../../assets/1.jpg" alt="">
                </li>
                <li>
                  <img src="../../../assets/1.jpg" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
components: {
   
},
}
</script>
<style scoped>
.mint-cont{
  overflow: hidden;
    position: relative;
}
.mint-cont-wrap{
  display: flex;
}
.mint-cont-w1{
  flex-shrink: 0;
    width: 100%;
}
.mint-cont-w1 ul{
  width: 100%;
}
.mint-cont-w1 ul li{
  width: 100%;
}
.mint-cont-w1 ul li img{
  width: 100%;
  display: block;
}

</style>