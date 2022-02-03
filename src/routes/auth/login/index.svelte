<script>
import {goto} from '$app/navigation'

let email = '';
let password = '';

async function submit(){
    await fetch('http://127.0.0.1:8000/auth/token/login/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // credentials: 'include',
		credentials: 'include',
        body: JSON.stringify({
            email,
            password
        })
    })
    await goto('/auth/profile/')

	console.log()
}

</script>

<svelte:head>
	<title>Вход в систему - КаркасЦентр</title>
</svelte:head>


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

	  	<!-- <form 
		  on:submit|preventDefault={submit}
		  class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 border mx-4">
		
			<div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
		 		 Вход в систему
			</div>
			<div class="mb-4">
			  	<label
				class="block text-gray-700 text-sm font-normal mb-2"
				for="username">
					username
			  	</label>
			  	<input
				class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
				name="username"
				
				bind:value={username}
				required
				placeholder="username"
			  	/>
			</div>
		<div class="mb-6">
		  <label
			class="block text-gray-700 text-sm font-normal mb-2"
			for="password"
		  >
			Password
		  </label>
		  <input
			class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
			
			type="password"
			placeholder="Password"
			name="password"
			required
			autocomplete="current-password"
			bind:value={password}
		  />
		</div>
		<div class="flex items-center justify-between">
		  <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Войти</button>
		  <a
			class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
			href="/"
		  >
			Забыли пароль?
		  </a>
		</div>
	  </form> -->
	  <p class="text-center text-gray-500 text-xs">
	  </p>
	</div>
  </div>