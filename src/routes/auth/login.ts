
export function post(request) {

    const data = async () =>{
        await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
		    credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
    }
	return console.log(data)
    
}

