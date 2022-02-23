
// import {base_api} from '$lib/settings/service-set'


export async function get(){
    const response = await fetch(`http://127.0.0.1:8000/api/user/`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': '111',
        },
        credentials: 'include',
    });

    const user = await response.json();

    console.log('qqqqqqqqq', user)

    return {
        body: {
            message: 'sucsess!!!',
            user
        }
    }


}