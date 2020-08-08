<template>
  <div class="container">
    <div class="container_box"></div>
  </div>
</template>

<script>
export default {
  name: "login",
  mounted() {},
};
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  width: 100%;
  bottom: 0;
  background-image: url("../../static/img/bgc.jpg");
  background-size: cover;
  background-position: center 0;
  .container_box {
    background-color: #fff;
    width: 800px;
    height: 500px;
    position: absolute;
    right: 100px;
    top: 100px;
    opacity: 0.5;
    box-shadow: 10px 5px 5px black;
  }
}
</style>
