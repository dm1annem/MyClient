<script>
    let email = '';
    let password = '';
</script>

<div class="flex items-center justify-center mt-12 lg:mt-24">
	<div class="w-full max-w-md">

		<!-- <ListErrors {errors}/> -->

		<form on:submit|preventDefault={submit} class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 border mx-4">

			<div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
				Пожалуйста авторизуйтесь
		  	</div>

			<fieldset class="mb-4">
				
				<input 
				class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
				type="email" 
				required 
				placeholder="email" 
				bind:value={email}>
			</fieldset>
			<fieldset class="mb-6">

				<input 
				class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
				type="password" 
				required 
				placeholder="Password" 
				bind:value={password}>
			</fieldset>
			<div class="flex items-center justify-between">
				<button 
				class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" 
				type="submit">
					Войти
				</button>

			</div>
			
		</form>
    </div>
</div>