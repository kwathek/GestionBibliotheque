import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookFormComponent} from "./book-list/book-form/book-form.component";
import {SingleBookComponent} from "./book-list/single-book/single-book.component";

// Configuration des URLs
const routes: Routes = [
  { path: 'auth/signin' , component: SigninComponent},
  { path: 'auth/signup' , component: SignupComponent},
  { path: 'books' , component: BookListComponent},
  { path: 'books/new' , component: BookFormComponent},
  { path: 'books/view/:id' , component: SingleBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
