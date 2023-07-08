<template>
  <div class="CardGroupOne">

    <div class="cardGroup">
      <div class="CardGroupOne_title">
        <span class="titleSpan" style="font-weight: 400;">
          Обучение, которое будет соответствовать
        </span>
        <span class="titleSpan" style="font-weight: 700;">
          вашим требованиям
        </span>
      </div>
    </div>

    <div class="CardGroupOne_titleText">
      <span class="textSpan">
        Наши учителя с многолетним педагогическим стажем обучают учащихся на основе специализированных учебников, которые
        включают в себя как теоретические, так и практические знания. Благодаря этому, мы гарантируем, что наши учащиеся
        получают эффективные знания.
      </span>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4">

      <div class="cardItem">
        <div class="cardTitle">
          Интерактивные<br />уроки с гаджетами
        </div>
        <div class="cardText">
          Наши учителя с многолетним педагогическим стажем обучают специализированных учебников,
        </div>
        <img class="headphone" src="./mainImages/headphone.png" />
      </div>

      <div class="cardItem">
        <div class="cardTitle">
          Мастер-класс от<br /> Эркина Исаева
        </div>
        <div class="cardText">
          Наши учителя с многолетним педагогическим стажем обучают специализированных учебников,
        </div>
        <img class="headphone" src="./mainImages/goals.png" />
      </div>

      <div class="cardItem">
        <div class="cardTitle">
          Зона коворкинга 09/22
        </div>
        <div class="cardText">
          Наши учителя с многолетним педагогическим стажем обучают специализированных учебников,
        </div>
        <img class="headphone" src="./mainImages/bell.png" />
      </div>

      <div class="cardItem">
        <div class="cardTitle">
          Бесплатный кофе-брейк
        </div>
        <div class="cardText">
          Наши учителя с многолетним педагогическим стажем обучают специализированных учебников,
        </div>
        <img class="headphone" src="./mainImages/cups.png" />
      </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.CardGroupOne {
  padding: 60px 0px;
}

.cardGroup {
  display: flex;
  justify-content: center;
}

.CardGroupOne_title {
  width: 939px;
  text-align: center;
}

.titleSpan {
  color: white;
  font-size: 45px;
  font-family: Montserrat;
  line-height: 70.61px;
  word-wrap: break-word;
}

.CardGroupOne_titleText {
  display: flex;
  align-items: center;
  max-width: 1840px;
}

.textSpan {
  margin-top: 20px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 300;
  line-height: 29.14px;
  word-wrap: break-word;
}

.row {
  margin-top: 60px;
}

.cardItem {
  height: 522px;
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  border-left: 0.50px rgba(255, 255, 255, 0.08) solid;
  border-top: 0.50px rgba(255, 255, 255, 0.08) solid;
  border-right: 0.50px rgba(255, 255, 255, 0.08) solid;
  border-bottom: 0.50px rgba(255, 255, 255, 0.08) solid;
  backdrop-filter: blur(20px);
  margin: 10px;
  width: 310px;
}

.cardTitle {
  width: 228.91px;
  left: 40.99px;
  top: 261px;
  position: absolute;
  color: white;
  font-size: 21px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 32.95px;
  word-wrap: break-word;
}

.cardText {
  width: 260px;
  left: 40.99px;
  top: 351.26px;
  position: absolute;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 300;
  line-height: 31.02px;
  word-wrap: break-word;
}

.headphone {
  width: 110px;
  height: 110px;
  left: 40.99px;
  top: 70.93px;
  position: absolute;
}
</style>