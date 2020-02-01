<template>
  <div>
    <div class="header-img">
      <span class="header-text">Checkout</span>
    </div>
    <div class="container">
      <div class="row breadcrumb" style="background: transparent;">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <i class="fa-awe fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">
            <nuxt-link to="/cart" class="link">Cart</nuxt-link>
          </li>
        </ul>
        <i class="fa-awe fa fa-circle" aria-hidden="true"></i>
        <ul>
          <li class="bullet">Checkout</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <div
            class="row address-card"
            style="margin-bottom: 0px; box-shadow: 0 -2px 5px 0 #e7e7e7"
          >
            <p style="color: grey; margin-bottom: 10px; font-size: 17px">
              Address
            </p>
          </div>
          <div class="row address-card" style="">
            <!-- <div class="col-12 col-sm-6">
              <input
                type="text"
                placeholder="Name"
                class="custom-form-control"
                v-model="name"
              />
            </div>
            <div class="col-12 col-sm-6">
              <input
                type="number"
                placeholder="10-digit mobile number"
                class="custom-form-control"
                v-model="contact"
              />
            </div> -->
            <div class="col-12 col-sm-6">
              <input
                type="number"
                placeholder="Pincode"
                class="custom-form-control"
                v-model="pincode"
              />
            </div>
            <div class="col-12 col-sm-6">
              <input
                type="text"
                placeholder="Locality"
                class="custom-form-control"
                v-model="locality"
              />
            </div>
            <div class="col-12">
              <textarea
                class="custom-form-control _21icXK"
                name="addressLine1"
                rows="4"
                cols="10"
                tabindex="5"
                required=""
                autocomplete="street-address"
                placeholder="Address (Area and Street)"
                v-model="address"
              ></textarea>
            </div>
            <div class="col-12 col-sm-6">
              <input
                type="text"
                placeholder="City/District/Town"
                class="custom-form-control"
                v-model="city_district_town"
              />
            </div>
            <div class="col-12 col-sm-6">
              <input
                type="text"
                placeholder="State"
                class="custom-form-control"
                v-model="state"
              />
            </div>
            <div class="col-12 col-sm-6">
              <input
                type="text"
                placeholder="Landmark (Optional)"
                class="custom-form-control"
                v-model="landmark"
              />
            </div>
          </div>
          <div>
            <div
              class="row address-card"
              style="margin-bottom: 0px; box-shadow: 0 -2px 5px 0 #e7e7e7"
            >
              <p style="color: grey; margin-bottom: 10px; font-size: 17px">
                Order Summary
              </p>
            </div>
            <div
              class="row address-card"
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
                  <!-- <i
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
                  <input
                    type="number"
                    class="cst-input"
                    :id="item.id"
                    disabled
                  />
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
                  ></i> -->
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
                <p style=" margin-bottom: 10px">
                  <span style="font-weight: 500; font-size: 20px;"
                    >₹ {{ item.single_item_price * item.quantity }}</span
                  >
                  <span
                    style="margin-left: 10px; text-decoration: line-through;"
                    >₹ {{ item.product_info.price * item.quantity }}</span
                  >
                  <span class="text-discount">
                    {{ item.product_info.discount }}% off
                  </span>
                </p>
                <p>Quantity: {{ item.quantity }}</p>
                <!-- <button class="btn-delete" @click="removeItem(item.id)">
                  Remove
                </button> -->
              </div>
            </div>
          </div>
          <div style="margin: 20px;">
            <button
              class="btn-delete"
              id="rzp-button1"
              @click="editCart"
              style="display: block; margin-left: auto; margin-right: auto; background-color: #ff9f00; width: 100%; font-size: 19px"
            >
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Cart
              Items
            </button>
          </div>
          <div style="margin: 20px;">
            <button
              class="btn-delete"
              id="rzp-button1"
              @click="payRazorPay"
              style="display: block; margin-left: auto; margin-right: auto; background-color: rgb(251, 100, 27); width: 100%; font-size: 19px"
            >
              <i class="fa fa-credit-card" aria-hidden="true"></i> Proceed To
              Pay
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="total-card row" style="margin-bottom: 0px">
            <p class="price-details">Price Details</p>
          </div>
          <div class="total-card row" style="margin-bottom: 0px;">
            <p class="price-details" style="color: black; font-size: 17px;">
              <span>Price ({{ total_items }} items)</span>
              <span style="position: absolute; right: 0px; margin-right: 20px"
                >₹ {{ any_amount }}</span
              >
            </p>
          </div>
          <div class="total-card row" style="margin-bottom: 0px;">
            <div class="row" style="padding: 0px 12px">
              <p class="price-details" style="color: black; font-size: 17px;">
                <span>TOTAL PAYABLE</span>
                <span style="position: absolute; right: 0px; margin-right: 20px"
                  >₹ {{ any_amount }}</span
                >
              </p>
            </div>
            <!-- <p
              class="price-details-1"
              style="color: black; font-size: 17px; color: #fb641b"
            >
              <span>You will save ₹ {{ total_discount }} on this order</span>
              <span
                style="position: absolute; right: 0px; margin-right: 20px"
              ></span>
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    middleware: 'auth',
    data() {
      return {
        total_price: '',
        total_items: '',
        total_discount: '',
        cart_items: [],
        cart_keys: [],
        name: '',
        contact: '',
        pincode: '',
        locality: '',
        address: '',
        city_district_town: '',
        state: '',
        landmark: '',
        any_amount: 0
      }
    },

    mounted() {
      this.getOrderSession()
      this.getCartItems()
    },

    methods: {
      getOrderSession: function() {
        const page_url = window.location.href
        const session_key = page_url.split('?')[1]
        this.$store.dispatch('getOrderSession', session_key).then(res => {
          this.any_amount = Math.round(res.data.amount)
          JSON.parse(res.data.cart_keys).map(items => {
            this.cart_keys.push(items.cart_key)
          })
        })
      },

      getCartItems: function() {
        this.total_price = 0
        this.mrp = 0
        this.total_discount = 0
        this.$store
          .dispatch('getCartItems', localStorage.getItem('user_id'))
          .then(res => {
            this.cart_items = res.data
            this.total_items = res.data.length
            res.data.map(items => {
              setTimeout(function() {
                $('#' + items.id).val(items.quantity)
              }, 300)

              this.total_price =
                parseInt(this.total_price) + parseInt(items.total_price)
              this.mrp =
                parseInt(this.mrp) +
                parseInt(items.quantity) * parseInt(items.product_info.price)
            })
            this.total_discount = this.mrp - this.total_price
          })
      },

      // quant_increment: function(id, product_id, single_item_price) {
      //   const initial_value = parseInt($('#' + id).val())
      //   const final_value = initial_value + 1
      //   $($('#' + id).val(final_value))

      //   const cst_id = localStorage.getItem('user_id')
      //   const payload = new FormData()
      //   payload.append('id', id)
      //   payload.append('customer_id', cst_id)
      //   payload.append('product_info', product_id)
      //   payload.append('quantity', $('#' + id).val())
      //   payload.append('total_price', $('#' + id).val() * single_item_price)
      //   payload.append('single_item_price', single_item_price)

      //   this.$store.dispatch('addToCart', payload).then(res => {
      //     this.getCartItems()
      //   })
      // },

      // quant_decrement: function(id, product_id, single_item_price) {
      //   const initial_value = parseInt($('#' + id).val())
      //   if (initial_value > 1) {
      //     const final_value = initial_value - 1
      //     $($('#' + id).val(final_value))

      //     const cst_id = localStorage.getItem('user_id')
      //     const payload = new FormData()
      //     payload.append('id', id)
      //     payload.append('customer_id', cst_id)
      //     payload.append('product_info', product_id)
      //     payload.append('quantity', $('#' + id).val())
      //     payload.append('total_price', $('#' + id).val() * single_item_price)
      //     payload.append('single_item_price', single_item_price)

      //     this.$store.dispatch('addToCart', payload).then(res => {
      //       this.getCartItems()
      //     })
      //   }
      // },

      payRazorPay: function() {
        if (this.pincode == '') {
          alert('Please add pincode')
        } else if (this.address == '') {
          alert('Please add address')
        } else if (this.city_district_town == '') {
          alert('Please add city/distirict/town')
        } else {
          const page_url = window.location.href
          const session_key = page_url.split('?')[1]
          const order_payload = new FormData()
          order_payload.append('session_key', session_key)
          order_payload.append('user_id', localStorage.getItem('user_id'))
          order_payload.append('payment_mode', 0)
          order_payload.append(
            'delivery_address',
            this.address +
              ', ' +
              this.landmark +
              ', ' +
              this.locality +
              ', ' +
              this.city_district_town +
              '-' +
              this.pincode +
              ', ' +
              this.state
          )
          order_payload.append('actual_amount', this.any_amount * 100)
          order_payload.append('cart_keys', this.cart_keys)
          this.$store.dispatch('createProductOrder', order_payload).then(res => {
            var options = {
              key: 'rzp_test_9iatHS2w5hnv4n',
              // amount: this.total_price,
              currency: 'INR',
              name: 'MyTrueStrength',

              description: '',
              image:
                'https://www.transformersfitness.in/wp-content/uploads/2019/02/cropped-logo.png',
              order_id: res.data.order_id,
              handler: function(response) {
                const payload = new FormData()
                payload.append('id', res.data.order_id)
                payload.append(
                  'razorpay_payment_id',
                  response.razorpay_payment_id
                )
                payload.append('razorpay_signature', response.razorpay_signature)
                payload.append('payment_status', 1)
                axios({
                  method: 'PUT',
                  data: payload,
                  url:
                    'http://mytruestrength.com/backend/edit_order/' +
                    payload.get('id'),
                  contentType: 'application/json',
                  headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                  }
                })
                axios({
                  method: 'DELETE',
                  url:
                    'http://mytruestrength.com/backend/delete_cart_items/' +
                    localStorage.getItem('user_id'),
                  contentType: 'application/json',
                  headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                  }
                })
                alert('Transaction Successful')
              },
              prefill: {
                name: this.name,
                email: '',
                contact: this.contact
              },
              notes: {
                address: ''
              },
              theme: {
                color: '#f1bd03'
              }
              // callback_url: 'http://localhost:5000/all_products',
              // redirect: true
            }
            var rzp1 = new Razorpay(options)
            rzp1.open()
          })
        }
      },

      editCart: function() {
        this.$router.push('/cart')
      }

      // removeItem: function(id) {
      //   var x = confirm(
      //     'Are you sure you want to remove this item from your cart?'
      //   )
      //   if (x)
      //     return this.$store.dispatch('removeCartItem', id).then(res => {
      //       this.getCartItems()
      //     })
      //   else return false
      // }
    }
  }
</script>

<style scoped>
.header-img {
  height: 40vh;
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

.total-card {
  background-color: #f5faff;
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

.address-card {
  background-color: #f5faff;
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 24px 12px;
  border-radius: 3px;
}

.custom-form-control {
  width: 100%;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  outline: none;
  border-radius: 2px;
  box-shadow: none;
  font-family: Roboto, Arial, sans-serif;
  letter-spacing: 0;
}

.items-card {
  background-color: #f5faff;
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
  width: 80px;
  font-size: 20px;
  border-radius: 3px;
  text-align: center;
  background-color: #c7c7c7;
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

@media (max-width: 37.5em) {
  .xs-class {
    text-align: center;
  }
}
</style>
