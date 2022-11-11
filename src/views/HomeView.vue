<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <button @click="goToJournal" class="btn btn-primary">Journal</button>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    goToJournal(){
      this.$router.push({ name: 'no-entry'})
    }
  }
}
</script>

