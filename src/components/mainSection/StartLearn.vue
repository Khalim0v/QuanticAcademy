<template>
  <div class="StartLearn">

    <div class="StartLearnText">
      <div class="title">
        <span class="titleSpan1">Станьте</span>
        <span class="titleSpan2">экспертом<br />
        </span>
        <span class="titleSpan3">
          в AI: изучайте разработку <br /> искусственного интеллекта
        </span>
      </div>
      <div class="subtitle">
        "Станьте настоящим профессионалом в AI-разработке благодаря <br /> нашему курсу, который поможет вам освоить все
        необходимые <br /> навыки - от базовых знаний до продвинутых техник <br /> создания искусственного интеллекта"
      </div>

      <div class="startTitle_items">

        <div class="startTitle_item">
          <div class="startTeachers">
            <div
              style="width: 21px; height: 21px; padding: 5.25px; border-radius: 22.75px; overflow: hidden; border-left: 0.22px #2CBAF3 solid; border-top: 0.22px #2CBAF3 solid; border-right: 0.22px #2CBAF3 solid; border-bottom: 0.22px #2CBAF3 solid; justify-content: center; align-items: center; display: flex">
              <div
                style="width: 10.50px; height: 10.50px; position: relative; background: #2CBAF3; border-radius: 22.75px">
              </div>
            </div>
            <div
              style="color: white; font-size: 16px; font-family: Montserrat; font-weight: 600; line-height: 27.58px; word-wrap: break-word">
              Опытные учителя</div>
          </div>
          <span class="startTitleSpan">У нас опытные <br />учителеля с стажом 6 лет</span>
        </div>

        <div class="startTitle_item ">
          <div class="startTimeTable">
            <div
              style="width: 21px; height: 21px; padding: 5.25px; border-radius: 22.75px; overflow: hidden; border-left: 0.22px #2CBAF3 solid; border-top: 0.22px #2CBAF3 solid; border-right: 0.22px #2CBAF3 solid; border-bottom: 0.22px #2CBAF3 solid; justify-content: center; align-items: center; display: flex">
              <div
                style="width: 10.50px; height: 10.50px; position: relative; background: #2CBAF3; border-radius: 22.75px">
              </div>
            </div>
            <div
              style="color: white; font-size: 16px; font-family: Montserrat; font-weight: 600; line-height: 27.58px; word-wrap: break-word">
              Удобный график</div>
          </div>
          <span class="startTitleSpan">Вы сможете сами выбирать <br />формат учебы</span>
        </div>

        <div class="startTitle_item ">
          <div class="startTimeTable">
            <div
              style="width: 21px; height: 21px; padding: 5.25px; border-radius: 22.75px; overflow: hidden; border-left: 0.22px #2CBAF3 solid; border-top: 0.22px #2CBAF3 solid; border-right: 0.22px #2CBAF3 solid; border-bottom: 0.22px #2CBAF3 solid; justify-content: center; align-items: center; display: flex">
              <div
                style="width: 10.50px; height: 10.50px; position: relative; background: #2CBAF3; border-radius: 22.75px">
              </div>
            </div>
            <div
              style="color: white; font-size: 16px; font-family: Montserrat; font-weight: 600; line-height: 27.58px; word-wrap: break-word">
              КОВОРКИНГ</div>
          </div>
          <span class="startTitleSpan">Вдохновение и сотрудничество<br /> в совместном пространстве</span>
        </div>
      </div>
      <div class="startLearnButton">
        <button type="button" class="btn btn-info">
          <span class="buttonText">
            Начать обучение
          </span></button>
      </div>

    </div>

    <div>
      <img class="learnSectionPhoto" src="./mainImages/mainPhoto.png" />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.StartLearn {
  display: flex;
}

.StartLearnText {
  display: flex;
  flex-direction: column;
}

.title {
  width: 844.76px;
  margin-top: 40px;
  font-weight: bolder;
}

.titleSpan1 {
  color: white;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 900;
  line-height: 60px;
  word-wrap: break-word;
}

.titleSpan2 {
  color: #2CBAF3;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 900;
  line-height: 60px;
  word-wrap: break-word;
  margin-left: 10px;
}

.titleSpan3 {
  color: white;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 900;
  line-height: 60px;
  word-wrap: break-word;
}

.subtitle {
  width: 900px;
  height: 130.14px;
  color: white;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 30.04px;
  word-wrap: break-word;
}

.startTitle_items {
  display: flex;
}

.startTitle_item {
  display: flex;
  flex-direction: column;
  margin-right: 55px;
}

.startTeachers {
  width: 185px;
  height: 28px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  margin-top: 20px;
}

.startTimeTable {
  width: 185px;
  height: 28px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  margin-top: 20px;
}

.startTitleSpan {
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #FFFFFF;
  margin-left: 33px;
}

.startLearnButton {
  margin-top: 50px;
  margin-left: 25px;
}

.btn-info {
  width: 405px;
  height: 98.1px;
  border-radius: 100px;
}

.buttonText {
  color: #FFFFFF;
}

.learnSectionPhoto {
  width: 500.83px;
  height: 630.73px;
  margin-left: -140px;
}
</style>