<template>
  <div>
    <div v-if="$route.params.idservicio">
      <h1>Mostrando servicio {{ $route.params.idservicio }}</h1>
      etc. etc.
    </div>
    <div v-else>
      <h1>Servicios</h1>
      <ul>
        <li>
          Clases particulares
          <router-link to="/services/clases">Ir a clases</router-link>
        </li>
        <li>
          Consultoría remota
          <router-link to="/services/consultoria">Consultoría</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>