<template>
    <div class="block text-center" style="height: 700px">
      <el-carousel height="auto" autoplay>
        <el-carousel-item style="height: 700px">
          <h3 class="small justify-center" text="2xl">height 100px</h3>
        </el-carousel-item>
        <el-carousel-item style="height: 700px">
          <h3 class="small justify-center" text="2xl">height 200px</h3>
        </el-carousel-item>
        <el-carousel-item style="height: 700px">
          <h3 class="small justify-center" text="2xl">height 300px</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>

<script>
export default {
  name: 'HelloWorld2',
  props: {
    msg: String
  }
}
</script>
  
<style scoped>
  .carousel-item {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    display: flex;
    align-items: center;
    margin: 0;
    text-align: center;
    height: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  /deep/ .el-carousel__indicators{
    display: none;
  }
  </style>