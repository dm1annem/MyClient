// const base = 'http://localhost:8000/api/token/';

const base = 'https://conduit.productionready.io/api';

async function send({ method, path, data, token }) {
	const opts:any = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path:any, token:any) {
	return send({ method: 'GET', path, token });
}

export function del(path:any, token:any) {
	return send ({ method: 'DELETE', path, token });
}

export function post(path:any, data:any, token:any) {
	return send({ method: 'POST', path, data, token });
}

export function put(path:any, data:any, token:any) {
	return send({ method: 'PUT', path, data, token });
}
