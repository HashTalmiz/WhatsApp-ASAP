<template>
  <body>
    <div class="container">
      <h1>
        <i class="fa fa-whatsapp" style="color: blue" aria-hidden="true"></i>
        WhatsApp ASAP
      </h1>
      <!-- /ASAP/ No Save-->
      <p style="margin: 0">
        A simple way to open up a WhatsApp chat <b>without</b> having to save
        the contact first.<br />
        Works on all phones and WhatsApp-Web
      </p>
      <div class="numberfields">
        <b>+ </b
        ><input
          type="number"
          id="cCode"
          v-model="user.countryCode"
          @focus="clearStatus"
          maxlength="2"
          class="form-control"
        />
        <input
          type="number"
          id="phoneNumber"
          v-model="user.phoneNumber"
          @focus="clearStatus"
          maxlength="10"
          @paste.prevent="onPaste"
          class="form-control"
        />
      </div>
      <div v-if="!error && !success">
        <i>Number count: </i
        ><span
          :class="{
            success_message: this.validCountryCode && this.validPhoneNumber,
            error_message: !this.validCountryCode || !this.validPhoneNumber,
          }"
          >{{ this.user.countryCode.length }} +
          {{ this.user.phoneNumber.length }}</span
        >
      </div>
      <p v-if="error" class="error_message">
        ❗Please enter a 10 digit number with a 2 digit country code
      </p>
      <p v-if="success" class="success_message">
        ✅ Success! Make sure you don't have pop ups blocked!
      </p>
      <button type="button" class="open-button" @click="handleSubmit">
        Open Chat
      </button>

      <div class="iPhone">
        <img
          src="../assets/iPhone image.png"
          alt="Image of a phone with whatsapp running"
        />
        <span>+{{ iPhoneOutput }}</span>
      </div>

      <div class="footer">
        <a href="https://github.com/HashTalmiz/WhatsApp-ASAP" target="_blank"
          ><i class="fa fa-github" id="github-icon" aria-hidden="true"></i
        ></a>
        <p><i>Made by Talmiz Ahmed </i></p>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      error: false,
      success: false,
      user: {
        phoneNumber: "",
        countryCode: "91",
      },
    };
  },
  beforeCreate() {
    document.title =
      "WhatsApp ASAP | Open a New WhatsApp chat without saving to contacts first";
    console.log("HEY, what are you doing down here?");
  },
  computed: {
    validCountryCode() {
      return this.user.countryCode.length === 2;
    },
    validPhoneNumber() {
      return this.user.phoneNumber.length === 10;
    },
    iPhoneOutput() {
      if (this.user.countryCode <= 2 && this.user.phoneNumber <= 10)
        return this.user.countryCode + " " + this.user.phoneNumber;

      return (
        this.user.countryCode.slice(0, 2) +
        " " +
        this.user.phoneNumber.slice(0, 10)
      );
    },
    redirectLink() {
      return `https://api.WhatsApp.com/send?phone=${
        this.user.countryCode + this.user.phoneNumber
      }`;
    },
  },
  methods: {
    clearStatus() {
      this.error = false;
      this.success = false;
    },
    sanitize(dirtyData) {
      dirtyData = dirtyData.trim();
      dirtyData = dirtyData.replace(/[^\d]/g, "");
      return dirtyData;
    },
    handleSubmit() {
      this.clearStatus();
      if (this.validCountryCode && this.validPhoneNumber) {
        this.success = true;
        this.openWhatsapp();
      } else this.error = true;
    },
    onPaste(evt) {
      let pastedData = evt.clipboardData.getData("text");
      const cleanData = this.sanitize(pastedData);
      this.user.phoneNumber = cleanData;

      // pasteText = pasteText.slice(0,10);
      console.log(this.user.phoneNumber);
    },
    openWhatsapp: function () {
      window.open(`${this.redirectLink}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  color: #404040;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
h1 {
  font-size: clamp(1.9rem, 5vw, 2.5rem);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  display: inline;
  margin: 0 auto;
}
input[type="number"] {
  width: 100%;
  padding: 12px 10px;
  margin: 0 3px;
  display: inline-block;
  border: 1px solid #ccc;
  outline: 0;
  border-radius: 4px;
  box-sizing: border-box;
  -moz-appearance: textfield;
}
img {
  display: block;
  max-width: 100%;
}

.container {
  max-width: 700px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  grid-gap: 1em;
  padding-top: 50px;
  text-align: center;
}
.numberfields {
  display: flex;
  align-items: center;
}
#cCode {
  width: 50px;
}
#phoneNumber {
  width: 200px;
}
.iPhone {
  position: relative;
  width: 280px;
}
.iPhone span {
  top: 49px;
  left: 60px;
  display: block;
  position: absolute;
  font-weight: bold;
  font-size: medium;
}

.error_message {
  color: #d33c40;
}

.success_message {
  color: #32a95d;
}

#github-icon {
  display: inline-block;
  width: 100%;
  font-size: 2.5em;
  text-align: center;
  color: black;
}
</style>
