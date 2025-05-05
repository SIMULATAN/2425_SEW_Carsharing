import { inject, Injectable } from '@angular/core';
import { Booking, BookingSummaryDTO, CreateBookingDTO, Customer, UpdateBookingDTO, Vehicle } from "./types";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static BASE_URL = "http://localhost:8080/api"

  httpClient = inject(HttpClient);

  createCustomer(customer: Omit<Customer, "id">) {
    return this.httpClient.post(`${DataService.BASE_URL}/customers`, customer);
  }

  getCustomers() {
    return this.httpClient.get<Customer[]>(`${DataService.BASE_URL}/customers/list`);
  }

  getVehicles() {
    return this.httpClient.get<Vehicle[]>(`${DataService.BASE_URL}/vehicles/list`);
  }

  createBooking(bookingCreateDTO: CreateBookingDTO) {
    return this.httpClient.post(`${DataService.BASE_URL}/bookings`, bookingCreateDTO);
  }

  getBookingSummaries() {
    return this.httpClient.get<BookingSummaryDTO[]>(`${DataService.BASE_URL}/bookings/summaries`);
  }

  deleteBooking(id: number) {
    return this.httpClient.delete(`${DataService.BASE_URL}/bookings/remove/${id}`);
  }

  getBooking(id: number) {
    return this.httpClient.get<Booking>(`${DataService.BASE_URL}/bookings/${id}`);
  }

  updateBooking(id: number, bookingUpdateDTO: UpdateBookingDTO) {
    return this.httpClient.patch(`${DataService.BASE_URL}/bookings/update/${id}`, bookingUpdateDTO);
  }
}
