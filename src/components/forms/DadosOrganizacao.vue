<template>
      <div class="container"> 
        <div class="row justify-content-center">
          <div class="col col-lg-8">
            <form name="dados_organizacao "  v-on:submit.prevent="sendData"  >
            
              <div class="form-group">

                <div class="form-check mb-3">
                 
                  <input class="form-check-input"  value="fisica" type="radio" v-model="data.pessoa"  checked name="fisica" >
                    <label  for="flexRadioDefault1" >
                      Pessoa Jurídica
                    </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label for="razaoSocial" class="col-form-label">Razão Social*</label>
                <input text="text" class="form-control" v-model="data.razaoSocial" required aria-required="Preencha este campo" id="razaoSocial" name="razaoSocial" min="3" @blur="validaRazaoSocial"> 
                <div class="alert alert-danger" v-show="dados.razaoSocial.erro===true" >{{dados.razaoSocial.message}} </div>
               
                
              </div>

              <div class="form-group mb-3">
                <label for="nomeFantasia">Nome Fantasia*</label>
                <input text="text" class="form-control" v-model="data.nomeFantasia" required aria-required="Preencha este campo">
              </div>

              <div class="form-group mb-3 col-sm-4" >
                <label for="cnpj">CNPJ*</label>
                <input text="text" class="form-control"   v-mask="'###.###.###/####-##'" v-model="data.cnpj" 
                required aria-required="Preencha este campo"   id="cnpj" @blur="validaCNPJ()">
                 <div class="alert alert-danger" v-show="dados.cnpj.erro===true" >{{dados.cnpj.message}} </div>
              </div>
              

              <div class="form-group mb-3 col-sm-4">
                <label for="inscricaoEstadual">Inscrição Estadual*</label>
                <input text="text" class="form-control" v-model="data.inscricaoEstadual" required aria-required="Preencha este campo"  min="20" max="20" id="inscricaoEstadual" @blur="validaInscricaoEstadual()" >
                <div class="alert alert-danger" v-show="dados.inscricaoEstadtual.erro===true" >{{dados.inscricaoEstadtual.message}} </div>
              </div>

              <div class="form-group mb-3 col-sm-4">
                <label for="telefone">Telefone*</label>
                <input text="tel" class="form-control" v-mask="'(##)#####-####'" v-model="data.telefone" id="telefone"
                required aria-required="Preencha este campo"    @blur="validaTelefone()">
                <div class="alert alert-danger" v-show="dados.telefone.erro===true" >{{dados.telefone.message}} </div>
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
                  <input class="form-check-input" checked type="radio" value="1" v-model="data.tipoEmpresa" name="tipoEMpresa">

                </div>

                <div class="form-check mb-3">
                  <label  for="integrador">
                    Integrador / representante de software.
                  </label>
                  <input class="form-check-input"  type="radio" value="2" v-model="data.tipoEmpresa" name="tipoEMpresa">

                </div>

                <div class="form-check mb-3">
                  <label  for="outroRamo">
                    Empresa de outro ramo.
                  </label>
                  <input class="form-check-input"  type="radio" value="3" v-model="data.tipoEmpresa" name="tipoEMpresa">

                </div>
                
              </fieldset>

              <div class="form-group mb-3 col-sm-4">
                <label for="cep">CEP*</label>
                <input text="text" class="form-control" v-mask="'#####-###'" v-model="data.cep" required aria-required="Preencha este campo" id="cep" min="9" max="9" @blur="validaCEP()">
                 <div class="alert alert-danger" v-show="dados.cep.erro===true" >{{dados.cep.message}} </div>
              </div>

              <div class="form-group mb-3">
                <label for="endereco">Endereço*</label>
                <input text="text" class="form-control" v-model="data.endereco" required aria-required="Preencha este campo" @blur="validaEndereco()" id="endereco">
                <div class="alert alert-danger" v-show="dados.endereco.erro===true" >{{dados.endereco.message}} </div>
              </div>

              <div class="form-group mb-3 col-sm-2">
                <label for="numero">Número*</label>
                <input text="text" class="form-control" v-model="data.numero" required aria-required="Preencha este campo" min="1" max="10" id="numero" @blur="validaNumero()">
                 <div class="alert alert-danger" v-show="dados.numero.erro===true" >{{dados.numero.message}} </div>
              </div>

              <div class="form-group mb-3 col-sm-6">
                <label for="complemento">Complemento</label>
                <input text="text" class="form-control" v-model="data.complemento" >
              </div>

              <div class="form-group mb-3 col-sm-6">
                <label for="bairro">Bairro*</label>
                <input text="text" class="form-control" v-model="data.bairro" required aria-required="Preencha este campo" min="3" max="50" id="bairro" @blur="validaBairro()">
                 <div class="alert alert-danger" v-show="dados.bairro.erro===true" >{{dados.bairro.message}} </div>
              </div>

              <div class="form-group mb-3 col-sm-4">
                <label for="estado">Estado*</label>
                <select class="form-select" v-model="data.estado" required @blur="validaEstado()" id="estado">
                  <option v-for="(est,i) in estados" :key="i" :value="est">{{est}}</option>
                </select>
                <div class="alert alert-danger" v-show="dados.estado.erro===true" >{{dados.estado.message}} </div>
              </div>

              <div class="form-group mb-5 col-sm-4">
                <label for="estado">Cidade*</label>
                <select class="form-select" v-model="data.cidade" v-show="data.estado ===''" disabled required>
                  
                </select>
                 <select class="form-select" v-model="data.cidade" v-show="data.estado !==''" required id="cidade" @blur="validaCidade()" name="cidade">
                   <option v-for="(cid,i) in cidades[data.estado]" :key="i" :value="cid">{{cid}}</option>
                   <div class="alert alert-danger" v-show="dados.cidade.erro===true" >{{dados.cidade.message}} </div>
                </select>
               
              </div>

             
             <div class="float-end mb-5">
                <button type="submit" class="btn btn-success">Proxima <i class="fa fa-angle-double-right fa-lg"></i></button>
       
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
        dados:{
          razaoSocial:{erro:false,message:''},
          nomeFantasia:{erro:false,message:''},
          cnpj:{erro:false,message:''},
          inscricaoEstadtual:{erro:false,message:''},
          telefone:{erro:false,message:''},
          cep:{erro:false,message:''},
          endereco:{erro:false,message:''},
          numero:{erro:false,message:''},
          bairro:{erro:false,message:''},
          estado:{erro:false,message:''},
          cidade:{erro:false,message:''},
        },
       
      }
    },
    computed:{
      ...mapState('register',['data','estados','cidades','barPercent'])
    },
    methods:{
        ...mapActions('register',['estadosShow','cidadesShow','retornoCidade','actionBarPercent','actionWidthPercent','actionStatus','actionForwardHistory']),
        sendData(){
          this.actionBarPercent(this.barPercent);
          this.actionWidthPercent(this.barPercent);
          this.actionStatus(this.barPercent);
          this.actionForwardHistory(this.barPercent);
        },
         validaEstado(){
          const elem=document.getElementById('estado');

        if(elem.value===""){
          this.dados.estado.erro=true;
            this.dados.estado.message='Selecione um Estado';

        }else{
           this.dados.estado.erro=false;
        }
        },
         validaCidade(){
          const elem=document.getElementById('cidade');

        if(elem.value===""){
          this.dados.cidade.erro=true;
            this.dados.cidade.message='Selecione uma Cidade';

        }else{
           this.dados.cidade.erro=false;
        }
        },
        validaBairro(){
          const elem=document.getElementById('bairro');

        if(elem.value==="" || elem.value.lenght>3){
          this.dados.bairro.erro=true;
            this.dados.bairro.message='Campo deve ter mais de 3 caracteres';

        }else{
           this.dados.bairro.erro=false;
        }
        },
        validaEndereco(){
          const elem=document.getElementById('endereco');

        if(elem.value==="" || elem.value.lenght>3){
          this.dados.endereco.erro=true;
            this.dados.endereco.message='Campo deve ter mais de 3 caracteres';

        }else{
           this.dados.endereco.erro=false;
        }
        },
        validaNumero(){
          const elem=document.getElementById('numero');

        if(elem.value==="" || elem.value.lenght>1){
          this.dados.numero.erro=true;
            this.dados.numero.message='Campo deve ter pelo menos 1 caractere';

        }else{
           this.dados.numero.erro=false;
        }
        },
        
      validaRazaoSocial(){
        const elem=document.getElementById('razaoSocial');

        if(elem.value==="" || elem.value.lenght>3){
          this.dados.razaoSocial.erro=true;
            this.dados.razaoSocial.message='Campo deve ter mais de 3 caracteres';

        }else{
           this.dados.razaoSocial.erro=false;
        }

      },
      validaTelefone(){
       
        const elem=document.getElementById('telefone');

        
        let value=elem.value;
        if(value.lenght<14 || value===''){
          this.dados.telefone.erro=true;
          this.dados.telefone.message='Telefone Inválido';

        }else{
          this.dados.telefone.erro=false;
        }
        console.log(elem)
      },
      cnpj(value){
       
          if (!value) return false

          // Aceita receber o valor como string, número ou array com todos os dígitos
          const validTypes =
            typeof value === 'string' || Number.isInteger(value) || Array.isArray(value)

          // Elimina valor em formato inválido
          if (!validTypes) return false

          // Guarda um array com todos os dígitos do valor
          const match = value.toString().match(/\d/g)
          const numbers = Array.isArray(match) ? match.map(Number) : []

          // Valida a quantidade de dígitos
          if (numbers.length !== 14) return false
          
          // Elimina inválidos com todos os dígitos iguais
          const items = [...new Set(numbers)]
          if (items.length === 1) return false

          // Cálculo validador
          const calc = (x) => {
            const slice = numbers.slice(0, x)
            let factor = x - 7
            let sum = 0

            for (let i = x; i >= 1; i--) {
              const n = slice[x - i]
              sum += n * factor--
              if (factor < 2) factor = 9
            }

            const result = 11 - (sum % 11)

            return result > 9 ? 0 : result
          }

          // Separa os 2 últimos dígitos de verificadores
          const digits = numbers.slice(12)
          
          // Valida 1o. dígito verificador
          const digit0 = calc(12)
          if (digit0 !== digits[0]) return false

          // Valida 2o. dígito verificador
          const digit1 = calc(13)
          return digit1 === digits[1]
        

      },
      validaCNPJ(){
        const elem=document.getElementById('cnpj');
        let results=this.cnpj(elem.value);
        if(results===false){
          this.dados.cnpj.erro=true;
          this.dados.cnpj.message="CNPJ Inválido";

        }else{
          this.dados.cnpj.erro=false;
        }

      },
      validaInscricaoEstadual(){
        const elem=document.getElementById('inscricaoEstadual');

        if(elem.value==="" || elem.value.lenght===20){
          this.dados.inscricaoEstadtual.erro=true;
            this.dados.inscricaoEstadtual.message='Campo deve ter 20 dígitos';

        }else{
           this.dados.inscricaoEstadtual.erro=false;
        }

      },
      validaCEP(){
         const elem=document.getElementById('cep');

        if(elem.value==="" || elem.value.lenght<9){
          this.dados.cep.erro=true;
            this.dados.cep.message='Campo CEP deve ter 8 dígitos';

        }else{
           this.dados.cep.erro=false;
        }
      }
            
            

        
    },
    mounted(){
      this.estadosShow();
      this.cidadesShow();
      
        

        }
    
}
</script>