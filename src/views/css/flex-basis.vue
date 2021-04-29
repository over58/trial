<template>
  <div class="flex-basis-container">
      <div class="top">

      </div>
      <div class="bottom">
          <div class="left">

          </div>
          <div class="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque aliquam numquam, culpa non ipsum sequi molestias neque nisi unde nulla quae facere pariatur, quibusdam inventore dignissimos explicabo? Doloribus, fugit!
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.flex-basis-container{
    height: 800px;
    display:flex;
    flex-direction: column;

    .top{
        height: 100px;
        background: red;
    }
    .bottom {
        flex: 1;
        background: yellow;
        display:flex;
        flex-direction: row;

        .left{
            width: 200px;
        }
        .content{
            flex: 1;
            flex-shrink: 0;
            flex-grow: 1;
            flex-basis: 0;
            overflow:scroll;
            background: grey;
            color: pink;

        }
    }

}

</style>
