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
import {AddClientComponent} from "./admin/clients-management/add-client/add-client.component";
import {UpdateClientComponent} from "./admin/clients-management/update-client/update-client.component";
import {AddLocationComponent} from "./admin/location-management/add-location/add-location.component";
import {LocationDetailsComponent} from "./admin/location-management/location-details/location-details.component";
import {AddRepairComponent} from "./admin/repair-management/add-repair/add-repair.component";
import {UpdateRepairComponent} from "./admin/repair-management/update-repair/update-repair.component";
import {AddSupplierComponent} from "./admin/supplier-management/add-supplier/add-supplier.component";
import {UpdateSupplierComponent} from "./admin/supplier-management/update-supplier/update-supplier.component";
import {UpdateBudgetComponent} from "./client/client-details/update-budget/update-budget.component";
import {UpdateDetailsComponent} from "./client/client-details/update-details/update-details.component";
import {UpdateTicketComponent} from "./client/repair-tickets/update-ticket/update-ticket.component";
import {ConsultTicketComponent} from "./client/repair-tickets/consult-ticket/consult-ticket.component";
import {AddTicketComponent} from "./client/repair-tickets/add-ticket/add-ticket.component";
import {
  RenewSubscriptionComponent
} from "./client/subscriptions-management/renew-subscription/renew-subscription.component";
import {AddSubscriptionComponent} from "./client/subscriptions-management/add-subscription/add-subscription.component";
import {BuyVehiculeComponent} from "./client/vehicules-buyings/buy-vehicule/buy-vehicule.component";
import {ConsultVehiculeComponent} from "./client/vehicules-buyings/consult-vehicule/consult-vehicule.component";
import {UpdateDemandComponent} from "./repair/demand-management/update-demand/update-demand.component";
import {ConsultDemandComponent} from "./repair/demand-management/consult-demand/consult-demand.component";
import {CreateDemandComponent} from "./repair/demand-management/create-demand/create-demand.component";
import {
  ConsultTicketDetailsComponent
} from "./repair/tickets-management/consult-ticket-details/consult-ticket-details.component";
import {ConsultRepairComponent} from "./repair/vehicules-repair/consult-repair/consult-repair.component";
import {LaunchRepairComponent} from "./repair/vehicules-repair/launch-repair/launch-repair.component";
import {UpdateAdressComponent} from "./supplier/adresses-management/update-adress/update-adress.component";
import {AddAdressComponent} from "./supplier/adresses-management/add-adress/add-adress.component";
import {ConsultCategoryComponent} from "./supplier/management-categories/consult-category/consult-category.component";
import {AddCategoryComponent} from "./supplier/management-categories/add-category/add-category.component";
import {
  ConsultSubscriptionComponent
} from "./supplier/subscriptions-details/consult-subscription/consult-subscription.component";
import {UpdateVehiculeComponent} from "./supplier/vehicules-management/update-vehicule/update-vehicule.component";
import {AddVehiculeComponent} from "./supplier/vehicules-management/add-vehicule/add-vehicule.component";
import {
  ConsultCategoriesComponent
} from "./supplier/vehicules-management/consult-categories/consult-categories.component";
import {ClientsInfoComponent} from "./admin/clients-management/clients-info/clients-info.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

export const routes: Routes = [
  {
    path:'client',
    component:ClientComponent,
    title:"Client Dashboard",
    children:[
      {
        path: 'update-budget/:id',component:UpdateBudgetComponent
      },
      {
        path: 'update/:id', component:UpdateDetailsComponent
      },
      {
        path:'details',
        component:ClientDetailsComponent
      },
      {
        path:'tickets',
        component: RepairTicketsComponent,
      },
      {
        path: 'update-ticket/:id',component:UpdateTicketComponent
      },
      {
        path: 'consult/:id', component:ConsultTicketComponent
      },{
        path: 'add-ticket',component:AddTicketComponent
      },{
        path: 'renew-subs/:id',component:RenewSubscriptionComponent
      },
      {
        path: 'add-subs',component:AddSubscriptionComponent
      },
      {
        path:'subscriptions',
        component: SubscriptionsManagementComponent
      },{
        path: 'buy/:id',component:BuyVehiculeComponent
      },
      {
        path: 'consult/:id', component:ConsultVehiculeComponent
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
    title:'Vehicule App',
    children:[{
      path:'',
      component:AdminHomeComponent
    },
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
        path: 'add-client',component:AddClientComponent
      },
      {
        path: 'clients/details-client/:id', component:ClientsInfoComponent
      },
      {
        path: 'update/:id', component:UpdateClientComponent
      },{
        path: 'add-location',component:AddLocationComponent
      },
      {
        path: 'location/details-loc/:id', component:LocationDetailsComponent
      },
      {
        path:'location', component:LocationManagementComponent
      },{
        path: 'add-repair',component:AddRepairComponent
      },
      {
        path: 'update/repair/:id', component:UpdateRepairComponent
      },
      {
        path:'repair', component:RepairManagementComponent
      },{
        path: 'add-supplier',component:AddSupplierComponent
      },
      {
        path: 'update/supplier/:id', component:UpdateSupplierComponent
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
        path: 'update-adress/:id',component:UpdateAdressComponent
      },
      {
        path: 'add-ticket',component:AddAdressComponent
      },
      {
        path:'adresses',
        component: AdressesManagementComponent
      },
      {
        path: 'consult/:id', component:ConsultDemandComponent
      },
      {
        path:'demands',
        component: DemandsDashboardComponent
      },{
        path: 'consult/:id', component:ConsultCategoryComponent
      },{
        path: 'add-category',component:AddCategoryComponent
      },
      {
        path:'categories',
        component: ManagementCategoriesComponent
      },{
        path: 'consult/:id', component:ConsultSubscriptionComponent
      },
      {
        path:'subscriptions',
        component: SubscriptionsDetailsComponent
      },
      {
        path:'vehicules',
        component: VehiculesManagementComponent
      },{
        path: 'update/:id',component:UpdateVehiculeComponent
      },
      {
        path: 'consult/:id', component:ConsultVehiculeComponent
      },{
        path: 'add',component:AddVehiculeComponent
      },{
        path: 'consult-categories', component:ConsultCategoriesComponent
      }

    ]
  },{
    path:'repair',
    component:RepairComponent,
    title:'Repair Dashboard',
    children:[
      {
        path: 'update/:id',component:UpdateDemandComponent
      },
      {
        path: 'consult/:id', component:ConsultDemandComponent
      },{
        path: 'add-demand',component:CreateDemandComponent
      },
      {
        path:'demand',
        component: DemandManagementComponent
      },
      {
        path:'details',
        component: RepairDetailsComponent
      },{
        path: 'consult/:id', component:ConsultTicketDetailsComponent
      },
      {
        path:'ticket',
        component: TicketsManagementComponent
      },
      {
        path:'veh-repair',
        component: VehiculesRepairComponent
      }, {
        path: 'consult/:id', component:ConsultRepairComponent
      },{
        path: 'launch/:id',component:LaunchRepairComponent
      }


    ]
  },
  {
    path:'**',
    component: ErrorPageComponent,
    title:"Error page"
  }
];
