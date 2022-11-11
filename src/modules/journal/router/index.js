
export default {
    name: 'journal',
    component: () => import(/* webpackChunkName: "journal" */ '@/modules/journal/layouts/JournalLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "no-entry" */ '@/modules/journal/views/NoEntry.vue'),
        }
    ]
}