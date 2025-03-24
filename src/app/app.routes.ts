import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoghistoryComponent } from './loghistory/loghistory.component';
import { LoginComponent } from './login/login.component';
import { PermissionComponent } from './permission/permission.component';
import { RegisterComponent } from './register/register.component';
import { SpaceAccessComponent } from './space-access/space-access.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'loghistory', component: LoghistoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'permission', component: PermissionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'space-access', component: SpaceAccessComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
