
// import {base_api} from '$lib/settings/service-set'
// import {handle} from 'src/hooks/index'


export async function get(local){
    const response = await fetch(`http://127.0.0.1:8000/api/user/`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cookie': local.headers.cookie
        },
        credentials: 'include',
    });

    const user = await response.json();

    return {
        body: {
            user
        }
    }


}