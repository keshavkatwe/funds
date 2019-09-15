<template>
  <div id="app">
    <HeaderView/>
    <div class="appContainer">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';

@Component({
  components: {
    HeaderView: Header,
  },
})
class App extends Vue {

}
export default App;
</script>

<style lang="scss">
  * {
    box-sizing: content-box;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: Arial,serif;
  }

  .appContainer{
    width: 1000px;
    margin: auto;
  }
</style>
