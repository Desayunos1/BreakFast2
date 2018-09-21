import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar, MatTabChangeEvent } from '@angular/material';
import { ManageDBService } from '../../Services/manage-db.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  availableColors: ChipColor[] = [
    {name: 'Parce le toca agunatar Hambre hasta que lo acepten !!! Por favor ccomuniquese con el Admin',
    color: 'warn'}
  ];
  constructor(public authService: LoginService,
    public snackBar: MatSnackBar,
    public dbService: ManageDBService) { }
    selected = new FormControl(0);

  ngOnInit() {
  }
  
  confirm(event: MatTabChangeEvent){
    if(parseInt(event.toString())==4){//verifica qu este en el tab cerrar orden
      //console.log("entro");
      this.openSnackBar("Esta Seguro Que Desea Finalizar Los Ingresos", "SI");    }
  }
openSnackBar(message: string, action: string) {
    //this.refSnackBar = 
    this.snackBar.open(message, action, {
      duration: 5000,
    }).onAction().subscribe(()=>{
      this.closeOrders();
    });
    //this.refSnackBar
  }

  closeOrders(){
    this.dbService.updateListEnableSystem(false);
  }
}
export interface ChipColor {
  name: string;
  color: ThemePalette;
}


