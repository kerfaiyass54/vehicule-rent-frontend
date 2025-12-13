import {CanActivateFn, Router} from '@angular/router';
import { getKeycloak } from './keycloak-init';
import {SessionService} from "./session-service";
import {inject} from "@angular/core";


export const roleRedirectGuard: CanActivateFn = (route, state) => {
  const kc = getKeycloak();
  const router = inject(Router);
  const sessionService = inject(SessionService);

  if (!kc.authenticated) {
    kc.login();
    return false;
  }

  const roles = [
    ...kc.realmAccess?.roles || [],
    ...Object.values(kc.resourceAccess?.[kc.clientId || 'angular-frontend']?.roles || [])
  ];

  const username = kc.profile?.username;
  const email = kc.profile?.email;
  if (username && email) {
    sessionService.saveSession(username, email);
  }

  if (roles.includes('admin')) {
    router.navigate(['/admin']);
    return false;
  }
  if (roles.includes('supplier')) {
    router.navigate(['/supplier']);
    return false;
  }
  if (roles.includes('repairer')) {
    router.navigate(['/repair']);
    return false;
  }
  if (roles.includes('client')) {
    router.navigate(['/client']);
    return false;
  }

  // If no roles found, send to not-authorized
  router.navigate(['/not-authorized']);
  return false;
};
