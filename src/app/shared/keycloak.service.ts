import { Injectable } from '@angular/core';

import { KeycloakProfile } from 'keycloak-js';
import {getKeycloak} from "./keycloak-init";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {


  isLoggedIn(): boolean {
    return !!getKeycloak().authenticated;
  }


  login(): void {
    getKeycloak().login();
  }

  logout(): void {
    getKeycloak().logout();
  }

  async loadUserProfile(): Promise<KeycloakProfile> {
    return await getKeycloak().loadUserProfile();
  }

  getRoles(): string[] {
    const kc = getKeycloak();

    const realmRoles =
      kc.realmAccess?.roles ? kc.realmAccess.roles : [];

    // Client-level roles (if any)
    const client = kc.clientId || 'angular-frontend';
    const clientRoles =
      kc.resourceAccess?.[client]?.roles
        ? kc.resourceAccess[client].roles
        : [];

    return [...realmRoles, ...clientRoles];
  }


  getToken(): string | undefined {
    return getKeycloak().token;
  }


}
