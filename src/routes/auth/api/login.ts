

export  const post = async (requestq) =>{
    const formData = JSON.parse(requestq.body)
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
    const resp = await data.json()

    return {
        body: {
            form: { 
                password,
                email,
            },
            re: resp
        }
    }

}