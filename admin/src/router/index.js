import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './../views/Main';
import CategoriesEdit from "./../views/CategoriesEdit";
import CategoriesList from './../views/CategoryList';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path: '/categories/create', component: CategoriesEdit},
      {path: '/categories/edit/:id', component: CategoriesEdit, props: true},
      {path: '/categories/list', component: CategoriesList},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
