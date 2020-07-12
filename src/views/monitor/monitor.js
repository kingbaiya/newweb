import Bottom from '../../components/bottom/bottom.vue'
import Top from '../../components/top/top.vue'
import api from '../../assets/js/act.js'
export default {
  data () {
    return {
      list: [],
      index: -1,
      roundact: -1,
      status0: '使用中',
      status1: '未使用',
      status2: '离线',
      timer: ''
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
    apifz () {
      api.request({
        method: 'get',
        url: 'https://api.mymamain.com/api/room/getPageList',
        params: {
          index: 1,
          size: 150,
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
  },
  mounted () {
    this.timer = setInterval(this.apifz, 5000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
