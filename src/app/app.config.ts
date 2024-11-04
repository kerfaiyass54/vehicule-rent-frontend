import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ADMIN_ROUTERS} from "./admin/admin.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),ADMIN_ROUTERS]
};
