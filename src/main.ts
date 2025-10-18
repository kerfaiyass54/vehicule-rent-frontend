import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {KeycloakService} from "./app/shared/keycloak.service";
import {AuthInterceptor} from "./app/shared/auth-interceptor";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {provideHttpClient, HTTP_INTERCEPTORS} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr} from "ngx-toastr";
import {importProvidersFrom} from "@angular/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const keycloakService = new KeycloakService();



keycloakService.init().then(() => {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),provideHttpClient(),provideAnimations(),
      provideToastr(),
      { provide: KeycloakService, useValue: keycloakService },{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, provideAnimationsAsync()
    ]
  }).catch(err => console.error(err));
}).catch(err => console.error('Keycloak init failed', err));




