<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <form onsubmit="event.preventDefault()" class="box">
              <h1 class="registracija">Registriraj se</h1>
              <p class="unesi text-muted">Unesite podatke za registraciju</p>
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
              <input
                v-model="phoneNumber"
                type="text"
                name="Mobitel"
                placeholder="Mobitel"
                required
              />
              <div class="d-flex justify-content-center s_link">
                <router-link to="login">
                  <a class="forgot text-muted" href="#"
                    >Već ste registrirani?</a
                  >
                </router-link>
              </div>
              <input
                class="btn"
                type="button"
                @click="register"
                value="Registriraj se"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { firebase, db } from "@/firebase";
import store from "@/store";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      phoneNumber: "",
    };
  },
  methods: {
    async register() {
      try {
        const registredUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        await registredUser.user.updateProfile({
          displayName: this.username,
        });

        const userFirestore = await db.collection("users").add({
          email: this.email,
          phoneNumber: this.phoneNumber,
          id: registredUser.user.uid,
          username: this.username,
        });
      } catch (e) {
        alert(e.message);
      }
      store.currentUser.email = this.email;
      store.currentUser.username = this.username;
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.registracija {
  font-family: "Times New Roman";
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
