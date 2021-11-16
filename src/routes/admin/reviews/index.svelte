<script>
    import { onMount } from "svelte";
    import {url_reviews} from './reviews';

    let reviews = [];

    onMount(async() => {
        const res = await fetch($url_reviews);
        reviews = await res.json();
    })


// 

// let reviews = [];

// onMount(async() => {
//     const res = await fetch(`http://127.0.0.1:8000/reviews/rev/`);
//     reviews = await res.json();
// })


</script>

<p on:click="{() => console.log( $url_reviews, reviews) }" >11111111111</p>

<ul>
    {#each reviews as rev}
    <li>
       заголовол { rev.title}
       текст { rev.text}
    </li>
        
    {/each}
</ul>