<template>
    <li class="nav-item dropdown">
        <a class="nav-link" href="#" :id="idItem" role="button" data-bs-toggle="dropdown" 
        aria-expanded="false" >{{title}}</a>
        <ul class="dropdown-menu dropdown-menu-primary" :aria-labelledby="idItem" >
            <li v-for="(item,index) in itens" :key="index"><a class="dropdown-item" :href="item.link">{{item.text}}</a></li>
        </ul>
    </li>
</template>
<script>
export default {
    name:'DropMenu',
    props:['idItem','itens','title'],
    
    
}
</script>