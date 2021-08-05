import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:any;
  offers:any;
  favorites:any =[];

  constructor(public db: AngularFirestore) {
    this.getCurrentUser();

  }

  ngOnInit(): void {
    setTimeout(()=>this.getFavoritedOffers(),1000);
  }

  getUserGender() {
    return this.currentUser && this.currentUser.gender;    
  }

  getUserEmail() {
    return window.localStorage.getItem('user_email');
  }

  getFavoritedOffers() {
    this.currentUser.favorites.forEach((favoritedOffer:any) => {
        console.log(favoritedOffer)
        this.db.collection('offers').valueChanges({idField: 'id'}).subscribe((offers:any) => {
          offers.forEach((offer:any) => {
            if (offer.id===favoritedOffer) {
              this.favorites.push(offer);
            }
          })
          
        })
    })
  }

  getCurrentUser(): any {
    this.db.collection('users').valueChanges()
    .subscribe(users => {
      this.currentUser = users.filter((user:any) => user.email===this.getUserEmail()).pop();
    })

  }

}
