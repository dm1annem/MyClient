<script>
import {onMount} from 'svelte';

let massage = ``


onMount( async () => {
    const response = await fetch('http://127.0.0.1:8000/auth/users/me/', {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    })
    
    const content = await response.json()
   
    console.log(content)
})


</script>


<span>Ну вот я и в профиле</span>

<p>
    {massage}
</p>


<a href="/admin/">Административная панель</a>