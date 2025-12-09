import { Injectable } from '@angular/core';

import { KeycloakProfile } from 'keycloak-js';
import {getKeycloak} from "./keycloak-init";
import {SessionService} from "./session-service";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  constructor(private sessionService: SessionService) {}


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
    const profile = await getKeycloak().loadUserProfile();
    this.sessionService.saveSession(profile.username!, profile.email!);
    return profile;
  }

  getRoles(): string[] {
    const kc = getKeycloak();

    const realmRoles =
      kc.realmAccess?.roles ? kc.realmAccess.roles : [];
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
