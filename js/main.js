Vue.config.devtools = true;

const app = new Vue({
   el: '#app',
   data: {
      mail: [],
   },
   mounted() {
         let index = 10;
         for(let i = 0; i < index; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail') 
            .then((ele) => {
               this.mail.push(ele.data.response);
            });
           
         }
      }

})







// in 'Teoria' la spiegazione
// const app = new Vue({
//    el: '#app',
//    data: {
//       mail: [],
//    },
//    mounted() {
//       axios // axios è una libreria
//          .get('https://flynn.boolean.careers/exercises/api/random/mail') // tramite il .get si identifica il tipo di operazione richiesta dal client
//          .then((ele) => {
//              this.mailUno = ele.data.response;
//             //  this.mailUno = ele.data.response;
//       }); // Il metodo then() prende due parametri: il primo parametro è la funzione che verrà eseguita nel caso in cui la promise venga risolta; il secondo parametro è la funzione che verrà eseguita se la promise viene rigettata.
     
//    }

// })

