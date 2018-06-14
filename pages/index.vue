<template>
  <div>
    <section id="header">
      <nav>
        <div class="imagery">
          <div class="image large-logo" id="logo">
            <img src="~/assets/img/allen_en_kevin_logo.jpg">
          </div>
        </div>
      </nav>
    </section>

    <div class="container">

      <hr>

      <section id="about">
        <div class="columns">
          <div class="column is-4">
            <p>GRYGIERCZYK & BOITELLE</p>
            <br>
            <div class="subcontent">
              <p>Freelance film producer + freelance film director = amazing film duo.</p>
              <br>
              <p>
                Bla, bla, creative, youth culture, millenials, bla, disruptive, bla, bla, bla, storytelling, bla, boundaries, content, bla, new media, bla, bla, pop culture, bla, high standards, bla, bla, talent, brands, bla, experience, bla, bla, bla, craftmanship, bla, knowledge, out of the box, bla.
              </p>
              <br>
              <p>You know the story by know, we understand all of it.</p>
              <br>
              <p>Contact us and lets make amazing work.</p>
            </div>
          </div>
          <div class="column is-6 is-offset-2">
            <div class="imagery-container">
              <div class="columns">

                <div class="column is-2"></div>

                <div class="column is-5">
                  <div class="photo-card">
                    <div class="imagery">
                      <img src="~/assets/img/kim.jpeg">
                    </div>
                    <div class="content-block">
                      <p>ALLEN GRYGIERCZYK</p>
                      <p>Website / Instagram</p>
                    </div>
                  </div>
                </div>

                <div class="column is-5">
                  <div class="photo-card">
                    <div class="imagery">
                      <img src="~/assets/img/kim.jpeg">
                    </div>
                    <div class="content-block">
                      <p>KEVIN BOITELLE</p>
                      <p>Website / Instagram</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <hr>
<!--
    <section id="projects-section">
      <div id="projects">
        <div class="columns is-multiline">
          <div class="column is-half-desktop" v-for="project in projects">
            <div :data-vimeo-url="project.url" data-vimeo-width="550" :id="project.id"></div>
          </div>
        </div>
      </section> -->

      <section id="projects">
        <ProjectsComponent></ProjectsComponent>
      </section>

      <hr>

      <section id="footer">
        <div class="columns">
          <div class="column is-6 text-right">
            <p>INFO</p>
            <div class="subcontent">
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
            </div>
          </div>
          <div class="column is-6">
            <p>CLIENTS</p>
            <div class="subcontent">
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
              <p>wefwefewf</p>
            </div>
          </div>
          <div class="column is-12">

          </div>
        </div>
      </section>
    </div>
    <section id="bottom-footer">
      <div class="outer-container">
        <div class="imagery">
          <div class="image small-logo" id="logo">
            <img src="~/assets/img/allen_en_kevin_logo.jpg">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ProjectsComponent from '~/components/ProjectsComponent.vue'

  export default {
    components: {
      ProjectsComponent
    }
  }
</script>

<style>
</style>
