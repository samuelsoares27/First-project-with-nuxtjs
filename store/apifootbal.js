
import axios from 'axios';

export const context = () => ({
    info : ""
  })
  
  export const actions = {
     async getCompeticoes({ commit }){

        axios.get('https://api.football-data.org/v2/competitions')
        .then(response => {
            commit('info', response.data);
        });
        
    }
  }