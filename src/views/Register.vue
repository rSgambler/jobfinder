<template>
 

<div id=register>
	<div class="container">
  <form action="/action_page.php">
    <div class="row">
      <h2 style="text-align:center">Register</h2>

      <div class="col">

        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
		<input type="text" name="e-mail" placeholder="E-mail" required>
        <input type="submit" value="Sign up">
		
		<div class="d-flex justify-content-center s_link">
			<a href="#">Already have an account?</a>
		</div>

      </div>

    </div>
  </form>
</div>

</div>


</template>

<style scoped>

</style>>

.s_link a{
	color: #55ACEE !important;
}

</style>



