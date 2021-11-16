<script>
const technologies = [
    {name: 'Каркасные дома', route: '/karkasnye-doma', img: 'static/img/home_page/iz_karkas.webp'},
    {name: 'Дома из СИП панелей', route: '/doma-iz-sip-panelej', img: 'static/img/home_page/iz_sip.webp'},
    {name: 'Дома из газобетона', route: '/doma-iz-gazobetona', img: 'static/img/home_page/iz_blokov.webp'},
    {name: 'Из керамических блоков', route: '/iz-keramicheskih-blokov', img: 'static/img/home_page/iz_keramiki.webp'}
];

let region = 'Брянск';





</script>

<div class="container py-8 md:py-12 lg:py-20">
    <h2 class="text-xl text-gray-600 pl-4 md:text-3xl lg:text-4xl">Какие дома мы строим</h2>
    <div class="grid md:grid-cols-4 justify-items-center content-around ">
        {#each technologies as tech}
        <div class="shadow-lg m-5 p-1 max-w-max border">
            
            <img src="{tech.img}" alt="{tech.name}" title="{tech.name}">
            <h3 class="m-2 font-light text-gray-500">{tech.name}</h3>
        </div>
    {/each}
    </div>
    <p class="normal-case text-justify">
        Оказываем полный комплекс услуг по строительству домов в {region}е и области, включая разработку проектов и сметной документации, устройство фундаментов, возведение стен и перекрытий, монтаж кровли, прокладку инженерных коммуникаций и отделочные работы.
    </p>
    
    
</div>

<!-- <style>
    p { text-indent: 25px; }
</style> -->