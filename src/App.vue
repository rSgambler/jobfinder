<template>
<body class="home blog" style="cursor: default;">
  <div id="header">
  <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand">
      <h2>JF</h2>
  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNav">
          <h5>Job Finder</h5>

    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link :to="{ name: 'Home'}" class="nav-link">Home</router-link>      
      </li>
      <li class="nav-item active">
        <router-link :to="{ name: ''}" class="nav-link">Hitni poslovi</router-link>      
      </li>
      <li class="nav-item active">
        <router-link :to="{ name: ''}" class="nav-link">Kategorije poslova</router-link>      
      </li>
      <li class="nav-item active">
        <router-link :to="{ name: ''}" class="nav-link">Poslodavci</router-link>      
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Login'}" class="nav-link px-5" >Login</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Register'}" class="nav-link">Register</router-link>
      </li>
      
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-warning" type="submit">Search</button>

      <li class="nav-item active">
        <router-link :to="{ name: 'User'}" class="nav-link px-5">USER:</router-link>
      </li>
    </ul>
    
  </div>
</nav>
      <router-view/>
    </div>
  </div>

  <div id="footer">
      <h4>Copyright © 2021 JobFinder</h4>
  </div>
  
</body>
</template>

<style>



.navbar input[type=search]{
  margin-left: 150px;
  color: #C8821A;
  width: 250px;
  border-radius: 15px;
  height: 50%;
  margin-top: 6px;
}

 .navbar .btn{
  width: 70px;
  height: 35px;
  border-radius: 10px;
  color: black;
  margin-left: 10px;
  margin-top: 6px;
  border-color: #C8821A;
  background-color: #C8821A;
}

.nav-link{
  font-weight:bold;
  text-shadow: 0px 0px;
}

h2{
  font-family: fantasy;
  font-size:35pt;
  margin-left:40px;
  margin-top: 5px;
  color: #C8821A;
}

h5{
  font-size: 22pt;
  margin-top: 16px;
  color: #C8821A;
  font-weight: bold;
}
.navbar{
  height: 60px;
  transition: background-color 1s;
  background: rgba(0, 0, 0, 0.67);
}


body{
  background-image: url('~@/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 14pt;
}


#nav li {
  margin-top: 3px;
  margin-left: 25px;
  margin-top: 5px;
}

#nav ul {
 margin-left: 15px;
}


#footer {
  margin-left: 800px;
  display: table;
  text-align: center;
  color: white;
	margin-bottom:0px;
	margin-top:1200px;
}


</style>

<script>

</script>



