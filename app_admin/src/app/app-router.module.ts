import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TripListingComponent} from './trip-listing/trip-listing.component';
import {AddTripComponent} from './add-trip/add-trip.component';

const routes: Routes = [
  {path: '', component: TripListingComponent},
  {path: 'add-trip', component: AddTripComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {};