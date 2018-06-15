<template>
  <div class="columns is-multiline">
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
        projects: []
      }
    },
    methods: {
      callGoogleDriveSheet(){
        let that = this
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1NhrQzz5N_oXIUta7DxlcTXU_Hoo7Zbvno6UpQOX2dTE/values/a2:c?key=AIzaSyCxBN5zBVOjgLJB6CK9ZznB19KDEzXcBXU"
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(response) {
          console.log(response.values);
          let projects_array = response.values;
          let array = []

          projects_array.forEach( function ( value, i ) {
            let project = {
              id: `project-${i}`,
              title: value[0],
              url: value[1]
            }
            array.push(project)
          });
          that.projects = array
      })
        .catch(function(error) {
          console.log(error);
        });
      }
    },
    mounted(){
      this.callGoogleDriveSheet()
    },
    updated(){
    //should only run this once
    // console.log('updated');
    // if (!this.videos){
    //   console.log('initing videos');
    //   this.projects.forEach(function(project){
    //     new Player(project.id);
    //   });
    //   this.videos = true;
  }
}
</script>
