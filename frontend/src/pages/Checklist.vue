<template>
  <Layout>
    <h1 class="title">The Ultimate Privacy & Security Checklist</h1>

    <section class="checklist-section">
      <h2>#1 - Authenctacion</h2>
    </section>
    
    <section class="checklist-section">
      <h2>#2 - Communication</h2>
    </section>

    <section class="checklist-section">
      <h2>#3 - Mobile Devices</h2>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Checklist'
  }
}
</script>

<style lang="scss">
  .layout {
    background: $background;
  }
  h1.title {
    color: #151e3f;
    text-align: center;
    font-size: 3.8rem;
    margin: 2rem;
  }
  section.checklist-section {
    min-height: 600px;
    max-width: 1200px;
    margin: 2rem auto;
    background: $white;
    border: 2px solid $accent1;
    box-shadow:
      0 8px 18px rgba(21, 30, 63, 0.17),
      0 5px 8px rgba(21, 30, 63, 0.17);
    h2 {
      font-size: 2.5rem;
      color: $primary;
      background: $accent1;
      padding: 1rem;
    }
  }

</style>
