<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">  <img src="https://lh3.googleusercontent.com/QZZHErl58AWL6PFYoRKbz07SEZmN00HGgwetY4fTwpcPwd7730Uq-Ed9LUYoOAPAsJFrs6KFLyS-LQ83GmMdxka2me_CCVDzq9T6mKZ3EbVFsQMEqbTeY-CjIeFiWEnq3Cp-gVrN=w2400" width="30" height="30" class="d-inline-block align-top" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/home">Home  </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/home">Hitni poslovi  </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login">Login  </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register">Register  </router-link>
      </li>
    </ul>
  </div>
</nav>
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">


.navbar{
  position: fixed;
  width:100%;
  transition: background-color 1s;
  background-color: rgb(44, 44, 44, 0.5);
}

.rect{
  width:1000%;
  height:100vh;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav li {
  padding: 20px;
	display: inline;
}

#nav {
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color:#FFC312;
    }
  }
}
</style>
<script>
export default 
  $(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() < $("#green").height()){
       $(".navbar").removeClass("bg-dark");
    }
    else{
       $(".navbar").addClass("bg-dark");
    }
  });
});

</script>