import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
     { path: '', component: HomeComponent},
     { path: 'categories/:id', component: DetailComponent},
     { path: 'detail/:id', component: DetailProductComponent},
     { path: 'Login', component: LoginComponent}
];
