
<style scoped lang="less">
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
        .color1{
          color: #42b983;
        }
        .color2{
          color:red
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
        .round{
          width: 24px;
          height: 24px;
          border: 1px solid #000;
          border-radius: 12px;
        }
        .roundon{
          background: #42b983;
        }
      }
    }
  }
</style>

<template>
  <div class="indexpage">
    <Top></Top>
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
        <tr  v-for="(item,i) in list" :key="item.name">
          <th><div class="round" :class="{roundon:roundact===i}" @click="coloron(i)"></div></th>
          <th>{{item.serialnumber}}</th>
          <th>{{item.name}}</th>
          <th :class="[item.used_status===0?'color1':item.used_status===3?'color2':'']">{{item.used_status===0?status0:item.used_status===1?status1:status2}}</th>
        </tr>
      </table>
    </div>
    <Bottom :num="1"></Bottom>
  </div>
</template>

<script src="./monitor.js"></script>
