import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: boolean = true;
 
  constructor() { }

  loading(load){
    this.isLoading = load;
  }
}
