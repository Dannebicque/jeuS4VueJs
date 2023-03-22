<script setup>

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const route = useRoute()
const idPartie = ref()
const data = ref()
const dataMots = ref()

onMounted(async () => {
  idPartie.value = route.params.idpartie

  const response = await axios.get('http://127.0.0.1:8000/api/parties/' + idPartie.value)
  data.value = response.data

  let response2 = await axios.get('http://127.0.0.1:8000/api/mot_parties/')
  response2 = await response2.data
  console.log(response2)
  dataMots.value = response2['hydra:member'].filter(mot => mot.partie == '/api/parties/' + idPartie.value)

})

</script>

<template>
  <h1>Partie N* {{ idPartie }}</h1>

  <div>
    <div class="carte" v-for="mot in dataMots" :key="mot.id">
      <div class="carte__face carte__face--front">
        <h2>{{ mot.mot }}</h2>
      </div>
    </div>
  </div>

  <!--  <pre>-->
  <!--    {{ dataMots}}-->
  <!--  </pre>-->
  <!--  <hr>-->
  <!--  <pre>-->

  <!--    {{ data}}-->

  <!--  </pre>-->
</template>

<style>
.carte {
  float: left;
  width: 20%
}
</style>
