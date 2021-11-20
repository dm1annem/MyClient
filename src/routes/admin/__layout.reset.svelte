<script>
    import TopHeader from "$lib/components/admin/layout/TopHeader.svelte";
    import Drawer from "$lib/components/admin/layout/Drawer.svelte";
</script>

<TopHeader/>

<div class="flex flex-row ">
    <div class="ml-6 border-r">
        <Drawer/>
    </div>
    <div class="pl-6">
        <slot></slot>
    </div>

</div>



<!-- <style>
    .main{
        grid-template-columns:auto auto;
    }
</style> -->