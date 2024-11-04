import {provideRouter, RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminDetailsComponent} from "./admin-details/admin-details.component";
import {AdminUpdateComponent} from "./admin-update/admin-update.component";
import {ClientComponent} from "../client/client.component";
import {LocationManagementComponent} from "./location-management/location-management.component";
import {RepairManagementComponent} from "./repair-management/repair-management.component";
import {SupplierManagementComponent} from "./supplier-management/supplier-management.component";


const adminRoutes:Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'details',component:AdminDetailsComponent,

      },
      {
        path:'update', component:AdminUpdateComponent
      },
      {
        path:'clients', component:ClientComponent
      },
      {
        path:'location', component:LocationManagementComponent
      },
      {
        path:'repair', component:RepairManagementComponent
      },
      {
        path:'supplier', component:SupplierManagementComponent
      }
    ]
  }
]

export const ADMIN_ROUTERS = provideRouter(adminRoutes);
