<template>
 

<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Sign Up</h3>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Korisničko ime">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="E-mail">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="Lozinka">
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="Ponovljena lozinka">
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Ime">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Prezime">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Grad">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Ulica">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Poštanski broj">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Država">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Datum rođenja">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Broj telefona">
						
					</div>
					<div class="form-group">
						<input type="submit" value="Register" class="btn float-right reg_btn">
					</div>

					<div class="d-flex justify-content-center link_1">
					<a href="#">Already have an account? Sign in</a>
					</div>
				</form>
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
margin-top: -100px;
}

.card{
height: 780px;
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

.reg_btn{
color: black;
background-color: #FFC312;
width: 100px;
margin-top: 5px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.link_1 a{
	margin-top: 24px;
	margin-right:25px;
	color: #FFC312;
}
</style>



