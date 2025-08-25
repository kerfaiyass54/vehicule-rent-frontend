import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {KeycloakService} from "./app/shared/keycloak.service";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {appConfig} from "./app/app.config";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr} from "ngx-toastr";

const keycloakService = new KeycloakService();



keycloakService.init().then(() => {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),provideHttpClient(),provideAnimations(),
      provideToastr(),
      { provide: KeycloakService, useValue: keycloakService }
    ]
  }).catch(err => console.error(err));
}).catch(err => console.error('Keycloak init failed', err));




