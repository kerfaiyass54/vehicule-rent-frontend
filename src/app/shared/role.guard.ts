import { CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import {getKeycloak} from "./keycloak-init";


export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const kc = getKeycloak();
  const requiredRoles = route.data['roles'] as string[];

  return requiredRoles.some(role => kc.realmAccess?.roles?.includes(role));
};
