import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';  
import { MatButtonModule } from '@angular/material/button';
import {AddUserComponent } from './add-user/add-user.component';

import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatToolbarModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoadingComponent } from './loading/loading.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchComponent } from './search/search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';


const routes: Routes =[
  {path: '', component: LoginComponent},
  {path: 'list-user', component: ListUsersComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'edit/:id', component: EditFormComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'shopping-cart/:product', component: ShoppingCartComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    UserDetailComponent,
    EditFormComponent,
    AddUserComponent,
    LoadingComponent,
    SearchComponent,
    ShoppingCartComponent,
    NavbarComponent,
    LoginComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatListModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
