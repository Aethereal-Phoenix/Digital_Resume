// Imports
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../../components/views/HomeView.vue'
import AboutView from '../../components/views/AboutView.vue'
import ProjectsView from '../../components/views/ProjectsView.vue'
import ContactView from '../../components/views/ContactView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router