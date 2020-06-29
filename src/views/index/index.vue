
<style scoped lang="less">
  .indexpage{
    width: 100%;
    height: 100%;
  }
  .top{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 150px;
    background: #42b983;
  }
  .bottom{
    width: 100px;
    height: 40px;
    background: #fff;
    margin: 0 10px;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
  }
  .center{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 75px;
    .input{
      width: 165px;
      height: 35px;
    }
    div{
      width: 70px;
      height: 35px;
      background: #42b983;
      border-radius: 10px;
      color: #ffffff;
      text-align: center;
      line-height: 35px;
    }
  }
  .tablebox{
    display: flex;
    justify-content: center;
    table{
      tr{
        th{
          height: 70px;
        }
        .th1{
          width: 40px;
        }
        .th2{
          width: 120px;
        }
        .th3{
          width: 70px;
        }
      }
    }
  }

</style>

<template>
  <div class="indexpage">
    <div class="top">
      <div class="bottom">强制开锁</div>
      <div class="bottom">换气开启</div>
      <div class="bottom">换气关闭</div>
      <div class="bottom">吹风开启</div>
      <div class="bottom">吹风关闭</div>
    </div>
    <div class="center">
      <input type="text" class="input" placeholder="请输入名称">
      <div class="search">搜索</div>
      <div class="refresh">刷新</div>
    </div>
    <div class="tablebox">
      <table border="1" cellspacing="0">
        <tr>
          <th class="th1"></th>
          <th class="th2">编号</th>
          <th class="th2">名称</th>
          <th class="th3">使用</th>
        </tr>
        <tr>
          <th v-for="site in sites" :key="site.name">{{site.name}}</th>
        </tr>
      </table>
    </div>
  </div>
</template>
<script src="./index.js"></script>
