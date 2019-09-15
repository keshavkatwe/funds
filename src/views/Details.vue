<template>
  <div class="details">
    <Loading v-if="isLoading"/>
    <div v-if="!isLoading">
      <a href="javascript:void(0)" @click="$router.back()">Back</a>
      <h1>{{fund.name}}</h1>
      <p>Sip range: {{fund.sip_min}} - {{fund.sip_max}}</p>
      <p>Sip dates: {{fund.sip_dates}}</p>
      <p>Category: {{fund.category}}</p>
      <a :href="fund.detail_info" target="_blank">Detail view</a>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '../components/Loading.vue';

@Component({
  components: {
    Loading
  }
})
class Details extends Vue {
  private isLoading: boolean = true;

  mounted() {
    this.$store.dispatch('loadFund', {
      code: this.$route.params.code,
    }).then(() => {
      this.isLoading = false;
    });
  }

  get fund() {
    return this.$store.getters.getFund;
  }
}
export default Details;
</script>
<style lang="scss" scoped>
  .details
  {
    padding: 20px 0;
  }
</style>
