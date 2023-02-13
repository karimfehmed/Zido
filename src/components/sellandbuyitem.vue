<template>
  <div id="buy">
    <div class="buy-head">
      <p>Sell and buy your item in simple steps!</p>

      <div class="buy-content">
        <p>
          In simple steps you can buy and sell whatever you want! (Cars,
          furniture, electronics, clothes, private collections). <br />
          Ability to create a private auction room where you invite specific
          members, Zido guarantees seriousness and safety.
        </p>
      </div>
    </div>
    <div class="buy-icons">
      <div class="icons-para">
        <img src="../assets/icons/EasyIcon.94ff41fd.svg" alt="" />
        <div class="easy-content">
          <p class="cont">Easy</p>
          <p class="para">
            In simple steps you can sell anything you want with a resonable
            price!
          </p>
        </div>
      </div>
      <div class="icons-para">
        <img src="../assets/icons/SafeIcon.066f8f4c.svg" alt="" />
        <div class="easy-content">
          <p class="cont">Safe</p>
          <p class="para">
            Zido is very safe, You will find transparency in all our deals and
            transactions allowing for peace of mind and less financial worries.
          </p>
        </div>
      </div>
      <div class="icons-para">
        <img src="../assets/icons/WinningIcon.469cb6a1.svg" alt="" />
        <div class="easy-content">
          <p class="cont">Winning-Winning</p>
          <p class="para">
            Both Seller and Buyer will be in a winning sutuation!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#buy {
  display: flex;
  flex-wrap: wrap;
  min-height: 488px;
  justify-content: space-evenly;
  align-items: center;
}
.buy-head {
  min-height: 360px;
  width: 456px;
}
.buy-head p {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 42px;
  width: 100%;
}
.buy-content p {
  width: 420px;
  font-weight: 300;
  font-size: 22px;
  font-family: "Montserrat";
  padding-top: 1rem;
}
.easy-content .para {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  width: 408px;
}
.easy-content .cont {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
}
.buy-icons {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 530px;
  min-height: 360px;
  border: 1px solid #c4c4c4;
  filter: drop-shadow(4px 4px 40px rgba(0, 0, 0, 0.1));
  border-radius: 6px;
}
.icons-para img {
  align-self: start;
  padding-top: 5px;
}
.icons-para {
  display: flex;
  justify-content: space-evenly;
  width: 500px;
}
@media (max-width: 1198px) {
  #buy {
    padding: 100px 0px;
  }
  .buy-icons {
    margin-top: 20px;
    width: 90%;
    margin-top: 4rem;
  }
  .easy-content .para {
    width: 90%;
  }
  .easy-content {
    width: 90%;
  }
  .icons-para {
    width: 100%;
  }
  .icons-para img {
    padding-left: 1rem;
  }
  .easy-content {
    padding-left: 1rem;
  }
  .buy-head {
    width: 90%;
  }
  .buy-content p {
    width: 80%;
  }
}
</style>
