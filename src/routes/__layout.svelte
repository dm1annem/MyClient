<script lang="ts">
import "../app.css";

// import userStore from '$lib/store/users/user';
// import type { User } from '$lib/settings/typs';
// import {api} from '$lib/settings/service-set';


import MyHeader from '$lib/components/site/layouts/header/Header.svelte';
import MyFooter from '$lib/components/site/layouts/footer/Footer.svelte';
import { onMount } from "svelte";

let loading = true;

// onMount(async() =>{
//     // возвращаем токен при переходах на новые страницы, чтоб оставаться авторизованым, для этого
//     // проверяем есть ли токен пользователя в локальном хранилище
//     if (!localStorage.getItem('token')){
//         loading = false;
//         return { props: { user: null } };
//         console.log('первый иф');

//     }
//     // получаем данные пользователя при переходе на новую страницу, вычленяем токен и передаём его в заголовки и куки
//     const res = await fetch(`${$api}api/user/`,{
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     });
//     console.log('первый иф', res);
//     const user: User = await res.json();
//     loading = false;
//     if (res.ok){
//         $userStore = user
//     }
// })
</script>


<div class="main text-gray-600">
    <div class="hed">
        <MyHeader/>

    </div>
    <!-- {#if !loading} -->
    <div class="slot">
        <slot></slot>
    </div>
    <!-- {/if} -->
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