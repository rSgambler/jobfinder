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
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center links">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>


</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Numans');

html,body{
background-image: url('https://c1.wallpaperflare.com/preview/875/216/967/table-coffee-pen-fruit.jpg');
background-size: 1920px 1080px;
background-repeat: no-repeat;

font-family: 'Numans', sans-serif;
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
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
.fb_link a{
	margin-left: -120px;
	margin-top: 5px;
}
.g_link a{
	margin-left: -236px;
	margin-top: 5px;
}
.a_link {
	margin-left: -245px;
	margin-top: 5px;
}

</style>


