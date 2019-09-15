<template>
  <div class="header">
    <h2>Funds</h2>
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
