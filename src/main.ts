import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {KeycloakService} from "./app/shared/keycloak.service";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const keycloakService = new KeycloakService();

keycloakService.init().then(() => {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      { provide: KeycloakService, useValue: keycloakService }
    ]
  }).catch(err => console.error(err));
});




