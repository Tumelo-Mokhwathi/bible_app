<template>
  <div class="container">
    <bible-dropdown />
  </div>
</template>
<script>
import BibleDropdown from "@/components/BibleDropdown.vue";
export default {
  components: {
    BibleDropdown
  },
  name: "Bible"
};
</script>
<style>
.form-group {
  width: 50%;
  margin: auto;
  margin-top: 5%;
}
.btn {
  width: 30%;
  margin-left: 30%;
}
.result {
  margin-right: 13%;
}
</style>
