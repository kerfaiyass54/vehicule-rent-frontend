import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ClientServiceAdminService} from "../../Services/client-service-admin.service";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent implements OnInit{
  updateClientForm: FormGroup;
  locations:any[]=[];

  constructor(private fb: FormBuilder,private clientService:ClientServiceAdminService,private locationService:LocationServiceAdminService) {
    this.updateClientForm = this.fb.group({
      name: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      cin:new FormControl("",[Validators.required,Validators.pattern("[0-9 ]*"),Validators.minLength(8),Validators.maxLength(8)]),
      mail: new FormControl("",[Validators.required,Validators.email]), password: new FormControl("",[Validators.required,Validators.minLength(6)]), loc: new FormControl("")
    });
  }


  ngOnInit() {

  }

  get name(){
    return this.updateClientForm.get('name');
  }

  get cin(){
    return this.updateClientForm.get('cin');
  }

  get mail(){
    return this.updateClientForm.get('mail');
  }

  get password(){
    return this.updateClientForm.get('password');
  }

  get loc(){
    return this.updateClientForm.get('loc');
  }

  updateClient(){

  }


}
