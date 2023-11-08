import axios from "axios";
import Swal from "sweetalert2";

export const getUsers=()=>{
    axios.get('http://127.0.0.1:8000/user-data/')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
}
export const createUser=(user)=>{
    console.log()
    axios.post('http://127.0.0.1:8000/user-data/', user)
        .then(res => {
            const userData = res.data.data;
            const message = res.data.message
            console.log("User Data:", userData);
            const userId = userData.id;
            const userName = userData.name;
            const userEmail = userData.email;
            Swal.fire({
                icon: 'success',
                title: `${message}`,
                text: `User ${userEmail} ${userName} (ID: ${userId}) has been created.`,
            }).then((value)=>{
                if(value.isConfirmed){
                    location.reload()
                }
            }).catch(()=>{
                location.reload()
            })

        })
        .catch(err => {
            const errors = err.response.data.error
            const allValues = Object.values(errors);
            console.log(allValues)
            Swal.fire({
                icon: 'error',
                title: `Invalid input`,
                text: `User ${allValues}`,
            });
        });
}

