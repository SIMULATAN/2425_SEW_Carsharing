import { Routes } from '@angular/router';
import { CreateCustomerComponent } from "./create-customer/create-customer.component";
import { CreateBookingComponent } from "./create-booking/create-booking.component";
import { BookingsComponent } from "./bookings/bookings.component";
import { EditBookingComponent } from './edit-booking/edit-booking.component';

export const routes: Routes = [
  {
    path: "create-customer",
    component: CreateCustomerComponent,
  },
  {
    path: "bookings/create",
    component: CreateBookingComponent
  },
  {
    path: "bookings/edit/:id",
    component: EditBookingComponent
  },
  {
    path: "bookings",
    component: BookingsComponent
  },
];
