<template>
  <div id="download-sec">
    <div class="down-head">
      <h1>Get the app</h1>
      <p>
        Zido is Available on Apple store and <br />
        Google play store
      </p>

      <div class="down-btn">
        <img src="../assets/images/app-store-transparent.png" alt="Logo" />
        <img
          src="../assets/images/play-store-transparent.png"
          alt="Logo"
          class="btn2"
        />
      </div>
    </div>
    <div class="down-img">
      <img src="../assets/images/DownloadSection.png" alt="logo" />
    </div>
  </div>
</template>
<script></script>

<style scoped>
#download-sec {
  margin-top: 4rem;
  background: #496de2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 4rem;
  min-height: 336px;
}
.down-head {
  width: 517px;
}
.down-head h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  color: white;
}
.down-head p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: white;
}
.down-btn {
  display: flex;
  flex-wrap: wrap;
}
.down-btn img {
  width: 135px;
  height: 40px;
  margin-right: 1rem;
  margin-top: 1rem;
}
@media (max-width: 1198px) {
  .down-img {
    margin-top: 40px;
  }
  .down-img img {
    width: 90%;
  }
  .down-head {
    width: 80%;
  }
}
</style>
