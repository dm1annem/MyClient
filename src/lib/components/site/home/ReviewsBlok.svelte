,<script>
    import { onMount } from "svelte";
    import {url_reviews} from '$lib/store/reviews/reviews';

    let reviews = [];
    let revs = [];

    onMount(async() => {
        const res = await fetch($url_reviews);
        reviews = await res.json();
        revs = reviews.slice(0,3);
    })

     
</script>

<div class="bg-green-50">
    <div class="container py-8 lg:py-12">
        <h2 class="text-xl  md:text-3xl lg:text-4xl ">
            Отзывы клиентов
        </h2>
    
        <div>
            {#each revs as rev}
            <span> {rev.title} </span>
            <iframe width="374" height="205" src="{rev.video_link}" title="YouTube video player">  </iframe>
            <!-- <iframe id="ytplayer" type="text/html" width="720" height="405" title="{rev.title}" src="{rev.video_link}" frameborder="0" allowfullscreen></iframe> -->
            <!-- <iframe width="560" height="315" src="{rev.video_link}?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
             
            {/each}
        </div>
    </div>
</div>