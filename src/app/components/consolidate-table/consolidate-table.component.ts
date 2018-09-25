import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import { Option } from '../../models/Option';
import {ManageDBService} from "../../Services/manage-db.service";


@Component({
  selector: 'app-consolidate-table',
  templateUrl: './consolidate-table.component.html',
  styleUrls: ['./consolidate-table.component.css']
})
export class ConsolidateTableComponent implements OnInit {

  dataSource: Order[]= [];
  datos=[]; 
  TpSnacks=[];

  displayedColumns: string[] = ['TypeSnack','cantidad'];

  constructor(private manageBD: ManageDBService) { }
  
  ngOnInit() {
    this.getOptionList();
    this.gerOrdersList();
  }

  gerOrdersList(){
    this.manageBD.getListOrders().snapshotChanges()
    .subscribe(item => {
      this.dataSource = Array<Order>();
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.dataSource.push(x as Order);
      })
      this.getConsolidate();
    });
  }

  getConsolidate(){
      let consolidado= [];
      this.dataSource.forEach(element => {
        let indice = consolidado.findIndex(function (obj) { return obj.key === element.tp_snack; });
        // console.log("BUSCADO: "+element.tp_snack+"  -- INDICE: "+indice);
        if(indice==-1){
          // let opcion:Option = this.TpSnacks.find(function (obj_) { return obj_.$key === element.tp_snack; });
          // console.log(opcion);
          consolidado.push({key:element.tp_snack, Cantidad:1});
        }else{
          consolidado[indice].Cantidad=consolidado[indice].Cantidad+1;
        }
        this.datos=consolidado;
        console.log(consolidado);
      });
  }

  getOptionList(){
    this.manageBD.getListOptions().snapshotChanges().subscribe(item => {
      this.TpSnacks = Array<Option>();
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.TpSnacks.push(x as Option)
      })
    });
  }

  getTypeSnack(key: string){
    let retorno="No encontrado";
    this.TpSnacks.forEach(element => { 
      if(element.$key==key){
        retorno=element.description;
      }
    });
    return retorno;
  }
}
