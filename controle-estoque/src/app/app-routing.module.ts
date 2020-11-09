import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductsComponent } from './componentes/products/products.component';
import { AddProductComponent } from './componentes/add-product/add-product.component';
import { InsertProductComponent } from './componentes/insert-product/insert-product.component';
import { RemoveProductComponent } from './componentes/remove-product/remove-product.component';
import { UsersComponent } from './componentes/users/users.component';
import { AddUserComponent } from './componentes/add-user/add-user.component';
import { ChangePasswordComponent } from './componentes/change-password/change-password.component';
import { UserDetailsComponent } from './componentes/user-details/user-details.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'produtos', component: ProductsComponent},
  {path: 'produtos/cadastro', component: AddProductComponent},
  {path: 'produtos/entrada/:id', component: InsertProductComponent},
  {path: 'produto/saida/:id', component: RemoveProductComponent},
  {path: 'usuarios', component: UsersComponent},
  {path: 'usuario/cadastro', component: AddUserComponent},
  {path: 'usuario/senha/:id', component: ChangePasswordComponent},
  {path: 'usuario/info/:id', component: UserDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'not_found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
