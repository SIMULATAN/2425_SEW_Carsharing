package me.simulatan.htl.carsharing.resource;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import me.simulatan.htl.carsharing.model.Customer;

import java.util.List;

@Path("customers")
public class CustomerResource {
	@Path("list")
	@GET
	public List<Customer> getCustomers() {
		return Customer.findAll().list();
	}

	@POST
	@Transactional
	public void createCustomer(Customer customer) {
		customer.persist();
	}
}
