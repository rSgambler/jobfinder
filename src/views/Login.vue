<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <form onsubmit="event.preventDefault()" class="box">
              <h1 class="prijava">Prijava</h1>
              <p class="unesi text-muted">
                Please enter your e-mail and password!
              </p>
              <input
                v-model="email"
                type="text"
                name="email"
                placeholder="Email"
                required
              />
              <input
                v-model="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <a class="forgot text-muted" href="#">Forgot password?</a>
              <input class="btn" type="button" @click="login" value="Login" />
              <div class="col-md-12">
                <ul class="social-network social-circle">
                  <input
                    class="google"
                    type="button"
                    @click="loginWithGoogle"
                    value="Google+"
                  />
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
  name: "Login",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      store,
    };
  },
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    login() {
      //console.log(this.username);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          store.currentUser.email = this.email;
          alert("Uspješna prijava!");
          this.$router.push("/home");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
<style scoped>
.prijava {
  font-family: "Times New Roman";
}

.google {
  margin-right: 30px;
  color: white;
}
body {
  margin: 0;
  padding: 0;
}

.card {
  margin-bottom: 20px;
  border: none;
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
  margin-top: 100px;
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
  transition: 0.25s;
}

.box h1 {
  color: white;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.box input[type="button"] {
  border: 0;
  background: none;
  display: block;
  margin: 15px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box input[type="button"]:hover {
  border: 5px solid #4ecc2e;
}

.forgot {
  text-decoration: underline;
}

.unesi {
  text-decoration: underline;
}

ul.social-network {
  list-style: none;
  margin-left: 0 !important;
  padding: 0;
}

.unesi {
  text-decoration: underline;
}
</style>
