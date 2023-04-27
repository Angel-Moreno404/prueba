<template>
  <q-page class="flex column q-pa-md">
    <span class="text-1"> typografy </span>
    <q-separator />
    <span class="text-subtitle1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, animi error
      laboriosam similique aspernatur impedit quo ad optio delectus quasi sequi
      cupiditate magnam dolorum nemo quisquam sint fugit veniam eligendi?
    </span>
    <q-separator />
    <span class="text-subtitle2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </span>
    <q-separator />
    <p class="text-body1">Lorem, ipsum dolor.</p>
    <p class="text-body2">Lorem, ipsum dolor.</p>
    <q-separator />

    <span class="text-weight-thin"
      >Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</span
    >

    <span class="text-weight-light"
      >Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</span
    >

    <span class="text-weight-regular"
      >Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</span
    >

    <span class="text-weight-medium"
      >Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</span
    >

    <span class="text-weight-bold"
      >Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</span
    >

    <span class="text-weight-bolder"
      >Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</span
    >
    <q-separator />
    <q-btn
      class="q=mt-md"
      :label="SideMenuOpen ? 'cerrar menu lateral' : 'abrir menu lateral'"
      color="primary"
      @click="toggleSideMenu"
      >accionar barra lateral</q-btn
    >
    <q-separator />

    <q-item-label> hola mundo</q-item-label>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from "../composable/useUI";

export default defineComponent({
  name: "typePography",

  components: {
    /*  EssentialLink, */
  },

  setup() {
    const { SideMenuOpen, toggleSideMenu } = useUI();

    return {
      SideMenuOpen,
      toggleSideMenu,
    };
  },
});
</script>
