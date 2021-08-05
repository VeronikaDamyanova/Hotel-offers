import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HotelOffersComponent } from './hotel-offers/hotel-offers.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hotel-offers', component: HotelOffersComponent },
  { path: 'create-offer', component: CreateOfferComponent },
  { path: 'edit-offer/:id', component: EditOfferComponent },
  { path: 'hotel-details', component: HotelDetailsComponent },
  { path: 'hotel-edit', component: HotelEditComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
