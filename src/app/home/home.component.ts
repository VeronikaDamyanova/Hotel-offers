import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import{SlicePipe} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  offers: Observable<any[]> | Observable<any> | any;
  constructor(db: AngularFirestore) {
    this.offers = db.collection('offers').valueChanges()
  }
  ngOnInit(): void {
  }

}
