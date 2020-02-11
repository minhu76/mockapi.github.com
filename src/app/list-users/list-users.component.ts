import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { LoadingService } from './../loading.service';
import { Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ListUsersService } from "../list-users.service";
import { MatDialog, MatPaginator, MatTableDataSource } from "@angular/material";
import { UserDetailComponent } from "../user-detail/user-detail.component";


@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.css"]
})
export class ListUsersComponent implements OnInit {
  data;
  dataSource;

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  displayedColumns: string[] = [
    "avatar",
    "name",
    "address",
    "country",
    "config"
  ];

  listUsers: any[] = [];
  collection = [];

  constructor(
    private service: LoadingService,
    private router: Router,
    private listuserService: ListUsersService,
    public dialog: MatDialog
  ) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.listuserService.getList().subscribe((users: any[]) => {
      this.data = users;
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
      this.service.loading(false);
    });
    

  }
  deleteUser(id: number) {
    this.listuserService.deleteUser(id).subscribe((data: any[]) => {
      const params1 = this.data.findIndex(item => item.id === id); //tim vi tri phan tu muon xoa
      this.data.splice(params1, 1); //xoa phan tu trong mang data
      this.dataSource = new MatTableDataSource<any>(this.data); // cap nhat datasource, render lai table
      this.dataSource.paginator = this.paginator;
    });
  }
  
  openDialog(id): void {
    this.listuserService.getUser(id).subscribe((data: any[]) => {
      const dialogRef = this.dialog.open(UserDetailComponent, {
        width: "450px",
        data
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log("The dialog was closed");
      });
    })
  }
  public doFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
}
