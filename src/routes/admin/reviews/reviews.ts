import {api} from '$lib/settings/service-set';
import { derived, writable } from 'svelte/store';

export let url_reviews = derived(api, $api => {return $api + `reviews/rev/`}) 