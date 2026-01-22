import {Component, OnInit} from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";
import {NgForOf} from "@angular/common";
import {Route, Router, RouterLink} from "@angular/router";
import {LocationServiceAdminService} from "../Services/location-service-admin.service";

@Component({
    selector: 'app-location-management',
    imports: [
        NavBarAdminComponent,
        NgForOf,
        RouterLink
    ],
    templateUrl: './location-management.component.html',
    styleUrl: './location-management.component.css'
})
export class LocationManagementComponent implements OnInit{

  listLocations: any[] = [];

  constructor(private locationService:LocationServiceAdminService, private router: Router) {

  }

  ngOnInit() {
    this.locationService.getAllLocations().subscribe(
      (res) =>{
        this.listLocations = res;
      }
    )
  }



  goToAddLocation() {
    this.router.navigate(['admin/add-location']);
  }
}
