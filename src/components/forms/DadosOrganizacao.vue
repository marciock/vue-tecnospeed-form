<template>
      <div class="container"> 
        <div class="row justify-content-center">
          <div class="col col-lg-8">
            <form name="dados_organizacao" >
            
              <div class="form-group">

                <div class="form-check mb-3">
                 
                  <input class="form-check-input"  value="fisica" type="radio" v-model="data.pessoa"  checked >
                    <label  for="flexRadioDefault1" >
                      Pessoa Jurídica
                    </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label for="razaoSocial" class="col-form-label">Razão Social*</label>
                <input text="text" class="form-control" v-model="data.razaoSocial" required aria-required="Preencha este campo">
                
              </div>

              <div class="form-group mb-3">
                <label for="nomeFantasia">Nome Fantasia*</label>
                <input text="text" class="form-control" v-model="data.nomeFantasia" required aria-required="Preencha este campo">
              </div>

              <div class="form-group mb-3">
                <label for="cnpj">CNPJ*</label>
                <input text="text" class="form-control" v-show="cnpj.status===true"  v-mask="'###.###.###/####-#'" v-model="data.cnpj" 
                required aria-required="Preencha este campo" @change="cnpjValidation(data.cnpj)">
                
             

              <input text="text" class="form-control invalid" v-show="cnpj.status===false" v-mask="'###.###.###/####-#'" v-model="data.cnpj" 
                required aria-required="Preencha este campo" @change="cnpjValidation(data.cnpj)">
                <div class="alert alert-danger" >
                  {{cnpj.message}}
                </div>
              </div>

              <div class="form-group mb-3">
                <label for="inscricaoEstadual">Inscrição Estadual*</label>
                <input text="text" class="form-control" v-model="data.inscricaoEstadual" required aria-required="Preencha este campo">
              </div>
              
              <div class="form-group ">

                <div class="form-check mb-3">
                  <label  for="isento">
                  Isento
                  </label>
                  <input class="form-check-input"  type="checkbox" v-model="data.isento">

                </div>
              </div>

              <fieldset class="  mb-3">
                <legend > Tipo da Empresa </legend>
                <div class="form-check mb-3">
                  <label  for="empresaSoftware">
                    Empresa de Software
                  </label>
                  <input class="form-check-input" checked type="radio" value="1" v-model="data.tipoEmpresa">

                </div>

                <div class="form-check mb-3">
                  <label  for="integrador">
                    Integrador / representante de software.
                  </label>
                  <input class="form-check-input"  type="radio" value="2" v-model="data.tipoEmpresa">

                </div>

                <div class="form-check mb-3">
                  <label  for="outroRamo">
                    Empresa de outro ramo.
                  </label>
                  <input class="form-check-input"  type="radio" value="3" v-model="data.tipoEmpresa">

                </div>
                
              </fieldset>

              <div class="form-group mb-3">
                <label for="cep">CEP*</label>
                <input text="text" class="form-control" v-mask="'#####-###'" v-model="data.cep" required aria-required="Preencha este campo">
              </div>

              <div class="form-group mb-3">
                <label for="endereco">Endereço*</label>
                <input text="text" class="form-control" v-model="data.endereco" required aria-required="Preencha este campo">
              </div>

              <div class="form-group mb-3">
                <label for="numero">Número*</label>
                <input text="text" class="form-control" v-model="data.numero" required aria-required="Preencha este campo">
              </div>

              <div class="form-group mb-3">
                <label for="complemento">Complemento*</label>
                <input text="text" class="form-control" v-model="data.complemento" required aria-required="Preencha este campo">
              </div>

              <div class="form-group mb-3">
                <label for="bairro">Bairro*</label>
                <input text="text" class="form-control" v-model="data.bairro" required aria-required="Preencha este campo">
              </div>

              <div class="form-group mb-3">
                <label for="estado">Estado*</label>
                <select class="form-select" v-model="data.estado" >
                  <option v-for="(est,i) in estados" :key="i" :value="est">{{est}}</option>
                </select>
              </div>

              <div class="form-group mb-5">
                <label for="estado">Cidade*</label>
                <select class="form-select" v-model="data.cidade" v-show="data.estado ===''" disabled>
                  
                </select>
                 <select class="form-select" v-model="data.cidade" v-show="data.estado !==''" >
                   <option v-for="(cid,i) in cidades[data.estado]" :key="i" :value="cid">{{cid}}</option>
                </select>
               
              </div>

             
             <div class="float-end mb-5">
                <button type="submit" class="btn btn-success">Proxima</button>
       
             </div>

              
            </form>
          </div>
        </div>
      </div>
      
    
</template>
<script>

import {mapState} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name:'DadosOrganizacao',
    data:()=>{
      return{
        dados:''
      }
    },
    computed:{
      ...mapState('register',['data','estados','cidades','cnpj'])
    },
    methods:{
        ...mapActions('register',['estadosShow','cidadesShow','retornoCidade','cnpjValidation'])
    },
    mounted(){
      this.estadosShow();
      this.cidadesShow();
      
    }
    
}
</script>