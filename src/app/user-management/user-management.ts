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
    this.getLast5DaysConnections();
  }

  getLast5DaysConnections() {
    const today = new Date();
    const days = [];

    for (let i = 4; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      days.push(d.toISOString().split("T")[0]);
    }

    const counts = days.map(day =>
      this.sessions.filter(s =>
        s.sessionStart.startsWith(day)
      ).length
    );

    this.daysList = days;
    this.count = counts;
  }

}
