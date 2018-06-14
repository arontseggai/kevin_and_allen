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
          {url: 'https://vimeo.com/274699898', image: '~/assets/img/still.png', overlayImage: ''},
          {url: 'https://vimeo.com/274697124'}
        ]
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
          let projects_array = response.values;
          let array = []
          for (let i = projects_array.length - 1; i >= 0; i--) {
            let project = {
              title: projects_array[i][0],
              url: projects_array[i][1],
              id: "project-" + i

            };
          console.log(project)
          this.projects.push(project)
        };
        console.log(this.projects)
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  },
  mounted(){
    // this.callGoogleDriveSheet()
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
