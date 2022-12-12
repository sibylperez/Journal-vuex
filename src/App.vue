<template>
  <div v-if="authStatus === 'authenticating'"
    class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Loading...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>
  <router-view v-else />
</template>

<script>
import useAuth from './modules/auth/hooks/useAuth';


export default {
  setup(){
    const { authStatus, checkStatus } = useAuth()

    checkStatus()

    return {
      authStatus,
    }
  }
}

</script>