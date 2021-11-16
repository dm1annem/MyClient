<script>
    import {socialNetwork} from '$lib/settings/main-set'
</script>

<footer class="bg-green-400 text-gray-700 w-screen " >
    <div class="container grid  text-xs lg:text-base">
        <div class="">
            rjynfrns
        </div>
        <div class="border-t border-dashed border-yellow-100">
            всякие ссылки
        </div>

        <div class=" grid lg:grid-cols-12 lg:justify-between self-end border-t border-dashed border-yellow-100">
            <div class="lg:col-span-4">
                <span>© ООО «КаркасЦентр», 2013 - { new Date().getFullYear() } </span>
                <p class="lg:text-sm">Вся информация предоставленная на этом сайте ни при каких обстаятельствах не является публичной офертой и носит исключительно информационный характер.</p>
            </div>
            <div class="pt-3 lg:col-start-10 lg:col-span-3">
                <p class="">Подписывайтесь на нас в соцсетях и будьте в курсе всех последних новостей:</p>
                <div class="text-2xl flex justify-end  text-gray-500 ">
                    {#each $socialNetwork as s}
                    <a href="{s.href}" target="_blank"><i class="fa {s.class} mx-1" aria-hidden="true"></i></a> 
                    {/each}
                </div>
            </div>
            
        </div>
    </div>
      

</footer>