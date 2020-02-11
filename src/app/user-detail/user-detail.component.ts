import { ListUsersComponent } from './../list-users/list-users.component';
import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListUsersService } from "../list-users.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  detailUser: any;

  constructor(
    private route: ActivatedRoute,
    private listuserService: ListUsersService,
    public dialogRef: MatDialogRef<ListUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]
  ) {}

  ngOnInit() {
    this.getUserDetail();
    console.log(this.detailUser);
    console.log(this.data);
    this.detailUser = this.data;
    
  }

  getUserDetail(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.listuserService
      .getUser(id)
      .subscribe(userdetail => (this.detailUser = userdetail));
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
