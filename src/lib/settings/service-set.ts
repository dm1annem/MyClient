import { writable } from 'svelte/store';

// -- Корневой адрес API --

export const api_path = writable('http://127.0.0.1:8000/')