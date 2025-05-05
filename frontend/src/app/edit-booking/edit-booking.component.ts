import { Component, inject, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { Customer, UpdateBookingDTO, Vehicle } from "../types";
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from "@angular/material/datepicker";
import { NgIf } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrl: './edit-booking.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    NgIf
  ]
})
export class EditBookingComponent implements OnInit {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    startDate: [null as Date | null, Validators.required],
    endDate: [null as Date | null, Validators.required],
  });

  customer?: Customer;
  vehicle?: Vehicle;

  router : Router = inject(Router);
  route : ActivatedRoute = inject(ActivatedRoute);
  dataService = inject(DataService);

  getId() {
    return Number(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    this.dataService.getBooking(this.getId())
      .subscribe(({startDate, endDate, vehicle, customer}) => {
        this.form.patchValue({
          startDate, endDate
        });
        this.vehicle = vehicle;
        this.customer = customer;
      })
  }

  snackBar = inject(MatSnackBar);

  onSubmit(): void {
    if (!this.form.valid) return;

    this.dataService.updateBooking(this.getId(), this.form.value as UpdateBookingDTO)
      .subscribe(() => this.snackBar.open("Les gooo"))
  }
}
