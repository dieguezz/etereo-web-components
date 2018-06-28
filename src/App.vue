<template>
  <div id="app">
      <AppMenu></AppMenu>
      <header class="main-header">
        <div class="logo"></div>
        <MenuButton />
      </header>
    <router-view/>
    <div class="video-background">
      <div class="video-foreground">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m3lrVFLKq5o?rel=0&amp;controls=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>  
      </div>
    </div>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton'
import Menu from '@/components/Menu'

export default {
  name: 'app',
  components: { MenuButton, AppMenu: Menu },
}
</script>

<style lang="scss">
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    .logo {
      background-image: url('./assets/logo.svg');
      background-size: cover;
      width: 120px;
      height: 36px;
      text-indent: -99999px;
      background-position: center;
    }
  }

  body {
    width: 100wh;
    height: 100vh;
    color: #fff;
    background-color: black;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000000a3;
      top: 0;
      left: 0;
      z-index: -1;
      background-image: radial-gradient(ellipse, #ee775247, #e73c7e47, #23a6d561, #23d5ab8c);    
      background-size: 400% 400%;
      animation: Gradient 65s ease-in-out infinite alternate-reverse;
    }
  }


  .video-background {
  background: #000;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -99;
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@media (min-aspect-ratio: 16/9) {
  .video-foreground { height: 300%; top: -100%; }
}
@media (max-aspect-ratio: 16/9) {
  .video-foreground { width: 300%; left: -100%; }
}
@media all and (max-width: 600px) {
.vid-info { width: 50%; padding: .5rem; }
.vid-info h1 { margin-bottom: .2rem; }
}
@media all and (max-width: 500px) {
.vid-info .acronym { display: none; }
}
  
  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 0%
    }
    100% {
      background-position: 0% 100%
    }
  }
</style>
