<template>
  <div class="flex-page">
    <h1 class="page-title">Perfil del programador</h1>
    <div class="page-content">
      <div class="page-section">
        <h2 class="section-title">Experiencia</h2>
        <ul>
          <li>Experiencia en desarrollo de aplicaciones web con Vue.js y Quasar Framework.</li>
          <li>Conocimientos sólidos en HTML, CSS y JavaScript.</li>
          <li>Experiencia en el desarrollo de componentes reutilizables y personalizados en Vue.js.</li>
          <li>Conocimiento de los principios de diseño responsivo y capacidad para implementar diseños adaptativos.</li>
          <li>Habilidad para trabajar con herramientas de control de versiones como Git.</li>
          <li>Capacidad para trabajar en equipo y comunicarse efectivamente con otros desarrolladores y diseñadores.</li>
        </ul>
      </div>
      <div class="page-section">
        <h2 class="section-title">Conocimientos específicos</h2>
        <ul>
          <li>Conocimiento de Quasar Layouts y cómo utilizarlos en el diseño de páginas.</li>
          <li>Habilidad para implementar la paginación y la carga dinámica de datos en el componente.</li>
          <li>Experiencia en la integración de componentes de terceros como librerías de gráficos o tablas de datos.</li>
          <li>Habilidad para trabajar con el router de Quasar y crear rutas dinámicas para el componente.</li>
          <li>Conocimiento de los principios de accesibilidad y capacidad para implementar características accesibles en el componente.</li>
        </ul>
      </div>
      <div class="page-section">
        <h2 class="section-title">Resumen</h2>
        <p>
          Soy un programador con experiencia en el desarrollo de aplicaciones web con Vue.js y Quasar Framework. Tengo habilidades sólidas en HTML, CSS y JavaScript, así como experiencia en el desarrollo de componentes personalizados y reutilizables. Me especializo en implementar diseños responsivos y accesibles, así como en la integración de componentes de terceros como librerías de gráficos y tablas de datos. Soy un miembro efectivo del equipo y puedo trabajar bien en colaboración con otros desarrolladores y diseñadores.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlexPage",
});
</script>

<style>
.page-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.page-content {
  max-width: 800px;
  margin: 0 auto;
}

.page-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

ul {
  margin: 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}
</style>
