<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="../../../assets/logo.png"
                height="24"
                 alt="self-point of vue"
                 class="d-inline-block align-text-top mx-2">
                 Self-Point of Vue 
        </a>
        <div class="d-flex">
            <h4 class="d-inline-block align-text-top mx-2 my-2 text-white">Welcome {{ username }}</h4>
            <button @click="onLogout" class="btn btn-outline-info mx-2">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import useAuth from '@/modules/auth/hooks/useAuth'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const { username , logout } = useAuth()

        return {
            username,
            onLogout: () => {
                router.push({ name: 'login' })
                logout()
            }
        }
    }
}
</script>