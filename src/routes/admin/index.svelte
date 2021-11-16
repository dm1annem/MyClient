<script>
    import { onMount } from 'svelte';


let materials = [];

onMount(async() => {
    const res = await fetch('http://127.0.0.1:8000/api/materials/');
    materials = await res.json();
    console.log(materials)
})
</script>

админка
<a href="/">на главную</a>

<ul>
    {#each materials as material}
    <li>
        { material.material_name}
        { material.group}
    </li>
        
    {/each}
</ul>