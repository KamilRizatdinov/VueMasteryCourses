<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    user: "user",
    categories: "categories"
  })
};
</script>

<style scoped></style>
