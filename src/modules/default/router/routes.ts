import { type RouteRecordRaw } from 'vue-router'
import { layouts } from '@/router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => layouts.default(),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/modules/default/views/Index.vue')
            }
        ],
    }
]

export default routes;
