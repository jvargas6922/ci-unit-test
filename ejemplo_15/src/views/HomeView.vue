<template>
  <div class="home">
    <h1>Buscador</h1>
    <span>Ingrese id Pokemón</span>
    <input type="text" name="pokemon" id="pokemon" v-model="pokemon" />
    <button @click="search">buscar</button>
    <div class="center">
      <img v-if="img != ''" :src="img" alt="pokemon_image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      pokemon: "",
      img: "",
    };
  },
  methods: {
    search() {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
        .then((res) => {
          console.log(res.data.sprites.front_default);
          this.img = res.data.sprites.front_default;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.center {
  text-align: center;
}
</style>
