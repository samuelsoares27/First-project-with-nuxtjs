<template>
  <v-row>
    <v-col class="text-center">
    <v-btn depressed color="primary" @click="buscarCompeticoes()">clicar</v-btn><br>
    </v-col>
  </v-row>
</template>

<script>

  export default {
    components: {

    },
    data () {
      return {
        info: ""  
      }
    },
    methods: {
      async buscarCompeticoes(){
        this.$store.dispatch('apifootbal/getCompeticoes')
       
        this.info.forEach(element => {
          console.log(element);
        });

      }

    }
  }
</script>
