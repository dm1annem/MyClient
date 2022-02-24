<!-- <script context="module">
    export const load = async ({session, fetch}) => {

</script> -->


<script>
//  export let user;  
import {onMount} from 'svelte';
import {session} from '$app/stores';

let user = {};

onMount( async() => {
    
        const response = await fetch(`/auth/api/profile`);
        const userData = await response.json();
        user = userData.user    
})

    

</script>


Профиль пользователя {user.name}


<button>dutton</button>

