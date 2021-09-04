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
          <tr
            v-for="task in filteredList"
            :key="task.id"
            :class="{ green: Clicked }"
          >
            <td>{{ task.category }}</td>
            <td>{{ task.delivery }}</td>
            <td>{{ task.setup }}</td>
            <td>
              <v-icon @click="onClick">mdi-thumb-up</v-icon>
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
    };
  },
  mounted() {
    //do something after mounting vue instance
    this.GET_SMILE_FROM_API();
  },
  computed: {
    ...mapGetters(["smile", "searchValue"]),
    filteredList() { // фильтр поиска по категории
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
    onClick() {
      this.Clicked = !this.Clicked;
    },
    ...mapActions(["GET_SMILE_FROM_API", "DELETE", "GET_SEARCH_VALUE"]),
    Del(index) {
      this.DELETE(index);
    },
    push_local(index) { // добавление в локал хранилище
      this.$store.dispatch("LOCAL", index);
    },
    searchV(value) { // для добавление в vuex данные поиска
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
</style>
