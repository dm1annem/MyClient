<script context="module">
    export const load = async ({session, fetch}) => {


        if(session.user.authenticatedUser){
            const response = await fetch(`/auth/api/profile`);

            const user = response.json();

            console.log(user)
            return {
                props: {
                     user
                }
            }
        } else {
            return {
                props: {}
            }
        }

        
        

    }

</script>


<script>
//     import {session} from '$app/stores'
// import user from '$lib/store/users/user';

    

//     const isAuth = JSON.stringify($session.user.authenticatedUser)
    

 export let user;   

    

</script>


Профиль пользователя {user.email}


<button>dutton</button>

