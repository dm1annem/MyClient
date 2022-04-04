<script>
    import {onMount} from 'svelte'
    

    let user = {}

    onMount( async() => {
        const response = await fetch(`/auth/api/profile`);
        const userData = await response.json();
        user = userData.user
    }
    )
</script>

{#if user.email}
    <a href="/auth/profile">
        {user.email}
    </a>
{/if}

<a href="/auth/login/">
    <i class="fa fa-sign-in  text-xl ml-1 text-gray-500 flex justify-end hover:text-yellow-600"></i>

</a>