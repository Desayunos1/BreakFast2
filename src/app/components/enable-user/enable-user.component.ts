import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import {ManageDBService} from "../../Services/manage-db.service";


@Component({
  selector: 'app-enable-user',
  templateUrl: './enable-user.component.html',
  styleUrls: ['./enable-user.component.css']
})
export class EnableUserComponent implements OnInit {

  title = 'User';
  dataSource: User[]= [];
  
  constructor(private enviarusuaio: ManageDBService) { }

  TraerUsuario(){
    this.enviarusuaio.getListUser().snapshotChanges()
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
  displayedColumns: string[] = ['Nombre', 'email', 'Aprobar', 'Denegar'];

  ngOnInit() {
    this.TraerUsuario();
  }

  aproveUsuario(element: User){
    this.enviarusuaio.insertListUserAproved(element);
    this.enviarusuaio.deleteListUser(element.$key);
  }

  denyUsuario(element: User){
    this.enviarusuaio.deleteListUser(element.$key);
  }
    
}
