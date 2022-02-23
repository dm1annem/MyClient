<script context="module">
    export const load = async ({session, fetch}) => {


        if(session.user.authenticatedUser){
            const response = await fetch(`/auth/api/profile`);

            const userData = await response.json();
            const user = await userData.user

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

 export let user;   

    

</script>


Профиль пользователя {user.name}


<button>dutton</button>

