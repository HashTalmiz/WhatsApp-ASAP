<template>
 
 <body>
  <div class="container">
    <div class="info">
      <h1>One Time WhatsApp</h1><!-- /ASAP/ No Save-->
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur, corporis nostrum maxime inventore illum eligendi nobis mollitia id ex?</p>
      <div>
        +<input type="number" id="cCode" v-model="user.countryCode" maxlength="2" class="form-control" />
        <input type="number" id="phoneNumber" v-model="user.phoneNumber" maxlength="10" class="form-control"/>
      </div>
      <p v-if="error && submitting" class="error-message">
          ❗Please enter a 10 digit number with a 2 digit pin code
      </p>
      <button type="button" class="accent-button" @click="handleSubmit" >Start Chat</button>
    </div>

    <div id="photo">
      <p>+{{iPhoneOutput}}</p>
    </div>

    
    <div class="footer">
      <p>Made by Talmiz Ahmed</p>
      <i>heh
      </i>
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
      submitting: false,
      user : {
        phoneNumber: '',
        countryCode: '91'
      }
    }
  },
  computed: {
    iPhoneOutput() {
      return this.user.countryCode+' '+this.user.phoneNumber;
    },
    redirectLink: function(){
      return `https://api.WhatsApp.com/send?phone=${this.countryCode+this.number}`
    }
  },
  methods: {
      handleSubmit(){
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
</style>
