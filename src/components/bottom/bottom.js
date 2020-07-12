
export default {
  data () {
    return {
      index: '123'
    }
  },
  methods: {
    monitor () {
      console.log(456)
      this.$router.push('/monitor')
    },
    home () {
      this.$router.push('/')
    }
  },
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  created () {
    // console.log(this.index)
  },
  mounted () {
    // console.log(this.index)
  }
}
