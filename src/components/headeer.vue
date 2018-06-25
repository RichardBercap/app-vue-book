<template>
    <header class="header">
        <h1>Boock-S</h1>
        
        <ul>
            <li><router-link to="/">Buscar por Tema</router-link></li>
            <li><router-link to="/author">Buscar por Autor</router-link></li> 
            
            <li><a href="#">Acerca del App</a></li>
            <li><router-link to="/desarrollador">Desarrollador</router-link></li>
        </ul>
        <hr>
    </header>
</template>
<script>
    export default {
        name: 'headerPage',
       /* data () {
            return {
                
            }
        }*/
    }
</script>
<style>
    ul{
        display: flex;
        justify-content: space-around;
    }
    li{
        list-style: none;
    }
    li a{
        color: #69c8c8;
        cursor: pointer;
        font-size: 20px;
    }
    li a:hover{
        color: #69c8c8;
        transition: .5s ease-in-out;
    }
</style>
