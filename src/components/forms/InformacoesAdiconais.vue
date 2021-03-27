<template>
    <div class="container"> 
        <div class="row justify-content-center">
          <div class="col col-lg-8">
            <form name="informacoes_adicionais" v-on:submit.prevent="sendData">
                <div class="form-group mb-3">
                    <label for="email" class="col-form-label">Email*</label>
                    <input text="email" class="form-control"  required aria-required="Preencha este campo">

                </div>
                <div class="float-end mb-5">
                 <button type="submit" class="btn btn-success">Proxima <i class="fa fa-angle-double-right fa-lg"></i></button>

                </div>
                <div class="float-begin mb-5">
                 <button type="button" class="btn btn-success"  @click="backData()"><i class="fa fa-angle-double-left fa-lg"></i> Anterior</button>

                </div>

            </form>
          </div>
        </div>
    </div>
</template>
<script>

import {mapActions} from 'vuex';
import {mapState} from 'vuex';

export default {
    name:'InformacoesAdicionais',
    computed:{
        ...mapState('register',['barPercent','history'])
    },
    methods:{
        ...mapActions('register',['actionBackHistory','actionBackBarPercent']),
        sendData(){
            console.log('teste')
        },
        backData(){
            this.actionBackHistory(this.barPercent);
            this.actionBackBarPercent(this.history);

        }
    }
}
</script>