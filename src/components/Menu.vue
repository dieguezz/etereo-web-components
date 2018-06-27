<template>
  <div class="app-menu">
      <div ref="menu" class="inner">
          <ul>
              <li>Company</li>
              <li>People</li>
              <li>Contact</li>
          </ul>
      </div>
  </div>
</template>

<script>
import { TimelineLite, TweenLite } from 'gsap'
import MenuButton from '@/components/MenuButton'
import { mapGetters } from 'vuex'

export default {
  name: 'app-menu',
  data() {
      return {
          timeline: null
      }
  },
  components: { MenuButton },
  mounted() {
      console.log('mounted')
      const menu = this.$refs.menu
      this.timeline = new TimelineLite()
      this.timeline.add( TweenLite.from(menu, .55, { width: 0, opacity: 0, ease: Power1.easeIn }))
      this.timeline.add( TweenLite.from(menu, .75, { height: 0, ease: Power3.easeOut }))
      this.timeline.pause()
  },

  watch: {
    isMenuClicked (neww, old) {
        console.log('whowho')
        // setTimeout(() => {
            if (!this.isMenuClicked) {
                this.timeline.reverse().timeScale(2)

            } else {
                this.timeline.play().timeScale(1)

            }

        // }, 500)
    }
  },
  computed: mapGetters([
    'isMenuClicked'
  ]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .menu {
        padding: 25px;
        display: block;
        }
    .inner {
        position: absolute;
        height: calc(100vh - 50px);
        width: calc(100vw - 50px);
        border: 1px solid white;
        top: 25px;
        left: 25px;
        z-index: 8;
        
    }
    li {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
}
ul {
    display: none;
bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-width: 500px;
    max-height: 500px;
    text-align: center;

}
</style>
