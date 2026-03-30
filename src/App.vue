<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <KeepAlive>
      <router-view></router-view>
    </KeepAlive>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
// import RedHatFont from '@/assets/RedHatDisplay-VariableFont_wght.ttf';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style>

#app {
  font-family: "RedHatFont";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
