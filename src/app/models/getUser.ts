export interface getUser {
    id?: number,
    username: string,
    fName?: string,
    lName?: string,
    email?: string,
    password: string,
    Portfolio:{
        id: number,
        coins: [string],
        quantity: [number]
    }
}