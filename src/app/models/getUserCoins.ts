export interface getUserCoins {
    id?: number,
    username: string,
    fName?: string,
    lName?: string,
    email?: string,
    password: string,
    createdAt?: string,
    isActive?: boolean,
    updatedAt?: string,
    Portfolio:{
        id: number,
        coins: [string],
        quantity: [number],
        funds?: number,
        assets?: number
    }
    
 }
