import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  offer = {
    name: '',
    destination:'',
    date:'',
    accommodation:'',
    rooms:'',
    price:'',
    image:''
  };

  constructor(public db: AngularFirestore, public router:Router) { 
    
  }

  ngOnInit(): void {
  }

  createOffer() {
    this.db.collection("offers").add(this.offer).then(res => {
        this.router.navigate(['/hotel-offers'])
    }, err => {
      console.log(err)
    });
  }
}
