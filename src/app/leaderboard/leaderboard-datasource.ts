import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {LeaderboardService} from '../leaderboard.service'

// TODO: Replace this with your own data model type
export interface LeaderboardItem {
  username: string;
  id: number;
  assets: any;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: LeaderboardItem[] = [
  {id: 1, username: 'Hydrogen', assets: 500},
  {id: 2, username: 'Helium', assets: 100935},
  
];

/**
 * Data source for the Leaderboard view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class LeaderboardDataSource extends DataSource<LeaderboardItem> {
  data: LeaderboardItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private leaderboardService: LeaderboardService) {
    super();
    this.leaderboardService.getLeaderboard().subscribe(data => { console.log(data[0].Users); this.data = this.usersToObject(data[0].Users) })
  }

  usersToObject(users) {
    let userArr = []
    for(let user of users){
      userArr.push({id: user.id, username: user.username, assets: (user.Portfolio.assets+user.Portfolio.funds)})
    }
    console.log('userArr',userArr)
    this.leaderboardService.showTable = true
    return userArr
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<LeaderboardItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: LeaderboardItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: LeaderboardItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'username': return compare(a.username, b.username, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'assets': return compare(+a.assets, +b.assets, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
