import { api } from "../api/api-header";

export class UserService {
    
    async handleListUsers(){
        const listUsers = await api.get('/plants')
        
        
    }
}