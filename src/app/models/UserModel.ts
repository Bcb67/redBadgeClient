export interface User {
    user: {
        username: string,
        fName?: string,
        lName?: string,
        email?: string,
        password: string,
    }
    sessionToken?: string;
}