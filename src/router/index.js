import { createRouter, createWebHistory } from 'vue-router'
import Contacts from '../views/Contacts.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import DeleteContact from '../views/DeleteContact.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/contacts/add',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/contacts/edit/:id',
      name: 'EditContact',
      component: EditContact
    },
    {
      path: '/contacts/delete/:id',
      name: 'DeleteContact',
      component: DeleteContact
    }
  ]
})

export default router
