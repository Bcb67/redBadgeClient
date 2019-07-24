import {leagueUser} from './leagueUser'

export interface leaderboardModel {
    Users: [
        {[key: string]: leagueUser}
    ],
    createdAt: string,
    id: number,
    isCurrent: boolean,
    updatedAt: string
}