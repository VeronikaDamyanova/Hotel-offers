import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HotelOffersComponent } from './hotel-offers/hotel-offers.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { EditOfferComponent } from './edit-offer/edit-offer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HotelOffersComponent,
    CreateOfferComponent,
    HotelDetailsComponent,
    HotelEditComponent,
    ProfileComponent,
    ErrorPageComponent,
    EditOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
