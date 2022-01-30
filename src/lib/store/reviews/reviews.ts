import {api_path} from '$lib/settings/service-set';
import { derived, writable } from 'svelte/store';

export let url_reviews = derived(api_path, $api => {return $api + `reviews/rev/`}) 