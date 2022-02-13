import {api} from '$lib/settings/service-set';

export const  post = async (request) =>{
    const formBody = JSON.parse(request.body);
    const email = formBody.email;
    const password = formBody.password;

    const data = await fetch('${$api}api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(
            email,
            password
        )
    });

   const res = await data.json()

   return {
       body: { res}
   }

}

// const data = await fetch('${$api}api/login/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//     body: JSON.stringify({
//         email: 'a@a.com',
//         password: 'a',
//     })
// })
    
