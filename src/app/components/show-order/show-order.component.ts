import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import {ManageDBService} from "../../Services/manage-db.service";
import { Option } from '../../models/Option';
import { LoginService } from '../../Services/login.service';


@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  title = 'Show Order';
  
  dataSource: Order[]= [];
  OptionSnack = [];
  valor : string;

  constructor(private enviarOrden: ManageDBService) { }
  
  ngOnInit() {
    this.MostrarOrden();
    this.getMyOption();
      
  }
  displayedColumns: string[] = ['Usuario', 'tp_snack'];

  MostrarOrden(){
    this.enviarOrden.getListOrders().snapshotChanges()
    .subscribe(item => {
      this.dataSource = Array<Order>();
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.dataSource.push(x as Order);
      })
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

  
