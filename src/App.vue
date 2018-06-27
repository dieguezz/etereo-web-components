<template>
  <div id="app">
    <div id="nav">
      <MenuButton />
      <AppMenu></AppMenu>
    </div>
    <router-view/>
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
  body {
    width: 100wh;
    height: 90vh;
    color: #fff;
    // background-image: url('https://gigaom.com/wp-content/uploads/sites/1/2014/12/istock_000038230536_large.jpg');
    background-size: cover;
    background-repeat: no-repeat;
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

  #nav {
    padding: 50px;
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
