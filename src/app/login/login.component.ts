import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public firebaseAuth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((data: any) => {
          this.router.navigate(['/']);
          window.localStorage.setItem('user_logged_in', 'true');
          window.localStorage.setItem('user_email', data.user.email);
      }).catch((error) => {
        window.alert(error.message)
      })


  }
}
