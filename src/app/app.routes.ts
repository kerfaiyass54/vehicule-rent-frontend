import { Routes } from '@angular/router';
import {ClientComponent} from "./client/client.component";
import {AdminComponent} from "./admin/admin.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {RepairComponent} from "./repair/repair.component";

export const routes: Routes = [
  {
    path:'client',
    component:ClientComponent,
    title:"Client Dashboard"
  },{
    path:'admin',
    component:AdminComponent,
    title:'Admin Dashboard'
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
