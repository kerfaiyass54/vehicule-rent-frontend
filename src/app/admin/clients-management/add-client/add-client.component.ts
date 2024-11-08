import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ClientServiceAdminService} from "../../Services/client-service-admin.service";
import {Client} from "../../../models/client";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink,HttpClientModule  ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  newClientForm: FormGroup;


  constructor(private fb: FormBuilder, private clientService:ClientServiceAdminService ) {
    this.newClientForm = this.fb.group({
      name: new FormControl(""),
      cin:new FormControl(""),
      mail: new FormControl(""),
      password: new FormControl("")
    });
  }

  get name(){
    return this.newClientForm.get('name');
  }

  get cin(){
    return this.newClientForm.get('cin');
  }

  get mail(){
    return this.newClientForm.get('mail');
  }

  get password(){
    return this.newClientForm.get('password');
  }


  addClient() {
    let client : Client = {
      nameClient: this.newClientForm.value.name,
      cin: this.newClientForm.value.cin,
      budget: 0,
      email: this.newClientForm.value.mail,
      pass: this.newClientForm.value.password,
      role: "CLIENT",
    }

    this.clientService.createClient(client,"Bizerte").subscribe(
      ()=>{
        console.log("success")
      }
    )

  }
}
