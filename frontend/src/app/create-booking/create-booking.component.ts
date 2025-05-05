import { Component, inject, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { DataService } from "../data.service";
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from "@angular/material/datepicker";
import { NgIf } from "@angular/common";
import { CreateBookingDTO } from "../types";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerToggle,
    MatDatepicker,
    NgIf,
    MatDatepickerInput
  ]
})
export class CreateBookingComponent implements OnInit {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    customerId: [null, Validators.required],
    vehicleId: [null, Validators.required],
    startDate: [null, Validators.required],
    endDate: [null, Validators.required],
  });

  customers: { id: number, lastName: string }[] = [];
  vehicles: { id: number, brand: string, model: string }[] = [];

  dataService = inject(DataService);

  ngOnInit() {
    this.dataService.getCustomers()
      .subscribe(c => this.customers = c)
    this.dataService.getVehicles()
      .subscribe(v => this.vehicles = v)
  }

  snackBar = inject(MatSnackBar);
  router = inject(Router)

  onSubmit(): void {
    console.log(this.form.valid)
    if (!this.form.valid) {
      console.error(this.form.value)
      console.error(this.form.errors)
      return;
    }
    this.dataService.createBooking(this.form.value as any as CreateBookingDTO)
      .subscribe(() => {
        this.snackBar.open("Yay it worked :D")
        void this.router.navigate(['/bookings'])
      })
  }
}
