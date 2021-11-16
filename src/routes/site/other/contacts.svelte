<script>
    import {contakts, socialNetwork} from '$lib/components/site/layouts/set'
import Price from './price.svelte';
</script>
<div class="container py-6 md:py-12 md:py-20">
    <div class="py-4 md:py-8 md:py-16">
        <h1 class="text-lg md:text-2xl lg:text-4xl">Контакты</h1>
    </div>
    <div class="grid lg:grid-cols-2">
        <div>
            <h2 class="pb-2">Свяжитесь с нами:</h2>
            <p>По телефонам:</p>
            {#each $contakts.phone as p }
            <p>
                <a href="tel:{p.number}" class="hover:underline">
                 <span class="text-xl pl-6 pb-2">{p.number}</span>
                </a>
            </p> 
            {/each}
            
            <p class="pt-3">В мессенджерах:</p>
            {#each $contakts.messengers as m}
            <div class="ml-6 border-2 border-yellow-100 hover:border-yellow-300 rounded-xl px-3 mb-1 bg-gray-100 max-w-xs">
                <a href="{m.url}" >
                    <i class="fa {m.faClass} text-xl ml-1 text-yellow-600" aria-hidden="true"></i> <span class="ml-4">Написать в {m.name}</span>
                </a>
            </div>   
            {/each}

            <p class="pt-6">По электронной почте:</p>
            <p>
                <a href="mailto:{$contakts.email}" class="hover:underline">
                 <span class="text-xl pl-6 pb-2">{$contakts.email[0].email}</span>
                </a>
            </p> 

            <p class="pt-6">Подписывайтесь в соцсетях:</p>
            <div class="text-2xl pl-6  text-gray-400 ">
                {#each $socialNetwork as s}
                <a href="{s.href}" target="_blank"><i class="fa {s.class} mx-1" aria-hidden="true"></i></a> 
                {/each}
            </div>

            <h2 class="pb-2 pt-6">Приезжайте к нам в офис по адресу:</h2>
            <p>{$contakts.address}</p>

        </div>
        <div>
            <img src=" \static\img\other\contacts\2017-06-06 13-57-00.jpg " alt="Офис КаркасЦентра" title="Офис КаркасЦентра" class="object-cover  w-full">
        </div>

    </div>
        
</div>
<div>
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A98d70379feee6958d787d7300b04df299fc969d0fa043125c2743902ccbfe5e7&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
</div>
