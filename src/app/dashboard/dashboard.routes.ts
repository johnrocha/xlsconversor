import { Route, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './auth/login/login.component';

import { TableComponent } from './table/table.component';

// import { UserComponent } from '.user/user.component';

//
export const MODULE_ROUTES: Route[] =[
  { path: 'auth', component: LoginComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent},
  { path: 'table', component: TableComponent }
  // { path: 'user', component: UserComponent }
];
//
export const MODULE_COMPONENTS = [
  HomeComponent,
  LoginComponent,
  TableComponent,
  // UserComponent
];
