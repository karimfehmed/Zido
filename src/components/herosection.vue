<template>
  <div id="bid">
    <div class="bid-head">
      <p>List to sell, Bid to buy.</p>
      <h1>We Conncet Seller & Buyer!</h1>
      <button>Download Now</button>
    </div>
    <div class="bid-image">
      <img src="../assets/images/HeroSection.png" alt="Logo" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
#bid {
  min-height: 684px;
  background: #f2f5ff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.bid-head {
  width: 488px;
}
.bid-head p {
  font-size: 32px;
  font-family: "Montserrat";
  font-weight: 300;
}
.bid-head h1 {
  word-wrap: break-word;
  font-size: 64px;
  font-weight: 700;
  font-family: "Montserrat";
}
.bid-image {
  width: fit-content;
}
.bid-image img {
  width: 425px;
  display: flex;
  justify-content: center;
}
.bid-head button {
  width: 190px;
  height: 48px;
  background: #496de2;
  border-radius: 6px;
  margin-top: 2rem;
  border: none;
  color: white;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}
@media (max-width: 1198px) {
  #bid {
    flex-direction: column;
    padding: 100px 0px;
  }
  .bid-image img {
    margin-top: 2rem;
    width: 100%;
  }
  .bid-head {
    width: 80%;
  }
}
</style>
