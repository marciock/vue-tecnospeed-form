<template>
    <div class="border"   style="margin-top:10em;margin-bottom:5em;">
          <div class="mt-3"> 
            <DadosOrganizacao v-show="dadosOrganizaco"/>
            <InformacoesAdicionais v-show="informacoesAdicionais"/>

          </div>
    </div>
</template>
<script>

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
      
    },
    methods:{
       showInformacoes(){
           this.dadosOrganizaco=false;
           this.informacoesAdicionais=true;
       }
        
    },
    mounted(){
      this.dadosOrganizaco=true;
      this.informacoesAdicionais=false;
    }
}
</script>