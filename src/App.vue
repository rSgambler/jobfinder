<template>
<body class="home blog" style="cursor: default;">
  <div id="page-wrap"></div>
  <div id="header">
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
      <h5>Job Finder</h5>
      <li class="nav-item active">
        <router-link :to="{ name: 'Home'}">Home</router-link>      
      </li>
      <li class="nav-item active">
        <router-link :to="{ name: 'Login'}">Login</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/Register">Register  </router-link>
      </li>
    </ul>
    
  </div>
</nav>
      
    </div>
    <img :src="require('@/assets/user.png')" >
  </div>
  <div id="container">
    <div class="post">
  </div>
  <div id="footer">
    <div class="clear"></div>
    <div class="copyright">
      <h4>Copyright © 2021 JobFinder</h4>
    </div>
  </div>
  </div>  



</body>

</template>

<style>

h1{
  font-family: fantasy;
  font-size:40pt;
  margin-left:10px;
}

h5{
  font-size: 22pt;
  margin-top: 18px;
}
.navbar{
  position: fixed;
  width:100%;
  height: 7%;
  transition: background-color 1s;
  background-color: rgb(44, 44, 44, 0.5);
}


img{
  width: 50px;
  height: 50px;
  margin-left: 2400px;
  margin-top: 20px;
}

body{
  background-image: url('~@/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 18pt;
  color:white;
}


#nav li {
  margin-top: 3px;
  color: white;
  margin-left: 100px;
  margin-top: 10px;
}


#footer {
  margin-left: 1100px;
  display: table;
  text-align: center;
  color: white;
	margin-bottom:0px;
	margin-top:1200px;
}

#pagewrap{
  color: white !important;
}

</style>

<script>

</script>
