import { Component,HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import {getKeycloak} from "./shared/keycloak-init";
import {SessionService} from "./shared/session-service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private sessionService: SessionService) {
  }

  title = 'vehicule-rent-front';
  private isRefreshing = false;

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (
      event.key === 'F5' ||
      (event.ctrlKey && event.key.toLowerCase() === 'r')
    ) {
      this.isRefreshing = true;
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  onAppLeave(event: BeforeUnloadEvent) {
    if (this.isRefreshing) {
      return;
    }
    this.sessionService.saveSession(getKeycloak().profile?.username, getKeycloak().profile?.email);
    sessionStorage.clear();
    localStorage.removeItem('token');
  }



}
