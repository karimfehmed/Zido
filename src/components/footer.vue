<template>
  <footer id="footer">
    <div class="foot-icons">
      <img src="../assets/icons/Twitter-icon.e588fb2a.svg" alt="Logo" />
      <img src="../assets/icons/Fb-icon.7439e8dc.svg" alt="Logo" />
      <img src="../assets/icons/Instagram-icon.cc586eb5.svg" alt="Logo" />
      <img src="../assets/icons/Zido-icon.01bc4c56.svg" alt="Logo" />
      <p>All rights reserved for Zido Inc. @2021</p>
    </div>
    <div class="foot-logo">
      <img src="../assets/icons/Logo-zido.890a32c8.svg" alt="Logo" />
    </div>
    <div class="foot-btn">
      <img src="../assets/images/app-store.png" alt="Logo" />
      <img src="../assets/images/play-store.png" alt="Logo" class="playbtn" />
    </div>
  </footer>
</template>

<script></script>

<style scoped>
#footer {
  background: #f2f5ff;
  display: flex;

  justify-content: space-around;
  min-height: 72px;
  align-items: center;
}
.foot-icons {
  display: flex;
  padding-left: 8px;
  align-items: center;
}
.foot-icons img {
  padding-left: 8px;
  width: 20px;
}
.foot-icons p {
  padding-left: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  padding-left: 1rem;
}
.foot-btn img {
  width: 119px;
  height: 36px;
}
.playbtn {
  padding-left: 1rem;
}
@media (max-width: 1010px) {
  #footer {
    padding: 20px 10px;
    min-height: 100px;
    display: grid;
    grid-template-columns: 1fr;
  }
  .foot-icons {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .foot-icons img {
    margin: 10px 5px;
  }
  .foot-logo {
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 1;
    grid-row-end: 2;
    width: 100%;
  }
  .foot-btn {
    display: none;
  }
}
</style>
