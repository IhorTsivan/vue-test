<template>
  <Modal @close="$emit('close')" :show="show">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Detail Info
      </v-card-title>

      <div class="detail">
        <p>@v:{{version}}</p>
        <v-btn
            tile
            color="success"
            @click="redirect"
        >
          <v-icon>mdi-television</v-icon>
        </v-btn>
      </div>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            text
            @click="$emit('close')"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal
  },
  props: {
    message: {type: String, default: ''},
    version: {type: String, default: ''},
    show: {type: Boolean, default: false}
  },
  methods:{
    redirect(){
      window.open(this.message, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
