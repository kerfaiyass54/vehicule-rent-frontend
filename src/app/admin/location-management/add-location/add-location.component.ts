import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.css'
})
export class AddLocationComponent {
  newLocationForm: FormGroup;

  constructor(private locationService:LocationServiceAdminService, private router: Router, private fb: FormBuilder) {
    this.newLocationForm = this.fb.group({
      name: new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z ]*")]),
      country:new FormControl("",[Validators.required,Validators.minLength(6)])
    });
  }

  get name(){
    return this.newLocationForm.get('name');
  }

  get country(){
    return this.newLocationForm.get('country');
  }

  addLocation(){
    let location : any = {
      name: this.newLocationForm.value.name,
      country: this.newLocationForm.value.country,
    }
    this.locationService.addLocation(location).subscribe(
      ()=>{
        this.router.navigate(['admin/location']);
      }
    )
  }

}
