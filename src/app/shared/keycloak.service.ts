import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';



@Injectable({ providedIn: 'root' })
export class KeycloakService {
  keycloak: Keycloak;
  roles: string[] = [];

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'vehicule-app',
      clientId: 'vehicule-rent'
    });
  }

  async init(): Promise<void> {
    await this.keycloak.init({ onLoad: 'login-required', checkLoginIframe: false });

  }

  hasRole(role: string): boolean {
    return this.keycloak?.tokenParsed?.realm_access?.roles?.includes(role) ?? false;
  }

  getRoles(){
    const tokenParsed = this.keycloak.tokenParsed as any;
    this.roles = tokenParsed?.realm_access?.roles || [];
    return this.roles;
  }

  getToken(): string { return this.keycloak.tokenParsed as any; }
}
