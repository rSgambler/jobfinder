<template>
 

<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="e-mail">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password">
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox">Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>

					<div class="d-flex justify-content-center link_1">
					<a href="#">Don't Have an Account? Sign Up</a>
					</div>
					<div class="d-flex justify-content-center link_2">
					<a href="#">Forgot your password?</a>
					</div>

					<div class="d-flex justify-content-center fb_link">
					<a href="#">Login with facebook</a>
					</div>
					<div class="d-flex justify-content-center g_link">
					<a href="#">Login with google</a>
					</div>
					<div class="d-flex justify-content-center a_link">
					<a href="#">Login with apple</a>
					</div>

				</form>
			</div>
			<div>
        		<img src="../assets/facebook.svg" id="f_logo">
    		</div>
			<div>
        		<img src="../assets/google.svg" id="g_logo">
    		</div>
			<div>
        		<img src="../assets/apple.svg" id="a_logo">
    		</div>
			
		</div>
	</div>
</div>


</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Numans');

#f_logo{
	height: 20px;
	margin-top: -223px  ;
	margin-right: 350px;
}
#g_logo{
	height: 20px;
	margin-top: -203px;
	margin-right: 350px;
}
#a_logo{
	height: 20px;
	margin-top: -182px;
	margin-right: 350px;
	
}



.container{
	height: 100%;
	align-content: center;
}

.card{
	height: 500px;
	margin-top: 15%;
	margin-bottom: auto;
	margin-right: 10%;
	margin-left: 50%;
	width: 400px;
	background-color: rgba(0,0,0,0.5) !important;
}


.card-header h3{
color: white;
}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
margin-top: 8px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.link_1 a{
	margin-top: 10px;
	margin-right:33px;
	color: #FFC312;
}
.link_2 a{
	margin-right:202px;
	margin-top: 10px;
	color: rgb(174, 2, 2);
}

.a_link a{
	margin-left: -205px;
	margin-top: 10px;
	color: white !important;
}

.fb_link a{
	margin-left: -180px;
	margin-top: 30px;
	color: white;
}
.g_link a{
	margin-left: -196px;
	margin-top: 10px;
	color: white;
}


</style>


