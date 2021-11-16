<script>
export let drawer;

$: TopSpan = drawer==true ? 'rotate-45' : 'translate-y-1.5 ';
$: CenterSpan = drawer ? 'invisible' : '';
$: BottomSpan = drawer ? '-rotate-45' : '-translate-y-1.5';

function f(){
    return console.log('drave = ', drawer, 'TopSpan =', TopSpan )
}


</script>

<div class="relative pt-2"  on:click={f}>
    <span class="block absolute bg-gray-500  w-full h-0.5 origin-center transform transition duration-500 ease-in-out {TopSpan} "></span>
    <span class="block absolute bg-gray-500  w-full h-0.5 origin-center transform {CenterSpan} "></span>
    <span class="block absolute bg-gray-500  w-full h-0.5 origin-center transform transition duration-500 ease-in-out  {BottomSpan} "></span>
</div>

<!-- <div class="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2"> <span class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span> <span class="block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span> <span class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span> </div> -->
