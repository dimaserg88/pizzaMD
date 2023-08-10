<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <img :src="Logo" alt="logo" class="logo footer-logo" />
        <nav class="footer-nav">
          <a href="#" class="footer-link">Ресторанам </a>
          <a href="#" class="footer-link">Курьерам</a>
          <a href="#" class="footer-link">Пресс-центр</a>
          <a href="#" class="footer-link">Контакты</a>
        </nav>
        <Socials />
        <!-- /.social-links -->
      </div>
      <!-- /.footer-block -->
    </div>
  </footer>
</template>

<script setup>
import Logo from "../../assets/img/logo.svg";
import Socials from "./Socials.vue";
</script>

<style scoped>
.footer {
  padding: 60px 0;
}

.footer-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-nav {
  margin-left: 35px;
  margin-right: auto;
}

.footer-link {
  display: inline-block;
  color: #595959;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
}

.footer-link:not(:last-child) {
  margin-right: 15px;
}

@media (max-width: 992px) {
  .footer-link {
    font-size: 16px;
  }
}

@media (max-width: 578px) {
  .footer {
    padding: 30px 0;
  }

  .footer-block {
    align-items: flex-start;
  }

  .footer-nav {
    margin-left: 0;
    margin-right: 0;
    order: 0;
    display: flex;
    flex-direction: column;
  }

  .footer-logo {
    margin-right: 15px;
    order: 1;
  }
}

@media (max-width: 480px) {
  .footer-block {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  .footer-logo {
    order: 0;
    margin-bottom: 20px;
  }

  .footer-nav {
    margin-bottom: 20px;
    text-align: center;
  }

  .footer-link:not(:last-child) {
    margin-right: 0;
  }
}
</style>