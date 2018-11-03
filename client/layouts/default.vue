<template>
  <section class="container">
    <Navigation />
    <nuxt/>
  </section>
</template>
<script>
    import Navigation from './partials/Navigation'
    export default {
        components: {
            Navigation
        }
    }
</script>