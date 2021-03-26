<template>
  <nav class="navbar navbar-expand-lg navbar-light border-top border-bottom"  >

  <div class="container ">
    <a class="nav-brand left-space"><img src="logo.png"></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#barraMenu" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="barraMenu">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0 right-space" >
          <DropMenu idITem="solucoes" :itens="menuSolucoes" title="SOLUÇÕES" />
          <DropMenu idITem="institucional" :itens="menuInstitucional" title="INSTITUCIONAL" />
      </ul>
    </div>
  </div>
  </nav>
</template>
<script>


import DropMenu from './DropMenu';

export default {
    name:'BarMenu',
    components:
    {DropMenu},
    data:()=>{
        return{
            menuSolucoes:[
                {text:'DOCUMENTOS FISCAIS',link:'/documentos'},
                {text:'BOLETOS',link:'/boletos'}
                ],
            menuInstitucional:[
                {text:'SOBRE NÓS',link:'/sobre'},
                {text:'REVISTA',link:'/revista'}
                ]
        }
    }
}

</script>
