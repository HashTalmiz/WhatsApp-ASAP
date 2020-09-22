<template>
 
 <body>
  <div class="container">
    <div class="info">
      <h1><i class="fa fa-whatsapp" style="color:blue" aria-hidden="true"></i>   WhatsApp ASAP</h1><!-- /ASAP/ No Save-->
      <p style="margin: 0">A simple way to open up a WhatsApp chat <b>without</b> having to save the contact first.<br> Works on all phones and WhatsApp-Web</p>
      <div>
        +<input type="number" id="cCode" v-model="user.countryCode" @focus="clearStatus" maxlength="2" class="form-control" />
        <input type="number" id="phoneNumber" v-model="user.phoneNumber" @focus="clearStatus" maxlength="10" @paste.prevent="onPaste" class="form-control"/>
      <div v-if="!error && !success"><i>Number count: </i><span style="font-family: sans-serif" :class="{success_message: this.validCountryCode && this.validPhoneNumber, error_message: !this.validCountryCode || !this.validPhoneNumber }">{{this.user.countryCode.length}} + {{this.user.phoneNumber.length}}</span></div>
      </div>
      <p v-if="error" class="error_message">
          ❗Please enter a 10 digit number with a 2 digit country code
      </p>
      <p v-if="success" class="success_message">
          ✅ Success! Make sure you don't have pop ups blocked!
      </p>
      <button type="button" class="accent-button" @click="handleSubmit" >Start Chat</button>
    </div>

    <div id="photo">
      <p>+{{iPhoneOutput}}</p>
    </div>

    
    <div class="footer">
      <a href="https://github.com/HashTalmiz/WhatsApp-ASAP" target="_blank"><i class="fa fa-github" id="github-icon" aria-hidden="true"></i></a>
      <p><i>© 2020 Talmiz Ahmed </i></p>
    </div>
    
  </div>
  
</body>
  
</template>

<script>

export default {
  name: 'MainBody',
  data() {
    return {
      error: false,
      success: false,
      user : {
        phoneNumber: '',
        countryCode: '91'
      }
    }
  },
  beforeCreate(){
    document.title = "WhatsApp ASAP | Open a New WhatsApp chat without saving to contacts first";
    console.log("HEY, what are you doing down here?")
  },
  computed: {
    validCountryCode() {
      return this.user.countryCode.length === 2;
    },
    validPhoneNumber() {
      return this.user.phoneNumber.length === 10;
    },
    iPhoneOutput() {
      if(this.user.countryCode<=2 && this.user.phoneNumber<=10)
        return this.user.countryCode+' '+this.user.phoneNumber;
        
      return this.user.countryCode.slice(0,2)+ ' ' + this.user.phoneNumber.slice(0,10);
    },
    redirectLink(){
      return `https://api.WhatsApp.com/send?phone=${this.user.countryCode+this.user.phoneNumber}`
    }
  },
  methods: {
    clearStatus() {
      this.error=false;
      this.success=false;
    },
    sanitize(dirtyData){
      dirtyData= dirtyData.trim();
      dirtyData = dirtyData.replace(/[^\d]/g, '');
      return dirtyData
      // this.user.phoneNumber.trim();
      // this.user.phoneNumber= this.user.phoneNumber.replace(/\s+/g, '');
    },
    handleSubmit(){
      this.clearStatus();
      if(this.validCountryCode && this.validPhoneNumber)
      {
        this.success = true;
        this.openWhatsapp();
      }else
        this.error=true;
    },
    onPaste (evt) {

      let pastedData =  evt.clipboardData.getData('text');
      const cleanData = this.sanitize(pastedData);
      this.user.phoneNumber =cleanData;

      // pasteText = pasteText.slice(0,10);
      console.log(this.user.phoneNumber);
    },
    openWhatsapp: function(){
      window.open(`${this.redirectLink}`);
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
input {
  display: inline;
  margin:0 auto;
}
input[type=number] {
-moz-appearance: textfield;
}


p {
  margin-bottom: 10px;
}
.container {
  max-width: 700px;
  display: grid;
  justify-items: center;
  grid-gap: 1em;
  padding-top: 50px;
  margin: 0 auto;
    
}
.info {
  text-align: center;
}
#cCode {
  width: 50px;
  margin-bottom: 10px;
}
#phoneNumber {
  width: 200px;
  margin: 10px;
}
#photo {
  display: flex;
  min-width: 290px;
  min-height: 300px;
  background-image: url('../assets/iphone-mini.png');
  background-repeat: no-repeat;
  background-size: contain;
}
#photo p {
  position: relative;
  /* text-align: center; */
  display: inline;
  margin: 17% 20%;
  font-weight: bold;
  font-size: large;
}


[class*='-message'] {
  font-weight: 500;
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
