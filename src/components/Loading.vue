<template>
<div class="loading">
  <img src="../assets/icons8-loader.svg" alt="">
</div>
</template>

<style lang="scss" scoped>
  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
.loading
{
  padding-top: 70px;
  text-align: center;

  img
  {
    height: 50px;
    animation: rotation 2s infinite linear;
  }
}
</style>
