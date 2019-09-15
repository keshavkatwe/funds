<template>
  <div class="table">
    <div class="content">
      <input v-if="source.isSearch"
             class="search" type="text" v-model="searchParam" placeholder="Search">
      <table v-if="source">
        <thead>
        <tr>
          <th v-for="(item,index) in headers" :key="index">
            <a
              :class="sortColumn === item.name ? 'active':''"
              href="javascript:void(0)"
              @click="onSortColumn(item.name)">{{item.displayColumn}}</a>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td v-for="(column, colIndex) in headerOptions" :key="colIndex">
            <div v-if="column.isFilter">
              <select
                class="filterSelect"
                v-model="column.filterValue">
                <option value="">All</option>
                <option v-for="(item,index) in getUniqueItems(column.name)"
                        :value="item"
                :key="index">{{item}}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-for="(row,index) in rows" :key="index">
          <td v-for="(column,colindex) in headers" :key="colindex">
            <a
              v-if="source.selectiveItem === column.name"
              class="selectiveItem"
              href="javascript:void(0)"
              @click="onSelectiveItemClicked(row)">{{row[column.name]}}</a>
            <p v-else>{{row[column.name]}}</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
class Table extends Vue {
  @Prop() private source!:any;

  private headerOptions:any = [];

  private sortColumn: string = '';

  private searchParam: string = '';

  mounted() {
    this.headerOptions = this.source.headers;
  }

  get headers() {
    return this.source.headers;
  }

  onSelectiveItemClicked(item:any) {
    this.$emit('onSelectiveItemClicked', item);
  }

  get sortedAndFilteredItems() {
    return this.source.list
      .filter((item:any) => {
        let isNeeded:boolean = false;
        if (this.searchParam === '') {
          isNeeded = true;
        } else {
          Object.values(item).forEach((val:any) => {
            if (val && val.toString().toLocaleLowerCase()
              .includes(this.searchParam.toLowerCase())) {
              isNeeded = true;
            }
          });
        }
        return isNeeded;
      })
      .filter((item:any) => {
        let isNeeded:boolean = true;
        this.headerOptions
          .filter((headerItem:any) => headerItem.isFilter)
          .forEach((headerItem:any) => {
            if (headerItem.filterValue !== '' && item[headerItem.name] !== headerItem.filterValue) {
              isNeeded = false;
            }
          });
        return isNeeded;
      });
  }

  get rows() {
    return this.sortedAndFilteredItems
      .slice(0, 50)
      .sort((a:any, b:any) => {
        if (this.sortColumn) {
          const nameA = a[this.sortColumn];
          const nameB = b[this.sortColumn];
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
        }
        return 0;
      });
  }

  getUniqueItems(columnName:string) {
    return this.source.list
      .map((item:any) => item[columnName])
      .filter((value:string, index:number, self:string) => self.indexOf(value) === index);
  }


  onSortColumn(name:string) {
    this.sortColumn = name;
  }
}
export default Table;
</script>

<style lang="scss" scoped>
.table
{
  height: calc(100vh - 127px);
  overflow: auto;
  .content
  {
    .search
    {
      margin-bottom: 10px;
      font-size: 14px;
      width: 200px;
      height: 30px;
      outline: none;
      padding: 0 10px;
    }

    table{
      width: 100%;
      border-collapse: collapse;

      tr{
        th{
          background-color: #f2f2f2;

          a{
            text-decoration: none;
            color: #848484;

            &.active{
              color: #61bbed;
            }
          }
        }
      }

      tr{
        border-bottom: 1px solid #f3f3f3;
        td,th{
          text-align: left;
          padding: 7px 10px;
        }
      }
    }
  }

}

  .filterSelect
  {
    width: 100%;
  }

  .selectiveItem
  {
    color: #000000;
  }
</style>
