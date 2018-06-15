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
      getGoogleDriveImageId(url){
        let id = url.substr(url.length - 33)
        return `https://drive.google.com/uc?export=view&id=${id}`
      },
      callGoogleDriveSheet(){
        let that = this
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1NhrQzz5N_oXIUta7DxlcTXU_Hoo7Zbvno6UpQOX2dTE/values/a2:e?key=AIzaSyCxBN5zBVOjgLJB6CK9ZznB19KDEzXcBXU"
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(response) {
          let projects_array = response.values;
          let array = []

          projects_array.forEach( function ( value, i ) {
            let photourl = that.getGoogleDriveImageId(value[3])
            let hoverurl = that.getGoogleDriveImageId(value[4])

            let project = {
              id: `project-${i}`,
              title: value[0],
              url: value[1],
              show: value[2],
              photo: photourl,
              photoHover: hoverurl
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
    }
  }
</script>
