<template>
  <section class="promo pizza">
    <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
    <p class="promo-text">
      Блюда из любимого ресторана привезет курьер в перчатках, маске и с
      антисептиком
    </p>
  </section>
</template>

<script setup>
</script>

<style scoped>
.promo {
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
  padding: 68px 70px;
  margin-bottom: 56px;
}

.pizza {
  background: #fff1b8 url(../img/promo/pizza.png) no-repeat top -100px right -250px /
    830px;
}

@media (max-width: 1366px) {
  .pizza {
    background-position: center right -300px;
    background-size: 750px;
  }
}

@media (max-width: 992px) {
  .pizza {
    padding: 50px;
    background-size: 500px;
    background-position: center right -200px;
  }

  .promo-text {
    font-size: 18px;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .pizza {
    background-size: 400px;
    background-position: bottom 50px right -200px;
  }

  .promo-title {
    font-size: 24px;
    line-height: 1.4;
  }

  .promo-text {
    margin-top: 0;
  }
}

@media (max-width: 578px) {
  .promo {
    background-image: none;
  }

  .promo-title {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .promo {
    padding: 20px;
  }
}
</style>