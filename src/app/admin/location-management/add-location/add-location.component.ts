import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.css'
})
export class AddLocationComponent {
  newLocationForm: FormGroup;

  constructor(private locationService:LocationServiceAdminService, private router: Router, private fb: FormBuilder) {
    this.newLocationForm = this.fb.group({
      name: new FormControl(""),
      country:new FormControl("")
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
