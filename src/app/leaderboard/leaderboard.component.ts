import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { LeaderboardDataSource, LeaderboardItem } from './leaderboard-datasource';
import { LeaderboardService } from '../leaderboard.service';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<LeaderboardItem>;
  dataSource: LeaderboardDataSource;

  // users: []

  constructor(private leaderboardService: LeaderboardService) { }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'funds'];

  ngOnInit() {
    this.dataSource = new LeaderboardDataSource(this.leaderboardService);
    this.leaderboardService.getLeaderboard().subscribe(data => {
      console.log(data[0].Users);
      this.leaderboardService.users = data[0].Users 
    })

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   // this.spinner.hide();
    //   // this.disp = true;
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    //   this.table.dataSource = this.dataSource;
    // }, 1500);
  }
}
