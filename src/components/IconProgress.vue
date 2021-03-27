<template>
    <div class="text-center">
        <button type="button" :class="showStatus()"
         style="width: 6em; height:6em;" >
            <i :class="icon" ></i>
            </button>
        <p ><small>{{title}}</small></p>
    </div>
</template>
<script>
export default {
    name:'IconProgress',
    props:['title','icon','status'],
    methods:{
        showStatus(){
            let status=`btn ${this.status} rounded-pill`;
            return status;
        }
    }
}
</script>