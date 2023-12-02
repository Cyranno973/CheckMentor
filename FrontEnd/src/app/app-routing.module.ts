import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
