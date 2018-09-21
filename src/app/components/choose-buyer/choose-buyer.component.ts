import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import {ManageDBService} from "../../Services/manage-db.service";

@Component({
  selector: 'app-choose-buyer',
  templateUrl: './choose-buyer.component.html',
  styleUrls: ['./choose-buyer.component.css']
})
export class ChooseBuyerComponent implements OnInit {
  dataSource: User[]= [];
  constructor(private manageDB: ManageDBService) { }
  displayedColumns: string[] = ['Nombre', 'email', 'Elegir'];

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList(){
    this.manageDB.getListUserAproved().snapshotChanges()
    .subscribe(item => {
      this.dataSource = Array<User>();
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.dataSource.push(x as User)
        console.log(x);
      })
    });
  }

}
