<template>
  <q-page class="flex column q-pa-md">
    <div class="row q-mb-md" style="margin-bottom: 105px">
      <div class="col-2">
        <img
          alt="Quasar logo"
          src="~assets/angel.jpeg"
          style="width: 200px; height: 200px"
        />
      </div>
       <div class="col-1"></div>
      <div class="col-4">
        <span class="text-4 text-weight-bolder"> Formacion Academica </span>
        <div class="text-body1">
          <tr>
            Título: Ingeniero de Sistemas.
          </tr>
          <tr>
            Universidad: Universidad Nacional Experimental Politécnica de las
            Fuerzas Armadas.
          </tr>
          <tr>
            Título: Ingeniero de Sistemas. Desde 2016 - Hasta 2022
          </tr>
          <tr>
            País: Venezuela.
          </tr>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-4">
        <span class="text-1 text-weight-bolder"> Expericia Laboral </span>
        <div class="text-body1">
          <tr>
            Empresa: Venezolana de industria tecnológica.
          </tr>
          <tr>
            Cargo: Programador Full Stack.
          </tr>
          <tr>
            Labor: Sistema Integral de Post-venta ducción viejo a uno nuevo
            usando Laravel-vue.
          </tr>
          <tr>
            Localidad: Punto-fijo – Falcon -Venezuela.
          </tr>
          <tr>
            Tiempo: 1 año y 7meses (Trabajando actualmente)
          </tr>
        </div>
      </div>
    </div>




    <q-separator />

    <q-separator />
    <span class="text-1 text-weight-bolder">Proyectos realizados </span>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img  src="~assets/php2.png" />

        <q-card-section>
          <div class="text-h6">PROJECTO 1</div>
          <div class="text-subtitle2">Laravel Vue</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="~assets/Laravel.jpg" />

        <q-card-section>
          <div class="text-h6">PROJECTO 2</div>
          <div class="text-subtitle2">Laravel Vue</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <img src="~assets/lv.png" />

        <q-card-section>
          <div class="text-h6">PROJECTO 3</div>
          <div class="text-subtitle2">Laravel Vue</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>

    <q-separator />
    <span class="text-1 text-weight-bolder">Cursos realizados </span>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">PROJECTO 1</div>
          <div class="text-subtitle2">Laravel Vue</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">PROJECTO 2</div>
          <div class="text-subtitle2">Laravel Vue</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">PROJECTO 3</div>
          <div class="text-subtitle2">Laravel Vue</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>

    <q-separator />

    <q-item-label> hola mundo</q-item-label>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from "../composable/useUI";

export default defineComponent({
  name: "CurriculumAngel",

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
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
