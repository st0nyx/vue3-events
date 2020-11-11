<template>
  <div>
    <Suspense>
      <template #default>
        <EventTable />
      </template>
      <template #fallback>
        Loading ...
      </template>
    </Suspense>
  </div>
</template>

<script>
import EventTable from "@/components/EventTable";
export default {
  components: {
    EventTable
  }
};
</script>

<style scoped></style>
