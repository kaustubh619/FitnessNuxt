<template>
  <div>
    <div class="header-img">
      <span class="header-text">Product Description</span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa-awe fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">
            <nuxt-link to="/all_products" class="link">Shop</nuxt-link>
          </li>
        </ul>
        <i class="fa-awe fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Product</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-12 col-md-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            style="position:relative"
          >
            <div class="carousel-inner" role="listbox">
              <div
                v-for="(item, i) in image_url"
                :key="i"
                class="carousel-item"
                :class="i === 0 ? 'active' : ''"
              >
                <img :src="item" class="cst-img" />
              </div>
            </div>
            <div class="carousel-indicators">
              <img
                v-for="(a, b) in image_url"
                :key="b"
                :src="a"
                data-target="#carouselExampleIndicators"
                :data-slide-to="b"
                class="carousel-thumbnail"
              />
            </div>
          </div>
          <div>
            <p style="font-size: 15px; margin-top: 20px;">
              <span class="text-default">Brand:</span>
              <span class="text-cat">{{ brand }}</span>
            </p>
            <p style="font-size: 15px;">
              <span class="text-default">Categories:</span>
              <span class="text-cat">{{ cat }}, {{ sub_cat }}</span>
            </p>

            <p style="font-size: 15px;">
              <span class="text-default">Product ID:</span>
              <span class="text-cat">{{ product_id }}</span>
            </p>
          </div>
        </div>
        <div class="col-12 col-md-7">
          <p class="text-cst">{{ name }}</p>
          <p>
            <span class="text-price">₹ {{ final_price }}</span>
            <span class="text-mrp" style="text-decoration: line-through;"
              >₹ {{ price }}
            </span>
            <span class="text-discount"> {{ discount }}% off </span>
          </p>
          <p class="text-description">{{ description }}</p>
          <div style="margin-top: 20px; display: flex">
            <i
              class="fa-incre-decre fa fa-plus"
              aria-hidden="true"
              @click="quant_increment"
              style="margin-left: 0px"
            ></i>
            <input
              type="number"
              value="1"
              class="cst-input"
              v-model="quant_value"
              disabled
            />
            <i
              class="fa-incre-decre fa fa-minus"
              aria-hidden="true"
              @click="quant_decrement"
            ></i>
          </div>
          <div style="margin-top: 20px; display: flex">
            <button class="btn-cart" @click="addToCart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i> ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
    <Login v-if="showLogin" />
  </div>
</template>

<script>
  import Login from '@/components/Login.vue'

  export default {
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

    data() {
      return {
        image_url: [],
        cat: '',
        sub_cat: '',
        brand: '',
        name: '',
        price: '',
        discount: '',
        final_price: '',
        description: '',
        product_id: '',
        quant_value: 1
      }
    },

    mounted() {
      this.getProductById()
    },

    methods: {
      getProductById: function() {
        this.$store
          .dispatch('getProductById', this.$route.params.id)
          .then(res => {
            this.image_url = res.data.images.split(',')
            this.cat = res.data.category.name
            this.sub_cat = res.data.subcategory.name
            this.brand = res.data.brand.name
            this.name = res.data.product_name
            this.price = Math.round(res.data.price)
            this.discount = Math.round(res.data.discount)
            this.final_price = Math.round(
              this.price - (this.discount / 100) * this.price
            )
            this.description = res.data.description
            this.product_id = res.data.product_id
          })
      },

      quant_increment: function() {
        this.quant_value = this.quant_value + 1
      },

      quant_decrement: function() {
        if (this.quant_value > 1) {
          this.quant_value = this.quant_value - 1
        }
      },

      addToCart: function() {
        if (localStorage.getItem('token')) {
          const cst_id = localStorage.getItem('user_id')
          const prod_id = this.$route.params.product_id
          const payload = new FormData()
          payload.append('customer_id', cst_id)

          payload.append('product_info', prod_id)
          payload.append('quantity', $('.cst-input').val())
          payload.append('total_price', $('.cst-input').val() * this.final_price)
          payload.append('single_item_price', this.final_price)
          console.log()
          this.$store.dispatch('addToCart', payload).then(res => {
            this.$router.push('/cart')
          })
        } else {
          this.$store.commit('showLogin', true)
        }
      }
    }
  }
</script>

<style scoped>
.header-img {
  height: 50vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(128, 128, 128, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url('~static/images/about-us.jpg');
  background-size: cover;
  background-position: center;
}

.header-text {
  position: relative;
  font-size: 3.5rem;
  font-weight: 600;
  color: white;
  top: 20vh;
  display: block;
  text-align: center;
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

.fa-awe {
  margin-left: 10px;
  font-size: 0.5rem;
  padding-top: 8px;
  margin-right: 10px;
}

.carousel-thumbnail {
  margin: 3px;
  width: 80px;
  height: 80px;
  margin-top: 10px;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  padding: 2px;
}

.cst-img {
  width: 80%;
  margin-left: 10%;
  height: 400px;
  object-fit: contain;
  object-position: center;
}

.carousel-item {
  background: url('~static/images/yelloeproductbackground.png');
}

@media (max-width: 75em) {
  .cst-img {
    height: 280px;
  }
}

.carousel-thumbnail {
  background: url('~static/images/yelloeproductbackground.png');
}

@media (max-width: 75em) {
  .carousel-thumbnail {
    width: 60px;
    height: 60px;
  }
}

.btn-cart {
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  padding: 18px 8px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  width: 48%;
  border: none;
  float: left;
  background: #f1be03;
  color: black;
  margin: 1%;
}

.btn-cart:focus {
  outline: none;
}

.btn-buy-now {
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  background: #fb641b;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: none;
  color: #fff;
  padding: 18px 8px;
  width: 48%;
  border-radius: 2px;
  margin: 1%;
}

.btn-cart:hover,
.btn-buy-now:hover {
  box-shadow: 2px 2px 5px 1px #a7a7a7;
  color: white;
}

.text-cst {
  color: #f9f9f9;
  font-size: 18px;
}

.text-price {
  color: #f9f9f9;
  font-size: 22px;
}

.text-mrp {
  color: #e7e7e7;
  font-size: 18px;
  margin-left: 10px;
}

.text-discount {
  color: #f1be03;
  margin-left: 10px;
  font-size: 18px;
}

.text-description {
  margin-top: 20px;
  color: #f9f9f9;
  font-size: 16px;
}

.text-cat {
  color: #f1be03;
  margin-left: 10px;
}

.text-default {
  color: #f9f9f9;
}

.fa-incre-decre {
  background-color: #f1be03;
  margin-left: 5px;
  margin-right: 5px;
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  text-align: center;
}

.fa-incre-decre:hover {
  color: black;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.cst-input {
  width: 80px;
  font-size: 20px;
  border-radius: 3px;
  text-align: center;
  background-color: #c7c7c7;
}

@media (max-width: 37.5em) {
  .text-cst {
    margin-top: 20px;
    font-size: 16px;
  }
  .text-price {
    font-size: 20px;
  }
  .text-mrp {
    font-size: 16px;
  }
  .text-discount {
    font-size: 16px;
  }
  .text-description {
    font-size: 14px;
  }
}
</style>