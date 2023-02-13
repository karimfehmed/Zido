<template>
  <div id="zido-works">
    <div class="zido-head">
      <h1>How Zido works</h1>
      <p>
        Zido works in very simple steps. <br />
        Easy process, Easy money!
      </p>
    </div>
    <div class="zido-icons">
      <div class="zido-home">
        <img src="../assets/icons/Home-square.898ca320.svg" alt="Logo" />
        <p>Tap Sell</p>
      </div>
      <div class="zido-home">
        <img src="../assets/icons/Shapes-square.f05853ef.svg" alt="Logo" />
        <p>Choose category</p>
      </div>
      <div class="zido-home">
        <img src="../assets/icons/List-square.2170352f.svg" alt="Logo" />
        <p>Fill the info</p>
      </div>
      <div class="zido-home">
        <img src="../assets/icons/Gavel-square.29a2bad8.svg" alt="Logo" />
        <p>Wait for bidders</p>
      </div>
      <div class="zido-home">
        <img src="../assets/icons/Tick-square.0c05e3b1.svg" alt="Logo" />
        <p>Accept suitable bid</p>
      </div>
      <div class="zido-home">
        <img src="../assets/icons/Confetti-square.f394dde8.svg" alt="Logo" />
        <p>Congrats! You’ve madeMoney</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#zido-works {
  background: #f2f5ff;
  min-height: 574px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.zido-head {
  width: 90%;
}
.zido-head h1 {
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  padding-top: 3rem;
}
.zido-head p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  padding-top: 1rem;
}
.zido-icons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 1062px;
  margin: auto;
}
.zido-home {
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  width: 290px;
  padding-top: 5rem;
}
.zido-home p {
  padding-left: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  align-items: center;
}
@media (max-width: 1198px) {
  .zido-icons {
    width: 90%;
  }
  #zido-works {
    padding: 100px 0px;
  }
}
</style>
