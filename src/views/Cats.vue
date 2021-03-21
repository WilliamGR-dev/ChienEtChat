<template>
  <div class="Cats">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Cats</h1>

      <div>
        <table class="table">
          <thead>
          <td>Name</td>
          <td>Birth Year</td>
          <td>Species</td>
          </thead>
          <tr v-for=" pet in pets" v-bind:key="pet.index" >
            <td v-if="pet.species == 'Cat'"><router-link :to="{name: 'Cat', params: { id: pet.id },}"> {{ pet.name }} </router-link></td>
            <td v-if="pet.species == 'Cat'">{{ pet.birthYear }}</td>
            <td v-if="pet.species == 'Cat'">{{ pet.species }}</td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Cats',
  computed: {
    pets() {
      return this.$store.getters.pets
    }
  }
}
</script>
