import {Component, OnInit} from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";
import {Router, RouterLink} from "@angular/router";
import {ClientServiceAdminService} from "../Services/client-service-admin.service";
import {Client} from "../../models/client";
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {KeycloakService} from "../../shared/keycloak.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-clients-management',
  standalone: true,
  imports: [
    NavBarAdminComponent,
    NgForOf,
    RouterLink,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './clients-management.component.html',
  styleUrl: './clients-management.component.css'
})
export class ClientsManagementComponent implements  OnInit{

  listClients: any[] = [];
  currentPage = 0;
  totalPages = 0;
  rowsPerPage = 5;
  searchTerm = '';
  constructor(private router:Router, private keycloak: KeycloakService, private clientService: ClientServiceAdminService) {

  }

  ngOnInit() {
    this.keycloak.getRoles();
    this.clientService.getAllClients().subscribe((res)=>{
      this.listClients = res;
    })

    this.keycloak.getRoles();
    this.loadUsers();
  }

  goToAddClient(){
    this.router.navigate(['admin/add-client']);
  }

  loadUsers(page: number = 0) {
    this.clientService.getClients(page, this.rowsPerPage, this.searchTerm)
      .subscribe(res => {
        this.listClients = res.content;
        this.currentPage = res.number;
        this.totalPages = res.totalPages;
      });
  }

  changePage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.loadUsers(page);
    }
  }
}
