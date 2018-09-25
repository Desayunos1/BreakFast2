import { Component, OnInit } from '@angular/core';
import { ManageDBService } from '../../Services/manage-db.service';

@Component({
  selector: 'app-enable-orders',
  templateUrl: './enable-orders.component.html',
  styleUrls: ['./enable-orders.component.css']
})
export class EnableOrdersComponent implements OnInit {

  constructor(public dbService: ManageDBService) { }

  ngOnInit() {
  }
  openOrders(){
    this.dbService.updateListEnableSystem(true);
  }
}
