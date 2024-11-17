import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {SupplierServiceAdminService} from "../../Services/supplier-service-admin.service";

@Component({
  selector: 'app-supplier-infos',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './supplier-infos.component.html',
  styleUrl: './supplier-infos.component.css'
})
export class SupplierInfosComponent implements OnInit{
  supplier:any;
  adresses: any[]=[];
  id:any;
  isThereAdress = false;
  constructor(private supplierService:SupplierServiceAdminService, private router:Router, private route:ActivatedRoute ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplier(this.id).subscribe(
      (res)=>{
        this.supplier = res;
      }
    )
  }


  confirmDelete() {
    this.supplierService.deleteSupplier(this.supplier.suppName).subscribe(
      ()=>{
        console.log("done")
      }
    )
  }

  goToUpdate() {
    this.router.navigate(['admin/update/supplier',this.id]);
  }
}
