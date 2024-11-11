import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Client} from "../../../models/client";
import {ClientServiceAdminService} from "../../Services/client-service-admin.service";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";

@Component({
  selector: 'app-clients-info',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './clients-info.component.html',
  styleUrl: './clients-info.component.css'
})
export class ClientsInfoComponent implements  OnInit{
  client: Client | any | undefined;
  name :any | null;
  location: Location | any;
  constructor(private router: Router, private clientService:ClientServiceAdminService, private route: ActivatedRoute, private locationService: LocationServiceAdminService  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(this.name).subscribe(
      (res)=>{
        this.client = res;
        this.locationService.getLocation(res.locationName).subscribe(
          (loc)=>{
            this.location = loc;
          }
        )
      }
    );
  }


  goToUpdate(){
    this.router.navigate(['admin/update',this.name]);
  }

}
