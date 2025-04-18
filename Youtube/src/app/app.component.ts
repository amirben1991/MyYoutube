import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@Component({
  selector: 'app-root',
  imports: [
    AuthPageComponent, 
    RouterOutlet, 
    SidebarComponent],
    
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Youtube';
}
