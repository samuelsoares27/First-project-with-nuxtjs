<template>
  <div>
    
  
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-text-field
            label="Nome"
            :rules="rules"
            hide-details="auto"
            type="text"  
            v-model="nome" />
        </v-col>
        <v-col cols="2">
            <v-btn depressed color="primary" @click="cliquei()" style="width: 100%">Adicionar</v-btn> 
        </v-col> 
        <v-col cols="12">
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
          <v-data-table :headers="headers" :items="alunos" class="elevation-1" :search="search">
            <template slot="items" slot-scope="props">
              <td class="text-xs-right">{{ props.id }}</td>
              <td class="text-xs-right">{{ props.name }}</td>
            </template>
          </v-data-table>          
        </v-col>       
      </v-row>
    </v-container>


  </div>

</template>

<script>
export default {
  name: 'Aluno',
  data() {
    return {
      search: '',
      titulo: "Cadastro de Alunos",
      nome: "",
      alunos: [],
      headers: [{
        text: 'Id',
        align: 'left',
        sortable: true,
        value: 'id'
      },
      {
        text: 'Nome',
        align: 'left',
        sortable: false,
        value: 'name'
      }]
    }
  },
  props: {
    
  },
  methods:{
    cliquei(){
      this.alunos.push({"id":this.alunos.length + 1, "name" : this.nome});
      this.nome = "";
      this.alunos.forEach(element => {
        console.log(element);
      });
    }
  }
}
</script>

<style scoped>
</style>
