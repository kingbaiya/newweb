import axios from 'axios'

export default {
  request (options) {
    return axios({
      method: options.method,
      url: options.url,
      params: options.params
    })
  }
}
