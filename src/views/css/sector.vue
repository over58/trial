<template>
  <div class="container">
    <div class="box-1">
      <div class="sector" />
    </div>

    <div class="radar" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  background: black;
  height: 100%;
}
.box-1 {
  background: pink;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.sector {
  height: 0;
  width: 0;
  border: 50px solid transparent;
  border-right: 50px solid lightskyblue;
  transform-origin: center;
  animation: rot linear 1s infinite;
  border-radius: 50%;
}
@keyframes rot {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.radar {
  background: -webkit-radial-gradient(
      center,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(233, 40, 35, 0.6) 75%
    ),
    -webkit-linear-gradient(90deg, rgba(32, 255, 77, 0) 49.5%, #841413 50%, #841413
          50%, rgba(32, 255, 77, 0) 50.2%),
    -webkit-linear-gradient(0deg, rgba(32, 255, 77, 0) 49.5%, #841413 50%, #841413
          50%, rgba(32, 255, 77, 0) 50.2%);

  background: -webkit-radial-gradient(
      center,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(233, 40, 35, 0.6) 75%
    ),
    repeating-radial-gradient(
      rgba(32, 255, 77, 0) 5.8%,
      rgba(32, 255, 77, 0) 18%,
      #841413 18.6%,
      rgba(32, 255, 77, 0) 18.9%
    ),
    linear-gradient(
      90deg,
      rgba(32, 255, 77, 0) 49.5%,
      #841413 50%,
      #841413 50%,
      rgba(32, 255, 77, 0) 50.2%
    ),
    linear-gradient(
      0deg,
      rgba(32, 255, 77, 0) 49.5%,
      #841413 50%,
      #841413 50%,
      rgba(32, 255, 77, 0) 50.2%
    );
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid #841413;
  overflow: hidden;
}
.radar:before {
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.radar:after {
  content: " ";
  display: block;
  background-image: linear-gradient(44deg, transparent 50%, #841413 100%);
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation: radar-beam 5s infinite;
  animation-timing-function: linear;
  transform-origin: bottom right;
  border-radius: 100% 0 0 0;
}

@keyframes radar-beam {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
