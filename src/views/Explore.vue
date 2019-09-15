<template>
  <div class="explore">
    <div v-if="!isLoading">
      <TableView :source="fundsList" @onSelectiveItemClicked="onSelectiveItemClicked"/>
    </div>
    <div v-if="isLoading">
      <Loading/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TableView from '../components/Table.vue';
import Loading from '../components/Loading.vue';
import Fund from '@/types/fund';
import Routes from '@/enums/routes';

@Component({
  components: {
    TableView,
    Loading,
  },
})
export default class Explore extends Vue {
  private isLoading: boolean = true;

  mounted() {
    this.$store.dispatch('loadFunds')
      .then(() => {
        this.isLoading = false;
      });
  }

  get fundsList() {
    return {
      isSearch: true,
      headers: [
        {
          name: 'name',
          displayColumn: 'Name',
        },
        {
          name: 'category',
          displayColumn: 'Category',
          isFilter: true,
          filterValue: '',
        },
        {
          name: 'type',
          displayColumn: 'Type',
          isFilter: true,
          filterValue: '',
        },
        {
          name: 'plan',
          displayColumn: 'Plan',
          isFilter: true,
          filterValue: '',
        },
        {
          name: 'yearOne',
          displayColumn: 'Year one',
        },
        {
          name: 'yearThree',
          displayColumn: 'Year two',
        },
      ],
      selectiveItem: 'name',
      list: this.$store.getters.getFunds,
    };
  }

  onSelectiveItemClicked(item:Fund) {
    this.$router.push({
      name: Routes.detail,
      params: {
        code: item.code,
      },
    });
  }
}
</script>
<style lang="scss" scoped>
  .explore
  {
    padding: 20px;
  }
</style>
