import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { DatabaseService } from '../stock-fetch.service';



// TODO: Replace this with your own data model type
export interface CryptoTableItem {
  name: string;
  symbol: string;
  price: number;
  quantity: number;
  userCost:number
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CryptoTableItem[] = [
  {name: 'Bitcoin', symbol: 'BTC', price: 9874.346, quantity: 0, userCost:0},
  {name: 'Bitcoin', symbol: 'BTC', price: 9874.346, quantity: 0, userCost:0},
  {name: 'Bitcoin', symbol: 'BTC', price: 9874.346, quantity: 0, userCost:0},
];

/**
 * Data source for the CryptoTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CryptoTableDataSource extends DataSource<CryptoTableItem> {
  data: CryptoTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  
  constructor(private dbService: DatabaseService) {
    super();
    this.data = this.dbService.getObject();
    // console.log(this.data)
  }
  
  
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CryptoTableItem[]> {
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
  private getPagedData(data: CryptoTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CryptoTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'symbol': return compare(+a.symbol, +b.symbol, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
