import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductsComponent } from './componentes/products/products.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { AddProductComponent } from './componentes/add-product/add-product.component';
import { InsertProductComponent } from './componentes/insert-product/insert-product.component';
import { RemoveProductComponent } from './componentes/remove-product/remove-product.component';
import { AddUserComponent } from './componentes/add-user/add-user.component';
import { ChangePasswordComponent } from './componentes/change-password/change-password.component';
import { UserDetailsComponent } from './componentes/user-details/user-details.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { EditProductComponent } from './componentes/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProductsComponent,
    SidebarComponent,
    AddProductComponent,
    InsertProductComponent,
    RemoveProductComponent,
    AddUserComponent,
    ChangePasswordComponent,
    UserDetailsComponent,
    LoginComponent,
    NotFoundComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
