import { writable } from 'svelte/store';
import type { User } from '$lib/settings/typs';
    
    const user = writable<User | null>(null);
    
    export default user;