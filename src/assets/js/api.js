import api from './act.js'

export default {
  async getPageList (obj) {
    try {
      return await api.request({
        method: 'get',
        url: '',
        params: obj
      })
    } catch (e) {
      console.log(e)
    }
  }
}
