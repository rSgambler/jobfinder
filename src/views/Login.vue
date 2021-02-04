<template>
  <div id="login">
    <div class="container">
      <form action="/action_page.php">
        <div class="row">
          <h3 style="text-align:center">Login</h3>

          <div class="col">
            <a href="#" class="fb btn">
              <i class="fa fa-facebook fa-fw"></i> Login with Facebook
            </a>
            <a href="#" class="twitter btn">
              <i class="fa fa-twitter fa-fw"></i> Login with Twitter
            </a>
            <a href="#" class="google btn">
              <i class="fa fa-google fa-fw"></i> Login with Google+
            </a>
          </div>

          <div class="col">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input type="submit" value="Login" />
            <div class="d-flex justify-content-center p_link">
              <a href="#">Forgot your password?</a>
            </div>
            <div class="d-flex justify-content-center s_link">
              <a href="#">Don't Have an Account?</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
  };
</script>
<style scoped>
  .p_link a {
    color: rgb(250, 64, 64) !important;
  }
  .s_link a {
    color: #55acee !important;
  }

  * {
    box-sizing: border-box;
  }

  /* style the container */
  .container {
    width: 40%;
    position: absolute;
    margin-top: 9%;
    margin-left: 29%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.85);
    padding: 30px 0 30px 0;
  }

  /* style inputs and link buttons */
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
    text-decoration: none; /* remove underline from anchors */
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

  /* bottom container */
  .bottom-container {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color: #666;
    border-radius: 0px 0px 4px 4px;
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
