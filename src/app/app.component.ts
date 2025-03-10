import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SpaceAccessComponent } from "./space-access/space-access.component";
import { UsersComponent } from "./users/users.component";
import { HistoryComponent } from "./history/history.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, RegisterComponent, SpaceAccessComponent, UsersComponent, HistoryComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ControlAccesoAngular';
}
