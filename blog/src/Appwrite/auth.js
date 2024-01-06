import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
export class AuthService{
    client = new Client();
    Account;

    constructor(){
        this.client
        .setEndpoint(conf.AppwriteUrl)
        .setProject(conf.AppwriteProductId); 
        this.Account = new Account(this.client)

    }
    async createAccount({email, password,name}){
        try {
        const userAccount = await this.Account.create(ID.unique(), email,password,name)

        if(userAccount){
            this.login(email, password)
            
        }else{
            return createAccount

        }
        } catch (error) {
            throw  error
        }
    }

    async login({email, password}){
        try {
            return await this.Account.createEmailSession(email, password)

        } catch (error) {
            throw error
        }
    }

    async getUserAccount(){
        try {
            return await this.Account.get();            
        } catch (error) {
            throw error
        }
        return null;
    }

    async logout(){
        try {
            return await this.Account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()
export default authService