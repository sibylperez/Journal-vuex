import store from '@/store'

const authGuard = async ( to, from, next ) => {

    const { ok } = await store.dispatch('auth/checkAuth')

    if(ok) next()
    else next({ name: 'login' })
}

export default authGuard