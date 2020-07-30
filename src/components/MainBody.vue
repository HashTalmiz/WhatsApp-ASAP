<template>
 
 <body>
  <div class="container">
    <div class="info">
      <h1><i class="fa fa-whatsapp" style="color:blue" aria-hidden="true"></i>   WhatsApp ASAP</h1><!-- /ASAP/ No Save-->
      <p style="margin: 0">A simple way to open up a WhatsApp chat <b>without</b> having to save the contact first.<br> Works on all phones and Whastapp-Web</p>
      <div>
        +<input type="number" id="cCode" v-model="user.countryCode" @focus="clearStatus" maxlength="2" class="form-control" />
        <input type="number" id="phoneNumber" v-model="user.phoneNumber" @focus="clearStatus" maxlength="10" class="form-control"/>
      </div>
      <p v-if="error" class="error-message">
          ❗Please enter a 10 digit number with a 2 digit country code
      </p>
      <p v-if="success" class="success-message">
          ✅ Success! Make sure you don't have pop ups blocked!
      </p>
      <button type="button" class="accent-button" @click="handleSubmit" >Start Chat</button>
    </div>

    <div id="photo">
      <p>+{{iPhoneOutput}}</p>
    </div>

    
    <div class="footer">
      <a href="https://github.com/HashTalmiz/WhatsApp-ASAP" target="_blank"><i class="fa fa-github" id="github-icon" aria-hidden="true"></i></a>
      <p><i>Made by Talmiz Ahmed</i></p>
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
    document.title = "WhatsApp ASAP! An Easy way to start a chat on whatsapp wihtout saving the number in your contacts";
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
    handleSubmit(){
      this.clearStatus();
      if(this.validCountryCode && this.validPhoneNumber)
      {
        this.success = true;
        this.openWhatsapp();
      }else
        this.error=true;
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
    background-image: url('../assets/iphone.png');
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

.error-message {
    color: #d33c40;
}

.success-message {
    color: #32a95d;
}

#github-icon {
  display: inline-block;
  width: 100%;
  font-size: 3em;
  text-align: center;
  color: black;
}

</style>
