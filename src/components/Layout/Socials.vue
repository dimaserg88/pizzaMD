<template>
  <div class="social-links">
    <a href="#" class="social-link"
      ><img src="/img/social/instagram.svg" alt="instagram"
    /></a>
    <a href="#" class="social-link"
      ><img src="/img/social/fb.svg" alt="facebook"
    /></a>
    <a href="#" class="social-link"
      ><img src="/img/social/vk.svg" alt="vk"
    /></a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  align-items: center;
}

.social-link:not(:last-child) {
  margin-right: 21px;
}

@media (max-width: 578px) {
  .social-links {
    order: 2;
  }
}
</style>