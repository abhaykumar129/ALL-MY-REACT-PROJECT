import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

// AuthService class handles user authentication using Appwrite
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the Appwrite endpoint
            .setProject(conf.appwriteProjectId); // Set the Appwrite project ID
        this.account = new Account(this.client); // Initialize the Account service
    }

    // Create a new user account and log them in
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                // If account creation is successful, log the user in
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // Log in a user with email and password
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Get the currently logged-in user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    // Log out the current user
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

// Create an instance of AuthService
const authService = new AuthService();

export default authService;