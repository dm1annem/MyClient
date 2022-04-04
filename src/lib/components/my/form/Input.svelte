<script>

    let id = '';
    let name = 'Имя';
    let type = 'text';
    let placeholder ='';
    let label = '';
    let class_ = '';
    

</script>

<div>
    {#if label}
        <label for="{id}">{label}</label> 
    {/if}
   
    <input 
    type="{type}"
    name="{name}"
    id="{id}"
    placeholder={placeholder}
    class="{class_} border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    >

</div>