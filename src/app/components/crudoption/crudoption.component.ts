import { Component, OnInit } from '@angular/core';
import { Option } from '../../models/Option';
import { NgForm, FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-crudoption',
  templateUrl: './crudoption.component.html',
  styleUrls: ['./crudoption.component.css']
})
export class CRUDoptionComponent implements OnInit {
  TypeSnacksList: Option[]= [{$key:"s",description:"ssda"}];
  AddSnackForm : FormGroup;
  displayedColumns: string[] = ['key', 'description'];
  dataSource = [];
  constructor() { }

  ngOnInit() {
    this.AddSnackForm = new FormGroup({
      typeSnack: new FormControl('',[
        Validators.required])
    });
    this.dataSource=this.TypeSnacksList;
  }
  getSnacksList():Option[]{
    this.dataSource=this.TypeSnacksList;
    return this.dataSource
  }
  addSnack(){
    let objeto =new Option();
    objeto.$key="1";
    objeto.description=this.AddSnackForm.get('typeSnack').value;
    // this.TypeSnacksList.push({$key:"sjjkk",description:"ssda"});
    this.TypeSnacksList.push(objeto); 
    console.log(objeto.$key +" " + objeto.description+ "  " +this.TypeSnacksList.length);  
  }
  delSnack(){
  }

  getErrorMessage(control:string) {
    if(control=='typeSnack')
    return this.AddSnackForm.get(control).hasError('required') ? 'Debe ingresar el tipo de snack' :'';
  }

}
