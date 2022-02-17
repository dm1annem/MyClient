

export  const post = async (request) =>{
    const formData = JSON.parse(request.body)
    const password = formData.password
    const email = formData.email

    const data = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify({
            email,
            password,
        })
    });
    const response = await data.json();
    const token = response.jwt
    

    return {
        headers: {
            'set-cookie': `jwt=${token}; Path=/; HttpOnly`
        },
        body: {
            form: { 
                password,
                email,
            },
            token
            
          
        }
    }

}