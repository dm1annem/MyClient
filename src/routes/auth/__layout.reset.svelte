<script>
    import {logo} from '$lib/settings/main-set';
    let src = $logo;
</script>

<div class="w-full bg-green-50 shadow-md">
	<div class="col-start-1 col-span-2  p-4" >
        <a  href="/">
            <img {src} alt="Логотип КаркасЦентр">
        </a >
    </div>

</div>


<slot/>