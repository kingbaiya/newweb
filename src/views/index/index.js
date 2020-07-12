import Bottom from '../../components/bottom/bottom.vue'
import Top from '../../components/top/top.vue'
import api from '../../assets/js/act.js'
export default {
  data () {
    return {
      list: [],
      roundact: -1,
      status0: '使用中',
      status1: '未使用',
      status2: '离线',
      index: -1, // 记录数据下标
      currentsize: 0, // 当前数据数量
      stamp: new Date().getTime(), // 时间戳
      status: 0// 检测当前状态是否在搜索
    }
  },
  methods: {
    coloron (i) {
      if (this.roundact === -1) {
        this.roundact = i
        this.index = i
      } else if (this.index === i) {
        this.roundact = -1
      } else {
        this.roundact = i
        this.index = i
      }
    },
    apifz () { // 滚动条到达底部刷新数据
      var htmlHeight = document.documentElement.scrollHeight
      // clientHeight是网页在浏览器中的可视高度，
      var clientHeight = document.documentElement.clientHeight
      // scrollTop是浏览器滚动条的top位置，
      var scrollTop = document.documentElement.scrollTop
      // 通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否到达底部
      // 判断时间戳
      // 判断数据数量是否达到最大
      if (scrollTop + clientHeight === htmlHeight && new Date().getTime() - this.stamp > 500 && this.currentsize < this.list.length + 50 && this.status === 0) {
        this.currentsize = this.currentsize + 50
        api.request({
          method: 'get',
          url: 'https://api.mymamain.com/api/room/getPageList',
          params: {
            index: 1,
            size: this.currentsize,
            name: ''
          }
        }).then((data) => {
          this.list = data.data.data
        }).catch((e) => {
          console.log(e)
        })
        this.stamp = new Date().getTime()// 重置时间戳
        console.log(this.list.length)
      }
    },
    search () { // 搜索
      if (document.querySelector('.input').value === '') {
        alert('请输入要搜索的内容')
      } else {
        api.request({
          method: 'get',
          url: 'https://api.mymamain.com/api/room/getSearchList',
          params: {
            pageIndex: 1,
            pageSize: 50,
            keyword: document.querySelector('.input').value
          }
        }).then((data) => {
          this.list = data.data.data
        }).catch((e) => {
          console.log(e)
        })
        this.status = 1
      }
    },
    request () {
      api.request({
        method: 'get',
        url: 'https://api.mymamain.com/api/room/getPageList',
        params: {
          index: 1,
          size: 50,
          name: ''
        }
      }).then((data) => {
        this.list = data.data.data
      }).catch((e) => {
        console.log(e)
      })
    }
  },
  components: {
    Bottom,
    Top
  },
  created () {
    this.request()
  },
  mounted () {
    window.onwheel = this.apifz
    document.querySelector('.input').oninput = () => {
      if (document.querySelector('.input').value === '') {
        this.request()
        this.status = 0
      }
    }
  }
}
