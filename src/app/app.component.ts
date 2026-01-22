import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {SessionService} from "./shared/session-service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'vehicule-rent-front';

  constructor(private http: HttpClient, private sessionService:SessionService) {
  }

  ngOnInit() {
    this.sessionService.saveSession();
  }


}
