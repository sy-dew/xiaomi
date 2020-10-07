<template>
  <footer class="goodsdetail-footer">
    <a href="#/" class="goodsdetail-footer-homepage router-link-active">
      <i class="icon iconfont icon-shouye"></i>
      <span class="item-text">首页</span></a
    >
    <a href="#/cart" class="goodsdetail-footer-cart">
      <i class="icon iconfont icon-gouwuche3"></i>
      <span class="item-text">购物车</span></a
    >
    <div class="addcart-wrap">
      <a href="javascript:;" class="addcart">加入购物车</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.goodsdetail-footer {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  background: #fff;
}
a {
  text-decoration: none;
}
.goodsdetail-footer-homepage {
  float: left;
  width: 75PX;
  color: #666;
}
.goodsdetail-footer-homepage .icon {
  display: block;
  text-align: center;
  color: #666;
  font-size: 24PX;
}
.goodsdetail-footer-homepage .item-text {
  font-size: 16PX;
  display: block;
  text-align: center;
  color: #666;
}
.goodsdetail-footer-cart {
  float: left;
  width: 75px;
  color: #666;
}
.goodsdetail-footer-cart .icon {
  display: block;
  text-align: center;
  color: #666;
  font-size: 22PX;
  
}
.goodsdetail-footer-cart .item-text {
  font-size: 16PX;
  display: block;
  text-align: center;
  color: #666;
}
.goodsdetail-footer .addcart-wrap {
  float: left;
  width: 223px;
  height: 60px;
}
.goodsdetail-footer .addcart-wrap a{
    display: block;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
    background-color: #ff6700;
    color: #fff;
}
</style>