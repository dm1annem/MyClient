
// import {base_api} from '$lib/settings/service-set'


export async function get(){
    const response = await fetch(`http://127.0.0.1:8000/api/user`, {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        credentials: 'include',
    });

    const user = response.json();

    console.log(user)

    return {
        body: {
            message: 'sucsess!!!'
        }
    }


}