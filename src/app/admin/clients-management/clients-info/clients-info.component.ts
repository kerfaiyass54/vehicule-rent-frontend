import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Client} from "../../../models/client";
import {ClientServiceAdminService} from "../../Services/client-service-admin.service";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";
import {NgIf} from "@angular/common";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-clients-info',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './clients-info.component.html',
  styleUrl: './clients-info.component.css'
})
export class ClientsInfoComponent implements  OnInit{
  client: Client | any | undefined;
  name :any | null;
  location: Location | any;
  isModalOpen: boolean = false;
  constructor(private router: Router, private clientService:ClientServiceAdminService, private route: ActivatedRoute, private locationService: LocationServiceAdminService, private toastr: ToastrService  ) {}

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


  confirmDelete() {
    this.clientService.deleteClient(this.client.idClient).subscribe(
      ()=>{
        this.toastr.success("Client deleted", "SUCCESS");
        this.router.navigate(['admin/clients']);
      }
    )
  }


}
