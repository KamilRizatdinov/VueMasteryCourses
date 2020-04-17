<template>
  <div>
    <h1>Listing events</h1>
    <EventCard v-for="i in 10" :key="i" :card_id="i" />
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
