import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ProductCategoryListing from '../views/product-category/Listing.vue'
import ProductCategoryManage from '../views/product-category/Manage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name:'dashboard',
    component: Dashboard
  },
  {
    path: '/product_category/listing',
    name: 'product_category_listing',
    component: ProductCategoryListing
  },
  {
    path: '/product_category/manage/:id?',
    name: 'product_category_manage',
    component: ProductCategoryManage
  }
]

const router = new VueRouter({
  routes
})

export default router
