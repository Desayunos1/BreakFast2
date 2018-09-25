import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../../models/Order';
import {ManageDBService} from "../../Services/manage-db.service";
import { Option } from '../../models/Option';
import { LoginService } from '../../Services/login.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {MatDialog} from '@angular/material';
import { ConsolidateTableComponent } from '../consolidate-table/consolidate-table.component';


@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  title = 'Show Order';
  
  dataSource= new MatTableDataSource<Order>();
  OptionSnack = [];
  valor : string;

  constructor(private enviarOrden: ManageDBService,public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(ConsolidateTableComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.MostrarOrden();
    this.getMyOption();
    
  }
  displayedColumns: string[] = ['Usuario', 'tp_snack'];

  MostrarOrden(){
    this.enviarOrden.getListOrders().snapshotChanges()
    .subscribe(item => {
      this.dataSource.data = Array<Order>();
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.dataSource.data.push(x as Order);        
      })
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  MostrarTipo(key: string){
    let retorno="No encontrado";
    this.OptionSnack.forEach(element => {
      //console.log(key+"***"+element.$key);
      if(element.$key==key){
        //console.log("igual: ");
        retorno = element.description;
      }
    });
    return retorno;
  }
  getMyOption(){
    this.enviarOrden.getListOptions().snapshotChanges().subscribe(item => {
      this.OptionSnack = Array<Option>();
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.OptionSnack.push(x as Option)
        //console.log(x);
      })
    });
  }
 }

  
