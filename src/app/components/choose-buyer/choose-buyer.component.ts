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
  UserSelected:string;
  ngOnInit() {
    this.getUsersList();
    this.readBuyer();
  }

  getUsersList(){
    this.manageDB.getListUserAproved().snapshotChanges()
    .subscribe(item => {
      this.dataSource = Array<User>();
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        if(x['$key']!="t04OOdmKzQhpi4WlUbKXjJkCTUz1"){
          this.dataSource.push(x as User)
        }
      })
    });
  }

  saveBuyer(){
    this.manageDB.updateListBuyer(this.UserSelected);
  }

  readBuyer(){
    this.manageDB.getListBuyer().snapshotChanges().subscribe(item => {
      this.UserSelected = "";
        if(item.length>0){
          let element =item[0];       
          let x = element.payload.toJSON();
          this.UserSelected=x['user'] as string;
          console.log("usuario encontrado");
        }
      });
  }

}
