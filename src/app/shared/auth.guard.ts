
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from './keycloak.service';
import {inject} from "@angular/core";

export const adminGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);
  const roles = keycloak.getRoles();

  if (roles.includes('admin')){

router.navigate(['/load']);
return true;
  }
  return router.parseUrl('/not-authorized');
};


export const supplierGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);
  const roles = keycloak.getRoles();
  if (roles.includes('supplier')){
    router.navigate(['/load']);
return true;
  }
  return router.parseUrl('/not-authorized');
};




export const repairGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);
  const roles = keycloak.getRoles();
  if (roles.includes('repair')) {

    router.navigate(['/load']);
return true;
  }
  return router.parseUrl('/not-authorized');
};

export const clientGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);
  const roles = keycloak.getRoles();
  if (roles.includes('client')) {

    router.navigate(['/load']);

return true;
  }
  return router.parseUrl('/not-authorized');
};




