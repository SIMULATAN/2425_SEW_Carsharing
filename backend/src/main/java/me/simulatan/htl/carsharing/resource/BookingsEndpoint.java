package me.simulatan.htl.carsharing.resource;

import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import me.simulatan.htl.carsharing.dto.BookingCreateDTO;
import me.simulatan.htl.carsharing.dto.BookingSummaryDTO;
import me.simulatan.htl.carsharing.dto.BookingUpdateDTO;
import me.simulatan.htl.carsharing.model.Booking;
import me.simulatan.htl.carsharing.model.Customer;
import me.simulatan.htl.carsharing.model.Vehicle;

import java.util.List;

@Path("bookings")
public class BookingsEndpoint {
	@Path("{id}")
	@GET
	public Booking getBooking(@PathParam("id") Long bookingId) {
		var result = Booking.<Booking>findById(bookingId);
		if (result == null) throw new NotFoundException();

		return result;
	}

	@Inject
	EntityManager entityManager;

	@Path("summaries")
	@GET
	public List<BookingSummaryDTO> getSummaries() {
		return entityManager
			.createQuery("SELECT NEW me.simulatan.htl.carsharing.dto.BookingSummaryDTO(b.id, b.customer.firstName, b.customer.lastName, b.vehicle.brand, b.vehicle.type, b.vehicle.carRentalCompany.name, b.startDate, b.endDate) FROM Booking b", BookingSummaryDTO.class)
			.getResultList();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional
	public void createBooking(BookingCreateDTO bookingCreateDTO) {
		var booking = new Booking();
		booking.customer = Customer.findById(bookingCreateDTO.customerId());
		booking.vehicle = Vehicle.findById(bookingCreateDTO.vehicleId());
		booking.startDate = bookingCreateDTO.startDate();
		booking.endDate = bookingCreateDTO.endDate();
		booking.persist();
	}

	@PATCH
	@Path("update/{bookingId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional
	public void updateBooking(@PathParam("bookingId") Long bookingId, BookingUpdateDTO bookingUpdateDTO) {
		var booking = Booking.<Booking>findById(bookingId);
		booking.startDate = bookingUpdateDTO.startDate();
		booking.endDate = bookingUpdateDTO.endDate();
	}

	@DELETE
	@Path("remove/{bookingId}")
	@Transactional
	public void deleteBooking(@PathParam("bookingId") Long bookingId) {
		Booking.deleteById(bookingId);
	}
}
