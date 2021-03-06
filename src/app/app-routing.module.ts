import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookFormComponent} from "./book-list/book-form/book-form.component";
import {SingleBookComponent} from "./book-list/single-book/single-book.component";
import {AuthGuardService} from "./services/auth-guard.service";

// Configuration des URLs
const routes: Routes = [
  { path: 'auth/signin' , component: SigninComponent},
  { path: 'auth/signup' , component: SignupComponent},
  { path: 'books' , canActivate: [AuthGuardService] , component: BookListComponent},
  { path: 'books/new' , canActivate: [AuthGuardService] , component: BookFormComponent},
  { path: 'books/view/:id' , canActivate: [AuthGuardService] ,  component: SingleBookComponent},
  { path: '' , redirectTo: 'books' , pathMatch: 'full' },
  { path: '**' , redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
