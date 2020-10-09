<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p> El número quedó en {{numero}}</p>
    <p> El número quedó en {{$store.state.numero}}</p>
  </div>
</template>

<script>
import{ mapState} from 'vuex';

export default {
  computed: {
    ...mapState(["numero"])
  }
}
</script>
