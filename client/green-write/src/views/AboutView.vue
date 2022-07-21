<template>
  <div class="about">
    <div class="q-pa-md q-gutter-sm">
      <h3>Quasar 연결 완료</h3>
      <h3>아래 버튼 클릭하여 router, axios연결 확인</h3>
      <q-btn
        round
        color="primary"
        icon="shopping_cart"
        :to="{ name: 'test' }"
      />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
