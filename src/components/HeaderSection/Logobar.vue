<template>
  <div class="logobar">

    <div class="logo">
      <a href="#">
        <img src="./headerImages/logo.png" alt="Logo Quantic Academy">
      </a>
    </div>

    <div class="address_academy">
      <a href="https://goo.gl/maps/ZmiWn7LxCPNHtvKq7">
        <img src="./headerImages/Frame1024.png" class="map_image">
      </a>
      <a href="https://goo.gl/maps/ZmiWn7LxCPNHtvKq7">
        <p class="address_p">Hayat Regency <br>
          9 Navoi Avenue, Tashkent</p>
      </a>
    </div>

    <div class="typeTelegram">
      <div style="margin-top: 51px;">
        <span class="typeTgSpan" style="font-weight: 600;">
          Есть вопрос?</span>
        <span class="typeTgSpan" style="font-weight: 500;">
          Задавайте напримую</span>
      </div>
      <a href="#">
        <div
          style="width: 6px; height: 6px; position: absolute; background: #48C95F; border-radius: 50px; margin-left: 148px; margin-top: 5px;">
        </div>
        <img src="./headerImages/telegramIcon.svg" class="headerTelegramIcon">
        <img src="./headerImages/Rectangle400.png" class="rectangle400">
        <div class="typeTelegram_p">
          <span class="textTypeTelegram_p">Написать в Telegram</span>
        </div>
      </a>
    </div>

    <div class="consultation">
      <button type="button" class="btn btn-light">
        <span class="freeConsultation">
          Бесплатная консультация
        </span></button>
    </div>

    <div class="logoContact">
      <div class="logoPhoneNumber">+998 (99 ) 640 55 99</div>
      <div class="logoContactTime">
        <div style="width: 6px; height: 6px; position: relative; background: #48C95F; border-radius: 50px"></div>
        <div class="logoWorkTime">Время работы Пн-Пт 9:00-18:00</div>
      </div>
    </div>

    <div class="logoLanguage">
      <div style="width: 42px; height: 32px; position: relative; border-radius: 5px; overflow: hidden">
        <div style="width: 42px; height: 32px; left: 0px; top: 0px; position: absolute">
          <div style="width: 42px; height: 32px; left: 0px; top: 0px; position: absolute; background: white"></div>
          <div style="width: 42px; height: 21.33px; left: 0px; top: 10.67px; position: absolute; background: #0039A6">
          </div>
          <div style="width: 42px; height: 10.67px; left: 0px; top: 21.33px; position: absolute; background: #D52B1E">
          </div>
        </div>
      </div>
      <div style="width: 16px; height: 16px; position: relative">
        <div style="width: 10px; height: 6px; left: 3px; top: 6px; position: absolute; background: white"></div>
      </div>
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

.typeTelegram {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -30px;
}

.typeTgSpan {
  color: white;
  font-size: 13px;
  font-family: Montserrat;
  word-wrap: break-word;
}

.headerTelegramIcon {
  width: 30px;
  height: 30px;
  top: 86.1865234375px;
  left: 766.6876220703125px;

  margin-top: 4px;
  margin-left: 5px;

}

.rectangle400 {
  width: 140px;
  height: 30px;
  top: 88.1865234375px;
  left: 771.6876220703125px;
  border-radius: 29px;

  margin-top: 4px;
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

.consultation {
  position: relative;
}

.btn-light {
  margin-top: 45px;
  margin-left: 15px;
  border-radius: 100px;
  padding: 20px 20px;
}

.freeConsultation {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 1.1299999952316284px;
  text-align: left;
  width: 226px;
  height: 18px;
}

.logoContact {
  width: 284px;
  height: 57px;
  margin-top: 45px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.logoPhoneNumber {
  color: white;
  font-size: 27px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word;
}

.logoContactTime {
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.logoWorkTime {
  color: white;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word;
}

.logoLanguage {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>