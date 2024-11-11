import {Component, OnInit} from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";
import {NgForOf} from "@angular/common";
import {SupplierServiceAdminService} from "../Services/supplier-service-admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-supplier-management',
  standalone: true,
  imports: [
    NavBarAdminComponent,
    NgForOf
  ],
  templateUrl: './supplier-management.component.html',
  styleUrl: './supplier-management.component.css'
})
export class SupplierManagementComponent implements OnInit{
  listSuppliers: any[] = [];

  constructor(private supplierservice: SupplierServiceAdminService, private router: Router) {
  }

  ngOnInit() {
  }


  goToAddSupplier() {

  }

  goToInfos() {

  }
}
