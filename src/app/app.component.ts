import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SessionService} from "./shared/session-service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
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
