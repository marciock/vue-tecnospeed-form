<template>
  <div id="app" >
  
        <BarUp />
        <BarMenu />

       <div class="container justify-content-center"> 
        <div class=" vert-expand border-bottom mbot">
          <h5>FICHA CADASTRAL</h5>
        </div>
        <div > 
          <ProgressBar  :barStyle="widthPercent" :barValue="barPercent"  />
      
        </div>
        <div class="row mt-5">
          <div class="col">
            <IconProgress title="Dados da Organização" icon="fa fa-align-justify fa-2x" status="btn-primary"/>
          </div>
          <div class="col">
            <IconProgress title="Informações Adicionais da Organização" icon="fa fa-buysellads fa-2x" :status="icon35"/>
          </div>
          <div class="col">
            <IconProgress title="Dados do Representante Legal" icon="fa fa-archive fa-2x" :status="icon55"/>
          </div>
          <div class="col">
            <IconProgress title="Dados do Administrador e do Responsável Técnico" icon="fa fa-address-card fa-2x" :status="icon75"/>
          </div>
          <div class="col">
            <IconProgress title="Dados para Envio da Nota Fiscal e Boleto" icon="fa fa-calculator fa-2x"  :status="icon100"/>
          </div>
        </div>
        <div class="row">
          <FormDash  />  
        </div>
       </div>
     
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import './assets/css/barras.css'

import {mapState} from 'vuex';



import BarUp from './components/BarUp';
import BarMenu from './components/BarMenu';
import ProgressBar from './components/ProgressBar';
import FormDash from './components/FormDash';
import IconProgress from './components/IconProgress';



export default {
  name: 'App',
  components: {
    
    BarUp,
    BarMenu,
    ProgressBar,
    FormDash,
    IconProgress
    
    
  },
  computed:{
    ...mapState('register',['status','barPercent','widthPercent','icon35','icon55','icon75','icon100'])
  },
 
  
  
  
}

//15,35,55,75,100
</script>

<style>
  .mbot{
    margin-bottom:3em;
  }
</style>
