import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {KeycloakService} from "./keycloak.service";

export const authGuard: CanActivateFn = () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  if (keycloak.hasRole('admin')) {
    router.navigate(['/admin']);
    return true;
  }
  if (keycloak.hasRole('client')) {
    router.navigate(['/client']);
    return true;
  }
  if (keycloak.hasRole('supplier')) {
    router.navigate(['/supplier']);
    return true;
  }
  if (keycloak.hasRole('repairer')) {
    router.navigate(['/repairer']);
    return true;
  }else {
    return false;
  }
};
