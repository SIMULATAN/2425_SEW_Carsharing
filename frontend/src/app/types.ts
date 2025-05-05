export interface Customer {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface Vehicle {
  id: number
  brand: string
  model: string
}

export interface Booking {
  id: number
  startDate: Date
  endDate: Date
  vehicle: Vehicle
  customer: Customer
}

export interface BookingSummaryDTO {
  id: number
  firstName: string
  lastName: String
  carBrand: string
  carType: string
  company: string
  startDate: Date
  endDate: Date
}

export interface CreateBookingDTO {
  customerId: number
  vehicleId: number
  startDate: Date
  endDate: Date
}

export interface UpdateBookingDTO {
  startDate: Date
  endDate: Date
}
