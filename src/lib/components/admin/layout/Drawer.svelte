<script>
    const menu = [
        {name: 'Отзывы', rout: '/admin/reviews', icone: 'fa fa-phone'},
        {name: 'Отзывы', rout: '/admin/reviews', icone: 'fa fa-user'},
        {name: 'Отзывы', rout: '/admin/reviews', icone: 'fa fa-star'},
    ]
</script>

<div class="w-40">
    {#each menu as i}
    <div class="mt-4">
        <a href=" {i.rout} ">
            <i class="fa {i.icone}"></i>
            <span> {i.name} </span>
        </a>
         
    </div>
    
        
    {/each}
</div>