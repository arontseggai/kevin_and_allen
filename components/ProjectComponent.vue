<template>
  <div class="column is-6">
    <h1>{{project.url}}</h1>
    <img :src="project.image" alt="">
  </div>
</template>

<script>

  export default {
    props: ['project']
  }
</script>
