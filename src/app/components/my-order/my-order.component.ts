import { Component, OnInit } from '@angular/core';
import { Option } from '../../models/Option';
import { NgForm, FormGroup,FormControl,Validators } from '@angular/forms';
import { ManageDBService } from '../../Services/manage-db.service';
import { Order } from '../../models/Order';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  TpSnacks: Option[]= [
    {$key: '1', description: 'Pollo'},
    {$key: '2', description: 'Carne'}
  ];
  ElegirSnackForm : FormGroup;
  ValorSeleccionado: String='';
  
  constructor(private manageBD: ManageDBService, private manageLogin:LoginService) { }

  ngOnInit() {
    this.ElegirSnackForm = new FormGroup({
      tipoSnack: new FormControl('',[
        Validators.required])
    });
  }

  addPedido(){
    let objeto= new Order();
    objeto.$key=this.ElegirSnackForm.get('').value;
    objeto.tp_snack=this.ElegirSnackForm.get('$key').value;
    // objeto.user=this.manageLogin.
    this.manageBD.insertListOrders(objeto);
  }

  delPedido(){
    this.ValorSeleccionado='';
  }

  getErrorMessage(control:string) {
    if(control=='tipoSnack')
    return this.ElegirSnackForm.get(control).hasError('required') ? 'Debe elegir el tipo de snack' :'';
  }



}
