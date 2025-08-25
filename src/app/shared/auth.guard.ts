
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from './keycloak.service';
import {inject} from "@angular/core";

export const adminGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  if (keycloak.hasRole('admin')){


return true;
  }
  return router.parseUrl('/**');
};


export const supplierGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);
  if (keycloak.hasRole('supplier')){

return true;
  }
  return router.parseUrl('/**');
};




export const repairGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  if (keycloak.hasRole('repair')) {


return true;
  }
  return router.parseUrl('/**');
};

export const clientGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  if (keycloak.hasRole('client')) {


return true;
  }
  return router.parseUrl('/**');
};




