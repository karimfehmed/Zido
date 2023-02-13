<template>
  <div id="video-sec">
    <div class="sec-head">
      <h1>
        Need to Know <br />
        more?
      </h1>
      <p>
        Watch this video to learn all about Zido. <br />
        It takes you through different zido flows.
      </p>
    </div>
    <div class="sec-thumbnail">
      <img src="../assets/images/thumbnail.jpg" alt="Logo" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
#video-sec {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 4rem;
}
.sec-head h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
}
.sec-head p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  padding-top: 1rem;
}
.sec-thumbnail {
  display: flex;
  justify-content: center;
}
.sec-thumbnail img {
  border-radius: 8px;
  width: 100%;
}
@media (max-width: 1198px) {
  .sec-thumbnail img {
    margin-top: 40px;
    width: 90%;
  }
}
@media (max-width: 532px) {
  .sec-head {
    width: 85%;
  }
}
</style>
