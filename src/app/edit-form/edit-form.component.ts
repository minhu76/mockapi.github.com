import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ListUsersService } from '../list-users.service';


@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.css"]
})
export class EditFormComponent implements OnInit {
  constructor(
    private router: Router,
    private formUserService: ListUsersService,
    private activatedRoute: ActivatedRoute
    ) {}
  id: any;
  user = {};
    
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.formUserService.getUser(this.id).subscribe((data) => {
      this.user = data;
      
    })
  }

  editUser() {
    this.formUserService.editUser(this.user).subscribe(data =>{
      this.router.navigate(['list-user'])
    });
  }

}
