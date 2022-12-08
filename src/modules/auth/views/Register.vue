<template>
    <span class="login100-form-title p-b-41">
                      Register your self-point of view
                  </span>
                  <form class="login100-form validate-form p-b-33 p-t-5"
                    @submit.prevent="onSubmit">

                    <div class="wrap-input100 validate-input" data-validate = "Enter Name">
                          <input v-model="userForm.name" class="input100" type="text" placeholder="Username" required>
                          <span class="focus-input100" data-placeholder="&#xe82a;"></span>
                      </div>
  
                      <div class="wrap-input100 validate-input" data-validate = "Enter email">
                          <input v-model="userForm.email" class="input100" type="email" placeholder="Email" required>
                          <span class="focus-input100" data-placeholder="&#xe818;"></span>
                      </div>
  
                      <div class="wrap-input100 validate-input" data-validate="Enter password">
                          <input v-model="userForm.password" class="input100" type="password" placeholder="Password" required>
                          <span class="focus-input100" data-placeholder="&#xe80f;"></span>
                      </div>
  
                      <div class="container-login100-form-btn m-t-32">
                          <button class="login100-form-btn" type="submit">
                              Create
                          </button>
  
                      </div>
  
                      <div class="container-login100-form-btn m-t-32">
                          <router-link :to="{name: 'login'}">Already have an account?</router-link>
                      </div>
                  </form>
  </template>
  
  <script>

  import { ref } from 'vue';
  import useAuth from '../hooks/useAuth'

  export default {
    setup(){

        const { createUser } = useAuth()

        const userForm = ref({
            name: '',
            email: '',
            password: ''
        })

        return {
            userForm,
            onSubmit: async () => {
                createUser(userForm.value)
            }
        }
    }
  }
  </script>