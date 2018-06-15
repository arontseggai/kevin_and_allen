<template>
  <div class="columns">
    <div class="column is-4">
      <div class="outer-container">
        <div class="inner-container">
          <p>GRYGIERCZYK & BOITELLE</p>
          <br>
          <div class="subcontent">
            <p>Freelance film producer + freelance film director = amazing film duo.</p>
            <br>
            <p>
              Bla, bla, creative, youth culture, millenials, bla, disruptive, bla, bla, bla, storytelling, bla, boundaries, content, bla, new media, bla, bla, pop culture, bla, high standards, bla, bla, talent, brands, bla, experience, bla, bla, bla, craftmanship, bla, knowledge, out of the box, bla.
            </p>
            <br>
            <p>You know the story by now, we understand all of it.</p>
            <br>
            <p>Contact  <a href="mailto:info@grygboit.com">us</a> and let's make amazing work.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-6 is-offset-2">
      <div class="imagery-container">
        <div class="columns">

          <div class="column is-2"></div>

          <div class="column is-5">
            <div class="photo-card">
              <div class="imagery">
                <img clas="neutral" src="~/assets/img/ALLEN_neutral.jpg">
                <img class="hover" src="~/assets/img/ALLEN_hover.jpg">
              </div>
              <div class="content-block">
                <p>ALLEN GRYGIERCZYK</p>
                <p><a href="https://instagram.com/allengrygierczyk" target="_blank">Instagram</a></p>
              </div>
            </div>
          </div>

          <div class="column is-5">
            <div class="photo-card">
              <div class="imagery">
                <img class="neutral" src="~/assets/img/KEVIN_neutral.jpg">
                <img class="hover" src="~/assets/img/KEVIN_hover.jpg">
              </div>
              <div class="content-block">
                <p>KEVIN BOITELLE</p>
                <p><a href="http://kevinboitelle.nl" target="_blank">Website</a> / <a href="https://instagram.com/kevinboitelle" target="_blank">Instagram</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

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



</style>

<script>

  export default {

  }
</script>
