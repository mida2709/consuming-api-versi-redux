import axios from "axios"
import { useLocalStorage } from "../../hooks/localStorage"

export const prefix = "mida"
export const useClient = () => {

    const [creds] = useLocalStorage('credential')
    const client = axios.create({
        baseURL: `http://msib-fe3-objectstorage.productzillaacademy.com/collections`,
        headers: {
            Authorization: `Bearer ${creds}`
        }
    })
    return client;
}

export default useClient
