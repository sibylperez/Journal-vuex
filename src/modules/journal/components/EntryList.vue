<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input 
            type="text"
            class="form-control"
            placeholder="Search entry..."
        />
    </div>
    <div class="entry-scrollarea">
        <Entry />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        Entry: defineAsyncComponent(() => import('./Entry.vue'))
    }
}
</script>

<style lang="scss" scoped>
.entry-list-container{
    border-right: 2px dotted #C066F5;
    height: calc( 100vh - 56px)
}
.entry-scrollarea{
    height: calc( 100vh - 110px);
    //overflow: scroll;
}

input{
    margin-bottom: 10px;
}
</style>
