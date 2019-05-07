<template>
	<div>
		<headerAll/>
    <!-- <indexContentAll></indexContentAll> -->
    <orderContentAll></orderContentAll>
	</div>

</template>

<script>
import headerAll from '../components/header/header-all.vue'
// import indexContentAll from "../components/content/index-content-all";
import orderContentAll from "../components/content/order-content-all";
export default {
  components: {
    "headerAll":headerAll,
    // indexContentAll,
    orderContentAll
  },
  
}
</script>

<style>
</style>
