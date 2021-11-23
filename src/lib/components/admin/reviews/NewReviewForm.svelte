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

    async function PostNewReview() {
      if (new_review.title.length > 1 || new_review.video_link.length > 1 || new_review.img != null || new_review.text.length > 1|| new_review.comment.length > 1) {
        const response = await fetch($url_reviews, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(new_review)
        });
        let result = await response.json();
        // alert(result.message);
        
        console.log( 'значения:', new_review );
        new_review.title = '';
        new_review.video_link = '';
        new_review.img = null;
        new_review.text = '';
        new_review.comment = '';
      } else {
        console.log('значения не введены')
      }
      
    };


</script>

<div class="flex-auto px-4 lg:px-10 py-10 pt-0 bg-green-100"> 
    <form on:submit|preventDefault="{ PostNewReview }">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Добавить отзыв
        </h6>
        <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label 
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
              for="title">
                Заголовок
              </label>
              <input 
              bind:value="{ new_review.title }"
              id="title"
              type="text" 
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              >
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
              bind:value="{ new_review.video_link }"
              id="video_link"
              type="text" 
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              >
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
              bind:value="{ new_review.img }"
              id="img"
              type="file" 
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              >
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
                bind:value="{ new_review.text }"
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
              bind:value="{ new_review.comment }"
              id="comment"
              type="text" 
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              >
            </div>
        </div>

        <button  class="block bg-blue-400 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Добавить</button> 
        <!-- on:click="{PostNewReview}" -->
    </form>


</div>