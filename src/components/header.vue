<template>
  <header>
    <div id="main-header" class="header">
      <div class="head-logo">
        <i v-on:click="toggle" v-if="!showbtn" class="fa-solid fa-x"></i>
        <i
          v-on:click="toggle"
          v-if="showbtn"
          id="bar"
          class="fa-solid fa-bars"
        ></i>
        <router-link to="/">
          <img src="../assets/images/logo.png" alt="Logo"
        /></router-link>
      </div>
      <div class="main-cont" v-bind:class="{ 'menu-show': showClass }">
        <div class="head-lists">
          <ul v-bind:class="{ 'menu-show': showClass }">
            <li><router-link to="/about"> About </router-link></li>
            <li><router-link to="/Zido-works"> How it Works </router-link></li>
            <li><router-link to="/Contact"> Contact </router-link></li>
            <li>
              <router-link to="/privacy"> Privacy Policy </router-link>
            </li>
            <li>
              <router-link to="/terms"> Terms </router-link>
            </li>
          </ul>
        </div>
        <div class="logo" v-bind:class="{ 'menu-show': showClass }">
          <div class="arab-flag">
            <img
              class="flag"
              src="../assets/images/saudi-arabia-flag.png"
              alt="Logo"
            />
            <img clas="text" src="../assets/images/arabic.svg" alt="" />
          </div>

          <div class="head-buttons">
            <div class="button">
              <img src="../assets/images/app-store.png" alt="Logo" />
            </div>
            <div class="playstore">
              <img src="../assets/images/play-store.png" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showClass: false,
      showbtn: true,
    };
  },
  methods: {
    toggle: function () {
      this.showbtn = !this.showbtn;
      this.showClass = !this.showClass;
    },
  },
};
</script>

<style scoped>
#main-header {
  display: grid;
  min-height: 92px;
  grid-template-columns: 69px 1fr;
  padding: 0px 72px;
}
.fa-x {
  display: none;
}
.head-logo {
  display: flex;
  justify-content: space-between;
  width: 70px;
  align-self: center;
  align-items: center;
}
.head-logo img {
  width: 69px;
}
.main-cont {
  align-self: center;
  display: flex;
  justify-content: space-between;
}

.head-lists {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 52px;
}
.head-lists ul {
  text-decoration: none;
  list-style: none;
  width: 496px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-lists ul a {
  text-decoration: none;
  color: #293132;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
}
.head-buttons {
  display: flex;
  width: 252px;
  justify-content: space-between;
  cursor: pointer;
}

.arab-flag {
  display: flex;
  width: 113px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.arab-flag .flag {
  width: 26px;
  border-radius: 4px;
}
.arab-flag .text {
  width: 76px;
}
.button img {
  width: 119px;
}
.playstore img {
  width: 119px;
}
.head-logo .fa-bars,
.head-logo .fa-xmark {
  color: var(--icon-color);
  font-size: 25px;
  margin: 9px 0px 0px 9px;
  display: none;
}
@media (max-width: 1198px) {
  #main-header {
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
  }
  .main-cont {
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    display: none;
  }
  .head-lists ul {
    flex-direction: column;
    align-items: flex-end;
  }

  .fa-x,
  #bar {
    color: #496de2;
    display: block;
    font-size: 20px;
  }
  .head-logo {
    min-height: 92px;
    width: 100%;
  }
  .head-lists ul li {
    padding-top: 2rem;
  }
  .logo {
    padding-top: 2rem;
    flex-direction: column;
    align-items: flex-end;
  }
  .head-buttons {
    padding-top: 2rem;
  }
  .menu-show {
    opacity: 1;
    display: flex;
  }
  /*
  .arab-flag {
    display: flex;
    width: 113px;
    justify-content: space-between;
    align-items: center;
  }
  .arab-flag .flag {
    width: 26px;
    border-radius: 4px;
  }
  .arab-flag .text {
    width: 76px;
  }
  .button img {
    width: 119px;
  }
  .playstore img {
    width: 119px;
  }
  .head-buttons {
    width: 300px;
  } */
}
</style>
