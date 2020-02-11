import { Router, ActivatedRoute } from "@angular/router";
import { ListUsersService } from "./../list-users.service";
import { LoadingService } from "./../loading.service";
import { Component, OnInit } from "@angular/core";
import { ChangeDetectorRef, AfterContentChecked } from "@angular/core";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  displayedColumns = ["item", "cost"];
  transaction: any;

  /** Gets the total cost of all transactions. */
  // getTotalCost() {
  //   return this.transaction
  //     .map(t => t.cost)
  //     .reduce((acc, value) => acc + value, 0);
  // }
  constructor(
    private route: ActivatedRoute,
    private listUserService: ListUsersService,
    private service: LoadingService,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params.product;

    this.listUserService.getUser(id).subscribe(id => {
      this.transaction = id;
      this.service.loading(false);
      this.cdref.detectChanges();
    });
  }
}
