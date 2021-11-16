<script>
const advantages = [
    {title: 'Фиксированная смета', text: 'Стоимость дома фиксируется в договоре и в процессе строительства не меняется', img: 'static/img/home_page/zn_smeta.png'},
    {title: 'Индивидуальное проектирование', text: 'Детально прорабатываем проекты с учётом всех пожеланий заказчика', img: 'static/img/home_page/zn_proekt.png'},
    {title: 'Поэтапная оплата', text: 'Не нужно платить за весь дом сразу, оплачивается только выполняемый этап работ', img: 'static/img/home_page/zn_oplata.png'},
    {title: 'Кредит на стрительство', text: 'При необходимости поможем с получением кредита на строительство дома', img: 'static/img/home_page/zn_kredit.png'},
    {title: 'Опытные специалисты', text: 'У нас работают только профессионалы с подтверждённым опытом и спциализацией', img: 'static/img/home_page/zn_bilders.png'},
    {title: 'Строим в комплексе', text: 'Строим дома полностью под ключ, включа фундамент,стены, крышу, отделку и коммуникации', img: 'static/img/home_page/zn_kompleks.png'},
]
    
</script>

<div class="bg-gray-500 text-gray-50">
    <div class="container py-8 lg:py-12">
        <h2 class="text-xl  md:text-3xl lg:text-4xl ">
            За что клиенты отдают предпочтение нашей компании
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3  content-between pt-10 gap-8 lg:gap-16">

            {#each advantages as advantag}
            <div class="grid justify-items-center border rounded p-4 ">
                <img src="{advantag.img}" alt="иконка {advantag.title}">
                <span class="md:text-lg text-center my-2 border-b border-dashed"> {advantag.title} </span>
                <span class="text-sm font-extralight text-center"> {advantag.text} </span>
            </div>
            {/each}
        </div>
    </div>
</div>