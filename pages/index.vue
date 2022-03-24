<template>
  <div>
    <!-- Completion works -->
    {{ $accessor.example }}
    <!-- Completion doesn't work -->
    {{ $accessor.submodule.submodule.example }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  created() {
    console.log(this.$accessor.example);
    //Completion works for me there for some reason
    console.log(this.$accessor.submodule.submodule.example);
  }
})
</script>
