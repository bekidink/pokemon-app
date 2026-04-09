import { apiClient } from "./apiClient"

export const pokemonService={
    async getList():Promise<any>{
        const {data}=await apiClient.get(`/pokemon?limit=151&offset=0`)
        return data.results

    },

    async getByName(name:string):Promise<any>{
      const sanitizedName=name.toLocaleLowerCase().trim()
        const {data}=await apiClient.get(`/pokemon/${sanitizedName}`)
        return data

    }
}