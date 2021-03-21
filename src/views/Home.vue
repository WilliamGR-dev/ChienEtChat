<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Site ou j aime pas les animaux</h1>
    <div class="card" style="width: 18rem;margin: auto">
      <div class="card-body">
        <h5 class="card-title">{{pets.length}} pet(s) in the database:</h5>
        <ul>
          <li>{{this.dogs}} dog(s)</li>
          <li>{{this.cats}} cat(s)</li>
        </ul>
        <button class="btn-primary" v-on:click="showForm"> Add new pet </button>
      </div>
    </div>
    <div v-if="this.diplayForm == true">
      <div class="form">
        <h2>Add Pet</h2>
        <input type="text" name="name" placeholder="Enter un nom" v-model="pet.name"><br><br>
        <select name="species" id="pet-select" v-model="pet.species">
          <option value="" disabled>Choissez chat ou chien</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
        </select><br><br>
        <input type="number" name="birthYear" placeholder="Entrer la date de naissance" v-model="pet.birthYear"><br><br>
        <button v-on:click="addPet" type="submit" class="btn-primary">Ajouter Animal</button><br>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => {
    return{
      diplayForm: false,
      pet: {
        id: 0,
        name: '',
        species: '',
        birthYear: null,
      },
      pets: {

      },
      cats:0,
      dogs:0,

    }
  },
  methods: {
    addPet(){
      this.pet.id = this.pets.length+1;
      this.$store.commit("addPet", this.pet);
    },
    showForm(){
     this.diplayForm = true;
    }
  },
  mounted() {
    this.pets = this.$store.getters.pets;
    for (const pet in this.pets) {
      if (this.pets[pet].species == 'Cat'){
        this.cats ++;
      }
      if (this.pets[pet].species == 'Dog'){
        this.dogs ++;
      }
    }
  }
}
</script>
