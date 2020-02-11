import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from "@angular/forms";
import { ListUsersService } from '../list-users.service';

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  validators = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.maxLength(8)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.maxLength(8)
    ]),
    address: new FormControl("", [Validators.required, Validators.maxLength(8)])
  });

  constructor (
    private router: Router,
    private service: ListUsersService
  ){}

  getErrorMessage(value) {
    if (value === "first") {
      if (this.validators.controls.firstName.hasError("required")) {
        return "FirstName is required";
      }
      if (this.validators.controls.firstName.hasError("maxlength")) {
        return "FirstName must have 8 characters";
      }
    }
    if (value === "last") {
      if (this.validators.controls.lastName.hasError("required")) {
        return "Lastname is required";
      }
      if (this.validators.controls.lastName.hasError("maxlength")) {
        return "LastName must have 8 characters";
      }
    }
    if (value === "address") {
      if (this.validators.controls.address.hasError("required")) {
        return "Address is required";
      }
      if (this.validators.controls.address.hasError("maxlength")) {
        return "Address must have 8 characters";
      }
    }
  }

  onSubmit() {
  this.service.addUser(this.validators.value).subscribe(data => {
    this.router.navigate(['/home'])
    console.log(data);
    
  });
  // console.log(this.validators);
  }


  ngOnInit() {
    console.log(this.validators);
  }
}
