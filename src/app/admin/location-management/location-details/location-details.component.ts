import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.css'
})
export class LocationDetailsComponent implements OnInit{

   constructor(private locationService:LocationServiceAdminService,private route:ActivatedRoute, private router: Router) {
}

  location:any;
  clientsNum: any;
  repairsNum:any;

  ngOnInit() {
  }


  confirmDelete() {

  }
}
