<template>
  <div class="column is-6">
    <div class="imagery" @click="activateOverlay" >
      <img :src="project.photo" alt="">
      <img class="hover" :src="project.photoHover" alt="">
    </div>
    <div class="overlay" :class="{active: isActive}" @click="deactiveOverlay" >
      <div class="video" :data-vimeo-url="project.url" data-vimeo-width="550" :id="project.id"></div>
    </div>
  </div>
</template>

<style scoped>

.imagery { position: relative; }
.imagery .hover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.imagery:hover .hover {
  opacity: 1;
}

.imagery { cursor: pointer; }

.overlay.active {
  position: fixed;
  min-height: 100%;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.9);
  display: flex;
  justify-content: center;
  padding-top: 20%;
}

.overlay .video {
  display: none;
}

.overlay.active .video {
  display: block;
}

</style>

<script>
  import Player from '@vimeo/player'

  export default {
    props: ['project'],
    data() {
      return {
        isActive: false,
        player: false
      }
    },
    methods: {
      activateOverlay() {
        this.isActive = true
      },
      deactiveOverlay() {
        this.isActive = false
        this.player.pause()
      }
    },
    mounted() {
      this.player = new Player(this.project.id)
    }
  }
</script>
