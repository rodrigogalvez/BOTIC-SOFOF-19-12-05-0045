<template>
  <b-container>
    <div>
      <b-carousel
          class="imagenajustada"
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_960_720.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://cdn.pixabay.com/photo/2014/05/03/01/04/puppy-336707_960_720.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://cdn.pixabay.com/photo/2019/10/08/09/23/ferret-4534480_960_720.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
.imagenajustada >>> img {
  object-fit: cover;
  height: 100px !important;
}
</style>