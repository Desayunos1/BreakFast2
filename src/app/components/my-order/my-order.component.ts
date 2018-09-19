import { Component, OnInit } from '@angular/core';
import { Option } from '../../models/Option';
import { NgForm, FormGroup,FormControl,Validators } from '@angular/forms';

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
  
  constructor() { }

  ngOnInit() {
    this.ElegirSnackForm = new FormGroup({
      tipoSnack: new FormControl('',[
        Validators.required])
    });
  }

  addPedido(){
    this.ValorSeleccionado=this.ElegirSnackForm.get('tipoSnack').value;
  }

  delPedido(){
    this.ValorSeleccionado='';
  }

  getErrorMessage(control:string) {
    if(control=='tipoSnack')
    return this.ElegirSnackForm.get(control).hasError('required') ? 'Debe elegir el tipo de snack' :'';
  }



}
