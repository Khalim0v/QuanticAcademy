<template>
  <nav class="navbar">
    <ul class="nav nav_items navbar-expand">
      <li class="nav_item"><a href="#">Наши премущество</a></li>
      <li class="nav_item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Наши курсы
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav_item">
        <a href="#">О нас</a>
      </li>
      <li class="nav_item">
        <a href="#">Коворкинг</a>
      </li>
      <li class="nav_item">
        <a href="#">БЕСПЛАТНЫЙ УРОК</a>
      </li>
      <li class="nav_item">
        <a href="#">
          Работы наших учеников
        </a>
      </li>
      <li class="nav_item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Карьера
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav_item">
        <a href="#">Отзывы</a>
      </li>
      <li class="nav_item">
        <a href="#">Контакты</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style scoped>
.navbar {
  background: #081C53;
}

.nav_items {
  width: Hug (1, 645px);
  height: Hug (20px);
  top: 180.1865234375px;
  left: 135.50390625px;
  gap: 30px;
  align-items: center;
  display: flex;
}

a {
  color: white;
  text-decoration: none;
  font-weight: normal;
}

a:hover {
  color: darkorange;
}
</style>