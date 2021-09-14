<template>
<div id="header" class="postion-relative vh-100">
  <div id="app" class="position-relative">
    <div id="nav" class="jf-navbar">
		<b-navbar class="justify-content-between" togglable="lg" type="dark">
			<b-navbar-brand href="#">
				<h1>JF</h1>
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" class="justify-content-between" is-nav>
				<b-navbar-nav class="align-items-baseline">
					<b-nav-item>
						<h4>Job Finder</h4>
					</b-nav-item>
					<b-nav-item to="/Home">Home</b-nav-item>
          <b-nav-item to="/">Hitni poslovi</b-nav-item>
          <b-nav-item to="/">Kategorije poslova</b-nav-item>
          <b-nav-item to="/">Poslodavci</b-nav-item>
					<b-nav-item v-if="!store.currentUser" to="/Login">Login</b-nav-item>
					<b-nav-item v-if="!store.currentUser" to="/Register">Register</b-nav-item>
          <b-nav-item v-if="store.currentUser">
            <a href = "#" @click.prevent = "logout()">Logout</a>
          </b-nav-item>
          <b-nav-item v-if="store.currentUser" to="/User">Profil</b-nav-item>
        
        </b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto" right>
          <b-nav-item>
          <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              />
        </b-nav-item>
        <b-nav-item>
          <button class="btn btn-warning" type="submit">Search</button>
				</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
    </div>
    <router-view/>
    
  </div>
  <Footer>
    </Footer>
</div>

</template>

<style lang="scss">

	@media (max-width: 992px) {
		nav.navbar-expand .navbar-toggler {
			display: block!important;
		}
		nav.navbar-expand .navbar-collapse {
			display: none!important;
		}
	}
	@media (min-width: 992px) {
		nav.navbar-expand .navbar-toggler {
			display: none!important;
		}
		nav.navbar-expand .nav-collapse {
			display: flex!important;
		}
	}

	#nav-collapse.navbar-collapse.show {
		display: flex!important;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background-color: rgb(44, 44, 44, 0.5);
		z-index: 1000;
	}
	#nav-collapse.navbar-collapse.show ul.navbar-nav {
		width: 100%;
		flex-direction: column;
		text-align: left;
		padding-left: 55px;
		padding-bottom: 20px;
	}
	#nav-collapse.navbar-collapse.show ul.navbar-nav:first-child {
		padding-top: 90px;
	}


h1 {
  color:#FFC312;
  font-family: fantasy;
}


h4 {
  margin-top: 3px;
  color:#FFC312;
}

.jf-navbar{
  position: fixed;
  width:100%;
  transition: background-color 1s;
  background-color: rgb(44, 44, 44, 0.5);
	z-index: 10000;
}
.navbar {
	padding:  55px;
	z-index: 10000;
}
.navbar-brand, .navbar-toggler {
	position: relative;
	z-index: 1001;
}
ul.navbar-nav li.nav-item a.nav-link h4, .navbar-brand h1{
	margin-bottom: 0;
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

#nav {
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color:#FFC312;
    }
  }
  .nav-item{
    margin-left: 15px;
  }
}

</style>

<script>
import Footer from '@/components/Footer.vue';
import { firebase } from "@/firebase";
import store from "@/store";
import router from "@/router"

console.log(router)

firebase.auth().onAuthStateChanged((user) => {
    if (user){
        console.log(user.email)
        store.currentUser = user.email;
    }else{
        console.log("No user");
        store.currentUser = null;
        if (router.name !== "Login"){
          router.push("Login")
        }
        }

})

export default{
  name: "app",
  data () {
    return{
      store,
    }
  },
  methods : {
    logout(){
      firebase.auth().signOut().then(() =>{
        this.$router.push({name : 'Login'})
      });
    }
  },
  components:{
    Footer
  }
}


</script>
