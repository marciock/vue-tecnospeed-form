<template>
  <div id="app" >
  
        <BarUp />
        <BarMenu />

       <div class="container justify-content-center"> 
        <div class=" vert-expand border-bottom mbot">
          <h5>FICHA CADASTRAL</h5>
        </div>
        <div > 
          <ProgressBar  barStyle="width:10%" barValue="10"  />
      
        </div>
          <FormDash  />  
       </div>
     
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import './assets/css/barras.css'


import BarUp from './components/BarUp';
import BarMenu from './components/BarMenu';
import ProgressBar from './components/ProgressBar';
import FormDash from './components/FormDash';



export default {
  name: 'App',
  components: {
    
    BarUp,
    BarMenu,
    ProgressBar,
    FormDash
    
    
  },
  
  
}
</script>

<style>
  .mbot{
    margin-bottom:3em;
  }
</style>
