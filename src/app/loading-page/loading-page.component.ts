import {Component, OnInit} from '@angular/core';
import {SessionService} from "../shared/session-service";


@Component({
    selector: 'app-loading-page',
    imports: [],
    templateUrl: './loading-page.component.html',
    styleUrl: './loading-page.component.css'
})
export class LoadingPageComponent implements OnInit{

  constructor(private sessionService: SessionService) {}


  ngOnInit() {

  }



}
