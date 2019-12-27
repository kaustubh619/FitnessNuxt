<template>
  <div class="navbar-spacing padding-top-20">
    <nav class="topnav box-shadow padding-left-10 padding-right-10 row">
      <div class="flex align-item col" style="height:100%">
        <div>

          <a @click="changeNavBarState">
            <i data-feather="menu"></i>
          </a>
        </div>
        <div>
          <nuxt-link to="/dashboard/parcels/pending">
            <i data-feather="package"></i>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/dashboard/general/customers">
            <i data-feather="users"></i>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/dashboard/general/finance">
            <i data-feather="briefcase"></i>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/dashboard/general/messages">
            <i data-feather="message-square"></i>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/dashboard/admins/all">
            <i data-feather="user"></i>
          </nuxt-link>
        </div>
      </div>
      
      <div class="flex align-item col right" style="height:100%; justify-content:flex-end">
        <div style="position:relative;margin-right:15px">
          <span class="feather-icon-badge bg-primary text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center" style="top: 5px; right: 0px;position:absolute;border-radius:50px;width:20px;height:20px">5</span>
          <nuxt-link to="/dashboard/general/messages">
            <i data-feather="message-square"></i>
          </nuxt-link>
        </div>
        <div class="flex align-item">
          <div style="padding-right:10px">
            <p class="font-12">Admin Name</p>
            <p class="font-10">Email to be added</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/40" style="border-radius: 50px">
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {

  mounted() {
    feather.replace({ color: 'white' })
  },
  methods: {

  

   changeNavBarState: function() {

     console.log("navbar")

      // this.$store.dispatch('sidenavStatus')

    },


  }
}
</script>



<style scoped>
.breadcrumb {
  background-color: #2c3350;
}

p{
  margin: 0
}

.topnav {
  height: 62px;
  overflow: hidden;
  background-color: #10163a;
  border-radius: 7px;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 10px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  color: red;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
}
</style>
