<template>
  <button ref="menuButton" class="menu-button" @click="onClickMenuButton">
      <p>
          <span>M</span>
          <span>E</span>
      </p>
      <p>
          <span>N</span>
          <span>U</span>
      </p>
            <p>
          <span class="close-menu" ref="closeMenu">X</span>
      </p>
  </button>
</template>

<script>
import { TimelineLite, TweenLite } from 'gsap'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuButton',
  data() {
      return {
          timeline: null,
      }
  },
    methods: {
        onClickMenuButton: function () {
            this.toggleMenu()
            // displaying menu
            if (this.isMenuClicked) {

                // do reverse
                // this.timeline.progress(1)
                this.timeline.reverse().timeScale(1.5)

                // this.timeline.addPause(1)
            } else {
            // displaying X

              this.timeline.play()
        }

        
      },
     ...mapActions(['toggleMenu'])
  },
computed: mapGetters([
    'isMenuClicked'
  ]),
  mounted() {
      const children = this.$refs.menuButton.children
    this.timeline = new TimelineLite()

    this.timeline.add( TweenLite.to(this.$refs.closeMenu, .2, { opacity: 0, transform: 'rotate(90deg)'}), 0)

    for (let index = 0; index < children.length; index++) {
        const p = children[index];
        for (let i = 0; i < p.children.length; i++) {
            const span = p.children[i];
            if (span.className === "close-menu") {
                return
            }
            this.timeline.add( TweenLite.from(span, .20, { position: 'absolute', transform: 'translateX(500px)'} ))   
    }
        
    }

    this.timeline.play()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    button {
        background-color: transparent;
        border: 1px solid white;
        color: white;
        font-weight: bold;
        text-shadow: 1px 0px #666;
        padding: 5px 8px;
        width: 40px;
        height: 40px;
        letter-spacing: 4px;
        text-align: center;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        outline: none;
        transition: border .2s linear;
        cursor: pointer;
        z-index: 9;
    }

    .close-menu {
        display: block;
        font-size: 24px;
        position: absolute;
        opacity: 1;
        left: 0;
        right: 0;
        margin: auto;
        letter-spacing: initial;
        font-weight: 300;
        padding-top: 5px;
        top: 0;
        pointer-events: none;
    }

</style>
