<template>  
  <div class="columns is-mobile is-multiline">
    <div class="column is-full u-text-center u-padding-bottom-none"><p>INFO</p></div>
    <div class="column is-half-mobile text-right">
      <!-- <p>ALLEN</p> -->
      <div class="subcontent">
        <p>Allen: 0031643248030</p>
        <p class="u-margin-bottom-small" ><a href="mailto:allen@grygboit.com">allen@grygboit.com</a></p>
        <p><a href="https://instagram.com/grygierczykboitelle" target="_blank">Instagram</a></p>        
      </div>
    </div>
    <div class="column is-half-mobile">
      <!-- <p>KEVIN</p> -->
      <div class="subcontent">
        <p>Kevin: 0031642609878</p>                
        <p class="u-margin-bottom-small"><a href="mailto:kevin@grygboit.com">kevin@grygboit.com</a></p>
        <p><a href="https://vimeo.com/grygboit" target="_blank">Vimeo</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        'clients': []
      }
    },
    methods: {
      callGoogleDriveSheet() {
        let that = this
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1rabzNttY9gjlwIwcdV4eUq6C8rkVmYBElEhTBIlIQyg/values/a2:a?key=AIzaSyCxBN5zBVOjgLJB6CK9ZznB19KDEzXcBXU"
        fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            let merged = [].concat.apply([], response.values)
            that.clients = merged
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    mounted() {
      this.callGoogleDriveSheet()
    }
  }
</script>



