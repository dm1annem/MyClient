<script>
    import { onMount } from "svelte";
    import {url_reviews} from '$lib/components/admin/reviews/reviews';

    let reviews = [];

    onMount(async() => {
        const res = await fetch($url_reviews);
        reviews = await res.json();
    })

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