<template>
  <div id="connection">
    <div id="index">
      <div class="titre">
        <h1>Groupamania</h1>
      </div>
      <div id="carousel">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img
                class="image-carousel"
                src="./img/20151021183642-woman-leaders-leader-in-charge-business-meeting.jpeg"
                alt="nos partenaires"
              />
            </div>
            <div class="item">
              <img
                class="image-carousel"
                src="./img/3039183-poster-p-1-two-ways-to-get-your-employees-to-think-and-act-like-owners-of-the-business.jpg"
                alt="une bonne ambiance !"
              />
            </div>
          </div>
          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <Signup />
  </div>
</template>

<script>
import Signup from "./components/Signup";
import Signin from "./components/Signin";

export default {
  components: {
    Signup,
    Signin,
  },
  name: "Carousel",
};
</script>