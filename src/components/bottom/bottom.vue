<style scoped lang="less">
  .indexpage{
    width: 100%;
    height: 100%;
  }
  .bottombox{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #42b983;
    .bottom{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 33%;
      color: #fff;
    }
    .bottomon{
      color: #8d1fb9;
    }
  }
</style>

<template>
  <div class="indexpage">
    <div class="bottombox">
      <div class="bottom" :class="{bottomon:num===0}" @click="home">首页</div>
      <div class="bottom" :class="{bottomon:num===1}" @click="monitor">监控</div>
      <div class="bottom">合作申请</div>
    </div>
  </div>
</template>

<script src="./bottom.js"></script>
