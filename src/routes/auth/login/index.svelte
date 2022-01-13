<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/auth/profile/'
			};
		}

		return {};
	}
</script>

<script>
// @ts-nocheck

	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/components/auth/utils';
	import ListErrors from '$lib/components/auth/ListErrors.svelte';

	let username = '';
	let password = '';
	let errors = null;

	async function submit(event) {
		const response = await post(`/auth/auth/login`, { username, password });

		// TODO handle network errors
		errors = response.errors;

		if (response.user) {
			$session.user = response.user;
			goto('/auth/profile/');
		}
	}
</script> 

<svelte:head>
	<title>Вход в систему - КаркасЦентр</title>
</svelte:head>


<div class="flex items-center justify-center mt-12 lg:mt-24">
	<div class="w-full max-w-md">

		<ListErrors {errors}/>

		<form on:submit|preventDefault={submit} class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 border mx-4">

			<div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
				Пожалуйста авторизуйтесь
		  	</div>

			<fieldset class="mb-4">
				
				<input 
				class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
				type="text" 
				required 
				placeholder="username" 
				bind:value={username}>
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