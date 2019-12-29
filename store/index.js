import axios from 'axios'
import cookie from 'cookie'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

export const state = () => {
  //global var
  // showLogin: false,
  return {
    showLogin: false,
    authentication: false,
    category: 0
  }
}

export const mutations = {
  // set_user(state) {
  //     state.authenticated = true
  //     console.log(state.authenticated)

  // },
  showLogin(state, isLoggedIn) {
    // console.log('selecting exercise mutation, ' + isLoggedIn)
    state.showLogin = isLoggedIn
  },
  authentication(state, userSignedIn) {
    state.authentication = userSignedIn
  },
  category(state, selectedCat) {
    state.category = selectedCat
  }
}

export const getters = {}

export const actions = {
  // nuxtServerInit({ commit }, context) {
  //   return new Promise((resolve, reject) => {
  //     const cookies = cookie.parse(context.req.headers.cookie || '')
  //     if (cookies.hasOwnProperty('x-access-token')) {
  //       commit('signin_user')
  //       resolve(true)
  //     } else {
  //       resolve(false)
  //     }
  //   })
  // },

  signup({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        data: payload,
        url: state.api.signup,
        contentType: 'application/json'
        // headers: {
        //     'Authorization': "Token c1caab4f8caea62d5ea07edf0d355af314351223"
        // }
      })
        .then(res => {
          // console.log(res)
          // commit('getSingleAuction', res.data);
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },
  user_ext_post({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        data: payload,
        url: state.api.user_ext,
        contentType: 'application/json'
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in ext', err)
        })
    })
  },

  getImages({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getImages,
        contentType: 'application/json'
      })
        .then(res => {
          // console.log(res.data)
          // console.log('response')
          // commit('getAllProducts', res.data);
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getBlogCategoryList({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getBlogCategoryList,
        contentType: 'application/json'
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getAllBlog({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getAllBlog,
        contentType: 'application/json'
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getAllBlogWP({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getAllBlogWP,
        contentType: 'application/json'
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getBlogsByCategory({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getBlogsByCategory + payload,
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          // console.log(res.data)
          // console.log('response')
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getBlogComment({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getBlogComment + payload,
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          // console.log(res.data)
          // console.log('response')
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getBlogPost({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getBlogPost + payload,
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          // console.log(res.data)
          // console.log('response')
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  postComment({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        data: payload,
        url: state.api.postComment,
        contentType: 'application/json'
        // headers: {
        //     'Authorization': "Token c1caab4f8caea62d5ea07edf0d355af314351223"
        // }
      })
        .then(res => {
          // console.log(res)
          // commit('getSingleAuction', res.data);
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  likePost({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'PUT',
        data: payload.likes,
        url: state.api.likePost + payload.slug,
        contentType: 'application/json'
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in ext', err)
        })
    })
  },
  postInquiry({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        data: payload,
        url: state.api.postInquiry,
        contentType: 'application/json'
        // headers: {
        //     'Authorization': "Token c1caab4f8caea62d5ea07edf0d355af314351223"
        // }
      })
        .then(res => {
          // console.log(res)
          // commit('getSingleAuction', res.data);
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },
  getGalleryImages({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getGalleryImages,
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          // console.log(res.data)
          // console.log('response')
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },
  getAllProducts({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getAllProducts,
        contentType: 'application/json'
      })
        .then(res => {
          // console.log(res.data)
          // console.log('response')
          // commit('getAllProducts', res.data);
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getProductsWithPagination({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getProductsWithPagination,
        contentType: 'application/json'
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getProductCategories({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getProductCategories,
        contentType: 'application/json'
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getProductsByCategory({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getProductsWithCategory + payload,
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },
  getProductsAll({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getProductsAll,
        contentType: 'application/json'
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  },

  getPlans({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getPlans,
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('Error In HTTP Request - ', err)
        })
    })
  },

  getUserDetails({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.getUserDetails + payload.get('id'),
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('Error In HTTP Request - ', err)
        })
    })
  },

  calculateBMR({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'PUT',
        data: payload,
        url: state.api.calculateBMR + payload.get('id'),
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in ext', err)
        })
    })
  },

  bmrValues({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: state.api.bmrValues + payload.get('id'),
        contentType: 'application/json',
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('Error In HTTP Request - ', err)
        })
    })
  },

  PostBMR({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        data: payload,
        url: state.api.PostBMR,
        contentType: 'application/json',
        headers: {
          Authorization: 'Token c1caab4f8caea62d5ea07edf0d355af314351223'
        }
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    })
  }
}
