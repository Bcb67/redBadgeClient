import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { CryptoTableDataSource, CryptoTableItem } from './crypto-table-datasource';
import { DatabaseService } from '../stock-fetch.service';


@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<CryptoTableItem>;
  dataSource: CryptoTableDataSource;
  tableInfo: any;


  constructor(public dbService: DatabaseService) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'symbol', 'price'];

  ngOnInit() {
    // this.dbService.getObject()
    // let con = '';
    // console.log(con)
    // this.dataSource = new CryptoTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
