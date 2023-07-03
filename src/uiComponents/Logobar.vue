<template>
  <div class="logobar">
    <div class="logo">
      <a href="#">
        <img src="@/uiComponents/imagesUI/logo (1).png" alt="Logo Quantic Academy">
        <div class="academy">
          <img src="../uiComponents/imagesUI/Frame.svg">
          <p class="academy_p">academy</p>
        </div>
      </a>
    </div>
    <div class="address_academy">
      <a href="#">
        <img src="./imagesUI/Frame1024.png" class="map_image">
      </a>
      <p class="address_p">Hayat Regency <br>
        9 Navoi Avenue, Tashkent</p>
      <!-- <p class="viewOnMap">Показать на карте</p> -->
    </div>
    <div class="typeTelegram">
      <!-- <a href="#">
        <img src="./imagesUI/writeTelegram.png">
      </a> -->
      <a href="#">
        <img src="./imagesUI/telegramIcon.svg" class="headerTelegramIcon">
        <img src="./imagesUI/Rectangle400.png" class="rectangle400">
        <div class="typeTelegram_p">
          <span class="textTypeTelegram_p">Написать в Telegram</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logobar'
}
</script>

<style scoped>
.logobar {
  padding-bottom: 20px;
  background: #081C53;
  display: flex;
}

.logo {
  padding-top: 42px;
  width: 248.315px;
  height: 77.105px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
}

.cap {
  margin-left: 99px;
}

.academy {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  color: rgba(51, 190, 249, 1);
}

a {
  text-decoration: none;
  font-weight: 700;
}

a:hover {
  font-weight: bold;
}

.academy_p {
  margin-top: 13px;
}

.address_academy {
  display: flex;
  padding-top: 55px;
  padding-left: 24px;
  max-width: 220px;
  min-width: 180px;
}

.map_image {
  width: 39.1513671875px;
  height: 38.24087142944336px;
  top: 48.06591796875px;
  left: 436.32891845703125px;
  border-radius: 136.5745391845703px;
}

.address_p {
  color: #FFFFFF;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 10px;
}

/* .viewOnMap {
  color: #FFFFFF;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
} */

.typeTelegram {
  position: relative;
}

.headerTelegramIcon {
  width: 30px;
  height: 30px;
  top: 86.1865234375px;
  left: 766.6876220703125px;

  margin-top: 93px;
  margin-left: 5px;

}

.rectangle400 {
  width: 140px;
  height: 30px;
  top: 88.1865234375px;
  left: 771.6876220703125px;
  border-radius: 29px;

  margin-top: 93px;
  margin-left: -19px;
}

.typeTelegram_p {
  margin-top: -30px;
  margin-left: 40px;
}

.textTypeTelegram_p {
  color: white;
  font-size: 10px;
  line-height: 2px;
  font-weight: bold;
}
</style>