<template>
  <div>
    <canvas
      id="canvas1"
      class="fadeIn"
    />
  </div>
</template>

<script>
var QRcode = require('qrcode')
export default {
  mounted () {
    var canvas = document.getElementById('canvas1')
    QRcode.toCanvas(canvas, 'www.baidu.com', function (err) {
      if (err) console.error(err)
      console.log('success')
    })
  }
}
</script>

<style></style>
