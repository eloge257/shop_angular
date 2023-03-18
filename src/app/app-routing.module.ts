import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormulaireShopComponent } from "./formulaire-shop/formulaire-shop.component";
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path : 'home-component', component : HomeComponent},
  {path : 'formulaireShop-component', component : FormulaireShopComponent},
  {path : 'login-component', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
