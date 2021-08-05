import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {
  offerId: string;
  offer:any;

  constructor(public router:Router, private actRoute: ActivatedRoute, public db: AngularFirestore) {
    this.offerId = this.actRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.db.collection('offers').valueChanges({idField: 'id'}).subscribe(offers => {
        this.offer = offers.filter((offer:any) => offer.id===this.offerId).pop()
    })
  }

  editOffer() {
    this.db.collection('offers').doc(this.offerId).update(this.offer).then(() => {
      this.router.navigate(['/hotel-offers'])
    })

  }
}
