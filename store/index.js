export const actions = {
  async nuxtServerInit({
    commit
  }, {
    req,
    app
  }) {
    const {
      status,
      data: {
        province,
        city
      }
    } = await app.$axios.get('/geo/getPostion')
    commit('geo/setPosition', status === 200 ? {
      city,
      province
    } : {
      city: '',
      province: ''
    })
    const {
      status: status1,
      data: {
        menu
      }
    } = await app.$axios.get('/geo/menu')
    commit('home/setMenu', status1 === 200 ? menu : [])
    const {
      status: status2,
      data: {
        result
      }
    } = await app.$axios.get('/search/hotPlace', {
      params: {
        city: app.store.state.geo.position.city.replace('市', '')
      }
    })
    commit('home/setHotPlace', status2 === 200 ? result : [])
  }

}
