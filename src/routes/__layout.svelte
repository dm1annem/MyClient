

<script>
import "../app.css";
import MyHeader from '$lib/components/site/layouts/header/Header.svelte';
import MyFooter from '$lib/components/site/layouts/footer/Footer.svelte';


</script>

<div class="main text-gray-600">
    <div class="hed">
        <MyHeader/>

    </div>
    
    <div class="slot">
        <slot></slot>
    </div>
   
    <div class="foot">
        <MyFooter/>
    </div>
    
    
    
</div>


<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: -webkit-max-content auto -webkit-max-content;
        grid-template-rows: max-content auto max-content;
        grid-template-areas: "шапка" "контент" "подвал";
        min-height: 100vh;
        justify-content: center;
        background-color: #f6f6f6

    }

    .hed{
        -ms-grid-row: 1;
        -ms-grid-column: 1;
        display: grid;
        grid-area: шапка;
    }

    .slot{
        -ms-grid-row: 2;
        -ms-grid-column: 1;
        display: grid;
        grid-area: контент;
    }

    .foot{
        -ms-grid-row: 3;
        -ms-grid-column: 1;
        display: grid;
        grid-area: подвал;
    }
</style>