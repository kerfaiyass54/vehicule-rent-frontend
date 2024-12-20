import {Component, OnInit} from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";
import {Router, RouterLink} from "@angular/router";
import {ClientServiceAdminService} from "../Services/client-service-admin.service";
import {Client} from "../../models/client";
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-clients-management',
  standalone: true,
  imports: [
    NavBarAdminComponent,
    NgForOf,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './clients-management.component.html',
  styleUrl: './clients-management.component.css'
})
export class ClientsManagementComponent implements  OnInit{

  listClients: any[] = [];
  constructor(private router:Router,private clientService:ClientServiceAdminService) {

  }

  ngOnInit() {
    this.clientService.getAllClients().subscribe((res)=>{
      this.listClients = res;
    })
  }

  goToAddClient(){
    this.router.navigate(['admin/add-client']);
  }
}
