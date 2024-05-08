<template>
  <div class="doc-layout">
    <aside>
      <div class="sidebar">sidebar</div>
    </aside>
    <section>
      <header>
        <div class="container">header</div>
      </header>
      <main>
        <div class="container">main</div>
      </main>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.doc-layout {
  display: flex;
  height: 100dvh;
  justify-content: center;
  flex: 1 1 0;
  &:after{
    content: '';
    flex: 1;
    background: #3e587b;
  }

  header {
    background: yellow;
  }

  aside {
    background: greenyellow;
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .sidebar {
    width: 280px;
    background: red;
  }

  section {
    flex: 1;
  }

  .container {
    background: darkorange;
    max-width: 1280px;
  }
}
</style>
<script setup lang="ts">
</script>
