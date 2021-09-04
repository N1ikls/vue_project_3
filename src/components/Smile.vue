<template>
  <v-card>
    <v-card-title>
      <v-spacer />
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
        append-icon="mdi-magnify"
        @click:append="searchV(search)"
      >
      </v-text-field>
    </v-card-title>
    <div class="table">
      <v-simple-table dense>
        <tbody>
          <tr v-for="(task, index) in filteredList" :key="task.id">
            <td :class="{ active: index === active }">{{ task.category }}</td>
            <td :class="{ active: index === active }">{{ task.delivery }}</td>
            <td :class="{ active: index === active }">{{ task.setup }}</td>
            <td :class="{ active: index === active }">
              <v-icon
                @click="push_local(task.delivery), (active = index)"
                
                >mdi-thumb-up</v-icon
              >
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Smile",
  data() {
    return {
      search: "", // для отображения поисковика
      Clicked: false, // нажатие на смайлик
      active: null,
      color: false,
    };
  },
  mounted() {
    //do something after mounting vue instance
    this.GET_SMILE_FROM_API();
  },
  computed: {
    ...mapGetters(["smile", "searchValue"]),
    filteredList() {
      // фильтр поиска по категории
      var comp = this.search;
      if (this.search) {
        return this.smile.jokes.filter(function(elem) {
          if (comp === "") return true;
          else
            return elem.category.toLowerCase().indexOf(comp.toLowerCase()) > -1;
        });
      } else {
        return this.smile.jokes;
      }
    },
  },
  methods: {
    ...mapActions(["GET_SMILE_FROM_API", "GET_SEARCH_VALUE"]),
    push_local(value, index) {
      // добавление в локал хранилище
      this.$store.dispatch("LOCAL", value);
    },
    searchV(value) {
      // для добавление в vuex данные поиска
      this.GET_SEARCH_VALUE(value);
    },
  },
};
</script>

<style>
.table {
  padding: 50px;
  margin: 20px;
  border: 1px solid;
  box-shadow: 0 0 8px 0;
  width: 0 auto;
  border-radius: 10px;
}
.active {
  color: white;
  background: red;
}
</style>
