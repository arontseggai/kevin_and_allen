<template>
  <div class="columns multi-line">
    <ProjectComponent v-for="(project, index) in projects" :key="index" :project="project"></ProjectComponent>
  </div>
</template>

<style>

</style>

<script>
  import ProjectComponent from './ProjectComponent.vue'

  export default {
    components: {
      ProjectComponent
    },
    data() {
      return {
        projects: [
          {image: '', hoverImage: '', vimeoUrl: ''}
        ]
      }
    }
  }
</script>
