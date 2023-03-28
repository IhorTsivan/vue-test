<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        color="secondary"
    >
      <v-card-title>
        <strong class="subheading">Ihor Tsivan, Front-end developer</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="({icon, url}) in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
            @click="goToSocialNetwork(url)"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/tsivanigor/' },
      { icon: 'mdi-github', url: 'https://github.com/IhorTsivan' }

    ],
  }),
  methods: {
    goToSocialNetwork(url){
      window.open(url, '_blank');
    }
  }
}
</script>
