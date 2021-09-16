<template>
  <body>
    <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <form onsubmit="event.preventDefault()" class="box">
                    <h1 class="registracija">Registriraj se</h1>
                    <p class="unesi">Unesite podatke za registraciju</p> 
                    <input
                    v-model="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    />
                    <input
                    v-model="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    />
                    <input
                    v-model="email"
                    type="text"
                    name="e-mail"
                    placeholder="E-mail"
                    required
                    />
                    <div class="d-flex justify-content-center s_link">
                    <router-link to="login">
                    <a class="forgot" href="#">Već ste registrirani?</a> 
                    </router-link>
                    </div>
                    <input class="btn" type="button" @click="register" value="Register" />
                    <div class="col-md-12">
                        <ul class="social-network social-circle">
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</body>
</template>

<script>
  import { firebase } from "@/firebase";
  import store from "@/store";
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        password: "",
        email: "",
      };
    },
    methods: {
      register() {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            data.user
              .updateProfile({
                displayName: this.username,
              })
              .then(() => {});
          })
          .catch(function(error) {
            alert(error);
          });
        this.$router.push("/home");
      },
    },
  };
</script>
<style scoped>

  .registracija{
  font-family: 'Times New Roman';
}

.google{
  margin-right: 30px;
  color: white;
}
  body {
    margin: 0;
    padding: 0;
}

.card {
    margin-bottom: 20px;
    border: none
}

.box {
    width: 500px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 15px;
    text-align: center;
    transition: 0.25s;
    margin-top: 100px
}

.box input[type="text"],
.box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 10px 10px;
    width: 250px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s
}

.box h1 {
    color: white;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
    width: 300px;
    border-color: #2ecc71
}

.box input[type="button"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer
}

.box input[type="button"]:hover {
      border: 5px solid #4ecc2e;
}

.forgot {
    text-decoration: underline;
    color: white;
}

.unesi{
      text-decoration: underline;
      color: white;
}
</style>
