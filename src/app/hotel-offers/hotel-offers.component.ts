import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hotel-offers',
  templateUrl: './hotel-offers.component.html',
  styleUrls: ['./hotel-offers.component.css']
})
export class HotelOffersComponent implements OnInit {
  offers: Observable<any[]> | Observable<any> | any;
  currentUser:any;
  constructor(public db: AngularFirestore) {
    this.offers = db.collection('offers').valueChanges({idField: 'id'})
  }

  ngOnInit(): void {
    this.getUser().subscribe((user:any) => {
      this.currentUser.favorites.forEach((offerId:any) => {
        setTimeout(() => {
          window.document.querySelectorAll('.card').forEach((card:any) => {
            if (card.id === offerId) {
              this.toggleStar(card);
            }
          })  
        }, 500)
      })
    })
  }

  getIsUserLoggedIn(): boolean {
    return !!window.localStorage.getItem('user_logged_in');
  }

  getUserEmail() {
    return window.localStorage.getItem('user_email');
  }

  deleteHotelOffer(hotelOfferId: string) {
    this.db.doc(`offers/${hotelOfferId}`).delete();
  }

  toggleOfferToFavorites(offerId:any, $event:any) {
    $event.preventDefault();
    $event.stopPropagation();
    this.toggleStar($event.target);

    setTimeout(() => {

      if (this.isStarred($event.target)) {
        this.addToFavorites(offerId);
      } else {
        this.removeFromFavorites(offerId);
      }
    }, 1000)
  }

  getUser() {
    // return this.db.collection('users').doc('3tRagaBgEKOMxbxMONUl').get();
    return new Observable(observer => {
      this.db.collection('users').valueChanges({idField: 'id'})
      .subscribe(users => {
        this.currentUser = users.filter((user:any) => user.email===this.getUserEmail()).pop();
        observer.next();
      })
    });
  }

  addToFavorites(offerId:any) {
    this.getUser().subscribe((user:any) => {
      const favorites: string[] = this.currentUser.favorites ? this.currentUser.favorites : [];
      !favorites.includes(offerId) && favorites.push(offerId);
      this.db.doc(`users/${this.currentUser.id}`).update({favorites: favorites});
    })
  }

  removeFromFavorites(offerId:any) {
    this.getUser().subscribe((user:any) => {
      const favorites: string[] = this.currentUser.favorites ? this.currentUser.favorites : [];
      if (favorites.includes(offerId)) {
        let index = favorites.indexOf(offerId);
        favorites.splice(index, 1);
      }
      this.db.doc(`users/${this.currentUser.id}`).update({favorites: favorites});
    })
  }

  getStar(el:any) {
    return el.querySelector('i.fa-star') || el;
  }

  toggleStar(el:any) {
    let star = this.getStar(el);
    if (star.classList.contains('fas')) {
      star.classList.remove('fas')
    } else {
      star.classList.add('fas')
    }
  }

  isStarred(el:any) {
    return this.getStar(el).classList.contains('fas')
  }
}
