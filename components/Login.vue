<template>
  <section id="login">
    <div class="login container">
      <div class="login-row">
        <div class="login-col">
          <div v-if="isLogin" class="login-texts flex flex-column">
            <a @click="cLogin" style="cursor: pointer; margin-left: auto;">
              <img src="~static/close.svg" style="width: 20px" />
            </a>
            <h3 class="white-text padding-bottom-10">Welcome</h3>
            <p class="white-text">Please Login to your Dashboard</p>
            <form class="form-body" method="POST">
              <div class="form-group margin-top-25">
                <input
                  id="username"
                  type="text"
                  v-model="username"
                  class="form-control material-input"
                  maxlength="50"
                  placeholder="Username"
                  autocomplete="anyrandomstring"
                />
                <label class="control-label noselect material-input"
                  >Username</label
                >
              </div>

              <div class="form-group">
                <div v-show="isPasswordVisible == 0" @click="togglePassword(1)">
                  <i data-feather="eye" class="ispassword"></i>
                </div>
                <div v-show="isPasswordVisible == 1" @click="togglePassword(0)">
                  <i data-feather="eye-off" class="ispassword"></i>
                </div>
                <input
                  id="password"
                  type="password"
                  class="form-control material-input"
                  maxlength="25"
                  placeholder="Password"
                  v-model="password"
                />
                <label class="control-label noselect material-input"
                  >Password</label
                >
                <p class="white-text padding-top-15">Forgot Password</p>
              </div>
            </form>
            <div class="row">
              <div class="col s12">
                <button
                  @click="isLogin = !isLogin"
                  type="submit"
                  class="btn btn-yellow white-text loginButton fitness-text"
                >
                  Signup
                </button>
              </div>

              <div class="col s12 right">
                <button
                  @click="login"
                  type="submit"
                  class="btn btn-yellow white-text loginButton fitness-text"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <div v-if="!isLogin" class="login-texts flex flex-column">
            <a @click="cLogin" style="cursor: pointer; margin-left: auto">
              <img src="~static/close.svg" style="width: 20px" />
            </a>
            <h3 class="white-text padding-bottom-10">Welcome</h3>
            <p class="white-text">Please Signup to your BMR</p>
            <form class="form-body">
              <div class="form-group margin-top-25">
                <input
                  id="name"
                  type="text"
                  v-model="name"
                  class="form-control material-input"
                  maxlength="50"
                  placeholder="Name"
                  autocomplete="anyrandomstring"
                />
                <label class="control-label noselect material-input"
                  >Your Name</label
                >
              </div>
              <div class="form-group margin-top-25">
                <input
                  id="username"
                  type="text"
                  v-model="username"
                  class="form-control material-input"
                  maxlength="50"
                  placeholder="Username"
                  autocomplete="anyrandomstring"
                />
                <label class="control-label noselect material-input"
                  >Username</label
                >
              </div>

              <div class="form-group" style="margin: 0">
                <label class="parent-label" for="usr" style="display: flex">
                  Gender:
                  <div style="display:flex; margin-left: 20px!important">
                    <label class="radio-inline" style="margin-right: 10px">
                      <input
                        type="radio"
                        name="gender"
                        v-model="gender"
                        value="M"
                      />Male
                    </label>
                    <label class="radio-inline">
                      <input
                        type="radio"
                        name="gender"
                        v-model="gender"
                        value="F"
                      />Female
                    </label>
                  </div>
                </label>
              </div>

              <div class="form-group margin-top-25">
                <input
                  id="location"
                  type="text"
                  v-model="location"
                  class="form-control material-input"
                  maxlength="50"
                  placeholder="Name"
                  autocomplete="anyrandomstring"
                />
                <label class="control-label noselect material-input"
                  >Location</label
                >
              </div>
              <div class="form-group margin-top-25">
                <input
                  id="na"
                  type="email"
                  v-model="email"
                  class="form-control material-input"
                  maxlength="50"
                  placeholder="Email"
                  autocomplete="anyrandomstring"
                />
                <label class="control-label noselect material-input"
                  >Email</label
                >
              </div>

              <div class="form-group">
                <div v-show="isPasswordVisible == 0" @click="togglePassword(1)">
                  <i data-feather="eye" class="ispassword"></i>
                </div>
                <div v-show="isPasswordVisible == 1" @click="togglePassword(0)">
                  <i data-feather="eye-off" class="ispassword"></i>
                </div>
                <input
                  id="password"
                  type="password"
                  class="form-control material-input"
                  maxlength="25"
                  placeholder="Password"
                  v-model="password"
                />
                <label class="control-label noselect material-input"
                  >Password</label
                >
              </div>
            </form>
            <div class="row">
              <div class="col s12">
                <button
                  @click="isLogin = !isLogin"
                  type="submit"
                  class="btn btn-yellow white-text loginButton fitness-text"
                >
                  Login
                </button>
              </div>

              <div class="col s12 right">
                <button
                  @click="signup"
                  type="submit"
                  class="btn btn-yellow white-text loginButton fitness-text"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  // import Cookies from 'js-cookie'
  axios.defaults.withCredentials = false

  export default {
    name: 'login',
    data() {
      return {
        jokes: [],
        loading: false,
        username: '',
        email: '',
        name: '',
        location: '',
        password: '',
        isPasswordVisible: 0,
        isLogin: false,
        gender: ''
      }
    },

    updated: function() {
      // `this` points to the view model instance
    },

    mounted() {
      // feather.replace({ color: 'black' })
    },
    watch: {},
    beforeMount() {
      // console.log(
      //   $('input')
      //     .eq(0)
      //     .val()
      // )
    },
    methods: {
      togglePassword: function(val) {
        this.isPasswordVisible = val

        if (this.isPasswordVisible == 1) {
          $('#password').prop('type', 'text')
        } else {
          $('#password').prop('type', 'password')
        }
      },

      signup: function() {
        var payload = new FormData()
        payload.append('email', this.email)
        payload.append('password', this.password)
        payload.append('username', this.username)
        payload.append('first_name', this.name)

        this.$store.dispatch('signup', payload).then(res => {
          payload.append('user_type', 3)
          payload.append('user', res.data.user_id)
          payload.append('gender', this.gender)
          payload.append('location', this.location)
          if (localStorage.getItem('bmr_male') !== null) {
            payload.append('bmr_value', localStorage.getItem('bmr_male'))
          }

          this.$store.dispatch('user_ext_post', payload).then(res => {
            console.log(res)
          })
        })
        this.$router.push('/about-us')
      },

      login: function() {
        var bodyFormData = new FormData()
        bodyFormData.append('username', document.getElementById('username').value)
        bodyFormData.append('password', document.getElementById('password').value)

        axios({
          method: 'POST',
          url: this.$store.state.api.login,
          data: bodyFormData
        })
          .then(res => {
            const token = res.data.token
            const user = res.data.user
            const username = res.data.username

            // Cookies.set('x-access-token', token)
            localStorage.setItem('token', token)
            localStorage.setItem('user_id', user)
            localStorage.setItem('username', username)

            axios.defaults.headers.common['Authorization'] = token

            this.cLogin()
            this.$store.commit('authentication', true)
            this.$router.push('/')

            // this.$cookies.set('access_token', res.data.access, {
            //   path: '/',
            //   maxAge: 60 * 60 * 24 * 7
            // })

            // this.$cookies.set('email', res.data.user_info.email, {
            //   path: '/',
            //   maxAge: 60 * 60 * 24 * 7
            // })

            // this.$cookies.set('user_id', res.data.user_info.id, {
            //   path: '/',
            //   maxAge: 60 * 60 * 24 * 7
            // })
          })
          .catch(err => {
            alert("Invalid user credentials")
          })
      },

      cLogin: function() {
        this.$store.commit('showLogin', false)
      }
    }
  }
</script>


<style scoped>
.parent-label {
  font-size: 13px;
}

.loginButton {
  width: 100px;
}

.backgroundcolor {
  background-color: white;
  border-radius: 5px 0 0 5px;
}

.form-body .form-group:not(:last-child) {
  margin-bottom: 25px;
}

input,
textarea {
  border-radius: 4px;
  background-color: #e8f0fe !important;
  border: 0 !important;
  color: black !important;
}

input:focus,
textarea:focus {
  background-color: #e8f0fe !important;
  border: 1px solid #7367f0 !important;
}

.h1,
.h2,
.h3,
h1,
h2,
h3 {
  margin-top: 5px;
}

.btn {
  border-radius: 3px;
}

.fitness-text {
  text-transform: uppercase;
  font-weight: bold;
  font-family: Italics !important;
}

.btn-red:hover {
  color: white;
  background-color: #ff0057 !important;
  border-color: #ff0057 !important;
}

.btn-yellow:hover {
  color: black;
  background-color: #ffc107 !important;
  border-color: #ffc107 !important;
}

.btn-yellow {
  background-color: #ffc107;
  color: black;
}

.control-label {
  color: #4e4e4e;
}

.login-texts {
  height: 100%;
  padding: 0 5px;
}

.underline {
  line-height: 1;
  position: relative;
  display: block;
  margin: 1em 0;
  font-weight: bold;
  line-height: 1.4;
  padding-bottom: 10px;
}

.underline::before {
  background-color: white;
  content: '';
  position: absolute;
  z-index: 1;
  color: red;
  bottom: 0;
  left: 0;
  width: 35%;
  height: 5px;
  opacity: 1;
  border-radius: 10px;
}

.login_icons {
  position: absolute;
  top: 5px;
  left: 10px;
  width: 18px;
  color: #0c1013;
}

.input-icon > input {
  padding-left: 40px !important;
  font-size: 13px;
}

@media screen and (max-width: 600px) {
  .login-row {
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 10%;
    bottom: 0;
    margin: auto;
    z-index: 1000;
  }

  .login-col {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;

    background-color: #1e1e1e;
  }

  #login {
    background-size: cover;
    width: 100%;
    height: 100%;
    background-color: #0c1013;
  }

  .loginButton {
    width: 100%;
    height: 50px;
  }
}

@media screen and (min-width: 601px) {
  .login-row {
    height: 365px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 20%;
    margin: auto;
    max-width: 500px;
    z-index: 1000;
  }

  .login-col {
    padding: 40px;
    border-radius: 5px;
    background-color: #1e1e1e;
    box-shadow: 0px 9px 15px 0px rgba(13, 22, 75, 0.27);
  }

  #login {
    background-image: url('~static/files/login_bg.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
  }
}

.form-control {
  padding: 16px 20px 0;
  height: 50px;
  line-height: 50px;
}
label.material-input {
  order: -1;
  padding-left: 20px;
  transition: all 0.1s ease-in;
  transform: translateY(15px);
  pointer-events: none;
  position: absolute;
  top: 0;
}
label.added {
  transform: translateY(10px);
  font-size: 10px;
}

.ispassword {
  position: absolute;
  right: 18px;
  width: 18px;
  top: 14px;
  cursor: pointer;
}

/**
* Make the field a flex-container, reverse the order so label is on top.
*/

.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
}
/**
* Add a transition to the label and input.
* I'm not even sure that touch-action: manipulation works on
* inputs, but hey, it's new and cool and could remove the 
* pesky delay.
*/
label.material-input,
input.material-input {
  transition: all 0.2s;
  touch-action: manipulation;
}

/**
* Translate down and scale the label up to cover the placeholder,
* when following an input (with placeholder-shown support).
* Also make sure the label is only on one row, at max 2/3rds of the
* field—to make sure it scales properly and doesn't wrap.
*/
input.material-input:placeholder-shown + label {
  /* transform: translate(0, 2.125rem) scale(1.5); */
}
/**
* By default, the placeholder should be transparent. Also, it should 
* inherit the transition.
*/
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
/**
* Show the placeholder when the input is focused.
*/
input.material-input:focus::-webkit-input-placeholder {
  opacity: 1;
}
/**
* When the element is focused, remove the label transform.
* Also, do this when the placeholder is _not_ shown, i.e. when 
* there's something in the input at all.
*/
input.material-input:not(:placeholder-shown) + label.material-input,
input.material-input:focus + label.material-input {
  transform: translateY(7px);
  font-size: 10px;
  font-family: 'Bold';
}

.form-label-group input.material-input:-webkit-autofill ~ label.material-input {
  /* CSS property  */
  transform: translateY(7px);
  font-size: 10px;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}

.login.container:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  bottom: 0;
  content: '';
  height: 100%;
  background-color: #000000cc;
  z-index: 1000;
}

[type='color'],
[type='date'],
[type='datetime-local'],
[type='datetime'],
[type='email'],
[type='month'],
[type='number'],
[type='password'],
[type='search'],
[type='tel'],
[type='text'],
[type='time'],
[type='url'],
[type='week'],
textarea {
  width: 100%;
}
</style>

