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

  constructor(private supplierService: SupplierServiceAdminService, private router: Router) {
  }

  ngOnInit() {
    this.supplierService.getAllSupp().subscribe(
      (data)=>{
        this.listSuppliers = data;
      }
    )
  }


  goToAddSupplier() {
    this.router.navigate(['admin/add-supplier']);
  }

  goToInfos(supp:any) {
    this.router.navigate(['admin/infos/supplier',supp]);
  }
}
