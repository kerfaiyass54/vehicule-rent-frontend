import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ClientServiceAdminService} from "../../Services/client-service-admin.service";
import {Client} from "../../../models/client";
import {HttpClientModule} from "@angular/common/http";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink, HttpClientModule, NgForOf],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent implements OnInit{
  newClientForm: FormGroup;
  locations: any[] = [];


  constructor(private fb: FormBuilder, private clientService:ClientServiceAdminService, private locationService: LocationServiceAdminService ) {


    this.newClientForm = this.fb.group({
      name: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      cin:new FormControl("",[Validators.required,Validators.pattern("[0-9 ]*"),Validators.minLength(8),Validators.maxLength(8)]),
      mail: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      loc: new FormControl("")
    });


  }

  ngOnInit() {
    this.locationService.getAllLocations().subscribe(
      (res)=>{
        this.locations = res;
        console.log(this.locations);
      }
    )
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

  get loc(){
    return this.newClientForm.get('loc');
  }

  addClient() {
    let client : any = {
      nameClient: this.newClientForm.value.name,
      cin: this.newClientForm.value.cin,
      budget: 0,
      email: this.newClientForm.value.mail,
      pass: this.newClientForm.value.password,
      role: "CLIENT",

    }

    let location = this.newClientForm.value.loc;
    this.clientService.createClient(client,location).subscribe(
      ()=>{
        console.log("success")
      }
    )

    // add toastr
    // check existence of some attributes (email and cin)





  }
}
