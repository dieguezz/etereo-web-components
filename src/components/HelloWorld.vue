<template>
  <div class="hello">
    <MenuButton />
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton'
export default {
  name: 'HelloWorld',
  components: { MenuButton },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  justify-content: center;
  padding: 100px;
}
</style>
