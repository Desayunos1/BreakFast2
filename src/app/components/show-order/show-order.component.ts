import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import {ManageDBService} from "../../Services/manage-db.service";

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  title = 'Show Order';
  dataSource: Order[]= [{$key:'123', user: 'Camilo', tp_snack: 'Pollo'}];

  constructor(private enviarOrden: ManageDBService) { }
  getenviar(){
    this.enviarOrden.getListUser().snapshotChanges()
    .subscribe(item => {
      this.dataSource = Array<Order>();
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.dataSource.push(x as Order)
      })
    });
  }

  ngOnInit() {
  }
  displayedColumns: string[] = ['key', 'Usuario', 'tp_snack'];

}
