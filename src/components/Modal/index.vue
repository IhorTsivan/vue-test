<template>
  <div class="text-center">
    <v-dialog
        v-model="show"
        width="500"
    >
      <slot></slot>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    show: {type: Boolean, default: false}
  },
}
</script>
