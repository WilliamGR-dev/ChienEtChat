<template>
  <div class="Cat">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Dog</h1>
    <div>
    </div>

      <div v-for=" pet in pets" v-bind:key="pet.index" >
        <div v-if="pet.id == this.$route.params.id">
          {{ pet.name}}
        </div>

      </div>
  </div>
</template>

<script>

export default {
  name: 'Dog',
  computed: {
    pets() {
      return this.$store.getters.pets
    }
  }
}
</script>
