<script>
    import {contakts, socialNetwork} from '$lib/settings/main-set';
    import {logo} from '$lib/settings/main-set';
    let src = $logo;

    
</script>


<div class="hidden lg:grid grid-cols-12  gap-x-2 justify-between mt-3 mx-4 md:mx-5">
    <div class="col-start-1 col-span-2 mt-1.5" >
        <a  href="/">
            <img {src} alt="Логотип КаркасЦентр">
        </a >
    </div>
    <div class="col-start-3 col-span-4 grid justify-self-start">
        <div class="inline-block align-top max-w-xs">
            <span class=" text-gray-500 ">Проектирование и строительство загородных домов в Брянске</span>
        </div>
    </div>
    <div class="col-start-7 col-span-5 ">
        <div class="text-gray-500 ">
            {#each $socialNetwork as s }
            <a href="{s.href}" target="_blank"><i class="fa { s.class } mx-1 " aria-hidden="true" ></i></a>
            {/each}
        </div>
        <div class=" flex justify-end text-gray-600">
            <p class="flex-shrink-0 mr-10 border-2 border-yellow-100 hover:border-yellow-300 rounded-xl px-3 mb-1 bg-gray-100">
                <a href="{$contakts.messengers[0].url}" >
                    <i class="fa {$contakts.messengers[0].faClass} text-xl ml-1 text-yellow-600" aria-hidden="true"></i> <span>Написать в WhatsApp</span>
                </a>
            </p> 
            <p class="flex-shrink-0">
                    <a href="tel:{$contakts.phone[0].number}" class="text-gray-500 hover:underline">
                        <i class="fa fa-phone text-xl  ml-1 text-gray-400 hover:text-blue-400"></i> <span class="text-xl">{$contakts.phone[0].number}</span>
                    </a>	
            </p>
        </div>   
    </div>
    
        
    <div>
        <a href="/auth/login/">
            <i class="fa fa-sign-in  text-xl ml-1 text-gray-500 flex justify-end hover:text-yellow-600"></i>
        </a>
        
    </div>
</div>