import {Component, OnInit} from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {RepairServiceAdminService} from "../Services/repair-service-admin.service";

@Component({
  selector: 'app-repair-management',
  standalone: true,
  imports: [
    NavBarAdminComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './repair-management.component.html',
  styleUrl: './repair-management.component.css'
})
export class RepairManagementComponent implements OnInit{
  listRepairs: any = []

  constructor(private repairService:RepairServiceAdminService,private router: Router) {

  }

  ngOnInit() {
    this.repairService.getAllRepairs().subscribe(
      (data) => {
        this.listRepairs = data;
      }
    )
  }

  goToAddRepair(){
    this.router.navigate(['admin/add-repair']);
  }


  goToUpdate(idRepair: any) {

  }

  deleteRepair(idRepair: any){
    this.repairService.deleteRepair(idRepair).subscribe(
      ()=>{
        console.log("success")
      }
    )
  }
}
