<script>
import { onMount } from "svelte";
import {url_reviews} from '$lib/store/reviews/reviews';
import NewReviewForm from "$lib/components/admin/reviews/NewReviewForm.svelte";

    let reviews = [];
    

    onMount(async() => {
        const res = await fetch($url_reviews);
        reviews = await res.json();
    })

</script>

<div>
    <h2 class="text-xl  md:text-3xl lg:text-4xl my-4">
        Список отзывов для редакитриовния
    </h2>

    <NewReviewForm />

</div>

<p on:click="{() => console.log( $url_reviews, reviews )}" >Посмотреть в консоли</p>



<ul>
    {#each reviews as rev}
    <li>
        { rev.title}
       
    </li>
        
    {/each}
</ul>