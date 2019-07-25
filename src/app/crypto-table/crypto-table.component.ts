import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { CryptoTableDataSource, CryptoTableItem } from './crypto-table-datasource';
import { DatabaseService } from '../stock-fetch.service';
import { FormGroup, FormControl } from '@angular/forms';


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
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  tableForm = new FormGroup({
    btcQuan: new FormControl('')
  });

  onSubmit() {
    let user = {btcQuan: this.tableForm.value.btcQuan}
    console.log("thing from table",user)
    // this.authservice.addUser(user).subscribe(data => console.log('signed up'))
      // alert('Created New User!')
      // console.log(user)
    }

  coinsForPortf = [];
  quansForPortf = [];

  pricepls: any;
  tf = false
  pricePoC(val, upVal, name) {
    this.tf = false
    if(!this.tableForm.value.btcQuan){
      this.tableForm.value.btcQuan = 0
    }

    if(this.tableForm.value.btcQuan > 0) {
      this.coinsForPortf.push(name);
      this.quansForPortf.push(this.tableForm.value.btcQuan);

      console.log(this.coinsForPortf)
      console.log(this.quansForPortf)
    }
    console.log('quan:', typeof(this.tableForm.value.btcQuan), this.tableForm.value.btcQuan)
    console.log('val:', typeof(val), val)
    this.pricepls =  (Number(this.tableForm.value.btcQuan) * Number(val))
    upVal = this.pricepls
    this.dbService.money = upVal
    this.tf = true
    return upVal;
  }

  updateVal(val, upVal, name) {
    // console.log('VALUE:',this.pricePoC(val, upVal, name))
    this.table.renderRows()
    return this.pricePoC(val, upVal, name)
  }

  constructor(public dbService: DatabaseService) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'symbol', 'price', 'quantity', 'userCost'];

  ngOnInit() {
    // this.dbService.getObject()
    // let con = '';
    // console.log(con)
    this.dataSource = new CryptoTableDataSource(this.dbService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
