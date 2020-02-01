<template>
  <div>
    <div class="header-img">
      <span class="header-text">Your Shopping Cart</span>
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
          <li class="bullet">Cart</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <div
            class="row items-card"
            v-for="(item, x) in cart_items"
            :key="x"
            style="margin-bottom: 0px;"
          >
            <div class="col-12 col-sm-3">
              <img
                :src="item.product_info.images.split(',')[0]"
                class="item-img"
              />
              <div
                style="margin-top: 20px; display: flex; justify-content: center"
              >
                <i
                  class="fa-incre-decre fa fa-plus"
                  aria-hidden="true"
                  @click="
                    quant_increment(
                      item.id,
                      item.product_info.id,
                      item.single_item_price
                    )
                  "
                  style="margin-left: 0px"
                ></i>
                <input type="number" class="cst-input" :id="item.id" disabled />
                <i
                  class="fa-incre-decre fa fa-minus"
                  aria-hidden="true"
                  @click="
                    quant_decrement(
                      item.id,
                      item.product_info.id,
                      item.single_item_price
                    )
                  "
                ></i>
              </div>
            </div>
            <div class="col-12 col-sm-9 xs-class">
              <p style="margin-top: 0px; margin-bottom: 10px">
                {{ item.product_info.product_name }}
              </p>
              <p style="font-size: 14px; margin-bottom: 10px">
                Category:
                {{ item.product_info.category.name }},
                {{ item.product_info.subcategory.name }}
              </p>
              <p style=" margin-bottom: 20px">
                <span style="font-weight: 500; font-size: 20px;"
                  >₹ {{ item.single_item_price * item.quantity }}</span
                >
                <span style="margin-left: 10px; text-decoration: line-through;"
                  >₹ {{ item.product_info.price * item.quantity }}</span
                >
                <span class="text-discount">
                  {{ item.product_info.discount }}% off
                </span>
              </p>
              <button class="btn-delete" @click="removeItem(item.id)">
                Remove
              </button>
            </div>
          </div>
          <div class="row buy-class">
            <button class="btn-buy" @click="createOrderSession">
              PLACE ORDER
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="total-card row" style="margin-bottom: 0px">
            <p class="price-details">Price Details</p>
          </div>
          <div class="total-card row" style="margin-bottom: 0px;">
            <p class="price-details" style="color: black; font-size: 16px;">
              <span>Price ({{ total_items }} items)</span>
              <span style="position: absolute; right: 0px; margin-right: 20px"
                >₹ {{ actual_p }}</span
              >
            </p>
          </div>
          <div
            class="total-card row"
            style="margin-bottom: 0px;"
            v-if="coupon_bool"
          >
            <p class="price-details" style="color: black; font-size: 16px;">
              <span
                >Price
                <span style="color: rgb(251, 100, 27);"
                  >(coupon code applied)</span
                ></span
              >
              <span style="position: absolute; right: 0px; margin-right: 20px"
                >₹ {{ total_price }}</span
              >
            </p>
          </div>
          <div
            class="total-card row"
            style="margin-bottom: 0px;"
            v-if="!coupon_bool"
          >
            <p class="price-details-1" style="color: black; font-size: 17px;">
              <span
                >You will save
                <span style="color: #fb641b">₹ {{ total_discount }}</span> on
                this order</span
              >
              <span
                style="position: absolute; right: 0px; margin-right: 20px"
              ></span>
            </p>
          </div>
          <div class="total-card row" style="margin-bottom: 0px;" v-else>
            <p class="price-details-1" style="color: black; font-size: 17px;">
              <span
                >You will save
                <span style="color: #fb641b">₹ {{ new_d }}</span> on this
                order</span
              >
              <span
                style="position: absolute; right: 0px; margin-right: 20px"
              ></span>
            </p>
          </div>
          <div
            class="total-card row"
            style="margin-bottom: 0px"
            v-if="coupon_bool"
          >
            <p>
              Applied Coupon Code:
              <span style="color: rgb(251, 100, 27)">{{ coupon_code }}</span>
            </p>
            <p>
              Coupon Discount:
              <span style="color: rgb(251, 100, 27)"
                >{{ coupon_discount_value }}%</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      cart_items: [],
      quant_value: '',
      total_items: '',
      total_price: 0,
      mrp: 0,
      total_discount: 0,
      cart_keys: '',
      bool: true,
      coupon_discount_value: '',
      coupon_code: '',
      coupon_bool: false,
      actual_p: 0,
      new_d: 0
    }
  },

  mounted() {
    this.getCartItems()
    this.getUserCoupon()
  },

  methods: {
    getCartItems: function() {
      this.actual_p = 0
      this.total_discount = 0
      this.mrp = 0
      this.$store
        .dispatch('getCartItems', localStorage.getItem('user_id'))
        .then(res => {
          if (res.data.length == 0) {
            alert('Your cart is empty')
            this.$router.push('/all_products')
          }
          this.cart_items = res.data
          this.total_items = res.data.length
          res.data.map(items => {
            setTimeout(function() {
              $('#' + items.id).val(items.quantity)
            }, 300)

            this.actual_p = this.actual_p + parseInt(items.total_price)

            this.mrp =
              parseInt(this.mrp) +
              parseInt(items.quantity) * parseInt(items.product_info.price)
          })
          this.total_discount = this.mrp - this.actual_p
        })
    },

    quant_increment: function(id, product_id, single_item_price) {
      const initial_value = parseInt($('#' + id).val())
      const final_value = initial_value + 1
      $($('#' + id).val(final_value))

      const cst_id = localStorage.getItem('user_id')
      const payload = new FormData()
      payload.append('id', id)
      payload.append('customer_id', cst_id)
      payload.append('product_info', product_id)
      payload.append('quantity', $('#' + id).val())
      payload.append('total_price', $('#' + id).val() * single_item_price)
      payload.append('single_item_price', single_item_price)

      this.$store.dispatch('addToCart', payload).then(res => {
        this.getCartItems()
        this.getUserCoupon()
      })
    },

    quant_decrement: function(id, product_id, single_item_price) {
      const initial_value = parseInt($('#' + id).val())
      if (initial_value > 1) {
        const final_value = initial_value - 1
        $($('#' + id).val(final_value))

        const cst_id = localStorage.getItem('user_id')
        const payload = new FormData()
        payload.append('id', id)
        payload.append('customer_id', cst_id)
        payload.append('product_info', product_id)
        payload.append('quantity', $('#' + id).val())
        payload.append('total_price', $('#' + id).val() * single_item_price)
        payload.append('single_item_price', single_item_price)

        this.$store.dispatch('addToCart', payload).then(res => {
          this.getCartItems()
          this.getUserCoupon()
        })
      }
    },

    removeItem: function(id) {
      var x = confirm(
        'Are you sure you want to remove this item from your cart?'
      )
      if (x)
        return this.$store.dispatch('removeCartItem', id).then(res => {
          this.getCartItems()
        })
      else return false
    },

    createOrderSession: function() {
      this.$store
        .dispatch('getCartItems', localStorage.getItem('user_id'))
        .then(res => {
          res.data.map(items => {
            this.cart_keys = this.cart_keys + items.cart_key + ','
          })
          var payload = new FormData()
          payload.append('customer_id', localStorage.getItem('user_id'))
          payload.append('cart_keys', this.cart_keys)
          payload.append('source', 'mytruestrength')
          if (this.total_price != 0) {
            payload.append('amount', this.total_price)
          } else {
            payload.append('amount', this.actual_p)
          }

          this.$store.dispatch('createOrderSession', payload).then(res => {
            this.$router.push('/checkout?' + res.data.session_key)
          })
        })
    },

    getUserCoupon: function() {
      this.total_price = 0
      this.$store
        .dispatch('getUserCoupon', localStorage.getItem('user_id'))
        .then(res => {
          const start_year = parseInt(res.data.start_date.split('-')[0])
          const start_month = parseInt(res.data.start_date.split('-')[1])
          const start_day = parseInt(res.data.start_date.split('-')[2])

          const end_year = parseInt(res.data.end_date.split('-')[0])
          const end_month = parseInt(res.data.end_date.split('-')[1])
          const end_day = parseInt(res.data.end_date.split('-')[2])

          const currentDate = new Date()
          const current_day = parseInt(currentDate.getDate())
          const current_month = parseInt(currentDate.getMonth() + 1)
          const current_year = parseInt(currentDate.getFullYear())

          if (start_year <= current_year && current_year <= end_year) {
            if (start_month <= current_month && current_month <= end_month) {
              if (start_day <= current_day && current_day <= end_day) {
                this.coupon_bool = true

                this.coupon_code = res.data.coupon_code
                this.coupon_discount_value = res.data.coupon_discount_value

                this.$store
                  .dispatch('getCartItems', localStorage.getItem('user_id'))
                  .then(res1 => {
                    res1.data.map(items => {
                      setTimeout(function() {
                        $('#' + items.id).val(items.quantity)
                      }, 300)

                      this.total_price =
                        parseInt(this.total_price) + parseInt(items.total_price)
                    })

                    this.total_price = Math.round(
                      this.total_price -
                        (res.data.coupon_discount_value / 100) *
                          this.total_price
                    )

                    const d_val =
                      (res.data.coupon_discount_value / 100) * this.actual_p
                    this.new_d = this.total_discount + parseInt(d_val)
                  })
              }
            }
          }
        })
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

.items-card {
  background-color: #f7f7f7;
  padding: 10px;
  border-bottom: 1px solid #e7e7e7;
  border-radius: 3px;
}

.item-img {
  width: 100%;
  height: 125px;
  object-fit: contain;
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

.cst-input {
  width: 45px;
  font-size: 20px;
  border-radius: 3px;
  text-align: center;
  background-color: #c7c7c7;
}

.text-discount {
  color: #f1bd03;
  margin-left: 10px;
  font-size: 18px;
}

@media (max-width: 37.5em) {
  .xs-class {
    text-align: center;
  }
}

.btn-delete {
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  background: #f1bd03;
  box-shadow: 2px 2px 5px 1px #a7a7a7;
  border: none;
  color: #fff;
  padding: 14px 18px;
  width: auto;
  border-radius: 2px;
}

.btn-delete:hover {
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  color: black;
}

.btn-delete:focus {
  outline: none;
}

.buy-class {
  background-color: #f7f7f7;
  padding: 20px;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.btn-buy {
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  background: #fb641b;
  box-shadow: 2px 2px 5px 1px #a7a7a7;
  border: none;
  color: #fff;
  padding: 14px 26px;
  width: auto;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  margin-left: auto;
}

.btn-buy:focus {
  outline: none;
}

.btn-buy:hover {
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  color: black;
}

.total-card {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 3px;
  border-bottom: 1px solid #e7e7e7;
}

.price-details {
  color: grey;
  font-size: 18px;
  text-transform: uppercase;
}

.price-details-1 {
  color: grey;
  font-size: 18px;
}

.total-card-2 {
  background-color: #f7f7f7;
  padding: 5px 20px;
  border-radius: 3px 3px 0px 0px;
}

.total-card-3 {
  background-color: #f7f7f7;
  padding: 5px 20px;
  border-radius: 0px 0px 3px 3px;
  border-bottom: 1px solid #e7e7e7;
}
</style>
