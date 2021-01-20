<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">
             <h1>JF</h1>
  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <h4>Job Finder</h4>

      <li class="nav-item active">
        <router-link to="/home">Home  </router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/login">Login  </router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/register">Register  </router-link>
      </li>
    </ul>
    <img :src="require('@/assets/user.png')" >
  </div>
</nav>
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

img{
  width: 40px;
  margin-left: 1133px;
  }

h1 {
  color:white;
  font-family: fantasy;
}


h4 {
  margin-top: 3px;
  color:white;
}


.navbar{
  position: fixed;
  width:100%;
  height: 7%;
  transition: background-color 1s;
  background-color: rgb(44, 44, 44, 0.5);
}

.rect{
  width:1000%;
  height:100vh;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav li {
    margin-top: 3px;
  margin-left: 100px;
  padding: 5px;
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