import { writable } from 'svelte/store';

// -- Корневой адрес API --

export const api = writable('http://127.0.0.1:8000')


export const base_api = 'http://127.0.0.1:8000'