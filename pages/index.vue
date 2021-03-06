<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-timeline :dense="isSmallScreen" :align-top="isSmallScreen">
        <v-hover v-for="day in timeline" v-slot="{ hover }" :key="day.date">
          <v-timeline-item :color="hover ? 'red' : 'white'" :small="true">
            <template #opposite>
              <v-card
                :style="{
                  'background-image': 'url(' + day.details.picURL + ')',
                  'background-position': 'center',
                  'background-repeat': 'no-repeat',
                  'background-size': 'cover',
                }"
                height="400px"
              >
              </v-card>
            </template>
            <v-card class="pb-8" flat color="transparent">
              <h2
                :class="`headline font-weight-light mb-4 ${
                  day.color || 'red'
                }--text`"
              >
                {{ day.date }}
              </h2>
              <v-card-text class="pa-0"> </v-card-text>
              <div>
                <v-list dense class="py-0">
                  <v-hover
                    v-for="(event, i) in day.details.data"
                    v-slot="{ hover }"
                    :key="i"
                  >
                    <div>
                      <v-list-item
                        dense
                        three-line
                        style="min-width: 48px; cursor: context-menu"
                        :class="{ 'red darken-1': hover }"
                      >
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ event.time }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            :style="{
                              '-webkit-line-clamp': hover ? 'unset' : '2',
                            }"
                          >
                            {{ event.note }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- <v-divider></v-divider> -->
                    </div>
                  </v-hover>
                </v-list>
              </div>
            </v-card>
          </v-timeline-item>
        </v-hover>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
export default {
  components: {
    // Logo,
    // VuetifyLogo,
  },

  computed: {
    counter() {
      return this.screenTyps === 'xs' || this.screenTyps === 'sm'
    },

    breakpoint() {
      return this.$vuetify.breakpoint
    },
    timeline() {
      return this.$store.state.timeline
    },
    isSmallScreen() {
      return this.breakpoint.sm || this.breakpoint.xs
    },
  },

  mounted() {
    this.$store.dispatch('setTimeline')
  },
}
</script>
