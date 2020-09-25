<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
    >
      <v-list dense nav>
        <template  v-for="nav in navigations">
          <v-list-item 
            v-if="!nav.children"
            :key="nav.name"
            color="primary"
            exact
            :to="nav.route"
          >
              <v-list-item-icon>
                <v-icon>{{nav.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="nav.title"></v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-group 
            v-if="nav.children"
            :key="nav.name"
            no-action 
            :prepend-icon="nav.icon"
            :append-icon="nav.children ? undefined : ''"
            :group="nav.group"
            >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{nav.title}}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="item in nav.children"
              :key="item.name"
              link
              router
              :to="item.route"
            >
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      flat
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        Logout
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Navbar',

    data: () => ({
      drawer: null,
      startNav:"",
      navigations:[
        {
          name:"dashboard",
          title:"Dashboard",
          icon:"mdi-view-dashboard",
          route:{
            name:"dashboard"
          }
        },
        {
          name:"product_category",
          title:"Product Category",
          icon:"mdi-chart-tree",
          group:"/product_category",
          children:[
            {
              name:"product_category_listing",
              title:"Listing",
              route:{
                name:"product_category_listing",
              }
            },
            {
              name:"product_category_manage",
              title:"Add Category",
              route:{
                name:"product_category_manage"
              }
            }
          ]
        },
        {
          name:"product",
          title:"Product",
          icon:"mdi-shopping",
          children:[
            {
              name:"product_listing",
              title:"Product Listing",
              route:"/products"
            },
            {
              name:"product_add",
              title:"Add New Product",
              route:"/product_add"
            }
          ]
        }
      ]
    }),
  })
</script>
