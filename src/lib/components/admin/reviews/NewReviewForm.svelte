<script>
import { onMount } from "svelte";
import {url_reviews} from '$lib/store/reviews/reviews';

    let new_review = {
        title: '', 
        video_link: '', 
        img: null, 
        text: '',
        comment: '',
    };

</script>

<div class="flex-auto px-4 lg:px-10 py-10 pt-0"> 
    <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Новый отзыв
        </h6>
        <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label 
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
              for="title">
                Заголовок
              </label>
              <input 
              id="title"
              type="text" 
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value="Отзыв ">
            </div>
        </div>

        <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label 
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
              for="video_link">
                Видео
              </label>
              <input 
              id="video_link"
              type="text" 
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value="">
            </div>
        </div>

        <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label 
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
              for="img">
                Фото
              </label>
              <input 
              id="img"
              type="file" 
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value="">
            </div>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label 
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
                for="text">
                  Отзыв
                </label>
                <textarea 
                id="text"
                type="text" 
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"></textarea>
              </div>
            </div>
          </div>

        <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label 
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
              for="comment">
                Коментарий
              </label>
              <input 
              id="comment"
              type="text" 
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              value="">
            </div>
        </div>

    </form>

</div>