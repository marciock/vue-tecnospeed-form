<template>
  <div >
    <div class="row">
      <div class="text-center"><strong>{{barValue}}% </strong></div>
      <div class="progress" style="height: 5px;">
        <div class="progress-bar" role="progressbar" :style="barStyle" :aria-valuenow="barValue" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    
     
    </div>
  </div>

</template>
<script>



export default {
  name:'ProgressBar',
  props:['barStyle','barValue'],
  components:{
    
  }
  
    
}
</script>