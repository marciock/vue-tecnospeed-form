<template>
  <div id="app">
    <BarraSuperior />
    <BarraMenu />
    <div class="row left-space right-space vert-expand border-bottom">
      <h4>FICHA CADASTRAL</h4>
    </div>
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import './assets/css/barras.css'


import BarraSuperior from './components/BarraSuperior';
import BarraMenu from './components/BarraMenu';



export default {
  name: 'App',
  components: {
    
    BarraSuperior,
    BarraMenu
    
    
  },
  
}
</script>

<style>

</style>
