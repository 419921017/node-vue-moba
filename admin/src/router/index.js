import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './../views/Main';
import CategoriesEdit from "./../views/CategoriesEdit";
import CategoriesList from './../views/CategoryList';
import ItemsEdit from "./../views/ItemsEdit";
import ItemsList from './../views/ItemsList'; 

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
      {path: '/items/create', component: ItemsEdit},
      {path: '/items/edit/:id', component: ItemsEdit, props: true},
      {path: '/items/list', component: ItemsList},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
