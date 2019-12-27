<template>
  <perfect-scrollbar class="chat-users-list-wrapper media-list">
    <ul class="chatList">
      <li
        v-for="(p, index) in getAllCustomersLocal"
        :key="p.id"
        ref="userlist"
        :id="'activeChat-' + p.id"
        @click="openChat(p.id, index)"
      >
        <div class="user-chat-info">
          <div class="contact-info">
            <h4 class="font-weight-bold mb-0 no-margin">{{p.firstname}} {{p.lastname}}</h4>
          </div>
        </div>
      </li>
    </ul>
  </perfect-scrollbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    getAllMessagesLocal: [],
    getAllCustomersLocalOG: [],
    getAllCustomersLocal: [],
    filteredMessages: []
  }),

  mounted() {
    this.$store.dispatch('getAllCustomers').then(res => {
      this.getAllCustomersLocalOG = JSON.parse(JSON.stringify(res.data.customers))

      console.log(this.getAllCustomersLocal)

      this.getAllCustomersLocal = this.getAllCustomersLocalOG.filter(v => v.messages.length == 0)

      console.log(this.getAllCustomersLocal)
    })
  },

  computed: {
    ...mapState(['all_customers'])
  },

  updated() {
       $("#activeChat-" + this.$store.getters.get_selectedUserMessage).addClass('active')

  },

  methods: {
    openChat: function(id, index) {
      $('.active').removeClass('active')
      console.log($(this.$refs['userlist'][index]).addClass('active'))
      this.$store.dispatch('selectedUserMessage', id)
    }
  }
}
</script>
