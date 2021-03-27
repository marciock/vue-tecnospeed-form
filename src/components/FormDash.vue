<template>
    <div class="border"   style="margin-top:3em;margin-bottom:5em;">
          <div class="mt-3"> 
            <DadosOrganizacao v-show="history===15"/>
            <InformacoesAdicionais v-show="history===35"/>

          </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';

import DadosOrganizacao from './forms/DadosOrganizacao';
import InformacoesAdicionais from './forms/InformacoesAdiconais';


export default {
    name:'FormDash',
    components:{
        DadosOrganizacao,InformacoesAdicionais
    },
    data:()=>{
        return{
            myModel:{pessoa:'',razaoSocial:'',nomeFanbtasia:'',cnpj:''},
            dadosOrganizaco:'',
            informacoesAdicionais:''
            
        }
    },
    computed:{
      ...mapState('register',['history','barPercent'])
      
    },
    
}
</script>