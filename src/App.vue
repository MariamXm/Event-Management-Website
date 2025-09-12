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
export default {
  name: 'App',
  components: {
        HeaderComponent,
        FooterComponent,
    },
}
</script>

<style>
@font-face{
  font-family: "Red Hat Display";
  src: url('C:\Users\PMLS\Desktop\Internship\Event-Management-Website\event-management-website\src\assets\RedHatDisplay-VariableFont_wght.ttf');
}
#app {
  font-family: "Red Hat Display";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
