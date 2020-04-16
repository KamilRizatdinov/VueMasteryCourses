<template>
  <div>
    <h1>Listing events</h1>
    <ul>
      <li v-for="i in 10" :key="i">
        <router-link :to="{ name: 'event-show', params: { id: i } }"
          >Show event</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
