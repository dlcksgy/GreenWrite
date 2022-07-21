<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const users = ref([]);

    function selectUser() {
      axios
        .get("http://localhost:8080/userList")
        .then((response) => {
          users.value = response.data;
          console.log("[TestView.vue] response -> " + response);
        })
        .catch((error) => console.log("[TestView.vue] error -> " + error));
    }
    selectUser();

    return { selectUser, users };
  },
};
</script>

<template>
  <div>
    <h3>router, axios, DB 연결 완료</h3>
    <q-list v-for="item in users" :key="item.userNo" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ item.userName }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
