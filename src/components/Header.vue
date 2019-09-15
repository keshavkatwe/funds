<template>
  <div class="header">
    <img src="https://assets.kuvera.in/production/atlantis/web/assets/img/kuvera-logo-dark.svg"
         alt="">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header
{
  height: 90px;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 1px 1px #DDD;
}
</style>
