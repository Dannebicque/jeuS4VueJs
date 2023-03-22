<script setup>

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const route = useRoute()
const idPartie = ref()
const partie = ref()

onMounted(async () => {
  idPartie.value = route.params.idpartie

  const response = await axios.get('http://127.0.0.1:8000/api/parties/' + idPartie.value)
  partie.value = await response.data
  console.log(partie.value)
})

</script>

<template>
  <h1>Partie N* {{ idPartie }}</h1>

  <div v-if="partie">
    <div class="carte" v-for="mot in partie.motParties" :key="mot.id">
      <div class="">
        <h2>{{ mot.mot.mot }}</h2> <!-- le premier mot est la boucle, le deuxième mot est la relation entre PartieMot et Mot, et le troisième mot est le champs dans mot -->
      </div>
    </div>
  </div>

  <h3>Carte "indice"</h3>
  <div v-if="partie" class="cart">
    <div v-for="mot in partie.motParties" :key="mot.id">
      <div :class="`case ${ mot.couleurJ1 }`">
        &nbsp;
      </div>
    </div>
  </div>
    <pre>
      {{ partie}}
    </pre>
  <!--  <hr>-->
  <!--  <pre>-->

  <!--    {{ data}}-->

  <!--  </pre>-->
</template>

<style scoped>
.carte {
  float: left;
  width: 20%
}

.cart {
  border: 1px solid black;
  width: 150px;
  height: 150px;
}
.case {
  width:30px;
  height:30px;
  float:left;
}

.case.Vert {
  background-color: #00FF00;
}

.case.Neutre {
  background-color: yellow;
}

.case.Noir {
  background-color: black;
}
</style>
