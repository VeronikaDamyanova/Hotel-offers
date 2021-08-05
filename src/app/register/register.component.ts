import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  gender: string = '';

  constructor(public db: AngularFirestore, public firebaseAuth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
  }

  register(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then((result: any) => {
      this.db.collection("users").add({email: this.email, gender: this.gender, favorites: []});
      this.router.navigate(['/login']);
    }).catch((error: any) => {
      window.alert(error.message)
    })
  }
}
