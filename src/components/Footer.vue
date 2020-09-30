<!--  -->
<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/home">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/fenLei">
        <i class="iconfont icon-fenlei"></i>
        <p>搜索分类</p>
      </router-link>
      <router-link tag="li" to="/cart">
        <i class="iconfont icon-gouwuche2"></i>
        <p>购物车</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
    // Footer
  },
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 3.125rem;
  background: white;
  border-top: 0.125rem #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 3.125rem;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 2.5rem;
}
#footer ul li.active {
  color: #f03d37;
}
#footer ul i {
  font-size: 1.25rem;
}
#footer ul p {
  font-size: 0.75rem;
  line-height: 1.125rem;
}
</style>