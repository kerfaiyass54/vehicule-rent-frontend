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
import {ClientDetailsComponent} from "./client/client-details/client-details.component";
import {RepairTicketsComponent} from "./client/repair-tickets/repair-tickets.component";
import {SubscriptionsManagementComponent} from "./client/subscriptions-management/subscriptions-management.component";
import {VehiculesBuyingsComponent} from "./client/vehicules-buyings/vehicules-buyings.component";
import {AdressesManagementComponent} from "./supplier/adresses-management/adresses-management.component";
import {DemandsDashboardComponent} from "./supplier/demands-dashboard/demands-dashboard.component";
import {ManagementCategoriesComponent} from "./supplier/management-categories/management-categories.component";
import {SubscriptionsDetailsComponent} from "./supplier/subscriptions-details/subscriptions-details.component";
import {VehiculesManagementComponent} from "./supplier/vehicules-management/vehicules-management.component";
import {DemandManagementComponent} from "./repair/demand-management/demand-management.component";
import {RepairDetailsComponent} from "./repair/repair-details/repair-details.component";
import {TicketsManagementComponent} from "./repair/tickets-management/tickets-management.component";
import {VehiculesRepairComponent} from "./repair/vehicules-repair/vehicules-repair.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {ClientsManagementComponent} from "./admin/clients-management/clients-management.component";

export const routes: Routes = [
  {
    path:'client',
    component:ClientComponent,
    title:"Client Dashboard",
    children:[

      {
        path:'details',
        component:ClientDetailsComponent
      },
      {
        path:'tickets',
        component: RepairTicketsComponent
      },
      {
        path:'subscriptions',
        component: SubscriptionsManagementComponent
      },
      {
        path:'buyings',
        component: VehiculesBuyingsComponent
      }
    ]
  },
  {
    path:'admin',
    component:AdminComponent,
    title:'Admin Dashboard',
    children:[
      {
        path:'home',
        component:AdminHomeComponent
      },
      {
        path:'details',component:AdminDetailsComponent,
      },
      {
        path:'update', component:AdminUpdateComponent
      },
      {
        path:'clients', component:ClientsManagementComponent
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
    title:'Supplier Dashboard',
    children:[
      {
        path:'adresses',
        component: AdressesManagementComponent
      },
      {
        path:'demands',
        component: DemandsDashboardComponent
      },
      {
        path:'categories',
        component: ManagementCategoriesComponent
      },
      {
        path:'subscriptions',
        component: SubscriptionsDetailsComponent
      },
      {
        path:'vehicules',
        component: VehiculesManagementComponent
      },

    ]
  },{
    path:'repair',
    component:RepairComponent,
    title:'Repair Dashboard',
    children:[
      {
        path:'demand',
        component: DemandManagementComponent
      },
      {
        path:'details',
        component: RepairDetailsComponent
      },
      {
        path:'ticket',
        component: TicketsManagementComponent
      },
      {
        path:'veh-repair',
        component: VehiculesRepairComponent
      },


    ]
  }
];
