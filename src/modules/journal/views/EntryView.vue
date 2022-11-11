<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">11</span>
        <span class="mx-1 fs-3">November</span>
        <span class="mx-1 fs-4 fw-light">2022, friday</span>
    </div>

    <div>
        <button class="btn btn-info mx-2">
            Delete
            <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-primary">
            Upload picture
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>

  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea name="" id="" cols="30" rows="10"
            placeholder="Tell me your point of view today"    
    ></textarea>
  </div>
  <Fab icon='fa-save'/>
  <img src="https://www.robertlandscapes.com/wp-content/uploads/2014/11/landscape-322100_1280.jpg" alt="entry-picture" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 92%;

    &:focus{
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 130px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>