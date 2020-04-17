<template>
  <div>
    <h1>Listing events</h1>
    <ul>
      <EventCard v-for="i in 10" :key="i" :card_id="i" />
    </ul>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  components: {
    EventCard
  }
};
</script>

<style></style>
