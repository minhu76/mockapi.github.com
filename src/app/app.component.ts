import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoAPI';
  isLoading;

  constructor(
    private service: LoadingService
  ){

  }

  ngOnInit(){
    this.isLoading = this.service.isLoading;
  }
}
