<template>
  <div>
    <h3>demo1</h3>
    <div class="box1">
      这个一个<span class="strong">不太完美但却精彩</span>的世界
    </div>
    <hr>

    <div class="box2">
      <img
        src="https://image.zhangxinxu.com/image/blog/201508/liuye-hujun.jpg"
        alt=""
      >
      xyc
    </div>

    <div class="box3">
      <img
        src="https://image.zhangxinxu.com/image/blog/201508/liuye-hujun.jpg"
        alt=""
      >
      xyc
    </div>

    <comment></comment>
  </div>
</template>

<script>
export default {
  mounted () {}
}
</script>

<style lang="less" scoped>
.box1 {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  background: black;
  color: white;
  .strong {
    display: inline-block;
    width: 48px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: top;
  }
}
.box2 {
  line-height: 16px;
  background: pink;
  img {
    height: 50px;
    width: auto;
  }
}
.box3 {
  height: 100px;
  background-color: aquamarine;
  line-height: 100px;
  img {
    height: 50px;
    width: auto;
    // vertical-align: baseline;默认的
    vertical-align: middle;
  }
}
</style>
