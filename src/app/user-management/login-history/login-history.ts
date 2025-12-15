import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatInput} from "@angular/material/input";
import {MatPaginator} from "@angular/material/paginator";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {SessionService} from "../../shared/session-service";
import {KeycloakService} from "../../shared/keycloak.service";

@Component({
  selector: 'app-login-history',
  imports: [
    MatFormField,
    MatLabel,
    MatTable,
    MatInput,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatNoDataRow,
    MatPaginator,
    CdkDrag,
    CdkDropList,
    MatSort,
    MatSortHeader
  ],
  standalone: true,
  templateUrl: './login-history.html',
  styleUrl: './login-history.css'
})
export class LoginHistory implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'name', 'time'];
  sessions: any[] = [];
  dataSource = new MatTableDataSource(this.sessions);
  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  email: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  constructor(private sessionService: SessionService,private keycloakService: KeycloakService) {

  }

  async ngOnInit() {
    this.dataSource.sort = this.sort;
    this.email = (await this.keycloakService.loadUserProfile()).email;
    this.sessionService.getSessionsByEmail(this.email).subscribe(
      (data)=>{
        this.dataSource.data = data;
        console.log(data);
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }




}
