<script>
    import Form from "./Form.svelte";
</script>

<div class="w-screen h-full bg-cover bg-top " style="background-image: url('static/img/home_page/first_screen_background.webp')">
    <div class="bg-black bg-opacity-70 w-full h-full">
        <div class="container grid lg:grid-cols-6">
            <div class="grid place-content-start lg:col-span-4">
                <h1 class="font-bold text-white text-xl mt-24 md:text-3xl  lg:text-5xl lg:mt-32 ">  
                     СТРОИМ ДОМА В БРЯНСКЕ
                </h1>
            
                <div class="text-white text-lg md:text-2xl lg:text-4xl  mt-1 lg:mt-10">
                    <span >
                         «под ключ» по фиксированной смете  
                    </span> <br>
                    
                    <span > 
                        с гарантией 5 лет 
                    </span>
                </div>

                

            </div>
            <div>
                <div class="mt-12 lg:mt-32">
                    <Form/>
                </div>
            </div>
            
    
        </div>

    </div>
    
    

</div>