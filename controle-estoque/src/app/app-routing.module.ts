import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductsComponent } from './componentes/products/products.component';
import { AddProductComponent } from './componentes/add-product/add-product.component';
import { InsertProductComponent } from './componentes/insert-product/insert-product.component';
import { RemoveProductComponent } from './componentes/remove-product/remove-product.component';
import { AddUserComponent } from './componentes/add-user/add-user.component';
import { ChangePasswordComponent } from './componentes/change-password/change-password.component';
import { UserDetailsComponent } from './componentes/user-details/user-details.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
