<template>
  <perfect-scrollbar class="chat-users-list-wrapper media-list">
    <ul class="chatList">
      <li
        v-for="(p, index) in filteredMessages"
        :key="p.id"
        :id="'activeChat-' + p.id"
        ref="userlist"
        @click="openChat(p.id, index)"
      >
        <div class="user-chat-info">
          <div class="contact-info">
            <h4 class="font-weight-bold mb-0 no-margin">{{p.firstname}}</h4>
            <p class="truncate">{{p.messages[p.messages.length-1]["message"]}}</p>
          </div>
          <div class="contact-meta">
            <span class="float-right mb-25">{{p.messages[0]['created'].split('T')[1]}}</span>
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
    filteredMessages: []
  }),

  mounted() {
    this.$root.$on('myEvent', text => {
      // here you need to use the arrow function
      this.message = text
    })
    this.$store.dispatch('getAllMessages').then(res => {
      console.log(res)
      this.getAllMessagesLocal = JSON.parse(
        JSON.stringify(res.data.messagedata)
      )

      this.filteredMessages = this.getAllMessagesLocal.filter(
        v => v.messages.length != 0
      )

      if (this.filteredMessages.length != 0) {
        if (this.$store.getters.get_selectedUserMessage == 0) {
          this.$store.dispatch(
            'selectedUserMessage',
            this.filteredMessages[0].id
          )
          this.$store.dispatch(
            'getMessageByCustomerName',
            this.filteredMessages[0].firstname +
              ' ' +
              this.filteredMessages[0].lastname
          )
        }
      }
      $('.user-chats').scrollTop($('.user-chats')[0].scrollHeight)
    })
  },

  computed: {
    ...mapState(['getAllMessages'])
  },

  updated() {
    $('#activeChat-' + this.$store.getters.get_selectedUserMessage).addClass(
      'active'
    )
  },

  methods: {
    openChat: function(id, index) {
      $('.active').removeClass('active')
      console.log($(this.$refs['userlist'][index]).addClass('active'))
      this.$store.dispatch('selectedUserMessage', id)
      this.$store.dispatch(
        'getMessageByCustomerName',
        this.filteredMessages[index].firstname +
          ' ' +
          this.filteredMessages[index].lastname
      )
    }
  }
}
</script>
