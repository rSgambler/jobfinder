<template>
  <div id="register" class="position-relative vh-100">
    <div class="container">
      <form action="/action_page.php">
        <div class="row">
          <h3 style="text-align:center">Register</h3>

          <div class="col">
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
              class="btn"
              type="button"
              @click="register"
              value="Sign up"
            />

            <div class="d-flex justify-content-center s_link">
              <router-link to="login">
                <a>Already have an account?</a>
              </router-link>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
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

  h3{
    color: white;
  }
  .btn {
    background-color: #45a049;
  }
  .p_link a {
    color: rgb(250, 64, 64) !important;
  }
  .s_link a {
    color: #55acee !important;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    margin-right: 10%;
    transform: translate(-50%, 50%);
    width: 40%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.85);
  }

  input,
  .btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 22px;
    line-height: 25px;
    text-decoration: none;
  }

  input:hover,
  .btn:hover {
    opacity: 1;
  }

  /* add appropriate colors to fb, twitter and google buttons */
  .fb {
    background-color: #3b5998;
    color: white;
  }

  .twitter {
    background-color: #55acee;
    color: white;
  }

  .google {
    background-color: #dd4b39;
    color: white;
  }

  /* style the submit button */
  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }

  /* Two-column layout */
  .col {
    float: left;
    width: 50%;
    margin: auto;
    padding: 0 50px;
    margin-top: 6px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  /* hide some text on medium and large screens */
  .hide-md-lg {
    display: none;
  }

  /* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 650px) {
    .col {
      width: 100%;
      margin-top: 0;
    }
    /* hide the vertical line */
    .vl {
      display: none;
    }
    /* show the hidden text on small screens */
    .hide-md-lg {
      display: block;
      text-align: center;
    }
  }
</style>
