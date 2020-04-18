<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
    <p>There are {{ catLength }} categories:</p>
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapState({
      user: "user",
      categories: "categories"
    })
  }
};
</script>

<style scoped></style>
