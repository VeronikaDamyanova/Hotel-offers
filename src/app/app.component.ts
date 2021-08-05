import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(public router: Router){

  }
  
  getIsUserLoggedIn(): boolean {
    return !!window.localStorage.getItem('user_logged_in');
  }

  getUserEmail() {
    return window.localStorage.getItem('user_email');
  }

  logout() {
    this.router.navigate(['/']);
    window.localStorage.removeItem('user_logged_in');
    window.localStorage.removeItem('user_email');

  }
}
