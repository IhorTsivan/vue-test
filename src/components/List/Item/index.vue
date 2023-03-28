<template>
  <v-card
      class="item"
  >
    <v-card-text>
      <div>{{ type }}</div>
      <p class="text-h6 text--primary">
        {{ name }}, v: {{ version }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
          @click="$emit('showDetail')"
          text
          color="deep-purple accent-4"
      >
        Show More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {type: String, default: 'Npm'},
    name: {type: String, default: 'Jquery'},
    version: {type: String, default: ''},
  },
}
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
