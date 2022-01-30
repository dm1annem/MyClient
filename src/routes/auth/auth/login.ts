import * as api from '$lib/components/auth/api';
import { respond } from './_respond';

export async function post({ request }) {
	const json: string = await request.json();
	const body = await api.post('users/', {
		user: {
			email: json.email,
			password: json.password
		}
	});

	return respond(body);
}
