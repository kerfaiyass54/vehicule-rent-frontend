import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {AccountInfo} from "./account-info/account-info";
import {LoginHistory} from "./login-history/login-history";

@Component({
    selector: 'app-user-management',
    imports: [
        MatTabGroup,
        MatTab,
        AccountInfo,
        LoginHistory
    ],
    templateUrl: './user-management.html',
    styleUrl: './user-management.css'
})
export class UserManagement implements OnInit{
  sessions: any[] = [];
  daysList:any[] = [];
  count: any[] = [];



  ngOnInit() {
  }

  setSessions(e: any[]){
    this.sessions = e;
  }


}
