import { Routes } from '@angular/router';
import {ClientComponent} from "./client/client.component";
import {AdminComponent} from "./admin/admin.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {RepairComponent} from "./repair/repair.component";
import {AdminDetailsComponent} from "./admin/admin-details/admin-details.component";
import {AdminUpdateComponent} from "./admin/admin-update/admin-update.component";
import {LocationManagementComponent} from "./admin/location-management/location-management.component";
import {RepairManagementComponent} from "./admin/repair-management/repair-management.component";
import {SupplierManagementComponent} from "./admin/supplier-management/supplier-management.component";

export const routes: Routes = [
  {
    path:'client',
    component:ClientComponent,
    title:"Client Dashboard"
  },{
    path:'admin',
    component:AdminComponent,
    title:'Admin Dashboard',
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
  },{
    path:'supplier',
    component:SupplierComponent,
    title:'Supplier Dashboard'
  },{
    path:'repair',
    component:RepairComponent,
    title:'Repair Dashboard'
  }
];
