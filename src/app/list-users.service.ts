import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {


  listuserService = 'http://5e3a62ca8d7e1300149cda79.mockapi.io/users';

  constructor(private http:HttpClient) {}
   getList() {
     return this.http.get(this.listuserService);
   }
   getUser(id: number) {
     return this.http.get(this.listuserService + '/' + id);
   }
   addUser(value){
    return this.http.post(this.listuserService + '/', value);
   }
   editUser(user) {
    const id = user.id;
    delete user.id;
    return this.http.put(this.listuserService + '/' + id, user);

  }
  deleteUser(id: number){
    return this.http.delete(this.listuserService + '/' + id);
  }
  getProduct(product){
    return this.http.get(this.listuserService + '/' + product); 
  }

}
