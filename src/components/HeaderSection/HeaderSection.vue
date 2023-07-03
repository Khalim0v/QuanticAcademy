<template>
  <div class="header">
    <div class="container">
      <div class="bphoto">
        <Logobar />
        <Navbar />
        <div class="overlay"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Logobar from '@/uiComponents/Logobar.vue'
import Navbar from './Navbar.vue'

export default {
  components: {
    Logobar,
    Navbar,
  }
}
</script>

<style scoped>
.header {
  background: #081C53;
}

.bphoto {
  width: 100%;
  height: 100vh;
  background: url(headerImages/image16.png);
  background-size: cover;
}

.bphoto:before {
  content: "";
  background: rgba(11, 22, 54, 0.3);
  position: absolute;
  z-index: 1;
}
</style>