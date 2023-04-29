<template>
  <q-page v-if="!edit" class="flex column q-pa-md">
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
    <div class="row justify-end">
      <q-btn
        color="primary"
        label="Agregar Nuevo Proyecto"
        @click="mostrarModal"
      />
       <button  class="btn btn-class " @click="mostrarModal = true">Agregar Nuevo Proyecto</button>
    
    </div>
    <q-separator />
    <span class="text-1 text-weight-bolder">Proyectos realizados </span>
    <div class="q-pa-md row items-start q-gutter-md">
        <!-- -->
        <div v-for="(seccion, index) in proyectos" :key="index" lass=" q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img :src="seccion.img" />

      <q-card-section>
        <div class="text-h6">{{ seccion.nombre }}</div>
        
      </q-card-section>

      <q-card-section class="q-pt-none">
        
      </q-card-section>
    </q-card>
  </div>
        <!--  -->
    </div>

    <q-separator />

    <q-item-label> hola mundo</q-item-label>
  </q-page>

  
  <!-- modales-->
     <q-dialog v-model="mostrarModal">
    <!-- Contenido del modal -->
     <q-card class="formulario" >
      <q-form @submit="GuardarProyecto" @reset="onReset" class="justify-center">
  <div>
    <q-input
      filled
      v-model="form.nombreProyecto"
      label="Nombe del Proyecto *"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Escriba el nombre del proyecto']"
    />
  </div>

  <div>
    <q-input
      filled
      v-model="form.herremientasDesarrollo"
      label="herremientas de desarrollo "
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Escriba de las herramientas pricipales']"
    />
  </div>

  <div>
    <q-input
      filled
      type="textarea"
      v-model="form.descripcion"
      label="Descripcion"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Escriba Una Descripcion']"
    />
  </div>
  <div>
     <q-btn label="Reiniciar Formulario"  style="margin: 20px 20px 20px 0px;" type="reset" color="primary" flat class="q-ml-sm" />
  </div>

  <div class="row justify-center">
    <q-btn label="Submit" type="submit" color="primary" />
    <q-btn label="atras" type="reset" color="primary" @click="atras" />
   
  </div>
</q-form>

    </q-card>
    </q-dialog>
  <!-- -->


  
</template>

<script>
import { defineComponent } from "vue";
import useUI from "../composable/useUI";

export default defineComponent({
  name: "CurriculumAngel",

  components: {
    /*  EssentialLink, */
  },

  Setup() {
    const { SideMenuOpen, toggleSideMenu } = useUI();

    return {
      SideMenuOpen,
      toggleSideMenu,
    };
  },
  data() {
    const { SideMenuOpen, toggleSideMenu } = useUI();

    return {
      SideMenuOpen,
      toggleSideMenu,
      
      mostrarModal:false,
       items: ['<strong>Item 1</strong>', '<em>Item 2</em>', 'Item 3'],
       articulo:'',
      form:{
        nombreProyecto:'',
        herremientasDesarrollo:'',
        descripcion:'',


      },
      proyectos:[{
        nombre:'angel',
        subnombre:'euardo',
        descripcion:'matrix la vida es un constante lucha por sobrevivir',  
        img:require('./php2.png'),
      },
      {
        nombre:'Sistema de Control de Trancito',
        subnombre:'bajo tecnologias laravel vue',
        descripcion:'este sistema permite controlar el transito mediante el minitoreo y envio e instrucciones a un arduino',  
        img:require('./php2.png'),
      }, 
      {
        nombre:'Construccion de modulos de Sistema de Gestion de Partes',
        subnombre:'bajo las tecnologias laravel vue 2 ',
        descripcion:'es un sistema de control de inventarios el cual gestiona los almacenes a nievel de entrada y salida asi como de integracion de productos terminados  ',  
        img:require('./php2.png'),
      },

      ],
    };
  },
  props: {
    prop1: {
      type: String,
      required: true,
    },
  },

  mounted(){
  
  },
  methods: {
    atras(){this.mostrarModal=false;},
    GuardarProyecto(){
      console.log('hola angel', this.form);
    },
    fetchData() {
      // Código para hacer una llamada a una API y obtener datos
    },
    manipulateData() {
      // Código para manipular los datos obtenidos de la API
    },
  },
});
</script>

<style lang="sass" scoped>
  
   .formulario
    width: 500px
    padding: 20px
.my-card
  width: 100%
  max-width: 250px
  min-width: 250px
  max-height: 250px
  min-height: 250px

  
  

</style>
