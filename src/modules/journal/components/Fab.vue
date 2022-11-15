<template>
    <button class="btn btn-success"
            @click="$emit('on:click')">
        <i class="fa fa-1x"
            :class="icon"></i>
        
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }

}
</script>

<style lang="scss" scoped>
button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 70px;
    height: 70px;
    border-radius: 100%;
}
</style>