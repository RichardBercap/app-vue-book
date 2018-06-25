<template>
  <section class="container">
      <div class="col-12">
          <div class="form-group row">
              <div class="col-8">
                  <input type="text" @keyup.enter="getLibros" class="form-control" placeholder="Nombre del libro" v-model="libro" > 
              </div>
              <button @click="getLibros"  class="btn btn-info col-4">Buscar</button>
          </div>
          
          <div class="table-reponsive">
              <table class="table">
                  <thead>
                      <tr>
                          <td>#</td>
                          <td>Libro</td>
                          <td>Autor</td>
                          <td>Lenguaje</td>
                          <td>Categoria</td>
                          <td>Paginas</td>
                          <td>Descargar</td>       
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="li in libros">
                          <td></td>
                          <td>{{li.title}}</td>
                          <td>{{li.author}}</td>
                          <td>{{li.language}}</td>
                          <td>
                              <span v-for="c in li.categories">{{c.name}}/</span>  
                           </td>
                          <td>{{li.pages}}</td>
                          <td> <a v-bind:href="li.url_download">Descargar</a> </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </section>
</template>

<script>
const axios = require('axios');
const jsonp = require('jsonp');
export default {
  name: 'MainPage',
  data () {
    return {
      libro:' ',
      libros:[]
    }
  },
    methods:{
        getLibros(){
            const t = this;
            let url = 'http://www.etnassoft.com/api/v1/get/?book_title="'+this.libro+'"';
            /*axios.get(url)
            .then(function (response) {
                t.libros = response.data;
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });*/
            

            jsonp(url, null, (err, data) => {
                if (err) {
                    console.error(err.message);
                } else {
                    t.libros = data;
                     console.log(data);
                }
            });
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
