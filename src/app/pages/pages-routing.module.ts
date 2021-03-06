import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShopComponent } from './shop/shop.component';
import { FormComponent } from './form/form.component';
import { ProfilComponent } from '../profil/profil.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'anasayfa',
      component: DashboardComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'addproduct',
      component: AddProductComponent,
    },
    {
      path: 'shop',
      component: ShopComponent
    },
    {
      path:'kategori',
      component: CategoryComponent
    },
    // {
    //   path:'blok',
    //   component: BlogComponent
    // },
    {
      path:'iletisim',
      component: ContactComponent
    },
    {
      path:'hakimizda',
      component: AboutComponent
    },
    { 
      path: 'product/:id',
      component: ProductDetailComponent
    },
    {
      path: 'form',
      component: FormComponent
    },
    {
      path: 'profil',
      component: ProfilComponent,
    },
    
    {
      path: '',
      redirectTo: 'anasayfa',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
