import * as cookie from 'cookie'


export async function handle({ request, resolve }) {
    
    const cookies = cookie.parse(request.headers.cookie || ""); // получаем куки из запроса
    request.locals.user = cookies;

    if(!cookies.jwt){
        request.locals.user.authenticated = false;
    } else{
        request.locals.user.authenticated = true;
    }
    
    
    const response = await resolve(request);
    
   
    return {
        ...response,
    
    }  
};


export function getSession(request) {
    
    const authenticatedUser = request.locals.user.authenticated

    return {
        user: {
            authenticatedUser,
            message: 'hello'
        }    
    };
};
