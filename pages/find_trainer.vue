<template>
  <div>
    <div class="header-img">
      <span class="header-text">Find Trainer</span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Find-Trainer</li>
        </ul>
      </div>
    </div>
    <div class="container responsive_container mb-5">
      <div class="row mt-3">
        <div class="col-12">
          <h2 class="text-theme mb-3" style="font-weight:700">
            Find A Trainer Near You
          </h2>
        </div>
      </div>
      <h5 class="text-theme">Trainer Inquiry</h5>
      <form class="form-body">
        <div class="row">
          <div class="col-12">
            <div class="form-group margin-top-25">
              <input
                id="firstname"
                type="text"
                v-model="firstname"
                class="form-control material-input"
                maxlength="50"
                placeholder="Your Name"
                required
              />
              <label class="control-label noselect material-input"
                >Your Name*</label
              >
            </div>
          </div>
          <div class="col-12">
            <div class="form-group margin-top-25">
              <input
                id="phone"
                type="number"
                v-model="phone"
                class="form-control material-input"
                maxlength="50"
                placeholder="Phone"
                required
              />
              <label class="control-label noselect material-input"
                >Phone*</label
              >
            </div>
          </div>
          <div class="col-12">
            <div class="form-group margin-top-25">
              <input
                id="city"
                type="text"
                v-model="city"
                class="form-control material-input"
                maxlength="50"
                placeholder="City"
                required
              />
              <label class="control-label noselect material-input">City*</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group margin-top-25">
              <input
                id="state"
                type="text"
                v-model="state"
                class="form-control material-input"
                maxlength="50"
                placeholder="State"
                required
              />
              <label class="control-label noselect material-input"
                >State*</label
              >
            </div>
          </div>
          <div class="col-12">
            <div class="form-group margin-top-25">
              <input
                id="pin"
                type="number"
                v-model="pin"
                class="form-control material-input"
                maxlength="50"
                placeholder="Pin Code"
                required
              />
              <label class="control-label noselect material-input"
                >Pin Code*</label
              >
            </div>
          </div>
        </div>
        <div class="form-group margin-top-25">
          <textarea
            id="address"
            type="text"
            v-model="address"
            placeholder="Address"
            cols="30"
            rows="1"
            style="width: 100%; padding: 50px 20px;"
            required
          ></textarea>
          <label
            class="control-label noselect material-input"
            style="display: block"
            >Address*</label
          >
        </div>

        <div class="form-group margin-top-25">
          <button
            @click="postTrainerInquiry"
            class="comment_btn"
            style="display: block; margin-left: auto"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    <Login v-if="showLogin" />
  </div>
</template>

<script>
  import Login from '@/components/Login.vue'
  export default {
    data() {
      return {
        firstname: '',
        state: '',
        city: '',
        phone: '',
        pin: '',
        address: ''
      }
    },
    components: {
      Login
    },
    computed: {
      showLogin: {
        get: function() {
          return this.$store.state.showLogin
        },
        set: function(newName) {}
      }
    },
    mounted() {},
    methods: {
      postTrainerInquiry: function() {
        var payload = new FormData()
        payload.append('name', this.firstname)
        payload.append('phone', this.phone)
        payload.append('address', this.address)
        payload.append('state', this.state)
        payload.append('city', this.city)
        payload.append('pin', this.pin)
        this.$store.dispatch('postTrainerInquiry', payload).then(res => {
          alert(
            'Dear ' + this.firstname + ', we will attend to your inquiry shortly!'
          )
        })
      }
    }
  }
</script>

<style scoped>
.header-img {
  height: 30vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(128, 128, 128, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url('~static/images/foot_back.jpg');
  background-size: cover;
  background-position: center;
}

.header-text {
  position: relative;
  font-size: 3.5rem;
  font-weight: 600;
  color: white;
  top: 10vh;
  display: block;
  text-align: center;
}

@media (max-width: 37.5em) {
  .header-text {
    font-size: 2.5rem;
  }
}

.breadcrumb {
  padding: 0;
  padding-top: 20px;
  color: white;
}

.link {
  text-decoration: none;
  color: white;
}

.link:hover {
  color: #f1be03;
}

.fa {
  margin-left: 10px;
  font-size: 0.5rem;
  padding-top: 8px;
  margin-right: 10px;
}

.form-body .form-group:not(:last-child) {
  margin-bottom: 25px;
}

input,
textarea {
  border-radius: 5px;
  background-color: #484848 !important;
  border: 0 !important;
  color: #929292 !important;
  font-size: 1rem;
}

/* input:focus,
textarea:focus {
  background-color: #e8f0fe !important;
  border: 1px solid #7367f0 !important;
} */

.control-label {
  color: #909090;
  font-size: 1.05rem;
}

.form-control {
  padding: 12px 20px 0;
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

input[data-v-4b7e1cc6]:focus,
textarea[data-v-4b7e1cc6]:focus {
  border: 0px solid black !important;
  outline: none;
  /* background-color: transparent !important; */
}

.form-control:focus {
  box-shadow: none;
  border: 0px;
}

.comment_btn {
  background-color: #f1be03;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
}

.comment_btn:hover {
  transform: scale(1.01);
}

@media (max-width: 37.5em) {
  .comment_btn {
    background-color: #f1be03;
    border: none;
    color: white;
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 5px;
  }
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.responsive_container {
  background-color: #303030;
  border-radius: 5px;
  padding: 50px 250px;
}

@media (max-width: 75em) {
  .responsive_container {
    background-color: transparent;
    padding: 5px 15px;
  }
}

.hrstyle {
  border: 0;
  height: 1px;
  background: grey;
  /* background-image: linear-gradient(to right, #ccc, #333, #ccc); */
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
