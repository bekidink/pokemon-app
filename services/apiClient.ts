import axios from 'axios'
export const apiClient=axios.create({
    baseURL:'https://pokeapi.co/api/v2',
    timeout:10000,
    headers:{
        'Content-Type':'application/app'
    }
})

apiClient.interceptors.response.use(
    (response)=>response,
    (error)=>{
        return Promise.reject(error)
    }
)