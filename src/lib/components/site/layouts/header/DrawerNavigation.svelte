<script>
    import {page} from '$app/stores';
    import {links} from '$lib/settings/main-set'; 
</script>

<nav  class="grid justify-center">
    {#each $links as link (link.text)}
    <div class="my-2" >
        {#if $page.path==link.rout}
        <a href="{link.rout}"    class="text-blue-300 border-b-2 border-yellow-300 mx-4 px-3  text-lg text-gray-500 hover:text-blue-300">
            { link.text }
        </a>
        {:else}
        <a href="{link.rout}"    class=" mx-4 px-3  text-lg text-gray-500 hover:text-blue-300">
            { link.text }
        </a>
        {/if}
    </div>
    {/each}
    
    
</nav>