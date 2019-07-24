export interface User {
    user: {
        id?: number,
        username: string,
        fName?: string,
        lName?: string,
        email?: string,
        password: string,
    }
    sessionToken?: string;
}