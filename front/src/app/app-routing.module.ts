import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSecondComponent } from './components/register-second/register-second.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: LogInComponent }, //Preferd way
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registersecond', component: RegisterSecondComponent },
  { path: 'page404', component: Page404Component },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/page404', pathMatch: 'full' }, //Should be the last one on list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
