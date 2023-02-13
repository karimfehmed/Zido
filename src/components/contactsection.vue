<template>
  <div id="form-sec">
    <div class="form-head">
      <h1>
        We will be happy to hear <br />
        from you
      </h1>
      <p>
        we believe in customer care as we would not be anywhere without you. We
        gladly welcome your complaints and suggestions as we view them as
        constructive feedback which will enable us to better enhance our
        services for you.
      </p>
    </div>
    <form class="form">
      <div class="form-fill">
        <label for="Name">Name</label>
        <input type="text" />
      </div>
      <div class="form-fill">
        <label for="Name">Phone Number</label>
        <input type="text" />
      </div>
      <div class="form-fill">
        <label for="Name">Email Address</label>
        <input type="text" />
      </div>
      <div class="form-fill">
        <label for="Name">Subject</label>
        <input type="text" />
      </div>
      <div class="form-textarea">
        <label for="Name">Message</label>
        <textarea class="inputs"></textarea>

        <button><a href="#">Send</a></button>
      </div>
    </form>
  </div>
</template>

<script></script>
<style scoped>
#form-sec {
  background: #f2f5ff;
  justify-content: center;
}
.form-head {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-head h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  text-align: center;
  padding-top: 4rem;
}
.form-head p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  max-width: 851px;
}
.form {
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  justify-content: space-evenly;
  margin: auto;
  padding-top: 5rem;
  /* height: 643px; */
}

.form-fill {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding-top: 1rem;
  width: 460px;
}
.form-fill label {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
}
.form-fill input {
  width: 100%;
  height: 60px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;

  margin-top: 1rem;
}
.form-textarea {
  width: 972px;
  padding-top: 1rem;
}
.form-textarea label {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
}
.form-textarea textarea {
  width: 100%;
  height: 139px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-top: 1rem;
}
/* .form-textarea .inputs {
  width: 100%;
  height: 139px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-top: 1rem;
} */
.form-textarea button {
  width: 140px;
  height: 60px;
  background: #496ee3;
  border-radius: 5px;
  border: none;
  margin-top: 2rem;
}
.form-textarea button a {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: white;
  text-decoration: none;
}
@media (max-width: 1198px) {
  .form-head {
    width: 90%;
    align-items: center;
  }
  .form-fill {
    width: 90%;
  }
  .form-textarea {
    width: 90%;
    flex-direction: column;
  }

  .form {
    width: 100%;
    justify-content: center;
  }
  .form-head p {
    width: 90%;
  }
}
</style>
