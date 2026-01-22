import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {SessionService} from "./shared/session-service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
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
