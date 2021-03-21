<template>
  <div class="Dogs">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Dogs</h1>
    <div>
      <table class="table">
        <thead>
        <td>Name</td>
        <td>Birth Year</td>
        <td>Species</td>
        </thead>
        <tr v-for=" pet in pets" v-bind:key="pet.index" >
          <td v-if="pet.species == 'Dog'"><router-link :to="{name: 'Dog', params: { id: pet.id },}"> {{ pet.name }} </router-link></td>
          <td v-if="pet.species == 'Dog'">{{ pet.birthYear }}</td>
          <td v-if="pet.species == 'Dog'">{{ pet.species }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dogs',
  computed: {
    pets() {
      return this.$store.getters.pets
    }
  }
}
</script>
