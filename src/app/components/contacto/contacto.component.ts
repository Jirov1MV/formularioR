import { Component, OnInit } from '@angular/core';
import {DataDbService} from '../../services/data-db.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'contactoForm',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

createFormGroup(){
   
return new FormGroup( {
  email: new FormControl(''),
  nombre: new FormControl(''),
  message: new FormControl('')
});
}

  contactoForm: FormGroup;
  constructor(private dbData: DataDbService) {
    this.contactoForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactoForm.reset();
  }

  onSaveForm(){
   
  this.dbData.saveMessage(this.contactoForm.value);
}
}

