import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js/lib/keycloak";


@Injectable({ providedIn: 'root' })
export class KeycloakService {
  keycloak: Keycloak;

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'vehicule-app',
      clientId: 'myapp'
    });
  }

  init(): Promise<boolean> {
    return this.keycloak.init({ onLoad: 'login-required', checkLoginIframe: false });
  }

  login() { this.keycloak.login(); }
  logout() { this.keycloak.logout(); }
  getToken(): string { return this.keycloak.token ?? ''; }
  hasRole(role: string): boolean { return this.keycloak.hasRealmRole(role); }
}
