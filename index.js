
let userUrl = "http://localhost:3000/users"


let userInfo = {
    name: "Steve",
    email: "steve@steve.com"
}

function getID(obj) {
    document.body.innerHTML = obj.id
}

let error = (alert) =>  document.body.innerHTML = alert.message

let postRequest = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(userInfo)
} 

let submitData = () => {    
     return fetch(userUrl, postRequest)
        .then(function(resp) {
            return resp.json()
        })
        .then(getID)
        .catch(error)
}


