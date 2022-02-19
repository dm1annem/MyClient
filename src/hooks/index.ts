// export const handle = async ({ event, resolve }) =>{
//     console.log(event)
//     const response = await resolve(event)

//     return {...response}
// }


export function getSession(event) {
    console.log(event);
    return {
        user: {
            asas: 'qwqwqwwwq',
            dfdfd: 'ddadadaad'
        }
    };
};
