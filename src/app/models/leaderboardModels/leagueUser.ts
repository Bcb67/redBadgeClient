export interface leagueUser {
    id: number,
    username: string,
    Portfolio: {
        coins: [string],
        quantity: [number],
        funds: number,
        assets: number
    },
    userLeague: {
        createdAt: string,
        updatedAt: string,
        leagueId: number,
        userId: number
    }
}