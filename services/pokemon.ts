import { apiClient } from "./apiClient"

export const pokemonService={
    async getList():Promise<any>{
        const {data}=await apiClient.get('/pokemon')
        return data

    },

    async getByName(name:string):Promise<any>{
      const sanitizedName=name.toLocaleLowerCase().trim()
        const {data}=await apiClient.get(`/pokemon/${sanitizedName}`)
        return data

    }
}