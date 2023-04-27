<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleSideMenu"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <!--    todo   <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="SideMenuOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links angel </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { linksList } from "../router/links-list";
import EssentialLink from "components/EssentialLink.vue";
import useUI from "../composable/useUI";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const { SideMenuOpen, toggleSideMenu } = useUI();

    return {
      linksList,
      SideMenuOpen,
      toggleSideMenu,
    };
  },
});
</script>
