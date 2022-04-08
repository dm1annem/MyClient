<script>
    
    export let id = '';
    export let name = 'Имя';
    export let type = 'text';
    export let placeholder ='';
    export let label = '';
    export let class_ = '';
    export const required = false;
    

    
  

</script>

<div>
    {#if label}
        <label for="{id}" class="text-inherit">{label}</label> 
    {/if}
   
    <input 
    type="{type}"
    name="{name}"
    id="{id}"
    placeholder={placeholder}
    class=" border border-gray-400  px-3 py-3 placeholder-blueGray-300 text-blueGray-600  bg-white rounded text-sm shadow-lg focus:outline-none focus:ring w-full ease-linear transition-all duration-150 {class_}"
    required
    >

</div>